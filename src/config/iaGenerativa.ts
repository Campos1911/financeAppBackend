import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAGThIBXHOniMNukZied9BZNqOfcvhtKBs");
export const modelGenerativa = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
