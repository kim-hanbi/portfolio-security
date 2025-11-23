export function Contact() {
  return (
    <section className="px-20 py-24" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="mb-4"
          style={{
            fontSize: "2.5rem",
            lineHeight: "1.2",
            fontWeight: "600",
            color: "var(--foreground)"
          }}
        >
          Contact
        </h2>

        <p
          className="mb-8"
          style={{ color: "var(--muted-foreground)", fontSize: "1.125rem", lineHeight: "1.6" }}
        >
          보안 분야에 도전하는 신입으로 배우고 성장할 기회를 기다리고 있습니다.<br />
          프로젝트 관련 문의나 조언, 협업 제안은 아래 이메일로 연락해주세요.
        </p>

        <div
          className="rounded-xl p-8 shadow-card"
          style={{ backgroundColor: "var(--card)" }}
        >
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "var(--foreground)",
              marginBottom: "12px"
            }}
          >
            Email
          </p>
          <p style={{ color: "var(--muted-foreground)" }}>kim1rain@icloud.com</p>
        </div>
      </div>
    </section>
  );
}
