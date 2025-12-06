import { Shield, Mail } from "lucide-react"; // Mail 아이콘 다시 추가, Shield 유지
import { toast } from "sonner@2.0.3"; // 클릭 알림을 위해 toast 복구

export function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Mail 버튼을 위해 클릭 함수 복구
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
        <div className="grid lg:grid-cols-12 gap-8 mb-8">
          {/* 1. 브랜드 로고 영역 */}
          <div className="lg:col-span-4">
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

          {/* 2. Quick Links 영역 */}
          <div className="lg:col-span-2">
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

          {/* 3. Services 영역 삭제됨 (빈 공간으로 남거나 레이아웃이 당겨짐) */}

          {/* 4. Connect 영역 */}
          <div className="lg:col-span-4">
            <h4 
              className="mb-4"
              style={{ fontWeight: '600', color: 'var(--foreground)' }}
            >
              Connect
            </h4>
            
            {/* 아이콘 버튼 영역: Mail만 남김 */}
            <div className="flex gap-3 mb-4">
              <button 
                onClick={() => handleSocialClick('Email')}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--card)' }}
              >
                <Mail className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </button>
              
              {/* LinkedIn, GitHub 버튼은 삭제됨 */}
            
            </div>

            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
              kim1rain@icloud.com
            </p>
          </div>
        </div>

        {/* 하단 저작권 영역 */}
        <div 
          className="pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
              © 2024 SecurePort. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="#privacy"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}
              >
                Privacy Policy
              </a>
              <a 
                href="#terms"
                className="transition-colors hover:opacity-80"
                style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}