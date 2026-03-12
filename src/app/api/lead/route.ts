import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        // Log the lead server-side (replace with your CRM/email integration)
        console.log('[LEAD CAPTURED]', {
            timestamp: new Date().toISOString(),
            ...data,
        });
        // TODO: Integrate with your preferred CRM or email provider here
        // e.g. POST to your Notion DB, Airtable, Resend, or HubSpot
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
    }
}
