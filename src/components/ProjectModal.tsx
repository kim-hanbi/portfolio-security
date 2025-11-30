import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface ProjectImage {
  url: string;
  caption: string;
}

interface ProjectSection {
  title: string;
  images: ProjectImage[];
  description: string;
}

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    icon: any;
    tags: string[];
    image: string;
    sections?: ProjectSection[];
    details?: string;
    technologies?: string[];
    results?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

// 섹션 이미지 슬라이더
function ImageSlider({ images }: { images: ProjectImage[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="mb-4">
      <div
        className="relative rounded-[12px] overflow-hidden mb-3 shadow-card"
        style={{ backgroundColor: "var(--card)" }}
      >
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].caption}
          className="w-full object-cover"
          style={{ maxHeight: "400px" }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
              <ChevronLeft className="w-6 h-6" style={{ color: "var(--foreground)" }} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
              <ChevronRight className="w-6 h-6" style={{ color: "var(--foreground)" }} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    backgroundColor:
                      index === currentIndex ? "var(--primary)" : "rgba(255, 255, 255, 0.5)",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="px-2">
        <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", lineHeight: "1.5" }}>
          {images[currentIndex].caption}
        </p>

        {images.length > 1 && (
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "0.75rem",
              marginTop: "0.25rem",
            }}
          >
            {currentIndex + 1} / {images.length}
          </p>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="flex-shrink-0 rounded-lg overflow-hidden transition-all"
              style={{
                border:
                  index === currentIndex ? "3px solid var(--primary)" : "3px solid transparent",
                opacity: index === currentIndex ? 1 : 0.6,
              }}
            >
              <img src={img.url} alt={img.caption} className="w-20 h-20 object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      <div
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-[12px] shadow-card"
        style={{ backgroundColor: "var(--background)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 p-6 flex items-center justify-between"
          style={{ backgroundColor: "var(--background)", borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              <project.icon className="w-5 h-5" />
            </div>
            <h2 style={{ fontWeight: "600", color: "var(--foreground)", fontSize: "1.5rem" }}>
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
            style={{ backgroundColor: "var(--card)" }}
          >
            <X className="w-5 h-5" style={{ color: "var(--foreground)" }} />
          </button>
        </div>

        <div className="p-6">
          {/* Overview */}
          <div className="mb-6">
            <h3
              className="mb-3"
              style={{ fontWeight: "600", color: "var(--foreground)", fontSize: "1.25rem" }}
            >
              Overview
            </h3>
            <p style={{ color: "var(--muted-foreground)", lineHeight: "1.6" }}>
              {project.description}
            </p>
          </div>

          {/* Project Details — 수정된 부분 */}
          {project.details && (
            <div className="mb-6">
              <h3
                className="mb-3"
                style={{ fontWeight: "600", color: "var(--foreground)", fontSize: "1.25rem" }}
              >
                Project Details
              </h3>

              {/* 🔥 줄바꿈을 그대로 표시하는 안전한 방식 */}
              <p
                style={{
                  color: "var(--muted-foreground)",
                  lineHeight: "1.6",
                  whiteSpace: "pre-line",
                }}
              >
                {project.details}
              </p>
            </div>
          )}

          {/* Sections */}
          {project.sections && project.sections.length > 0 && (
            <div className="mb-6">
              {project.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h3
                    className="mb-4"
                    style={{ fontWeight: "600", color: "var(--foreground)", fontSize: "1.25rem" }}
                  >
                    {section.title}
                  </h3>

                  <ImageSlider images={section.images} />

                  <p
                    className="mt-4"
                    style={{ color: "var(--muted-foreground)", lineHeight: "1.6" }}
                  >
                    {section.description}
                  </p>

                  {index < project.sections.length - 1 && (
                    <div
                      className="w-full my-8"
                      style={{ height: "1px", backgroundColor: "var(--border)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Technologies Used */}
          {project.technologies && (
            <div className="mb-6">
              <h3
                className="mb-3"
                style={{ fontWeight: "600", color: "var(--foreground)", fontSize: "1.25rem" }}
              >
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-lg"
                    style={{
                      backgroundColor: "var(--card)",
                      color: "var(--foreground)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {project.results && (
            <div className="mb-6">
              <h3
                className="mb-3"
                style={{ fontWeight: "600", color: "var(--foreground)", fontSize: "1.25rem" }}
              >
                Key Results
              </h3>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2"
                      style={{ backgroundColor: "var(--primary)" }}
                    />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="mb-4">
            <h3
              className="mb-3"
              style={{ fontWeight: "600", color: "var(--foreground)", fontSize: "1.25rem" }}
            >
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-lg text-sm"
                  style={{
                    backgroundColor: "var(--card)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <Button
            onClick={onClose}
            className="w-full"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              borderRadius: "12px",
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
