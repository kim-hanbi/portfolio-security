const experiences = [
  {
    year: "2025.10.31 - 2025.11.01",
    role: "2025 AI Hacking Defense Competition (AI 해킹방어 대회)",
    company: "ACDC 2025 (Hosted by MSIT & KISA)",
    description: "AI 모델의 취약점을 분석하고 방어하는 최신 보안 기술을 익혔습니다. LLM 대상 프롬프트 인젝션(Prompt Injection) 공격 방어 및 AI 플랫폼 구성 요소의 보안 위협 식별 시나리오를 수행하며, AI 모델 보안(Security for AI) 및 플랫폼 보안 역량을 강화했습니다."
  },
  {
    year: "2025.10.10",
    role: "CTF 대회 개최 및 운영",
    company: "자체 운영 대회",
    description: "참가자가 타겟 머신에 직접 침투하여 Root 권한을 획득해야 하는 시스템 CTF(System Hacking) 머신을 직접 제작했습니다. Sticky Bit/SetUID 설정 및 Buffer Overflow(BoF) 취약점이 포함된 리눅스 기반의 취약한 가상머신(Vulnerable VM)을 설계하여, 실제 침투 시나리오를 검증하고 대회를 운영했습니다."
  },
  {
    year: "2025.11.19",
    role: "Wargame 대회 총괄 및 문제 출제",
    company: "자체 운영 대회",
    description: "팀별 Wargame 대회를 직접 기획하고 개최했습니다. Web, System 등 총 20개의 해킹 방어 문제를 직접 제작하여 출제했으며, 대회 당일 스코어보드 관리 및 참가자 대응 등 전반적인 대회 운영을 총괄했습니다."
  }
];

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-20 py-24" style={{ backgroundColor: 'var(--background)' }}>
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
            Activities & Achievements
          </h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.125rem' }}>
            Participation in security competitions
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="grid lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-3">
                <div 
                  className="px-4 py-2 rounded-[12px] inline-block"
                  style={{ backgroundColor: 'var(--card)' }}
                >
                  <span 
                    style={{ 
                      color: 'var(--primary)',
                      fontWeight: '500',
                      fontSize: '0.875rem'
                    }}
                  >
                    {exp.year}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-9">
                <div 
                  className="p-6 rounded-[12px] shadow-card"
                  style={{ backgroundColor: 'var(--card)' }}
                >
                  <h3 
                    className="mb-1"
                    style={{ fontWeight: '600', color: 'var(--foreground)' }}
                  >
                    {exp.role}
                  </h3>
                  <p 
                    className="mb-3"
                    style={{ color: 'var(--primary)', fontWeight: '500' }}
                  >
                    {exp.company}
                  </p>
                  <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
