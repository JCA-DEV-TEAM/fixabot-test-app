import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Hello from /api/data!',
    timestamp: new Date().toISOString(),
  });
}
