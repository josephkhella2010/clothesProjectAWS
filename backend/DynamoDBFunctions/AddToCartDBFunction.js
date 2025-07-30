/* // UserDynamoDBFunction.js
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
 */
const { GetCommand, UpdateCommand } = require("@aws-sdk/lib-dynamodb");
const { ddbDocClient } = require("../awsConfig/AwsConfig");
require("dotenv").config();

const Users_Table = "Users";

async function addCartToUser(userId, product, quantity = 1) {
  try {
    const userData = await ddbDocClient.send(
      new GetCommand({
        TableName: Users_Table,
        Key: { id: userId },
      })
    );

    if (!userData.Item) throw new Error(`User ${userId} not found`);

    const currentCart = userData.Item.cartItems || [];

    // Check if product already exists in cart
    const existingIndex = currentCart.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingIndex > -1) {
      currentCart[existingIndex].quantity += quantity;
    } else {
      // 🔢 Generate next numeric cartItemId
      const maxCartItemId = currentCart.reduce((max, item) => {
        return item.cartItemId && typeof item.cartItemId === "number"
          ? Math.max(max, item.cartItemId)
          : max;
      }, 0);

      const cartItemId = maxCartItemId + 1;

      currentCart.push({
        cartItemId, // 👈 numeric ID like 1, 2, 3...
        product,
        quantity,
        addedAt: new Date().toISOString(),
      });
    }

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

    return { message: "Cart updated successfully", cart: currentCart };
  } catch (error) {
    console.error("❌ Error in addCartToUser:", error);
    throw error;
  }
}
module.exports = {
  addCartToUser,
};
