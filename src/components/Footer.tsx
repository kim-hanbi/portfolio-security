import { Shield, Mail } from "lucide-react"; 
import { toast } from "sonner@2.0.3";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSocialClick = (platform: string) => {
    toast.info(`Opening ${platform}...`);
  };

  return (
    <footer 
      className="px-6 md:px-20 py-12"
      style={{ 
        backgroundColor: 'var(--background)',
        borderTop: '1px solid var(--border)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ▼▼▼ 상단 푸터 섹션 (김한비, Quick Links, Connect) ▼▼▼ */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
          
          {/* [1구역] 브랜드 로고 */}
          <div className="flex-1"> 
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                <Shield className="w-5 h-5" style={{ color: 'var(--primary-foreground)' }} />
              </div>
              <span style={{ fontWeight: '600', color: 'var(--foreground)', fontSize: '1.125rem' }}>
                김한비
              </span>
            </div>
            <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
              정보보호 분야에서의 여정과 성장을 기록하고 있습니다.
            </p>
          </div>

          {/* [2구역] Quick Links */}
          <div className="flex-1 md:text-center">
            <div className="inline-block text-left">
                <h4 
                className="mb-4"
                style={{ fontWeight: '600', color: 'var(--foreground)' }}
                >
                Quick Links
                </h4>
                <ul className="space-y-2">
                <li>
                    <a 
                    href="#about"
                    onClick={(e) => scrollToSection(e, 'about')}
                    className="transition-colors hover:opacity-80 cursor-pointer"
                    style={{ color: 'var(--muted-foreground)' }}
                    >
                    About
                    </a>
                </li>
                <li>
                    <a 
                    href="#projects"
                    onClick={(e) => scrollToSection(e, 'projects')}
                    className="transition-colors hover:opacity-80 cursor-pointer"
                    style={{ color: 'var(--muted-foreground)' }}
                    >
                    Projects
                    </a>
                </li>
                <li>
                    <a 
                    href="#skills"
                    onClick={(e) => scrollToSection(e, 'skills')}
                    className="transition-colors hover:opacity-80 cursor-pointer"
                    style={{ color: 'var(--muted-foreground)' }}
                    >
                    Skills
                    </a>
                </li>
                </ul>
            </div>
          </div>

          {/* [3구역] Connect */}
          <div className="flex-1">
            <h4 
              className="mb-4"
              style={{ fontWeight: '600', color: 'var(--foreground)' }}
            >
              Connect
            </h4>
            
            <div className="flex gap-3 mb-4">
              <button 
                onClick={() => handleSocialClick('Email')}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--card)' }}
              >
                <Mail className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </button>
            </div>

            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
              kim1rain@icloud.com
            </p>
          </div>
        </div>
        {/* ▲▲▲ 상단 푸터 섹션 끝 ▲▲▲ */}

        {/* ▼▼▼ 하단 저작권 섹션 (링크 삭제 완료) ▼▼▼ */}
        <div 
          className="pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* [1] 저작권 및 개발자 명시 (연도 자동 갱신 적용) */}
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
              © {currentYear} Secure Project. Designed & Developed by 김한비.
            </p>
            
            {/* [2] 핵심 링크가 삭제되어 이 영역은 비어 있습니다. */}
            
          </div>
        </div>
        {/* ▲▲▲ 수정 끝 ▲▲▲ */}
      </div>
    </footer>
  );
}