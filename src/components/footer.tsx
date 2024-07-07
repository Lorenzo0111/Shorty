import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#18181b] flex items-center text-center justify-center py-4">
      <p>
        Made with <Heart color="red" /> by{" "}
        <a href="https://lorenzo0111.me" className="hover:text-primary">
          Lorenzo0111
        </a>
      </p>
    </footer>
  );
}
