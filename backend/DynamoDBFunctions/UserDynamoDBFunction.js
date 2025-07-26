const { ddbDocClient } = require("../awsConfig/AwsConfig");
const { ScanCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");
require("dotenv").config();

const Users_Table = "Users"; // Make sure this matches your actual DynamoDB table name

async function findAllUsers() {
  const params = {
    TableName: Users_Table,
  };

  try {
    const data = await ddbDocClient.send(new ScanCommand(params));
    return data.Items || [];
  } catch (error) {
    console.error("🔥 DynamoDB error in findAllUsers:", error); // ✅ ADDED for debugging
    throw error; // Re-throw to handle in route
  }
}
/*  */

// Step 1: Get max existing ID
async function getNextUserId() {
  const data = await ddbDocClient.send(
    new ScanCommand({ TableName: Users_Table })
  );
  const users = data.Items || [];

  const maxId = users.reduce((max, user) => {
    const id = typeof user.id === "number" ? user.id : parseInt(user.id, 10);
    return id > max ? id : max;
  }, 0);

  return maxId + 1;
}

// Step 2: Create a user with the new ID
async function createUser(userData) {
  const newId = await getNextUserId();

  const params = {
    TableName: Users_Table,
    Item: {
      id: newId, // 👈 numeric ID like 1, 2, 3...
      ...userData,
    },
  };

  try {
    await ddbDocClient.send(new PutCommand(params));
    return { id: newId, ...userData };
  } catch (error) {
    console.error("🔥 DynamoDB error in createUser:", error);
    throw error;
  }
}

/*  */

module.exports = {
  findAllUsers,
  createUser,
};
