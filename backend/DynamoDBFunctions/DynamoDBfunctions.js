const { ddbDocClient } = require("../awsConfig/AwsConfig");
const { ScanCommand } = require("@aws-sdk/lib-dynamodb");
require("dotenv").config();

const Clothes_Project = "ClothesProject"; // Make sure this matches your actual DynamoDB table name

async function findAllProducts() {
  const params = {
    TableName: Clothes_Project,
  };

  try {
    const data = await ddbDocClient.send(new ScanCommand(params));
    return data.Items || [];
  } catch (error) {
    console.error("🔥 DynamoDB error in findAllProducts:", error); // ✅ ADDED for debugging
    throw error; // Re-throw to handle in route
  }
}

module.exports = {
  findAllProducts,
};
