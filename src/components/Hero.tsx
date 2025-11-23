import { Button } from "./ui/button";
import { Shield, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="px-20 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card w-fit mb-6 shadow-card">
            <Shield className="w-4 h-4" style={{ color: 'var(--primary)' }} />
            <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
              Cybersecurity Portfolio
            </span>
          </div>
          <h1 
            className="mb-6" 
            style={{ 
              fontSize: '3.5rem',
              lineHeight: '1.1',
              fontWeight: '600',
              color: 'var(--foreground)'
            }}
          >
            정보보안 실무 역량 개발 과정
          </h1>
          <p 
            className="mb-8 max-w-2xl" 
            style={{ 
              fontSize: '1.25rem',
              lineHeight: '1.6',
              color: 'var(--muted-foreground)'
            }}
          >
            실습과 경험을 통해 꾸준히 성장하고 있는 보안 신입입니다.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              style={{ 
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                borderRadius: '12px'
              }}
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              style={{ 
                borderRadius: '12px'
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5 flex items-center">
          <div 
            className="w-full h-96 rounded-[12px] overflow-hidden shadow-card"
            style={{ backgroundColor: 'var(--card)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjM4NzgwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Security Engineering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
