const { ddbDocClient } = require("../awsConfig/AwsConfig");
const { ScanCommand } = require("@aws-sdk/lib-dynamodb");
require("dotenv").config();

const Users_Project = "Users"; // Make sure this matches your actual DynamoDB table name

async function findAllUsers() {
  const params = {
    TableName: Users_Project,
  };

  try {
    const data = await ddbDocClient.send(new ScanCommand(params));
    return data.Items || [];
  } catch (error) {
    console.error("🔥 DynamoDB error in findAllUsers:", error); // ✅ ADDED for debugging
    throw error; // Re-throw to handle in route
  }
}

module.exports = {
  findAllUsers,
};
