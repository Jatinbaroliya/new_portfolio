import { useState } from 'react';

export default function ProjectCard({ title, description, repoLink, liveLink, image, languages }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardLink = liveLink || repoLink;
  
  // Function to truncate text to approximately 2.5 lines
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const shouldShowReadMore = description.length > 120;

  return (
    <div className="project-card w-full md:w-auto">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: "0" }}>
        {image && <img src={image} alt={title} style={{
          width: "100%",
          maxWidth: "250px",
          height: "auto",
          aspectRatio: "16/9",
          objectFit: "contain",
          borderRadius: "8px",
          border: "1px solid #ddd"
        }} />}
      </div>
      <div style={{ flex: 1 }}>
        <h2 style={{
          marginBottom: "0.5rem",
          color: "#333",
          fontSize: "1.4rem",
          fontWeight: "600",
          fontFamily: "'Courier New', monospace"
        }}>{title}</h2>
        <div style={{ marginBottom: "1rem" }}>
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
                marginTop: "0.25rem"
              }}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
          {repoLink && (
            <div className="project-button github" onClick={(e) => { e.stopPropagation(); window.open(repoLink, '_blank'); }}>
              GitHub Repo
            </div>
          )}
          {liveLink && (
            <div className="project-button live" onClick={(e) => { e.stopPropagation(); window.open(liveLink, '_blank'); }}>
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
              display: "inline-block"
            }}>
              {languages.join(" • ")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
