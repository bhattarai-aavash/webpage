import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto px-4 text-center text-sm text-muted sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
