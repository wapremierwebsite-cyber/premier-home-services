import { Resend } from "resend";

function clean(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error(
        "Missing RESEND_API_KEY. Add it in Vercel environment variables before using the form live."
      );

      return Response.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const projectType = clean(body.projectType);
    const city = clean(body.city);
    const preferredContact = clean(body.preferredContact);
    const timeline = clean(body.timeline);
    const details = clean(body.details);

    if (!name || !phone || !projectType || !details) {
      return Response.json(
        { error: "Please complete the required fields." },
        { status: 400 }
      );
    }

    const toEmail = process.env.LEAD_TO_EMAIL || "Kenny@WAPremier.com";
    const fromEmail =
      process.env.LEAD_FROM_EMAIL ||
      "Premier Home Services <onboarding@resend.dev>";

    const subject = `New Estimate Request: ${projectType} - ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5;">
        <h2>New Estimate Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>City / Area:</strong> ${city || "Not provided"}</p>
        <p><strong>Preferred Contact Method:</strong> ${
          preferredContact || "Not provided"
        }</p>
        <p><strong>Timeline:</strong> ${timeline || "Not provided"}</p>

        <h3>Project Details</h3>
        <p>${details.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const text = `
New Estimate Request

Name: ${name}
Email: ${email || "Not provided"}
Phone: ${phone}
Project Type: ${projectType}
City / Area: ${city || "Not provided"}
Preferred Contact Method: ${preferredContact || "Not provided"}
Timeline: ${timeline || "Not provided"}

Project Details:
${details}
    `.trim();

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email || undefined,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error:
            typeof error === "object" && error !== null && "message" in error
              ? String(error.message)
              : "The message could not be sent. Please call or text instead.",
        },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Request estimate error:", error);

    return Response.json(
      { error: "Something went wrong. Please call or text instead." },
      { status: 500 }
    );
  }
}