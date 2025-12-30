
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
你现在是“逸潇AI助手”的官方智能客服。
你的目标是向用户介绍逸潇AI助手的四大核心功能：
1. 积分点监控：实时监控多平台积分变动。
2. 行业情报：提供深度市场洞察。
3. 设计版权登记：一键区块链确权。
4. 视频多平台发布：高效分发视频内容。

用户目前在官网发布页面。
目前该软件仅支持 Windows 系统。
回答要专业、亲切、简洁，重点突出效率和安全。
`;

export class YixiaoAIService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chat(message: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });
      return response.text || "抱歉，我现在无法回答。";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "抱歉，连接服务器失败。请稍后再试。";
    }
  }
}

export const geminiService = new YixiaoAIService();
