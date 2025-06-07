import { NextRequest, NextResponse } from "next/server";

const OPEN_ROUTER_API_KEY = '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';

export async function POST(request: NextRequest) {
    const { message } = await request.json();

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPEN_ROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
}