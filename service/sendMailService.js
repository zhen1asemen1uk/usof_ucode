const nodemailer = require(`nodemailer`);

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, API_URL } = require("../config");

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

   async sendNewPassword(toMail, newPassword, token) {
      await this.transporter.sendMail({
         from: SMTP_USER,
         to: toMail,
         subject: `You password update.`,
         text: ``,
         html: `
         <div style=" padding: 5px 10px 15px 10px; text-align: center;
      background-color:black ; border-radius: 5px;">
      <h2 style="color: white">Click link for<br> confirm you password 🔒</h2>
      <p style="color: white">If you confirm then new password 🤫: <strong> ${newPassword}</strong></p>

      <a style="color: green" href='${API_URL}/api/auth/password-reset/${token}__||__${newPassword}'>
         Click me for confirm new password</a>

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