import { ExternalLink, Shield, Lock, Code } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";
import projectImage0 from '../../public/images/project1/0.png';

const projects = [
  {
    // ------------------------------------------
    // 🏆 신입 보안 포트폴리오용 최종 전문가 멘트 반영
    // ------------------------------------------
    title: "이기종 통합 보안 인프라 설계 및 운영 능력 검증", 
    description: "ASA–pfSense–Snort 기반 보안 인프라를 구성하고, DoS 시나리오로 탐지·정책 동작과 가용성을 검증한\n프로젝트입니다.",
    icon: Shield,
    tags: ["네트워크 보안", "침해 탐지(IDS/HIDS)", "방화벽/ACL 정책", "공격 시나리오 검증"], // '실습'을 '검증'으로 변경
    image: projectImage0,
    sections: [
      {
        title: "Network Security Infrastructure",
        images: [
          {
            url: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjM4NDEzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            caption: "Network topology overview showing multi-layer security architecture"
          },
          {
            url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Real-time threat monitoring dashboard with active alert system"
          },
          {
            url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Network segmentation diagram with security zones and access controls"
          }
        ],
        description: "Comprehensive monitoring dashboard showing real-time threat detection across the entire network infrastructure. Implemented advanced intrusion detection systems and automated response protocols with 24/7 monitoring capabilities."
      },
      {
        title: "Vulnerability Assessment & Penetration Testing",
        images: [
          {
            url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Vulnerability assessment report with risk prioritization matrix"
          },
          {
            url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Penetration testing methodology and attack vector analysis"
          },
          {
            url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Security findings dashboard with severity classifications"
          }
        ],
        description: "Detailed vulnerability assessment with risk prioritization matrix. Conducted thorough analysis of web applications, APIs, and network endpoints to identify security gaps. Systematic penetration testing methodology revealed critical vulnerabilities and informed comprehensive remediation strategies."
      },
      {
        title: "Compliance & Certification",
        images: [
          {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "SOC 2 Type II compliance metrics dashboard"
          },
          {
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Continuous monitoring and audit trail visualization"
          }
        ],
        description: "SOC 2 Type II certification metrics and continuous monitoring indicators. Established ongoing compliance framework with automated reporting and audit trails to maintain security standards and regulatory requirements."
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
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzZWN1cml0eSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjM4NzgwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    sections: [
      {
        title: "Zero Trust Architecture Design",
        images: [
          {
            url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzZWN1cml0eSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjM4NzgwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            caption: "Zero trust architecture diagram with micro-segmentation layers"
          },
          {
            url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Identity and access management flow chart"
          },
          {
            url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Security policy enforcement points across network segments"
          }
        ],
        description: "Multi-cloud security framework with micro-segmentation layers spanning AWS, Azure, and GCP. Implemented identity-based access controls with continuous verification and least-privilege principles to ensure comprehensive security coverage."
      },
      {
        title: "Multi-Cloud Integration & IAM",
        images: [
          {
            url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Multi-cloud security orchestration platform"
          },
          {
            url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Unified IAM policy management console"
          },
          {
            url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Cross-cloud authentication and authorization workflow"
          }
        ],
        description: "Unified IAM policies across AWS, Azure, and GCP platforms. Created seamless security orchestration enabling consistent policy enforcement regardless of cloud provider, with centralized identity management and single sign-on capabilities."
      },
      {
        title: "Access Control & Continuous Monitoring",
        images: [
          {
            url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Real-time access monitoring dashboard"
          },
          {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "User privilege analytics and anomaly detection"
          }
        ],
        description: "Real-time monitoring of user privileges and authentication events. Implemented adaptive access controls with contextual risk assessment and automated threat response mechanisms for proactive security management."
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
    image: "https://images.unsplash.com/photo-1761519609249-c0ca325f81db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwZW5ldHJhdGlvbiUyMHRlc3RpbmclMjBjb2RlfGVufDF8fHx8MTc2Mzg3ODA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    sections: [
      {
        title: "DevSecOps Pipeline Architecture",
        images: [
          {
            url: "https://images.unsplash.com/photo-1761519609249-c0ca325f81db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwZW5ldHJhdGlvbiUyMHRlc3RpbmclMjBjb2RlfGVufDF8fHx8MTc2Mzg3ODA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            caption: "CI/CD pipeline with integrated security testing stages"
          },
          {
            url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Automated security gate workflow diagram"
          },
          {
            url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Build and deployment pipeline with security checkpoints"
          }
        ],
        description: "Automated security testing integrated into CI/CD workflow. Built comprehensive pipeline combining static analysis, dynamic testing, and dependency scanning at every commit to catch vulnerabilities early in the development lifecycle."
      },
      {
        title: "SAST & DAST Integration",
        images: [
          {
            url: "https://images.unsplash.com/photo-1542903660-eedba2cda473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Real-time SAST code analysis dashboard"
          },
          {
            url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "DAST runtime vulnerability scanning results"
          },
          {
            url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Custom security rule engine configuration"
          }
        ],
        description: "SAST and DAST tools showing vulnerability detection in real-time. Implemented custom security rules tailored to organization's technology stack and security requirements with automated remediation suggestions."
      },
      {
        title: "Security Metrics & Reporting",
        images: [
          {
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Vulnerability trends and remediation metrics"
          },
          {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Executive security posture dashboard"
          },
          {
            url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            caption: "Automated vulnerability ticket management system"
          }
        ],
        description: "Tracking vulnerability trends and remediation progress over time. Created executive dashboards providing visibility into security posture and improvement metrics with automated ticket creation and severity-based SLA management."
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
                  <div className="h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
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
                      style={{ color: 'var(--muted-foreground)', lineHeight: '1.6', whiteSpace: 'pre-line' }}
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