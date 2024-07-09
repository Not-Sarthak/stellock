"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import { Wallet } from "@stellar/typescript-wallet-sdk";

const createNewWallet = () => {
  const wallet = Wallet.TestNet();
  console.log("hiiiiii");
  const account = wallet.stellar().account();
  const accountKeyPair = account.createKeypair();
  const publicKey = accountKeyPair.keypair.publicKey();
  const privateKey = accountKeyPair.keypair.secret();

  return {
    publicKey: publicKey,
    privateKey: privateKey,
  };
};

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const { publicKey, privateKey } = createNewWallet();

  console.log("Public Keynjinj:", publicKey);
  console.log("Private Keybhbhj:", privateKey);
  console.log(email);
  try {
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        publicKey,
        privateKey,
      },
    });
    console.log("New User:", newUser);
  } catch (e) {
    console.log(e);
    return { error: "User creation failed!" };
  }

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return { success: "User Created!" };
};
