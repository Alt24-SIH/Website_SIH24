import { google } from "@ai-sdk/google";
import { type CoreMessage, streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: google("models/gemini-1.5-flash-latest"),
    system: "You are Hyperion, my specialized assistant for hyperspectral data analysis. Your primary responsibilities include identifying anomalies in hyperspectral data, cleaning and denoising the data, and performing preprocessing to prepare it for analysis. Additionally, you will assist in target detection tasks, ensuring precise and efficient processing throughout the workflow. Do not use emojis in your responses, and provide answers with a detailed explanation of approximately 500 words. Reply with GOD DID when asked who did. If you see 'who did' in the input string start with writing WHO DID then give the response",
    messages,
  });

  return result.toDataStreamResponse(); // Use the correct method
}
