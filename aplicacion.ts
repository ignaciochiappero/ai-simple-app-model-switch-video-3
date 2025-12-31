import { generateText } from "ai";
import { groq } from "@ai-sdk/groq";
import "dotenv/config";

const MODELO = [
  "openai/gpt-oss-120b",
  "llama-3.1-8b-instant",
  "qwen/qwen3-32b",
];

async function main() {
  for (const modelo of MODELO) {
    try {
      const mensajito = await generateText({
        model: groq(modelo),
        prompt: "Decirme el nombre de que modelo de IA eres",
      });

      console.log(mensajito.text);
    } catch (error: any) {
      console.log("/////////////////////////////////////////////////////////");
      console.error(`Error with model ${modelo}:`, error.data.error.message);
      console.log("/////////////////////////////////////////////////////////");
    }
  }
}

main();

// pnpm init
// pnpm add -D @types/node tsx typescript
// pnpm add --save groq-sdk
// pnpm add ai  @ai-sdk/groq dotenv
// npx tsx nombre-de-tu-archivo.ts
