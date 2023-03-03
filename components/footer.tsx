import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="w-full bg-[#18181b] flex items-center text-center justify-center py-4">
      <p>
        Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by{" "}
        <a href="https://lorenzo0111.me" className="hover:text-primary">
          Lorenzo0111
        </a>{" "}
        with <FontAwesomeIcon icon={faReact} className="text-primary" />
      </p>
    </footer>
  );
}
