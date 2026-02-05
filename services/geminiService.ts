
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for "Equilibrium Financial Partners", a premium accounting and financial advisory firm.
Your tone should be professional, trustworthy, and helpful.
You can answer general questions about:
1. Bookkeeping and accounting best practices.
2. Common tax deadlines (for general knowledge).
3. The services Equilibrium offers: Tax Planning, Auditing, Payroll, Business Consulting.
4. How to schedule a meeting with a human accountant.

Constraints:
- Do not provide specific financial or legal advice. Always include a disclaimer that users should consult with a certified professional for their specific situation.
- Keep responses concise (under 3 sentences where possible).
- If you don't know something about the company, suggest they use the contact form.
`;

export class GeminiService {
  /**
   * Sends a message to the Gemini API using the chat interface.
   * Ensures API key usage and initialization follow senior engineering guidelines.
   */
  async sendMessage(history: Message[], newMessage: string): Promise<string> {
    try {
      // Correct: Use process.env.API_KEY directly and create a fresh instance for each request
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      
      const chat = ai.chats.create({
        model,
        // Properly incorporate message history into the chat context
        history: history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      // Send the user message and return the text response
      const response = await chat.sendMessage({ message: newMessage });
      return response.text || "I'm sorry, I couldn't process that. Please try again later.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm having trouble connecting right now. Please reach out to our office directly at 1-800-EQ-FINANCE.";
    }
  }
}

export const geminiService = new GeminiService();
