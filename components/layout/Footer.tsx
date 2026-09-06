import { profile } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8 text-center text-sm text-white/40">
      <p>
        © {new Date().getFullYear()} {profile.name}. Made with curiosity,
        motion, and a very dark canvas.
      </p>
    </footer>
  );
}
