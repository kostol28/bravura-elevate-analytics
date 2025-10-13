import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  industry?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      name,
      email,
      company,
      phone,
      industry,
      projectType,
      budget,
      timeline,
      message,
    }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission from:", email);

    const client = new SMTPClient({
      connection: {
        hostname: Deno.env.get("ZOHO_SMTP_HOST")!,
        port: Number(Deno.env.get("ZOHO_SMTP_PORT")),
        tls: true,
        auth: {
          username: Deno.env.get("ZOHO_SMTP_USER")!,
          password: Deno.env.get("ZOHO_SMTP_PASS")!,
        },
      },
      pool: {
        size: 1,
        timeout: 10000,
      },
    });

    const emailBody = `
New Contact Form Submission

Contact Information:
- Name: ${name}
- Email: ${email}
- Company: ${company || "N/A"}
- Phone: ${phone || "N/A"}

Project Details:
- Industry: ${industry || "N/A"}
- Project Type: ${projectType || "N/A"}
- Budget: ${budget || "N/A"}
- Timeline: ${timeline || "N/A"}

Message:
${message}
    `.trim();

    try {
      await client.send({
        from: Deno.env.get("ZOHO_SMTP_USER")!,
        to: "contact@bravura.works",
        subject: `New Contact Form Submission from ${name}`,
        content: emailBody,
      });

      console.log("Email sent successfully to contact@bravura.works");

      return new Response(
        JSON.stringify({ success: true, message: "Email sent successfully" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    } catch (emailError: any) {
      console.error("SMTP send error:", emailError);
      throw emailError;
    }
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
