import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_CONFIG } from '../../config/api.config';

let aiModel: ReturnType<typeof GoogleGenerativeAI.prototype.getGenerativeModel> | null = null;

export const getAIModel = () => {
  if (!aiModel) {
    const genAI = new GoogleGenerativeAI(API_CONFIG.GEMINI_API_KEY);
    aiModel = genAI.getGenerativeModel({ model: API_CONFIG.MODEL_NAME });
  }
  return aiModel;
};