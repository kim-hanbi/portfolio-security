import { ExternalLink, Shield, Lock, Code } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";

const projects = [
  {
    title: "기업형 보안 인프라 구축 프로젝트",
    description: (
      <>
        기업 내부망·DMZ·외부망 구조를 직접 설계하고 VPN, 방화벽, IDS/HIDS, 모니터링을 통합 구성한 
        보안 인프라 구축 프로젝트입니다. <br /><br /> 
        실제 공격 시나리오를 통해 탐지·분석 과정을 구현하며 기업형 보안 운영 환경을 재현했습니다.
      </>
    ),
    icon: Shield,
    tags: ["네트워크 보안", "침해 탐지(IDS/HIDS)", "방화벽/ACL 정책", "공격 시나리오 실습"],
    image: "/images/project1/0.png",
    sections: [
      {
        title: "Network Security Infrastructure",
        images: [
          {
            url: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
            caption: "Network topology overview showing multi-layer security architecture"
          }
        ],
        description:
          "Comprehensive monitoring dashboard showing real-time threat detection across the entire network infrastructure."
      }
    ],
    details:
      "Led a comprehensive 6-month security audit project for a Fortune 500 financial institution.",
    technologies: ["Burp Suite", "Metasploit", "Nessus", "Wireshark", "Python", "SQL"],
    results: [
      "Identified 127 vulnerabilities across the organization",
      "15 critical security issues discovered and remediated",
      "Achieved SOC 2 Type II compliance certification",
      "Reduced security incident response time by 65%"
    ]
  },

  // ... 그대로 유지 (다른 프로젝트들)
];

export function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<typeof projects[0] | null>(null);

  return (
    <>
      <section
        id="projects"
        className="px-6 md:px-20 py-24"
        style={{ backgroundColor: "var(--background)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                lineHeight: "1.2",
                fontWeight: "600",
                color: "var(--foreground)"
              }}
            >
              Featured Projects
            </h2>
            <p
              style={{
                color: "var(--muted-foreground)",
                fontSize: "1.125rem"
              }}
            >
              Recent security engineering projects and implementations
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="lg:col-span-4">
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer h-full rounded-[12px] overflow-hidden shadow-card transition-all hover:shadow-lg"
                  style={{ backgroundColor: "var(--card)" }}
                >

                  {/* 🔥 수정 1 — 대표 이미지: object-cover → object-contain */}
                  <div className="h-48 flex items-center justify-center bg-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: "var(--primary)",
                          color: "var(--primary-foreground)"
                        }}
                      >
                        <project.icon className="w-5 h-5" />
                      </div>
                      <h3
                        style={{
                          fontWeight: "600",
                          color: "var(--foreground)"
                        }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* 🔥 수정 2 — description 가독성 개선: 줄바꿈 적용 */}
                    <p
                      className="mb-4"
                      style={{
                        color: "var(--muted-foreground)",
                        lineHeight: "1.6"
                      }}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-lg text-sm"
                          style={{
                            backgroundColor: "var(--background)",
                            color: "var(--muted-foreground)"
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="flex items-center gap-2 transition-colors group-hover:gap-3"
                      style={{ color: "var(--primary)" }}
                    >
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500"
                        }}
                      >
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
