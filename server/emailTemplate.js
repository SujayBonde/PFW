/**
 * Helper to escape HTML to prevent XSS and broken formatting in emails
 */
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Generate a beautifully styled, modern HTML email template for portfolio contact notifications
 */
function generateEmailTemplate({ name, email, message, timestamp = new Date() }) {
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);

  // Preserve line breaks safely
  const formattedMessage = escapeHtml(message).replace(/\r\n|\r|\n/g, '<br/>');

  // Snippet preview for email clients (first 90 characters)
  const previewSnippet = escapeHtml(
    message.length > 90 ? message.substring(0, 90) + '...' : message
  );

  // Initial for avatar circle
  const initial = (name && name.trim().length > 0)
    ? escapeHtml(name.trim().charAt(0).toUpperCase())
    : 'P';

  // Format date nicely
  const dateStr = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata' // Default matching user local timezone or fallback to UTC
  }).format(timestamp);

  const replyMailto = `mailto:${escapedEmail}?subject=${encodeURIComponent('Re: Portfolio Inquiry - ' + name)}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message from ${escapedName}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1e293b;">
  
  <!-- Hidden Preheader for email clients -->
  <div style="display: none; max-height: 0px; overflow: hidden; font-size: 1px; line-height: 1px; color: #f1f5f9; opacity: 0; mso-hide: all;">
    New portfolio message from ${escapedName} (${escapedEmail}): &quot;${previewSnippet}&quot;
  </div>

  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 36px 12px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04); border: 1px solid #e2e8f0;">
          
          <!-- Gradient Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #312e81 100%); padding: 34px 32px; text-align: left;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <!-- Pill Tag -->
                    <span style="display: inline-block; background-color: rgba(99, 102, 241, 0.25); border: 1px solid rgba(165, 180, 252, 0.35); color: #c7d2fe; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; padding: 5px 12px; border-radius: 9999px;">
                      ⚡ Portfolio Inquiry
                    </span>
                    <h1 style="color: #ffffff; font-size: 23px; font-weight: 700; margin: 14px 0 6px 0; letter-spacing: -0.5px;">
                      You received a new message!
                    </h1>
                    <p style="color: #94a3b8; font-size: 14px; margin: 0; line-height: 1.4;">
                      Someone submitted a contact form on your portfolio website.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card Body -->
          <tr>
            <td style="padding: 30px 32px 24px 32px;">
              
              <!-- Sender Details Box -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%); border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
                <tr>
                  <!-- Initial Badge -->
                  <td width="52" valign="middle" style="padding-right: 16px;">
                    <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #ffffff; font-size: 20px; font-weight: 700; text-align: center; line-height: 48px; box-shadow: 0 4px 8px rgba(79, 70, 229, 0.25);">
                      ${initial}
                    </div>
                  </td>
                  <!-- Sender Name & Email -->
                  <td valign="middle">
                    <div style="font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">
                      Sender Details
                    </div>
                    <div style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">
                      ${escapedName}
                    </div>
                    <div style="font-size: 14px;">
                      <a href="mailto:${escapedEmail}" style="color: #4f46e5; text-decoration: none; font-weight: 500;">
                        ${escapedEmail}
                      </a>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Message Section Header -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 12px;">
                <tr>
                  <td style="font-size: 12px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px;">
                    Message Content
                  </td>
                  <td align="right" style="font-size: 12px; color: #94a3b8;">
                    📅 ${dateStr}
                  </td>
                </tr>
              </table>

              <!-- Formatted Message Container -->
              <div style="background-color: #f8fafc; border-left: 4px solid #6366f1; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; border-radius: 0 12px 12px 0; padding: 20px 22px; margin-bottom: 28px;">
                <div style="font-size: 15px; line-height: 1.7; color: #1e293b;">
                  ${formattedMessage}
                </div>
              </div>

              <!-- Action / CTA -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-bottom: 10px;">
                    <a href="${replyMailto}" 
                       style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%); color: #ffffff; font-size: 15px; font-weight: 600; text-decoration: none; padding: 13px 32px; border-radius: 10px; box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35); text-align: center;">
                      ✉️ Reply to ${escapedName}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p style="font-size: 12px; color: #94a3b8; margin: 4px 0 0 0;">
                      Tip: Hitting "Reply" in your email client will also reply directly to ${escapedEmail}
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Subtle Divider -->
          <tr>
            <td style="padding: 0 32px;">
              <div style="height: 1px; background-color: #f1f5f9; width: 100%;"></div>
            </td>
          </tr>

          <!-- Footer Note -->
          <tr>
            <td style="padding: 22px 32px 28px 32px; background-color: #ffffff; text-align: center;">
              <p style="font-size: 12px; color: #94a3b8; margin: 0 0 5px 0;">
                Sent automatically via your Portfolio Contact Service
              </p>
              <p style="font-size: 11px; color: #cbd5e1; margin: 0;">
                Brevo SMTP Relay • Node.js Server
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Generate a clean plain text fallback for clients that do not render HTML
 */
function generatePlainText({ name, email, message, timestamp = new Date() }) {
  const dateStr = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata'
  }).format(timestamp);

  return `========================================
NEW PORTFOLIO CONTACT FORM SUBMISSION
========================================

Sender Name:  ${name}
Sender Email: ${email}
Received At:  ${dateStr}

---------------- MESSAGE ----------------
${message}
----------------------------------------

* To reply, simply respond directly to this email or write to ${email}.
========================================`;
}

module.exports = {
  generateEmailTemplate,
  generatePlainText,
  escapeHtml
};
