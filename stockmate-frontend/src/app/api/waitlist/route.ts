import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  console.log("New Waitlist Email:", email);

  // Later, we'll save to Supabase. For now, just confirm received.
  return NextResponse.json({ message: "Email received!" }, { status: 200 });
}
