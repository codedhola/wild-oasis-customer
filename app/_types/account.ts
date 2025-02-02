import { Session, DefaultSession } from "next-auth";

export interface UserSessionProps extends Session {
  user?: {
    name?: string;
    guestId?: string;
  } & DefaultSession["user"];
}