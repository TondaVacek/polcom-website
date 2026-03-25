export async function onRequestPost(context) {
  const { request, env } = context;

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400, headers });
    }

    // Send via Resend API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'POLCOM Contact Form <onboarding@resend.dev>',
        to: env.CONTACT_EMAIL || 'antonin.vacek@misehero.cz',
        subject: `POLCOM Contact: ${name}`,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<h3>New contact form submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<hr>
<p>${message.replace(/\n/g, '<br>')}</p>`,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return new Response(JSON.stringify({ error: 'Failed to send message.' }), { status: 500, headers });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (e) {
    console.error('Contact form error:', e);
    return new Response(JSON.stringify({ error: 'Server error.' }), { status: 500, headers });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
