import { Position } from '@prisma/client';
import { openai } from '@/lib/openai';

export async function POST(request: Request) {
    const { messages } = await request.json();
    try {
        const baseUrl = process.env.NODE_ENV === 'development' 
            ? 'http://localhost:3000' 
            : 'https://nexadb.vercel.app';

        const positionsResponse = await fetch(`${baseUrl}/api/positions`)
        const careerData: Position[] = await positionsResponse.json();

        const contextMessages = careerData
          .filter((position: Position) => position.listed)
          .map((position: Position) => ({
              role: 'system',
              content: `Position: ${position.position}\nDescription: ${position.about}\nLocation: ${position.location}\nSalary: ${position.salary}\nHiring Urgently: ${position.hiringUrgently}\nLink: https://nexadb.vercel.app/en/careers/${position.id}`
          }));

          const allMessages = [
            {
                role: 'system',
                content: "Create an AI chatbot for NexaDB that introduces the company, its products, and career opportunities succinctly. Focus on clarity and brevity, using 2-3 sentences per topic to provide users with essential information about NexaDB."
            },
            ...contextMessages,
            ...messages.map((msg: any) => ({
                role: msg.isUser ? 'user' : 'assistant',
                content: msg.text,
            }))
        ];

        const aiResponse = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-0125',
            messages: allMessages
        });
        return new Response(aiResponse.choices[0].message.content, {status: 200});
    } catch (error) {
        console.log(error);
        return new Response('Failed to fetch response from OpenAI', {status: 500});
    }
}