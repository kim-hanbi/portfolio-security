import { ExternalLink, Shield, Lock, Code } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";
import projectImage0 from '/images/project1/0.png'; 
import projectImage1 from '/images/project1/1.png'; 
import projectImage2 from '/images/project1/2.png'; 
import projectImage3 from '/images/project1/3.png';
import projectImage4 from '/images/project1/4.png';
import projectImage5 from '/images/project1/5.png';
import projectImage6 from '/images/project1/6.png';
import projectImage7 from '/images/project1/7.png';
import projectImage8 from '/images/project2/0.PNG'; 
const projects = [
  {
    // ------------------------------------------
    // 🏆 신입 보안 포트폴리오용 최종 전문가 멘트 반영
    // ------------------------------------------
    title: "기업형 보안 인프라 구축 프로젝트", 
    description: "Cisco ASA/pfSense 기반 Active/Standby 3계층 망분리 아키텍처 구축으로 최대 가용성 및 로그 신뢰성 확보, Snort 침해 탐지 및 자동 차단 연동을 통한 위협 대응 효율성 극대화",
    icon: Shield,
    tags: ["네트워크 보안", "침해 탐지(IDS/HIDS)", "방화벽/ACL 정책", "공격 시나리오 검증"], // '실습'을 '검증'으로 변경
    image: projectImage0,
    sections: [
      {
        title: "I. 3계층 망분리 구조 및 무중단 시스템 구축",
        images: [
          {
            url: projectImage1,
            caption: "고가용성 구현 및 안전성 입증"
          },
          {
            url: projectImage2,
            caption: "OpenVPN 접속 성공 및 IP 할당"
          },
        ],
        description: `1. 무중단 시스템 구현 (이중화): pfSense 방화벽을 Active/Standby 이중 구조로 만들어 단일 고장 지점을 제거했습니다. 명령어 확인 결과, 가상 IP 통신 성공을 통해 메인 장비 고장 시에도 서비스가 끊김 없이 계속됨을 입증했습니다.

2. 원격 접속 보안 체계: pfSense에 OpenVPN 서버를 구축했습니다. 인증 후 내부망 IP(10.10.10.2)를 할당받아, 외부에서도 보안 터널을 통해 안전하게 회사 자원에 접근 가능한 환경을 확립했습니다.

`,
      }
      ,
      {
        title: "II. 접근 규칙 및 방화벽 기능 검증",
        images: [
          {
            url: projectImage3,
            caption: "관리자 접속 규칙 검증 (허용)"
          },
          {
            url: projectImage4,
            caption: "관리자 접속 규칙 검증 (DMZ 허용)"
          },
          {
            url: projectImage5,
            caption: "통신 규칙 신뢰성 확보 (차단)"
          }
        ],
        description: `1. 관리자 접속 규칙 검증 (허용): Inside(PC1)에서 ASA 관리 인터페이스로의 Telnet 접속이 정상적으로 허용됨을 확인했습니다.

        2. 관리자 접속 규칙 검증 (DMZ 허용): DMZ(Webterm2)에서도 ASA 관리 인터페이스로의 Telnet 접속이 허용됨을 확인했습니다. Inside와 DMZ 양쪽에서 관리자 트래픽 허용이 정확히 설정되었음을 보여줍니다.
        
        3. 통신 규칙 신뢰성 확보 (차단): PC1에서 ASA로 불필요한 HTTPS 접속을 시도하여 연결 오류를 확인했습니다. 이는 필요한 것만 허용하고 나머지는 차단하는 최소 권한 원칙이 지켜지고 있음을 나타냅니다.
        
`,
      }
      ,
      {
        title: "III. 맞춤형 침입 탐지 시스템 구축 및 운영",
        images: [
          {
            url: projectImage6,
            caption: "Custom Rule 설계 능력 입증"
          },
          {
            url: projectImage7,
            caption: "실시간 탐지 검증"
          },
        ],
        description: `1. Custom Rule 설계 능력 입증: DDoS, 해킹 코드 주입 등 핵심 위협에 대응하는 Snort Custom Rule 목록을 직접 작성하여 적용했습니다. 이는 패킷 분석 기반의 탐지 로직 설계 능력을 보여줍니다.
        
        2. 실시간 탐지 검증: SYN Flag Scanning 공격을 시뮬레이션하여 Snort가 실시간으로 패턴을 매칭하고 로그를 기록함을 확인했습니다. 이는 탐지 시스템이 실제 운영 환경에서 유효하게 작동함을 나타냅니다.
         
`,
      }
      ,
      {
        title: "IV. 자동화 방어 로직 설계 및 운영 효율 극대화",
        
        description: `1. 자동 차단 로직 설계: Snort(탐지) → Zabbix(실시간 분석/알림) 연동을 통해 공격 정보를 수집하고, 스크립트를 이용하여 Cisco ASA의 접근 규칙(ACL)에 공격자 IP를 자동으로 차단하는 로직을 설계했습니다.
        
        2. 운영 효율성 강조: 이 능동적 방어 체계는 사람이 직접 수동으로 대응할 때보다 위협 대응 시간을 크게 단축하며, 실무 환경에서의 운영 효율성을 극대화했음을 보여줍니다.`
      }
    
    ],
    details: `1. 인프라 구축 및 안정성: ASA와 pfSense 장비 간 정책 및 라우팅 설정을 기반으로 Inside/DMZ/Outside 영역을 분리했으며, 라우팅 단에 Active/Standby 이중 연결을 구성하여 시스템 고장에 대비했습니다. 이를 통해 서비스 안정성을 확보했습니다.

2. 탐지 및 분석 논리: 로그를 기반으로 Command Injection 및 DoS Attack 등 5가지 시나리오에 대한 맞춤형 탐지 규칙을 Snort에 직접 적용했습니다.

3. 최종 운영 검증: DoS 공격 상황에서 방화벽 규칙이 정확히 작동하며, 네트워크 중단 없이 탐지 시스템이 안정적으로 운용됨을 입증했습니다.`,
    technologies: ["Cisco ASA", "pfSense", "Snort", "OpenVPN", "Zabbix"],
    results: [
      "Cisco ASA/pfSense 기반 3계층(Inside/DMZ/Outside) 망분리 보안 아키텍처 구축",
      "Active/Standby 고가용성 구성을 통한 단일 장애점(SPOF) 제거 및 무중단 운영 확보",
      "OpenVPN을 활용한 암호화된 원격 접속 환경 구현 및 ACL 기반의 최소 권한 접근 통제 적용",
      "Snort와 Zabbix를 연동하여 공격 시나리오(DDoS 등)를 식별하는 실시간 위협 탐지 체계 확립"
    ]
  },
  {
    title: "기업형 통합 보안 관제 시스템 구축 및 위협 대응 시나리오",
    description: "GNS3 기반 Web/DB 서비스 망 및 통합 관제 시스템 구축으로 인프라 전반의 보안 가시성 확보, 실전 공격 시나리오 수행 및 파일 변조 탐지 연동을 통한 자동화된 침해 사고 대응 체계 확립",
    icon: Lock,
    tags: ["보안관제", "ESM", "침해사고대응", "Zabbix", "Wazuh"],
    image: projectImage8,
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
      //테스트용
         {
        title: "Zero Trust Architecture Design2",
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
      //테스트용
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
    details: `1. 인프라 설계 및 가시성 확보: Cisco ASA와 pfSense를 기반으로 Web/DB 서비스가 구동되는 3계층 망분리 아키텍처를 구축했으며, Zabbix와 LogAnalyzer를 연동하여 전체 인프라의 자산 상태 및 로그에 대한 실시간 모니터링 환경을 확보했습니다.
    
    2. 탐지 논리 및 시나리오 검증: 실제 Root 권한 탈취 및 파일 변조 시나리오를 수행하며, 이에 대응하는 Wazuh(HIDS) 무결성 검증 규칙과 Snort 탐지 정책을 직접 설계하고 적용했습니다.
    
    3. 최종 운영 검증: 침해 사고 발생 시 시스템이 위협 로그를 생성하고, 즉각적인 대응 트리거를 발생시킴을 확인했습니다. 공격 시도부터 탐지, 분석, 대응으로 이어지는 관제 프로세스를 확립했습니다.
    `,
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