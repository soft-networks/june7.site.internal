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
        model: 'google/gemini-2.0-flash-001',
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