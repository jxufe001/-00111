
import { GoogleGenAI } from "@google/genai";

export const getDjiInsight = async (query: string) => {
  // Always create a new GoogleGenAI instance right before making an API call to ensure it uses the most up-to-date API key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: query,
      config: {
        systemInstruction: "You are a senior technology industry analyst specializing in DJI and the drone market. Provide deep, data-driven, and precise insights. Use professional and visionary language. Focus on hardware and software synergy, industry verticals, and future R&D directions.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching DJI insight:", error);
    return "Failed to fetch AI insights. Please check your connection.";
  }
};
