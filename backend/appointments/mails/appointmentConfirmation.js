import nodemailer from "nodemailer";
import { google } from "googleapis";

const oAuthClient = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuthClient.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function sendMailforAppointmentConfirmation() {
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
      subject: "Terminbestätigung ",
      text: "hallo ich hoffe das html wird angezeigt",
      html: "<h1>Hallo, hiermit bestöätigen wir deinen Termin.</h1>",
    };

    const result = await transport.sendMail(mailOptions);

    return result;
  } catch (error) {
    return error;
  }
}
