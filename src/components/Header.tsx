import { Shield, Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const handleDownloadCV = () => {
    toast.success("Resume download started!");

    const link = document.createElement("a");
    link.href = "/resume.pdf"; 
    link.download = "Hanbi_Security_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className="px-6 md:px-20 py-6 sticky top-0 z-50 backdrop-blur-sm"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <Shield className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
          </div>

          {/* LOGO TEXT HERE */}
          <span
            style={{
              fontWeight: "600",
              color: "var(--foreground)",
              fontSize: "1.125rem",
            }}
          >
            👩🏻‍💻 Junior Security Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="transition-colors hover:opacity-80 cursor-pointer"
            style={{ color: "var(--foreground)" }}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="transition-colors hover:opacity-80 cursor-pointer"
            style={{ color: "var(--foreground)" }}
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "skills")}
            className="transition-colors hover:opacity-80 cursor-pointer"
            style={{ color: "var(--foreground)" }}
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, "experience")}
            className="transition-colors hover:opacity-80 cursor-pointer"
            style={{ color: "var(--foreground)" }}
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="transition-colors hover:opacity-80 cursor-pointer"
            style={{ color: "var(--foreground)" }}
          >
            Contact
          </a>
        </nav>

        {/* RIGHT: Resume Button + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            onClick={handleDownloadCV}
            className="hidden md:flex items-center gap-2"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              borderRadius: "12px",
            }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg"
            style={{ backgroundColor: "var(--card)" }}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" style={{ color: "var(--foreground)" }} />
            ) : (
              <Menu className="w-5 h-5" style={{ color: "var(--foreground)" }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden mt-4 p-4 rounded-[12px] shadow-card"
          style={{ backgroundColor: "var(--background)" }}
        >
          <nav className="flex flex-col gap-4">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="py-2 transition-colors hover:opacity-80"
              style={{ color: "var(--foreground)" }}
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="py-2 transition-colors hover:opacity-80"
              style={{ color: "var(--foreground)" }}
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className="py-2 transition-colors hover:opacity-80"
              style={{ color: "var(--foreground)" }}
            >
              Skills
            </a>
            <a
              href="#experience"
              onClick={(e) => scrollToSection(e, "experience")}
              className="py-2 transition-colors hover:opacity-80"
              style={{ color: "var(--foreground)" }}
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="py-2 transition-colors hover:opacity-80"
              style={{ color: "var(--foreground)" }}
            >
              Contact
            </a>

            <Button
              onClick={handleDownloadCV}
              className="w-full flex items-center justify-center gap-2"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                borderRadius: "12px",
              }}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
