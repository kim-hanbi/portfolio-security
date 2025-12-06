import { Shield, Lock, Code, Database, Cloud, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "네트워크 접근 제어 및 VPN",
    icon: Shield,
    skills: ["방화벽 정책 관리", "ACL 보안 설정", "보안 터널링 구축", "라우팅 보안"]
  },
  {
    title: "침해 탐지 엔지니어링",
    icon: Lock,
    skills: ["IDS/IPS 룰 작성", "정밀 공격 탐지", "호스트 보안 관제"]
  },
  {
    title: "시스템 강화 및 보안 감사",
    icon: Code,
    skills: ["리눅스 권한 관리", "계정 보안 정책", "로그 감사", "서비스 보안 강화"]
  },
  {
    title: "모의해킹 및 악성코드 분석",
    icon: Cloud,
    skills: ["악성코드 분석", "익스플로잇 연구", "워게임 개발 및 운영", "모의 침투 테스트"]
  },
  {
    title: "웹 애플리케이션 보호",
    icon: Terminal,
    skills: ["웹 방화벽 구축", "트래픽 로그 분석", "웹 취약점 진단", "보안 아키텍처"]
  },
  {
    title: "인프라 보안 모니터링",
    icon: Database,
    skills: ["통합 관제 시스템", "DB 모니터링", "에이전트 관리"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-20 py-24" style={{ backgroundColor: 'var(--card)' }}>
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
            Skills & Expertise
          </h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.125rem' }}>
            Technical skills and security tools
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
