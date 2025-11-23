import { Shield, Lock, Code, Database, Cloud, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Penetration Testing",
    icon: Shield,
    skills: ["Network Scanning", "Vulnerability Assessment", "Exploit Development", "Social Engineering"]
  },
  {
    title: "Security Architecture",
    icon: Lock,
    skills: ["Zero Trust Design", "Secure SDLC", "Threat Modeling", "Risk Management"]
  },
  {
    title: "Application Security",
    icon: Code,
    skills: ["SAST/DAST", "Code Review", "OWASP Top 10", "Secure Coding"]
  },
  {
    title: "Cloud Security",
    icon: Cloud,
    skills: ["AWS Security", "Azure Security", "Container Security", "IAM"]
  },
  {
    title: "Security Tools",
    icon: Terminal,
    skills: ["Burp Suite", "Metasploit", "Nmap", "Wireshark"]
  },
  {
    title: "Data Protection",
    icon: Database,
    skills: ["Encryption", "PKI", "DLP", "Backup Security"]
  }
];

export function Skills() {
  return (
    <section className="px-20 py-24" style={{ backgroundColor: 'var(--card)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 
            className="mb-4"
            style={{ 
              fontSize: '2.5rem',
              lineHeight: '1.2',
              fontWeight: '600',
              color: 'var(--foreground)'
            }}
          >
            Skills & Expertise
          </h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.125rem' }}>
            Comprehensive security skill set across multiple domains
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="lg:col-span-4"
            >
              <div
                className="p-6 rounded-[12px] shadow-card h-full"
                style={{ backgroundColor: 'var(--background)' }}
              >
                <div 
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 
                  className="mb-4"
                  style={{ fontWeight: '600', color: 'var(--foreground)' }}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-center gap-2"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: 'var(--primary)' }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
