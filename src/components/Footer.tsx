import { Shield, Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer 
      className="px-20 py-12"
      style={{ 
        backgroundColor: 'var(--background)',
        borderTop: '1px solid var(--border)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <Shield className="w-5 h-5" style={{ color: 'var(--primary-foreground)' }} />
              </div>
              <span style={{ fontWeight: '600', color: 'var(--foreground)', fontSize: '1.125rem' }}>
                SecurePort
              </span>
            </div>
            <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
              Building secure systems and protecting digital assets through expert security engineering.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 
              className="mb-4"
              style={{ fontWeight: '600', color: 'var(--foreground)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about"
                  className="transition-colors hover:opacity-80"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects"
                  className="transition-colors hover:opacity-80"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills"
                  className="transition-colors hover:opacity-80"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 
              className="mb-4"
              style={{ fontWeight: '600', color: 'var(--foreground)' }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              <li style={{ color: 'var(--muted-foreground)' }}>
                Penetration Testing
              </li>
              <li style={{ color: 'var(--muted-foreground)' }}>
                Security Audits
              </li>
              <li style={{ color: 'var(--muted-foreground)' }}>
                Consulting
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 
              className="mb-4"
              style={{ fontWeight: '600', color: 'var(--foreground)' }}
            >
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              <button 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:scale-105"
                style={{ backgroundColor: 'var(--card)' }}
              >
                <Mail className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </button>
              <button 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:scale-105"
                style={{ backgroundColor: 'var(--card)' }}
              >
                <Linkedin className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </button>
              <button 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:scale-105"
                style={{ backgroundColor: 'var(--card)' }}
              >
                <Github className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </button>
            </div>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
              security@example.com
            </p>
          </div>
        </div>

        <div 
          className="pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
              © 2024 SecurePort. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="#privacy"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}
              >
                Privacy Policy
              </a>
              <a 
                href="#terms"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
