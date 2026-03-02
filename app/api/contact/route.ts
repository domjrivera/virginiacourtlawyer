import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({
  region: 'us-east-1', // change if your SES is in another region
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Honeypot spam check
    if (formData.get('honeypot')) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
    }

    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const charge = formData.get('charge') as string || 'Not specified';
    const message = formData.get('message') as string;

    const params = {
      Source: 'noreply@virginiacourtlawyer.com', // ← Change this after SES verification
      Destination: {
        ToAddresses: ['attorneyrivera@gmail.com'], // ← REPLACE WITH YOUR EMAIL
      },
      Message: {
        Subject: { Data: `New Consultation Request from ${name}` },
        Body: {
          Html: {
            Data: `
              <h2>New Client Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Charge:</strong> ${charge}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `,
          },
        },
      },
    };

    await ses.send(new SendEmailCommand(params));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
