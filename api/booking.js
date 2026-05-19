/**
 * Vercel serverless: sends booking/contact emails via Brevo API.
 * Set env: BREVO_API_KEY, BREVO_SENDER_EMAIL, BREVO_SENDER_NAME, BREVO_NOTIFY_EMAIL
 */
const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';

async function sendBrevoEmail(apiKey, payload) {
  const res = await fetch(BREVO_URL, {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || `Brevo error ${res.status}`);
  }
  return res.json();
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || 'Ingenious Group';
  const notifyEmail = process.env.BREVO_NOTIFY_EMAIL || 'ingeniousgroupjn@gmail.com';

  if (!apiKey || !senderEmail) {
    return res.status(500).json({
      error: 'Email service not configured. Add BREVO_API_KEY and BREVO_SENDER_EMAIL on the server.',
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, email, mobile, company, service, message, formType } = body || {};

    if (!name || !email || !mobile) {
      return res.status(400).json({ error: 'Name, email, and mobile are required.' });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMobile = escapeHtml(mobile);
    const safeCompany = escapeHtml(company || '—');
    const safeService = escapeHtml(service || '—');
    const safeMessage = escapeHtml(message || '—');
    const label = formType === 'contact' ? 'Contact form' : 'Demo booking';

    const adminHtml = `
      <h2>New ${label} — Ingenious Group</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Mobile:</strong> ${safeMobile}</p>
      <p><strong>Company:</strong> ${safeCompany}</p>
      <p><strong>Service:</strong> ${safeService}</p>
      <p><strong>Details:</strong></p>
      <p>${safeMessage.replace(/\n/g, '<br>')}</p>
    `;

    await sendBrevoEmail(apiKey, {
      sender: { name: senderName, email: senderEmail },
      to: [{ email: notifyEmail, name: senderName }],
      replyTo: { email, name },
      subject: `[Ingenious Group] ${label}: ${name}`,
      htmlContent: adminHtml,
    });

    const customerHtml = `
      <h2>Thank you, ${safeName}!</h2>
      <p>We have received your ${formType === 'contact' ? 'message' : 'demo booking request'}.</p>
      <p><strong>Ham jaldi aap se reach out karenge.</strong></p>
      <p>Our team at Ingenious Group will contact you shortly on <strong>${safeMobile}</strong> or via email.</p>
      <hr>
      <p style="color:#666;font-size:14px;">
        Ingenious Group · Himmatnagar, Gujarat<br>
        +91 63538 51656 · ingeniousgroupjn@gmail.com
      </p>
    `;

    await sendBrevoEmail(apiKey, {
      sender: { name: senderName, email: senderEmail },
      to: [{ email, name }],
      subject: 'Booking received — Ingenious Group',
      htmlContent: customerHtml,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Booking API error:', err);
    return res.status(500).json({ error: 'Could not send email. Please try WhatsApp or call us.' });
  }
}

module.exports = handler;
