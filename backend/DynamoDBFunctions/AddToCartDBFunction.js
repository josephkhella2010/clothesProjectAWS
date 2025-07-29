// UserDynamoDBFunction.js
const { GetCommand, UpdateCommand } = require("@aws-sdk/lib-dynamodb");
const { ddbDocClient } = require("../awsConfig/AwsConfig");
require("dotenv").config();
const Users_Table = "Users"; // your actual DynamoDB table name
async function addCartToUser(userId, product, quantity = 1) {
  try {
    // Fetch the user
    const userData = await ddbDocClient.send(
      new GetCommand({
        TableName: Users_Table,
        Key: { id: userId },
      })
    );

    if (!userData.Item) throw new Error(`User ${userId} not found`);

    const currentCart = userData.Item.cartItems || [];

    // Check if product already in cart
    const existingIndex = currentCart.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingIndex > -1) {
      // Increase quantity
      currentCart[existingIndex].quantity += quantity;
    } else {
      // Add new product with quantity
      currentCart.push({ product, quantity });
    }

    // Update user record with new cart
    await ddbDocClient.send(
      new UpdateCommand({
        TableName: Users_Table,
        Key: { id: userId },
        UpdateExpression: "SET cartItems = :items",
        ExpressionAttributeValues: {
          ":items": currentCart,
        },
      })
    );

    return { message: "Cart updated successfully" };
  } catch (error) {
    console.error("Error in addToUserCartSimple:", error);
    throw error;
  }
}

module.exports = {
  addCartToUser,
};
