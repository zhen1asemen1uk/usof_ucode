const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, API_URL } = require("../config");

const nodemailer = require(`nodemailer`);

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
         <div>
         <h1>Click link for activation</h1>
         <a href='${link}'>${link}</a>
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
         <div>
         <h1>Click link for confirm you password</h1>
         <p>If you confirm then new password: <strong> ${newPassword}</strong></p>
         <br>
         <a href='${API_URL}/api/auth/password-reset/${token}__||__${newPassword}'>Click me for confirm new password</a>
         </div>`
      })
   }
}

module.exports = new sendMailService();