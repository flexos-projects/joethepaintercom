// This is a serverless function that will be deployed to Vercel.
// It handles form submissions and reCAPTCHA verification.

// Placeholder for actual email sending logic.
// In a real application, you'd integrate with an email service like SendGrid, Mailgun, or AWS SES.
async function sendEmail(formData, formType) {
  const joeEmail = process.env.JOE_EMAIL_ADDRESS || 'joe@joethepainter.com';
  const emailServiceEndpoint = process.env.EMAIL_SERVICE_ENDPOINT || 'https://api.example.com/send-email';
  const emailServiceApiKey = process.env.EMAIL_SERVICE_API_KEY || 'YOUR_EMAIL_SERVICE_API_KEY';

  let subject = `New ${formType} Request from JoeThePainter.com`;
  let htmlBody = `
    <h1>New ${formType} Request</h1>
    <p><strong>Name:</strong> ${formData.fullName || formData.yourName}</p>
    <p><strong>Email:</strong> ${formData.email || formData.yourEmail}</p>
  `;

  if (formType === 'consultation') {
    subject = `New Free Consultation Request from ${formData.fullName} (JoeThePainter.com)`;
    htmlBody += `
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Project Type:</strong> ${formData.projectType}</p>
      <p><strong>Service Location:</strong> ${formData.serviceLocation}</p>
      <p><strong>Preferred Contact:</strong> ${formData.preferredContact}</p>
      <p><strong>How Did You Hear About Joe?:</strong> ${formData.howDidYouHear || 'N/A'}</p>
      <p><strong>Project Details:</strong></p>
      <p>${formData.projectDetails}</p>
    `;
  } else if (formType === 'contact') {
    subject = `New Message from ${formData.yourName} (JoeThePainter.com) - ${formData.subject || 'No Subject'}`;
    htmlBody += `
      <p><strong>Subject:</strong> ${formData.subject || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.yourMessage}</p>
    `;
  }

  try {
    // Simulate sending email via an external service
    // In a real scenario, replace this with your actual email service integration
    const response = await fetch(emailServiceEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${emailServiceApiKey}`, // Example for API key auth
      },
      body: JSON.stringify({
        to: joeEmail,
        from: `noreply@joethepainter.com`, // Or a verified sender email
        subject: subject,
        html: htmlBody,
        // You might also send a confirmation email to the user
        // cc: formData.email || formData.yourEmail,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Email service error:', errorData);
      throw new Error(`Failed to send email: ${response.status} ${response.statusText}`);
    }

    console.log(`Email sent successfully for ${formType} request.`);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email notification.' };
  }
}

export async function POST({ request }) {
  const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
  const RECAPTCHA_SCORE_THRESHOLD = 0.5; // Configure based on your needs

  if (!RECAPTCHA_SECRET_KEY) {
    console.error('RECAPTCHA_SECRET_KEY is not set in environment variables.');
    return new Response(JSON.stringify({ message: 'Server configuration error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const formData = await request.json();
    const recaptchaToken = formData['g-recaptcha-response'];
    const formType = formData.formType;

    if (!recaptchaToken) {
      return new Response(JSON.stringify({ message: 'reCAPTCHA token missing.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Verify reCAPTCHA token on the server-side
    const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
    const recaptchaResponse = await fetch(recaptchaVerifyUrl, { method: 'POST' });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < RECAPTCHA_SCORE_THRESHOLD) {
      console.warn(`reCAPTCHA verification failed for formType: ${formType}, score: ${recaptchaData.score}`);
      return new Response(JSON.stringify({ message: 'reCAPTCHA verification failed. Please try again.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // reCAPTCHA passed, now process the form data (e.g., send email)
    const emailResult = await sendEmail(formData, formType);

    if (!emailResult.success) {
      return new Response(JSON.stringify({ message: emailResult.error }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Form submitted successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return new Response(JSON.stringify({ message: 'Internal server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}