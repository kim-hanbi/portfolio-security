import { ExternalLink, Shield, Lock, Code } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";

const projects = [
  {
    title: "기업형 네트워크 보안 구축",
    description: [
      "Inside–DMZ–Outside 아키텍처 기반으로 방화벽·VPN·고가용성·IDS/OSSEC을 통합 구성하여",
      "기업 환경과 유사한 보안 인프라를 구축한 프로젝트입니다."
    ],
    icon: Shield,
    tags: ["ASA Firewall", "HSRP", "OpenVPN", "DMZ", "Snort IDS", "OSSEC", "Network Security"],
    image: "images/project1/0.png",
    sections: [
      {
        title: "Network Security Infrastructure",
        images: [
          {
            url: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
        description:
          "Comprehensive monitoring dashboard showing real-time threat detection across the entire network infrastructure. Implemented advanced intrusion detection systems and automated response protocols with 24/7 monitoring capabilities."
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
        description:
          "Detailed vulnerability assessment with risk prioritization matrix. Conducted thorough analysis of web applications, APIs, and network endpoints to identify security gaps."
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
        description:
          "SOC 2 Type II certification metrics and continuous monitoring indicators. Established automated reporting and audit trails to maintain regulatory requirements."
      }
    ],
    details:
      "Led a 6-month security audit project covering network, web, and mobile surfaces. Identified 127 vulnerabilities including 15 critical issues and built remediation plans.",
    technologies: ["Burp Suite", "Metasploit", "Nessus", "Wireshark", "Python", "SQL"],
    results: [
      "Identified 127 vulnerabilities across the organization",
      "15 critical security issues discovered and remediated",
      "Achieved SOC 2 Type II compliance certification",
      "Reduced incident response time by 65%"
    ]
  },

  {
    title: "Zero Trust Architecture",
    description: [
      "클라우드 환경 기반 Zero Trust 모델 설계 및 구현으로",
      "전체 공격 표면을 70% 감소시킨 프로젝트입니다."
    ],
    icon: Lock,
    tags: ["Cloud Security", "Zero Trust", "IAM"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    sections: [],
    details:
      "Architected multi-cloud zero trust security with micro-segmentation, continuous verification, and least privilege access.",
    technologies: ["AWS IAM", "Azure AD", "GCP IAM", "Terraform", "Kubernetes", "Istio"],
    results: ["Reduced attack surface by 70%", "Implemented MFA 100%", "Decreased lateral movement risk by 85%"]
  },

  {
    title: "Secure Code Review Pipeline",
    description: [
      "CI/CD에 SAST·DAST 자동화 스캔을 통합하여",
      "개발 단계에서 95% 빠르게 취약점을 탐지한 프로젝트입니다."
    ],
    icon: Code,
    tags: ["DevSecOps", "Automation", "SAST/DAST"],
    image:
      "https://images.unsplash.com/photo-1761519609249-c0ca325f81db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    sections: [],
    details:
      "Integrated static/dynamic analysis and dependency scanning into CI/CD workflow with custom security rules.",
    technologies: ["GitLab CI", "SonarQube", "OWASP ZAP", "Checkmarx", "Docker"],
    results: ["Detected issues 95% earlier", "Reduced production vulnerabilities by 82%", "Automated 90% processes"]
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="px-6 md:px-20 py-24" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", lineHeight: "1.2", fontWeight: "600", color: "var(--foreground)" }}>
              Portfolio Projects
            </h2>
            <p style={{ color: "var(--muted-foreground)", fontSize: "1.125rem" }}>Recent security Labs and Projects</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="lg:col-span-4">
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer h-full rounded-[12px] overflow-hidden shadow-card transition-all hover:shadow-lg"
                  style={{ backgroundColor: "var(--card)" }}
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
                        style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                      >
                        <project.icon className="w-5 h-5" />
                      </div>
                      <h3 style={{ fontWeight: "600", color: "var(--foreground)" }}>{project.title}</h3>
                    </div>

                    <p style={{ color: "var(--muted-foreground)", lineHeight: "1.6" }}>
                      {Array.isArray(project.description)
                        ? project.description.join(" ")
                        : project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 mt-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-lg text-sm"
                          style={{ backgroundColor: "var(--background)", color: "var(--muted-foreground)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: "var(--primary)" }}>
                      <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>View Details</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject || projects[0]} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
