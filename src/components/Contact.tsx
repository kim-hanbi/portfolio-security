import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 유효성 검사
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // 실제 폼 제출 로직 시뮬레이션
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialClick = (platform: string) => {
    toast.info(`Opening ${platform}...`);
    // 실제로는 해당 소셜 미디어 링크로 이동
  };

  return (
    <section id="contact" className="px-6 md:px-20 py-24" style={{ backgroundColor: 'var(--card)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 
              className="mb-4"
              style={{ 
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                fontWeight: '600',
                color: 'var(--foreground)'
              }}
            >
              Get In Touch
            </h2>
            <p 
              className="mb-8"
              style={{ color: 'var(--muted-foreground)', fontSize: '1.125rem', lineHeight: '1.6' }}
            >
              Looking for a security engineer to help protect your systems? 
              Let's discuss how I can help secure your infrastructure.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--background)' }}
                >
                  <Mail className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
                    Email
                  </p>
                  <p style={{ fontWeight: '500', color: 'var(--foreground)' }}>
                    security@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--background)' }}
                >
                  <MapPin className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
                    Location
                  </p>
                  <p style={{ fontWeight: '500', color: 'var(--foreground)' }}>
                    San Francisco, CA
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => handleSocialClick('LinkedIn')}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-105"
                  style={{ backgroundColor: 'var(--background)' }}
                >
                  <Linkedin className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                </button>
                <button 
                  onClick={() => handleSocialClick('GitHub')}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-105"
                  style={{ backgroundColor: 'var(--background)' }}
                >
                  <Github className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block mb-2"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Name *
                  </label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    style={{ 
                      borderRadius: '12px',
                      backgroundColor: 'var(--background)'
                    }}
                  />
                </div>
                <div>
                  <label 
                    className="block mb-2"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Email *
                  </label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    style={{ 
                      borderRadius: '12px',
                      backgroundColor: 'var(--background)'
                    }}
                  />
                </div>
              </div>

              <div>
                <label 
                  className="block mb-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  Subject
                </label>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can I help?"
                  style={{ 
                    borderRadius: '12px',
                    backgroundColor: 'var(--background)'
                  }}
                />
              </div>

              <div>
                <label 
                  className="block mb-2"
                  style={{ color: 'var(--foreground)' }}
                >
                  Message *
                </label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Tell me about your security needs..."
                  required
                  style={{ 
                    borderRadius: '12px',
                    backgroundColor: 'var(--background)'
                  }}
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  borderRadius: '12px',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
