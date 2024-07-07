import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#18181b] flex items-center text-center justify-center py-4">
      <p className="flex gap-2">
        Made with <Heart color="red" fill="red" /> by{" "}
        <Link href="https://lorenzo0111.me" className="hover:text-primary">
          Lorenzo0111
        </Link>
      </p>
    </footer>
  );
}
