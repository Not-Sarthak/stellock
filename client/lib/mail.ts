import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.TWILIO_SENDGRID as string);

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  console.log("API KEY", process.env.TWILIO_SENDGRID);
  const msg = {
    from: "notsarthakshah@gmail.com",
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`,
  };

  try {
    const response = await sgMail.send(msg);
    console.log(response);
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `https://stellock-vnfx.vercel.app/auth/new-password?token=${token}`;
  const msg = {
    from: "notsarthakshah@gmail.com",
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  };

  try {
    const response = await sgMail.send(msg);
    console.log(response);
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `https://stellock-vnfx.vercel.app/auth/new-verification?token=${token}`;
  const msg = {
    from: "notsarthakshah@gmail.com",
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  };

  try {
    const response = await sgMail.send(msg);
    console.log(response);
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};
