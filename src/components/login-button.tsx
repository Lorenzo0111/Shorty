import { auth, signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function LoginButton() {
  const session = await auth();
  if (session) {
    return (
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button
          className="w-20 h-10 bg-secondary font-bold rounded-xl"
          type="submit"
        >
          Logout
        </button>
      </form>
    );
  }

  return (
    <form
      action={async () => {
        "use server";

        await signIn("discord");

        revalidatePath("/");
        return redirect("/");
      }}
    >
      <button className="p-2 h-10 bg-primary rounded-xl" type="submit">
        Login to see all your links
      </button>
    </form>
  );
}
