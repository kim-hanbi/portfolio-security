import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface ProjectImage {
  url: string;
  caption: string;
}

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    icon: any;
    tags: string[];
    image: string;
    images?: ProjectImage[];
    details?: string;
    technologies?: string[];
    results?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!isOpen) return null;

  // 이미지 갤러리 데이터 (images가 있으면 사용, 없으면 기본 image 사용)
  const imageGallery = project.images && project.images.length > 0 
    ? project.images 
    : [{ url: project.image, caption: project.title }];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageGallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageGallery.length) % imageGallery.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      <div 
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-[12px] shadow-card"
        style={{ backgroundColor: 'var(--background)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 p-6 flex items-center justify-between" style={{ backgroundColor: 'var(--background)', borderBottom: '1px solid var(--border)' }}>
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
            >
              <project.icon className="w-5 h-5" />
            </div>
            <h2 style={{ fontWeight: '600', color: 'var(--foreground)', fontSize: '1.5rem' }}>
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
            style={{ backgroundColor: 'var(--card)' }}
          >
            <X className="w-5 h-5" style={{ color: 'var(--foreground)' }} />
          </button>
        </div>

        <div className="p-6">
          {/* 이미지 갤러리 */}
          <div className="mb-6">
            <div className="relative rounded-[12px] overflow-hidden mb-4" style={{ backgroundColor: 'var(--card)' }}>
              <img
                src={imageGallery[currentImageIndex].url}
                alt={imageGallery[currentImageIndex].caption}
                className="w-full h-80 object-cover"
              />
              
              {/* 이미지 네비게이션 버튼 (이미지가 2개 이상일 때만 표시) */}
              {imageGallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    <ChevronLeft className="w-6 h-6" style={{ color: 'var(--foreground)' }} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    <ChevronRight className="w-6 h-6" style={{ color: 'var(--foreground)' }} />
                  </button>
                  
                  {/* 이미지 인디케이터 */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {imageGallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className="w-2 h-2 rounded-full transition-all"
                        style={{ 
                          backgroundColor: index === currentImageIndex 
                            ? 'var(--primary)' 
                            : 'rgba(255, 255, 255, 0.5)'
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* 현재 이미지 설명 */}
            <div className="px-2">
              <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                {imageGallery[currentImageIndex].caption}
              </p>
              {imageGallery.length > 1 && (
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  {currentImageIndex + 1} / {imageGallery.length}
                </p>
              )}
            </div>

            {/* 썸네일 미리보기 (이미지가 2개 이상일 때만 표시) */}
            {imageGallery.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {imageGallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className="flex-shrink-0 rounded-lg overflow-hidden transition-all"
                    style={{ 
                      border: index === currentImageIndex 
                        ? '3px solid var(--primary)' 
                        : '3px solid transparent',
                      opacity: index === currentImageIndex ? 1 : 0.6
                    }}
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-20 h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mb-6">
            <h3 className="mb-3" style={{ fontWeight: '600', color: 'var(--foreground)', fontSize: '1.25rem' }}>
              Overview
            </h3>
            <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
              {project.description}
            </p>
          </div>

          {project.details && (
            <div className="mb-6">
              <h3 className="mb-3" style={{ fontWeight: '600', color: 'var(--foreground)', fontSize: '1.25rem' }}>
                Project Details
              </h3>
              <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                {project.details}
              </p>
            </div>
          )}

          {project.technologies && (
            <div className="mb-6">
              <h3 className="mb-3" style={{ fontWeight: '600', color: 'var(--foreground)', fontSize: '1.25rem' }}>
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-lg"
                    style={{ 
                      backgroundColor: 'var(--card)',
                      color: 'var(--foreground)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.results && (
            <div className="mb-6">
              <h3 className="mb-3" style={{ fontWeight: '600', color: 'var(--foreground)', fontSize: '1.25rem' }}>
                Key Results
              </h3>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2"
                      style={{ backgroundColor: 'var(--primary)' }}
                    />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-4">
            <h3 className="mb-3" style={{ fontWeight: '600', color: 'var(--foreground)', fontSize: '1.25rem' }}>
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-lg text-sm"
                  style={{ 
                    backgroundColor: 'var(--card)',
                    color: 'var(--muted-foreground)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Button
            onClick={onClose}
            className="w-full"
            style={{ 
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
              borderRadius: '12px'
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
