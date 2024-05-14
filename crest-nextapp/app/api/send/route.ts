import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import MessageUsEmail from "@/app/component/contactComponent/emailMessage";

// use Edge runtime and force dynamic on Vercel
export const runtime = "edge";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: `Acme <Crest@resend.dev>`, // your verified domain
      to: ["crestalibabar@gmail.com"], // the email address you want to send a message
      subject: `${firstName} ${lastName} has left a message on CREST!`,
      react: MessageUsEmail({ firstName, lastName, email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
