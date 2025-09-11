import { HfInference } from '@huggingface/inference';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients...
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { ingredients } = req.body;
    const hf = new HfInference(process.env.HUGGING_FACE_TOKEN);
    // ... rest of the Hugging Face API code ...
  } catch (err) {
    // error handling
  }
}