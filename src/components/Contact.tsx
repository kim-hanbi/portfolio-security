import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section className="px-20 py-24" style={{ backgroundColor: 'var(--card)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 
              className="mb-4"
              style={{ 
                fontSize: '2.5rem',
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
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:scale-105"
                  style={{ backgroundColor: 'var(--background)' }}
                >
                  <Linkedin className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                </button>
                <button 
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:scale-105"
                  style={{ backgroundColor: 'var(--background)' }}
                >
                  <Github className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label 
                    className="block mb-2"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Name
                  </label>
                  <Input 
                    placeholder="Your name"
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
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
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
                  Message
                </label>
                <Textarea 
                  rows={6}
                  placeholder="Tell me about your security needs..."
                  style={{ 
                    borderRadius: '12px',
                    backgroundColor: 'var(--background)'
                  }}
                />
              </div>

              <Button 
                size="lg"
                className="w-full"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  borderRadius: '12px'
                }}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
