// import * as dotenv from 'dotenv';
// import { Resend } from 'resend';

// dotenv.config();

// const resend = new Resend(process.env.API_KEY_RESEND);

// export function EmailService<T extends new (...args: any[]) =>{}>(Base: T) {
//   return class extends Base {
//     public sendEmail() {
//       resend.emails.send({
//         from: 'onboarding@resend.dev',
//         to: 'marcosvictorsb@gmail.com',
//         subject: 'Hello World',
//         html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
//       });
//     }
//   }
// }