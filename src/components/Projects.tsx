import { ExternalLink, Shield, Lock, Code } from "lucide-react";
import image20 from "src\components\assets\images\20.png";

const projects = [
  {
    title: "네트워크 보안 실습 환경 구축",
    description: "Firewall·VPN·IDS/IPS·HIDS를 통합한 네트워크 보안 실습 환경 구축 프로젝트",
    icon: Shield,
    tags: ["Firewall", "IDS/IPS", "VPN", "Snort"],
    image: "image20"
  },
  {
    title: "Zero Trust Architecture",
    description: "Designed and implemented zero trust security model for cloud infrastructure, reducing attack surface by 70%.",
    icon: Lock,
    tags: ["Cloud Security", "Zero Trust", "IAM"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjM4NzgwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Secure Code Review Pipeline",
    description: "Developed automated security scanning pipeline integrating SAST and DAST tools into CI/CD workflow.",
    icon: Code,
    tags: ["DevSecOps", "Automation", "SAST/DAST"],
    image: "https://images.unsplash.com/photo-1761519609249-c0ca325f81db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5ldHJhdGlvbiUyMHRlc3RpbmclMjBjb2RlfGVufDF8fHx8MTc2Mzg3ODA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            <div 
              key={index} 
              className="lg:col-span-4"
            >
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
