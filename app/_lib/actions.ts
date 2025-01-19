"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { createBooking, updateBooking, updateGuest } from "./data-service";
import { redirect } from "next/navigation";

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
  }

  await updateGuest(session?.user?.guestId, payload);

  revalidatePath("/account/profile");
}

export async function updateReservationAction(formData: FormData) {
  const session: any = await auth();

  if (!session?.user?.email) {
    throw new Error("You have to be logged in to update your profile");
  }


  const id = formData.get('id');
  const num_guests = formData.get('num_guests');
  const observations = formData.get('observations');

  const payload: any = {
    num_guests: num_guests,
    observations: observations,
  }

  await updateBooking(id, payload);
  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}

export async function createBookingAction(bookingData, formData) {
  const session: any = await auth();
  if (!session) throw new Error("You must be logged in");

  const newBooking = {
    ...bookingData,
    guest_id: session.user.guestId,
    num_guests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extra_price: 0,
    total_price: bookingData.cabin_price,
    is_paid: false,
    has_breakfast: false,
    status: "unconfirmed",
  };

  await createBooking(newBooking)

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}