import { Button } from "./ui/button";
import { Shield, ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="px-6 md:px-20 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">

        {/* LEFT TEXT AREA */}
        <div className="lg:col-span-7 flex flex-col justify-center">

          {/* 🔵 1. 상단 라벨 */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card w-fit mb-6 shadow-card">
            <Shield className="w-4 h-4" style={{ color: 'var(--primary)' }} />
            <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
              Cybersecurity Portfolio
            </span>
          </div>

          {/* 🔵 2. 메인 제목 */}
          <h1
            className="mb-6"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.1',
              fontWeight: '700',
              color: 'var(--foreground)'
            }}
          >
            실무 역량을 키워가는<br />
            정보 & 보안
          </h1>

          {/* 🔵 3. 소개 문단 — 새 문장으로 교체 */}
          <p
            className="mb-8 max-w-2xl"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.6',
              color: 'var(--muted-foreground)'
            }}
          >
            네트워크·시스템·웹 보안을 실습 중심으로 익히고,<br /> 
            CTF·워게임 제작 및 AI 해킹대회 참여를 통해
            다양한 공격·방어 시나리오를 실무에 가깝게 직접 다뤄 왔습니다.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="flex items-center justify-center gap-2"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                borderRadius: '12px'
              }}
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              style={{ borderRadius: '12px' }}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="lg:col-span-5 flex items-center">
          <div
            className="w-full h-96 rounded-[12px] overflow-hidden shadow-card"
            style={{ backgroundColor: 'var(--card)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjM4NzgwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cybersecurity"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
