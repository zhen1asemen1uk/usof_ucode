const nodemailer = require(`nodemailer`);

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, API_URL, CLIENT_URL } = require("../config");

class sendMailService {
   constructor() {
      this.transporter = nodemailer.createTransport({
         host: SMTP_HOST,
         port: SMTP_PORT,
         secure: true,
         auth: {
            user: SMTP_USER,
            pass: SMTP_PASSWORD
         }
      })
   }

   async sendActivationMail(toMail, link) {
      await this.transporter.sendMail({
         from: SMTP_USER,
         to: toMail,
         subject: `Activation profile on ${API_URL}`,
         text: ``,
         html: `
         <div style="text-align:center;padding: 5px 10px 20px 10px;
            background-color: black; border-radius: 5px; color: white;">
            <h2>Hello, my friend! </h2>
            <span><a href='${link}' style='color:green;'>Click me for activation </a>🤟🏻</span>
         </div>`
      })
   }

   async sendNewPassword(toMail, token) {
      await this.transporter.sendMail({
         from: SMTP_USER,
         to: toMail,
         subject: `You password.`,
         text: ``,
         html: `
         <div style=" padding: 5px 10px 15px 10px; text-align: center;
      background-color:black ; border-radius: 5px;">
      <h2 style="color: white">Click link for create new password 🔒</h2>
<br/>
      <a style="color: green" href='${CLIENT_URL}/createNewPassword/${token}'>
         Click me for create...</a>

      <p style='color: red; font-size:10px'>
         <span>❗️If you did not reset your password, please ignore this email, it maybea mistake,</span>
         <br>
         <span>but keep in mind that someone wanted to reset your password accidentally or intentionally.</span>
      </p>
   </div>`
      })
   }
}

module.exports = new sendMailService();