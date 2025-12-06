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
import projectImage9 from '/images/project2/3.PNG';
import projectImage10 from '/images/project2/8.PNG';
import projectImage11 from '/images/project2/13.PNG';
import projectImage12 from '/images/project2/6.PNG';
import projectImage13 from '/images/project2/7.PNG';
import projectImage14 from '/images/project2/12.PNG';
import projectImage15 from '/images/project2/9.PNG';
import projectImage16 from '/images/project2/21.PNG';
import projectImage17 from '/images/project2/25.PNG';
import projectImage18 from '/images/project2/1.PNG';
import projectImage19 from '/images/project2/26.PNG';
import projectImage20 from '/images/project2/27.PNG';
import projectImage21 from '/images/project2/5.PNG';
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
        title: "I. 보안 인프라 아키텍처 및 서비스 망 설계",
        images: [
          {
            url: projectImage9,
            caption: "Web 서버 정상 접속 확인"
          },
          {
            url: projectImage10,
            caption: "서비스 DB 스키마(Schema) 설계"
          },
          {
            url: projectImage11,
            caption: "실시간 성능 모니터링"
          }
        ],
        description: `1. 3계층 서비스 망 분리 및 접근성 검증: 구축된 3계층 네트워크 위에서 라우팅 및 방화벽 정책이 정상 동작함을 입증하기 위해, Web 서버 접속 테스트를 수행했습니다. 망 분리 환경에서도 서비스 접속이 정상적으로 이루어짐을 검증했습니다.

2. 데이터베이스 스키마 설계 및 서비스 연동: 단순 네트워크 연결을 넘어, 실제 애플리케이션 데이터를 처리하는 MariaDB를 구축하고 스키마(Skillcodes Table)를 직접 설계했습니다. 이를 통해 서비스 계층(Layer 7)의 구조를 확립하고, 실시간 DB 성능 관제를 통해 웹과 DB 간의 안정적인 연동 상태를 확인했습니다.
       
        `,
      },

         {
        title: "II. 중앙 집중형 모니터링 및 가시성 확보",
        images: [
          {
            url: projectImage12,
            caption: "Zabbix 인프라 통합 관제 대시보드"
          },
          {
            url: projectImage13,
            caption: "서버별 상세 리소스(Disk/CPU) 모니터링"
          },
          {
            url: projectImage14,
            caption: "Syslog 기반 로그 통합 수집 및 분석"
          },
        ],
        description: `1. 인프라 통합 관제 대시보드 구축: 분산된 인프라 환경의 효율적인 관제를 위해 통합 모니터링 도구인 Zabbix를 도입했습니다. 서버 및 네트워크 장비의 리소스 현황과 가용성 상태를 실시간 대시보드로 시각화하여, 장애 발생 시 즉각적으로 인지하고 대응할 수 있는 신속한 장애 대응 체계를 확립했습니다.

        2. Syslog 기반 로그 통합 분석 체계: 개별 서버에 접속하여 로그를 확인하는 비효율을 개선하기 위해, rsyslog 프로토콜을 활용해 모든 시스템 로그를 중앙 서버로 수집했습니다. 수집된 로그는 LogAnalyzer 웹 인터페이스를 통해 통합 검색 및 분석이 가능하도록 하여, 침해 사고 분석 시 로그 추적 시간을 획기적으로 단축했습니다.
        
        `,
      },
      {
        title: "III. 호스트 기반 위협 탐지 및 무결성 검증",
        images: [
          {
            url: projectImage15,
            caption: "파일 무결성 모니터링 기반 변조 탐지 로그"
          },
          {
            url: projectImage16,
            caption: "위협 등급(Severity)별 보안 이벤트 시각화"
          },
          {
            url: projectImage17,
            caption: "Linux 시스템 접근 이력(btmp/wtmp) 감사"
          }
        ],
        description: ` 1. 호스트 침입 탐지(HIDS) 및 무결성 검증: 네트워크 경계를 우회하는 내부 위협에 대비해 Wazuh(OSSEC)를 도입했습니다. 특히 파일 무결성 모니터링 정책을 적용하여, 공격자가 시스템 계정 파일(/etc/shadow)을 변조하는 즉시 탐지 로그를 생성하고 관리자에게 경보를 전파함을 검증했습니다.
        
        2. 위협 데이터 시각화 및 시스템 접근 감사: Wazuh 대시보드를 통해 보안 이벤트를 위협 등급(Level)별로 시각화하여 관제 효율을 높였습니다. 또한, 리눅스 시스템 고유의 로그인 감사 로그(btmp, wtmp)를 주기적으로 모니터링하여 무차별 대입(Brute Force) 공격 시도와 비인가 접속 이력을 식별했습니다.
        
        `,
      },
      {
        title: "IV. 공격 시나리오 및 방어 검증",
        images: [
          {
            url: projectImage18,
            caption: "모의해킹을 통한 Root 권한(Flag) 획득"
          },
          {
            url: projectImage19,
            caption: "공격 대상(SUID) 취약점 식별"
          },
          {
            url: projectImage20,
            caption: "Buffer Overflow(BoF) 공격 코드 실행"
          },
          {
            url: projectImage21,
            caption: "Cisco ASA 방화벽 기반 공격 IP 차단 대응"
          },

        ],
        description: ` 1. 권한 탈취 및 공격 성공: 타겟 시스템의 취약점을 공략하여 일반 사용자 권한에서 최고 관리자(Root)로 권한을 상승시키고, 최종적으로 Root Flag를 획득하여 시스템 제어권을 확보했습니다.

        2. SUID 취약점 식별 및 BoF 공격 수행: 공격 대상 파일에 설정된 SUID 취약점을 식별했습니다. 이후 파이썬을 이용해 대량의 데이터를 주입하는 오버플로우 페이로드를 실행하여, 시스템이 비정상 종료되는 것을 확인하고 메모리 침범 가능성을 입증했습니다.
        
        3. 네트워크 접근 제어 및 공격 차단: 공격 탐지 후 방어자 입장에서 Cisco ASA 방화벽에 접속했습니다. 공격자 IP를 식별하고 차단 정책(ACL)을 즉시 적용하여, 추가적인 피해 확산을 막는 대응 절차를 수행했습니다.
        `,
      }
    ],
    details: `1. 인프라 설계 및 가시성 확보: Cisco ASA와 pfSense를 기반으로 Web/DB 서비스가 구동되는 3계층 망분리 아키텍처를 구축했으며, Zabbix와 LogAnalyzer를 연동하여 전체 인프라의 자산 상태 및 로그에 대한 실시간 모니터링 환경을 확보했습니다.
    
    2. 탐지 논리 및 시나리오 검증: 실제 Root 권한 탈취 및 파일 변조 시나리오를 수행하며, 이에 대응하는 Wazuh(HIDS) 무결성 검증 규칙과 Snort 탐지 정책을 직접 설계하고 적용했습니다.
    
    3. 최종 운영 검증: 침해 사고 발생 시 시스템이 위협 로그를 생성하고, 즉각적인 대응 트리거를 발생시킴을 확인했습니다. 공격 시도부터 탐지, 분석, 대응으로 이어지는 관제 프로세스를 확립했습니다.
    `,
    technologies: ["GNS3", "Cisco ASA", "Zabbix", "Wazuh", "Snort", "PfSense", "MariaDB", "Kali Linux"],
    results: [
      "3계층 망분리 및 Active/Standby 고가용성 구성을 통해 무중단 운영 환경 확보",
      "Zabbix와 Wazuh를 연동한 통합 관제 구축으로 위협 식별 시간 최소화",
      "실제 공격 수행 및 무결성 변조 탐지를 통해 자동 차단 프로세스 감증"
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