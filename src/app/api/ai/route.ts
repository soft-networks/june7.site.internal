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