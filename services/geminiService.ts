import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  // Use 'gemini-2.5-flash' for fast, responsive text interactions suitable for a study buddy.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `你是一个友善、鼓励性强且乐于助人的“24数媒1班”班级助教。
      你的名字叫“学习搭子”。
      你的主要任务是帮助学生解决“数据结构”、“概率论与数理统计”、“信号与系统分析基础”和“数据库原理及应用”等课程的问题。
      保持解释简单易懂，符合大学生水平。
      不要直接给出作业答案，而是引导他们找到答案或解释相关概念。
      适时使用表情符号来保持友好的语气。`,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<GenerateContentResponse>> => {
  if (!chatSession) {
    initializeChat();
  }
  
  if (!chatSession) {
    throw new Error("Failed to initialize chat session.");
  }

  try {
    const responseStream = await chatSession.sendMessageStream({ message });
    return responseStream;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};