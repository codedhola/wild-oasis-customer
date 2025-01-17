"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { updateGuest } from "./data-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function updateGuestAction(formData: FormData) {
  const session: any = await auth();

  if (!session?.user?.email) {
    throw new Error("You have to be logged in to update your profile");
  }

  const [nationality, flag] = formData.get('nationality')?.toString().split('%');
  const national_id = formData.get('national_id');

  const payload: any = {
    nationality: nationality,
    national_id,
    country_flag: flag,
    // email: formData.get('email'),
  }

  await updateGuest(session?.user?.guestId, payload);

  revalidatePath("/account/profile");
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}