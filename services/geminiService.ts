
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

const API_KEY = process.env.API_KEY || "";

export const getGeminiAssistant = () => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  return ai;
};

export const getFireSafetyAdvice = async (userMessage: string, lang: Language) => {
  const ai = getGeminiAssistant();
  const instructionsByLang = {
    en: "You are the Resfire AI Assistant, an expert in wildfire prevention. Respond in English.",
    es: "Eres el Asistente IA de Resfire, experto en prevención de incendios forestales. Responde en Español (Castellano).",
    pt: "Você é o Assistente de IA Resfire, especialista em prevenção de incêndios florestais. Responda em Português."
  };

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userMessage,
    config: {
      systemInstruction: `${instructionsByLang[lang]} Provide professional, scientific, yet accessible advice regarding forest fire reduction and safety. If the user asks about the Resfire project, explain its focus on risk prediction, sustainable management, and community awareness.`,
      temperature: 0.7,
      maxOutputTokens: 600,
    }
  });
  return response.text;
};
