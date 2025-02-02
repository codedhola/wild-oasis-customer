import { auth } from "../_lib/auth";
import { UserSessionProps } from "../_types/account";

export const metadata = {
  title: "Guest area",
};
export default async function Account() {
  const session = await auth();

  const firstName = session?.user?.name?.split(" ")?.at(0);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {firstName}
    </h2>
  );
}   
