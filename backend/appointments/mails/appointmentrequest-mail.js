import nodemailer from "nodemailer";
import { google } from "googleapis";

const oAuthClient = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuthClient.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

export async function sendMailforAppointmentRequest() {
  try {
    const accessToken = await oAuthClient.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.MYMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: process.env.MYMAIL,
      //   - Hier muss natürlich eigentlich die Mail des Users rein
      to: process.env.MYMAIL,
      subject: "Terminanfrage ",
      text: "hallo ich hoffe das html wird angezeigt",
      html: "<h1>Hallo deine Terminanfrage ist bei uns eingegangen.</h1><p>Sobald dein Termin von deinem Arzt bestätigt wurde, bekommst du noch eine Email </p>",
    };

    const result = await transport.sendMail(mailOptions);

    return result;
  } catch (error) {
    return error;
  }
}
