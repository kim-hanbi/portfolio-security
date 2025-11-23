import { Shield } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header 
      className="px-20 py-6 sticky top-0 z-50 backdrop-blur-sm"
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderBottom: '1px solid var(--border)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            <Shield className="w-5 h-5" style={{ color: 'var(--primary-foreground)' }} />
          </div>
          <span style={{ fontWeight: '600', color: 'var(--foreground)', fontSize: '1.125rem' }}>
            👨‍💻 Junior Cybersecurity Portfolio
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#about" 
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--foreground)' }}
          >
            About
          </a>
          <a 
            href="#projects" 
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--foreground)' }}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--foreground)' }}
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--foreground)' }}
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--foreground)' }}
          >
            Contact
          </a>
        </nav>

        <Button 
          style={{ 
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            borderRadius: '12px'
          }}
        >
          Download CV
        </Button>
      </div>
    </header>
  );
}
