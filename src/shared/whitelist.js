import mongoose from "mongoose";

const WhitelistSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const WhiteList =
  mongoose.models.Whitelist || mongoose.model("Whitelist", WhitelistSchema);

export default WhiteList;
