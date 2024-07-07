import { auth, signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

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
        <Button type="submit">Logout</Button>
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
      <Button type="submit">Login to see all your links</Button>
    </form>
  );
}
