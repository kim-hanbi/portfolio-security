const experiences = [
  {
    year: "2022 - Present",
    role: "Senior Security Engineer",
    company: "TechCorp Security",
    description: "Leading security initiatives for enterprise clients, conducting penetration tests, and architecting secure cloud solutions. Reduced security incidents by 85% through proactive measures."
  },
  {
    year: "2020 - 2022",
    role: "Security Analyst",
    company: "CyberDefense Inc",
    description: "Performed vulnerability assessments, incident response, and security monitoring. Implemented automated security scanning that improved detection rates by 60%."
  },
  {
    year: "2018 - 2020",
    role: "Junior Security Engineer",
    company: "SecureNet Solutions",
    description: "Assisted in security audits, managed firewall configurations, and maintained security documentation. Contributed to achieving ISO 27001 certification."
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
            Experience
          </h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.125rem' }}>
            Professional journey in security engineering
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
