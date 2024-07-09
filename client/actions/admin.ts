"use server";

import { currentUser } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const admin = async () => {
  const user = await currentUser();

  const role = user?.role;

  if (role === UserRole.ADMIN) {
    return { error: "Forbidden!" };
  }

  return { success: "Allowed!" };
};
