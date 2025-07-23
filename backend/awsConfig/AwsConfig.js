const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
require("dotenv").config();

const REGION = "us-east-1"; // ✅ Make sure it's the same as your DynamoDB region

const client = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});
console.log("🔍 ENV CHECK:");
console.log("AWS ACCESS KEY:", process.env.ACCESS_KEY_ID);
console.log("AWS SECRET KEY:", process.env.SECRET_ACCESS_KEY);
console.log("REGION:", process.env.REGION);

const ddbDocClient = DynamoDBDocumentClient.from(client);

module.exports = { ddbDocClient };
