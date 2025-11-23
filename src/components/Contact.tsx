import { ExternalLink, Shield, Lock, Code } from "lucide-react";
import img1 from "./assets/images/1/0.png";
import img2 from "./assets/images/2/0.PNG";
import img3 from "./assets/images/3/0.PNG";

const projects = [
  {
    title: "네트워크 보안 실습 환경 구축",
    description: "Firewall·VPN·IDS/IPS·HIDS를 통합한 네트워크 보안 실습 환경 구축 프로젝트",
    icon: Shield,
    tags: ["Firewall", "IDS/IPS", "VPN", "Snort"],
    image: img1
  },
  {
    title: "보안 인프라 통합 운영 및 침해 대응 실습",
    description: "DDoS·권한 상승·파일 변조 공격 시뮬레이션을 통한 실전 대응 환경 구축 프로젝트",
    icon: Lock,
    tags: ["Defense-in-Depth", "Incident Response", "Monitoring", "Traffic Analysis"],
    image: img2
  },
  {
    title: "공격·탐지·분석 기반 통합 보안 실습 인프라 구축",
    description: "Firewall·IPS/IDS·HIDS·SIEM 기반 실전 침해대응 환경 구축 및 분석 프로젝트",
    icon: Code,
    tags: ["Incident Response", "Defense-in-Depth", "Monitoring", "Threat Analysis"],
    image: img3
  }
];

export function Projects() {
  return (
    <section className="px-20 py-24" style={{ backgroundColor: 'var(--background)' }}>
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
            Portfolio Projects
          </h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.125rem' }}>
            Recent security Labs and Projects
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="lg:col-span-4">
              <div
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
                    className="flex items-center gap-2 transition-colors"
                    style={{ color: 'var(--primary)' }}
                  >
                    <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                      View Details
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
