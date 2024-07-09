import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async(
    email: string,
    token: string
) => {
    await resend.emails.send({
        from: "manav18gadhiya@gmail.com",
        to: email,
        subject: "2FA Code",
        html: `<p>Your 2FA code: ${token}</p>`
    })
} 

export const sendPasswordResetEmail = async (
    email: string,
    token: string,
) => {
    const resetLink = `http://localhost:3000/auth/new-password?token=${token}`

    await resend.emails.send({
      from: "manav18gadhiya@gmail.com",
      to: email,
      subject: "Reset your password",
      html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
    });  
}

export const sendVerificationEmail = async (
    email: string,
    token: string
) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "manav18gadhiya@gmail.com",
        to: email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
    })
}
// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// const sendEmail = async (
//   to: string,
//   subject: string,
//   html: string
// ): Promise<void> => {
//   const msg = {
//     to,
//     from: "notsarthakshah@gmail.com",
//     subject,
//     html,
//   };

//   try {
//     const response = await sgMail.send(msg);
//     console.log(response[0].statusCode);
//     console.log(response[0].headers);
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const sendTwoFactorTokenEmail = async (
//   email: string,
//   token: string
// ): Promise<void> => {
//   const html = `<p>Your 2FA code: ${token}</p>`;
//   await sendEmail(email, "2FA Code", html);
// };

// export const sendPasswordResetEmail = async (
//   email: string,
//   token: string
// ): Promise<void> => {
//   const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;
//   const html = `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`;
//   await sendEmail(email, "Reset your password", html);
// };

// export const sendVerificationEmail = async (
//   email: string,
//   token: string
// ): Promise<void> => {
//   const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
//   const html = `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`;
//   await sendEmail(email, "Confirm your email", html);
// };
