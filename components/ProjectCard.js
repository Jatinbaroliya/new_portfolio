import { useEffect, useState } from 'react';

export default function ProjectCard({ title, description, repoLink, liveLink, image, languages }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDescriptionMobile, setShowDescriptionMobile] = useState(false);
  const cardLink = liveLink || repoLink;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener('change', update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', update) : mq.removeListener(update);
    };
  }, []);
  
  // Function to truncate text to approximately 2.5 lines
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const shouldShowReadMore = description.length > 120;

  return (
    <div className="project-card w-full md:w-auto" style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start', gap: isMobile ? '0.75rem' : '1rem', width: '100%', padding: isMobile ? 0 : undefined }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: "0", width: isMobile ? '100%' : 'auto', padding: isMobile ? '0.5rem' : 0 }}>
        {image && <img src={image} alt={title} style={{
          width: "100%",
          maxWidth: isMobile ? '100%' : '250px',
          height: "auto",
          aspectRatio: "16/9",
          objectFit: isMobile ? 'cover' : 'contain',
          borderRadius: "8px",
          border: "1px solid #ddd"
        }} />}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch', width: isMobile ? '100%' : 'auto', padding: isMobile ? '0 0.75rem 0.75rem' : 0 }}>
        <h2 style={{
          marginBottom: "0.5rem",
          color: "#333",
          fontSize: "1.4rem",
          fontWeight: "600",
          fontFamily: "'Courier New', monospace",
          textAlign: isMobile ? 'center' : 'left'
        }}>{title}</h2>
        {/* Description block */}
        <div style={{ marginBottom: "1rem", textAlign: isMobile ? 'center' : 'left' }}>
          {isMobile ? (
            <>
              {showDescriptionMobile && (
                <p style={{
                  color: "#666",
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                  fontFamily: "'Courier New', monospace",
                  margin: 0
                }}>
                  {description}
                </p>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDescriptionMobile(!showDescriptionMobile);
                }}
                style={{
                  background: '#007bff',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontFamily: "'Courier New', monospace",
                  textDecoration: 'none',
                  padding: '0.5rem 0.75rem',
                  margin: '0.5rem auto 0',
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                }}
              >
                {showDescriptionMobile ? "Hide description" : "View description"}
              </button>
            </>
          ) : (
            <>
              <p style={{
                color: "#666",
                lineHeight: "1.5",
                fontSize: "0.95rem",
                fontFamily: "'Courier New', monospace",
                margin: 0
              }}>
                {isExpanded ? description : truncateText(description)}
              </p>
              {shouldShowReadMore && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#007bff",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontFamily: "'Courier New', monospace",
                    textDecoration: "underline",
                    padding: "0.25rem 0",
                    marginTop: "0.25rem",
                    alignSelf: 'flex-start'
                  }}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </>
          )}
        </div>

        {/* Action buttons stacked in one column on mobile */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "stretch", flexDirection: isMobile ? 'column' : 'row' }}>
          {repoLink && (
            <div className="project-button github" style={{ width: isMobile ? '100%' : 'auto', textAlign: 'center' }} onClick={(e) => { e.stopPropagation(); window.open(repoLink, '_blank'); }}>
              GitHub Repo
            </div>
          )}
          {liveLink && (
            <div className="project-button live" style={{ width: isMobile ? '100%' : 'auto', textAlign: 'center' }} onClick={(e) => { e.stopPropagation(); window.open(liveLink, '_blank'); }}>
              Live Demo
            </div>
          )}
          {languages && (
            <div style={{
              fontSize: "0.8rem",
              color: "#888",
              fontFamily: "'Courier New', monospace",
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "0.25rem 0.5rem",
              background: "#f9f9f9",
              display: isMobile ? "block" : "inline-block",
              width: isMobile ? '100%' : 'auto',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              {languages.join(" • ")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
