
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

export const getFireSafetyAdvice = async (userMessage: string, lang: Language) => {
  // Always use a new GoogleGenAI instance with the direct process.env.API_KEY named parameter.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const instructionsByLang = {
    en: "You are the Resfire AI Assistant, an expert in wildfire prevention and the Resfire project research. Respond in English.",
    es: "Eres el Asistente IA de Resfire, experto en prevención de incendios forestales y en la investigación del proyecto Resfire. Responde en Español.",
    pt: "Você é o Assistente de IA Resfire, especialista em prevenção de incêndios florestais e na pesquisa do projeto Resfire. Responda em Português.",
    gl: "Es o Asistente IA de Resfire, experto en prevención de incendios forestais e na investigación do proxecto Resfire. Responde en Galego.",
    ca: "Ets l'Assistent IA de Resfire, expert en prevenció d'incendis forestals i en la recerca del projecte Resfire. Respon en Català."
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `${instructionsByLang[lang]} Provide professional, scientific, yet accessible advice regarding forest fire reduction and safety. Highlight the three pillars: Abstract (scientific basis), Work Packages (technology/ecology), and Contact (collaboration).`,
        temperature: 0.8,
      }
    });
    // Use the .text property directly as specified in the updated SDK guidelines.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
