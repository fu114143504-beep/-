
import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

// Note: Initialization is handled inside functions to ensure fresh instance with latest API key

export const explainNuance = async (userPhrase: string, lang: Language) => {
  // Always use process.env.API_KEY directly for initialization
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const langNames = {
    'en': 'English',
    'vn': 'Vietnamese',
    'jp': 'Japanese',
    'kr': 'Korean',
    'zh-tw': 'Traditional Chinese (Simplified vocab)',
    'zh-cn': 'Simplified Chinese (Simplified vocab)'
  };

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `You are an expert Chinese culture teacher.
               Phrase to analyze: "${userPhrase}".
               Output language: ${langNames[lang]}.
               
               INSTRUCTIONS:
               1. Explain the hidden cultural meaning.
               2. Use VERY SIMPLE Chinese vocabulary (HSK 2-3 level) if the output is Chinese.
               3. DO NOT USE ANY MARKDOWN ASTERISKS (*) OR BOLDING.
               4. FORMAT AS PLAIN TEXT PARAGRAPHS ONLY.
               5. Ensure the tone is helpful and educational.`,
    config: {
      temperature: 0.5,
    },
  });
  // Use .text property directly
  return response.text;
};

export const chatWithTutor = async (history: { role: string, content: string }[], message: string, lang: Language) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    // Properly map internal history roles ('ai' -> 'model') for the GenAI SDK
    history: history.map(h => ({
      role: h.role === 'ai' ? 'model' : 'user',
      parts: [{ text: h.content }]
    })),
    config: {
      systemInstruction: `You are the "Grand Mansion Mentor". 
                          You help students understand the nuance of Chinese life.
                          Language for response: ${lang}.
                          STRICT RULE: DO NOT use markdown symbols like * in your output.
                          If the response is in Chinese, use very simple words for foreigners.`,
    }
  });

  const response = await chat.sendMessage({ message });
  // Use .text property directly
  return response.text;
};
