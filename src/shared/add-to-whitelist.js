"use server";
import { connectToDb } from "./mongodb";
import WhiteList from "./whitelist";

export async function addToWhitelist(email) {
  try {
    await connectToDb();
    const newEntry = new WhiteList({ email });
    await newEntry.save();
    return { ok: true, message: "Added to Whitelist" };
  } catch (error) {
    if (error.code === 11000) {
      return {
        ok: false,
        message: "This email already exists in the whitelist",
      };
    } else {
      return {
        ok: false,
        message: "Error occurred while adding to the whitelist",
      };
    }
  }
}
