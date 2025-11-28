import { ExternalLink, Shield, Lock, Code } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";

const projects = [
  {
    title: "Enterprise Security Audit",
    description: "Comprehensive security assessment for a Fortune 500 company, identifying critical vulnerabilities and implementing remediation strategies.",
    icon: Shield,
    tags: ["Penetration Testing", "Compliance", "Risk Assessment"],
    image: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjM4NDEzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      {
        url: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjM4NDEzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Network security infrastructure overview - comprehensive monitoring dashboard showing real-time threat detection"
      },
      {
        url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        caption: "Security audit process - detailed vulnerability assessment report with risk prioritization matrix"
      },
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        caption: "Penetration testing results - identified critical vulnerabilities and remediation strategies implementation"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        caption: "Compliance dashboard - SOC 2 Type II certification metrics and continuous monitoring indicators"
      }
    ],
    details: "Led a comprehensive 6-month security audit project for a Fortune 500 financial institution. Conducted extensive penetration testing across web applications, network infrastructure, and mobile platforms. Identified and helped remediate 127 vulnerabilities including 15 critical issues.",
    technologies: ["Burp Suite", "Metasploit", "Nessus", "Wireshark", "Python", "SQL"],
    results: [
      "Identified 127 vulnerabilities across the organization",
      "15 critical security issues discovered and remediated",
      "Achieved SOC 2 Type II compliance certification",
      "Reduced security incident response time by 65%"
    ]
  },
  {
    title: "Zero Trust Architecture",
    description: "Designed and implemented zero trust security model for cloud infrastructure, reducing attack surface by 70%.",
    icon: Lock,
    tags: ["Cloud Security", "Zero Trust", "IAM"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjM4NzgwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjM4NzgwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Zero trust architecture diagram - multi-cloud security framework with micro-segmentation layers"
      },
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        caption: "Cloud security implementation - AWS, Azure, and GCP integration with unified IAM policies"
      },
      {
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        caption: "Access control dashboard - real-time monitoring of user privileges and authentication events"
      }
    ],
    details: "Architected and deployed a comprehensive zero trust security framework for a multi-cloud environment spanning AWS, Azure, and GCP. Implemented micro-segmentation, continuous verification, and least-privilege access controls across 500+ cloud resources.",
    technologies: ["AWS IAM", "Azure AD", "GCP IAM", "Terraform", "Kubernetes", "Istio", "Vault"],
    results: [
      "Reduced attack surface by 70% through micro-segmentation",
      "Implemented MFA for 100% of privileged accounts",
      "Decreased lateral movement risk by 85%",
      "Automated access reviews saving 200 hours/month"
    ]
  },
  {
    title: "Secure Code Review Pipeline",
    description: "Developed automated security scanning pipeline integrating SAST and DAST tools into CI/CD workflow.",
    icon: Code,
    tags: ["DevSecOps", "Automation", "SAST/DAST"],
    image: "https://images.unsplash.com/photo-1761519609249-c0ca325f81db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5ldHJhdGlvbiUyMHRlc3RpbmclMjBjb2RlfGVufDF8fHx8MTc2Mzg3ODA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      {
        url: "https://images.unsplash.com/photo-1761519609249-c0ca325f81db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5ldHJhdGlvbiUyMHRlc3RpbmclMjBjb2RlfGVufDF8fHx8MTc2Mzg3ODA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "DevSecOps pipeline architecture - automated security testing integrated into CI/CD workflow"
      },
      {
        url: "https://images.unsplash.com/photo-1542903660-eedba2cda473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        caption: "Code analysis dashboard - SAST and DAST tools showing vulnerability detection in real-time"
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        caption: "Security metrics visualization - tracking vulnerability trends and remediation progress over time"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        caption: "Automated testing results - comprehensive security scan reports with detailed remediation guidance"
      }
    ],
    details: "Built an enterprise-grade DevSecOps pipeline that automatically scans code for security vulnerabilities at every stage of development. Integrated multiple security testing tools and created custom rules to catch organization-specific security issues.",
    technologies: ["GitLab CI/CD", "SonarQube", "OWASP ZAP", "Checkmarx", "Snyk", "Docker", "Jenkins"],
    results: [
      "Detected security issues 95% earlier in development cycle",
      "Reduced security vulnerabilities in production by 82%",
      "Automated 90% of security testing processes",
      "Decreased time-to-market by 30% through automation"
    ]
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="px-6 md:px-20 py-24" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 
              className="mb-4"
              style={{ 
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                fontWeight: '600',
                color: 'var(--foreground)'
              }}
            >
              Featured Projects
            </h2>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '1.125rem' }}>
              Recent security engineering projects and implementations
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="lg:col-span-4"
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer h-full rounded-[12px] overflow-hidden shadow-card transition-all hover:shadow-lg"
                  style={{ backgroundColor: 'var(--card)' }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
                      >
                        <project.icon className="w-5 h-5" />
                      </div>
                      <h3 style={{ fontWeight: '600', color: 'var(--foreground)' }}>
                        {project.title}
                      </h3>
                    </div>
                    <p 
                      className="mb-4"
                      style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-lg text-sm"
                          style={{ 
                            backgroundColor: 'var(--background)',
                            color: 'var(--muted-foreground)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div 
                      className="flex items-center gap-2 transition-colors group-hover:gap-3"
                      style={{ color: 'var(--primary)' }}
                    >
                      <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                        View Details
                      </span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject || projects[0]}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
