import { useState, useEffect } from "react";
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaBolt, FaServer, FaPython, FaBrain, FaCode, FaGithub, FaGit, FaGraduationCap, FaUniversity, FaSchool, FaVideo, FaInstagram, FaLinkedin, FaSpinner, FaCheck, FaTimes } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const texts = ["Hey I'm a MERN stack developer.", "Hey I'm a programmer.", "Hey I'm a ML enthusiast."];
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [nameDisplayed, setNameDisplayed] = useState("");

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [focus, setFocus] = useState({ name: false, email: false, message: false });

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayedText(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(current.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const fullName = "Jatin Baroliya";
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullName.length) {
        setNameDisplayed(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModalVisible(true);
    setModalMessage('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setModalMessage(data.message);
      if (res.ok) {
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setModalVisible(false);
          setModalMessage('');
        }, 2000);
      } else {
        setTimeout(() => {
          setModalVisible(false);
          setModalMessage('');
        }, 2000);
      }
    } catch (error) {
      setModalMessage('Error sending message.');
      setTimeout(() => {
        setModalVisible(false);
        setModalMessage('');
      }, 2000);
    }
  };


  const projects = [
    {
      title: "Trust Pay Hub",
      description: "Developed a secure online payment platform with Next.js, Node.js, and MongoDB, integrating Razorpay for seamless transactions. Built an interactive analytics dashboard to track top donors, total donations, and supporters in real time, enhancing transparency.",
      repoLink: "https://github.com/Jatinbaroliya/TrustPayHub",
      liveLink: "https://trustpayhub.vercel.app/",
      image: "/trustpayhub.png",
      languages: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"]
    },
    {
      title: "Password Manager",
      description: "Developed a password management app with React, Node.js, and MongoDB, featuring efficient CRUD operations and seamless backend integration. Designed a fully responsive, intuitive UI with TailwindCSS for smooth navigation and consistent user experience across devices.",
      repoLink: "https://github.com/Jatinbaroliya/Passmanager_Mongodb",
      liveLink: "#",
      image: "/passmanager.png",
      languages: ["React", "MongoDB"]
    },
    {
      title: "Personal Portfolio",
      description: "Developed a modern personal portfolio website using Next.js, React, and Tailwind CSS, showcasing skills, projects, and experience with interactive animations and responsive design.",
      repoLink: "#",
      liveLink: "#",
      image: "/portfolio.png",
      languages: ["Next.js", "React", "Tailwind CSS"]
    },
    {
      title: "Netflix Clone",
      description: "Developed a Netflix clone's pre-login page using HTML and CSS, showcasing a responsive design with an intuitive user interface. This project highlights my skills in front-end development and modern web design techniques.",
      repoLink: "#",
      liveLink: "#",
      image: "/netflix.png",
      languages: ["HTML", "CSS"]
    },
    {
      title: "Twitter Clone",
      description: "Developed a Twitter clone using HTML and Tailwind CSS, showcasing a responsive design with an intuitive user interface. This project highlights my skills in front-end development and modern web design techniques.",
      repoLink: "https://github.com/Jatinbaroliya/Twitter-Clone",
      liveLink: "https://twitterclonebyjb.netlify.app/",
      image: "/twitter.png",
      languages: ["HTML", "Tailwind CSS"]
    }
  ];

  return (
    <div>
      <Navbar />

      {/* Hero (landing intro) */}
      <section id="hero" style={{ minHeight: "100vh" , display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #fffaf5, #fff5f0, #fff0e6, #ffede0)", backgroundSize: "400% 400%", animation: "moveBackground 15s ease infinite", position: "relative" }}>
        <div className="hero-content flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-section" style={{ position: "relative" }}>

            <h1 className="glow-name text-3xl md:text-5xl lg:text-6xl" style={{ fontWeight: "900", background: "linear-gradient(90deg, #007bff, #6610f2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "1rem", position: "relative", overflow: "hidden", whiteSpace: "nowrap" }}>
              <span style={{ borderRight: "2px solid #ff6b35", animation: "blink-caret 0.75s step-end infinite" }}>{nameDisplayed}</span>
            </h1>
            <div className="text-base md:text-xl lg:text-2xl" style={{ fontFamily: "Courier New, monospace", color: "#333", marginBottom: "2rem", position: "relative", overflow: "hidden", whiteSpace: "nowrap" }}>
              <span style={{ borderRight: "2px solid #ff6b35", animation: "blink-caret 0.75s step-end infinite" }}>{displayedText}</span>
            </div>
            <div className="text-xs md:text-sm lg:text-base" style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
              <a href="https://drive.google.com/file/d/1C-NyuM3a4J0wzGLRLi_4dWgXfHHfML2r/view?usp=drive_link" style={{ padding: "0.5rem 1rem", background: "linear-gradient(90deg, #ff6b35, #f7931e)", color: "white", textDecoration: "none", borderRadius: "5px", fontWeight: "700", boxShadow: "0 0 10px rgba(255, 107, 53, 0.5)", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"} onMouseOut={(e) => e.target.style.transform = "translateY(0)"}>Resume</a>
              <a href="https://github.com/Jatinbaroliya" style={{ padding: "0.5rem 1rem", background: "linear-gradient(90deg, #333, #555)", color: "white", textDecoration: "none", borderRadius: "5px", fontWeight: "700", boxShadow: "0 0 10px rgba(0,0,0,0.5)", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"} onMouseOut={(e) => e.target.style.transform = "translateY(0)"}>GitHub</a>
            </div>
            <div className="text-xs md:text-sm" style={{ background: "#1e1e1e", color: "#d4d4d4", padding: "1rem", borderRadius: "8px", fontFamily: "monospace", marginTop: "2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.3)", border: "1px solid #333", fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}>
              <div style={{ color: "#569cd6", fontWeight: "bold" }}>const developer = {"{"}</div>
              <div style={{ paddingLeft: "1rem" }}>
                <span style={{ color: "#9cdcfe" }}>name:</span> <span style={{ color: "#ce9178" }}>"Jatin Baroliya"</span>,
              </div>
              <div style={{ paddingLeft: "1rem" }}>
                <span style={{ color: "#9cdcfe" }}>skills:</span> <span style={{ color: "#569cd6" }}>["React", "Node.js", "ML"]</span>,
              </div>
              <div style={{ paddingLeft: "1rem" }}>
                <span style={{ color: "#9cdcfe" }}>passion:</span> <span style={{ color: "#ce9178" }}>"Coding"</span>
              </div>
              <div style={{ color: "#569cd6", fontWeight: "bold" }}>{"}"};</div>
            </div>
          </div>
          <div className="image-section" style={{ paddingLeft: "1rem", paddingRight: "1rem", marginLeft: "auto", marginRight: "auto" }}>
          <img src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif" alt="Programmer coding" style={{ width: "100%", maxWidth: "600px", height: "auto", maxHeight: "450px", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }} />
          </div>
        </div>
      </section>

      {/* Skills and Education Section */}
      <section className="skills-section">
        <div className="skills-education-container">
          <div className="skills-container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid" style={{gap: "0.5rem", padding: "1rem"}}>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaHtml5 className="skill-icon" style={{color: "#e34f26", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>HTML</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaCss3 className="skill-icon" style={{color: "#1572b6", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>CSS</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaJsSquare className="skill-icon" style={{color: "#f7df1e", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>JavaScript</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaReact className="skill-icon" style={{color: "#61dafb", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>React.js</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaNodeJs className="skill-icon" style={{color: "#339933", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>Node.js</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaDatabase className="skill-icon" style={{color: "#47a248", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>MongoDB</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaBolt className="skill-icon" style={{color: "#000000", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>Next.js</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaServer className="skill-icon" style={{color: "#000000", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>Express</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaPython className="skill-icon" style={{color: "#3776ab", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>Python</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaBrain className="skill-icon" style={{color: "#ff6b35", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>Machine Learning</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaDatabase className="skill-icon" style={{color: "#336791", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>SQL</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaCode className="skill-icon" style={{color: "#00599c", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>C++</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaCode className="skill-icon" style={{color: "#a8b9cc", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>C</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaGit className="skill-icon" style={{color: "#f05032", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>Git</span>
              </div>
              <div className="skill-badge" style={{padding: "0.1rem", minHeight: "80px"}}>
                <FaGithub className="skill-icon" style={{color: "#333", fontSize: "2.2rem", marginBottom: "0.4rem"}} />
                <span className="skill-name" style={{fontSize: "1rem"}}>GitHub</span>
              </div>
            </div>
          </div>
          <div className="education-container">
            <h2 className="section-title">Education</h2>
            <div className="education-grid">
              <div className="education-badge">
                <img src="/iiit kota logo.png" alt="IIIT Kota" className="education-icon" style={{width: "2.5rem", height: "2.5rem"}} />
                <span className="education-title">IIIT Kota</span>
                <span className="education-detail">CGPA: 7.1</span>
              </div>
              <div className="education-badge">
                <img src="/rbse.png" alt="Rajasthan Board" className="education-icon" style={{width: "2.5rem", height: "2.5rem"}} />
                <span className="education-title">12th Grade</span>
                <span className="education-detail">Rajasthan Board - 95.80%</span>
              </div>
              <div className="education-badge">
                <img src="/rbse.png" alt="Rajasthan Board" className="education-icon" style={{width: "2.5rem", height: "2.5rem"}} />
                <span className="education-title">10th Grade</span>
                <span className="education-detail">Rajasthan Board - 88%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ padding: "1rem 0", backgroundColor: "#f8f9fa" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "900", margin: "1.5rem 0 1rem 0", textAlign: "center", color: "#000" }}>Experience</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem", maxWidth: "1200px", margin: "0 auto", padding: "0 2rem 2rem 2rem", justifyContent: "center" }}>
          <div className="experience-item" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src="/isro_logo.jpg" alt="ISRO" className="experience-icon" />
            <div className="experience-text">
              <h3 className="experience-title">AI/ML Intern - ISRO, Ahmedabad</h3>
              <ul className="experience-bullets-list text">
                <li>Completed internship from May – July 2025. Worked on Anomaly Detection in Network Logs, where I designed and implemented deep learning models to identify unusual traffic patterns.</li>
                <li>Developed a complete end-to-end framework combining Python, TensorFlow, and Web technologies to make the solution practical and user-friendly for real-world scenarios.</li>
              </ul>
              <a href="https://drive.google.com/file/d/1dfaYf72-oAcqE93KQc3N2GzkKAElDWKH/view" className="certificate-link" target="_blank">View Certificate</a>
            </div>
          </div>
          <div className="experience-item" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src="/neon.jpg" alt="Neon Club" className="experience-icon" />
            <div className="experience-text">
              <h3 className="experience-title">Video Editing Lead : Neon Club, IIIT Kota (2023 – 2024)</h3>
              <p className="experience-description">Video Editor, Kota, Rajasthan</p>
              <ul className="experience-bullets-list">
                <li>Led video editing initiatives for Neon Club, IIIT Kota, creating engaging and high-quality content for events, workshops, and social media outreach.</li>
                <li>Conducted a video editing workshop with 76 participants, showcasing leadership, communication, and technical presentation skills.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: "1rem 0", backgroundColor: "#ffffff" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "900", margin: "1.5rem 0 1rem 0", textAlign: "center", color: "#000" }}>Projects</h2>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          {projects.map((p, i) => (
            <div className="project-grid-item" key={i} style={{ width: "100%" }}>
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 w-full px-4 md:px-8" style={{ background: "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)", color: "#ffffff" }}>
        <div className="">
          <h1 className="text-3xl md:text-5xl font-black text-center h-30 flex items-center justify-center" style={{ background: "linear-gradient(90deg, #00b4db, #0083b0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textShadow: "0 0 20px rgba(0, 180, 219, 0.5)" }}>About Me</h1>
          
          <div className="about-content flex flex-wrap items-center justify-around gap-10" style={{ animation: "fadeInUp 1s ease-out", maxWidth: "900px", margin: "0 auto" }}>
            {/* Personal Photo */}
            <div className="photo-container flex flex-col items-center">
              <img
                src="/photo.jpg"
                alt="Jatin Baroliya"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  boxShadow: "0 0 30px rgba(0, 180, 219, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                  border: "3px solid rgba(0, 180, 219, 0.3)"
                }}
                className="md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
              />
              <h2 style={{
                marginTop: "1rem",
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#00b4db",
                textShadow: "0 0 10px rgba(0, 180, 219, 0.5)",
                animation: "fadeIn 2.5s ease-out, float 3s ease-in-out infinite",
                animationDelay: "0s, 1.5s"
              }}>Jatin Baroliya</h2>
            </div>

            {/* Bio and Socials */}
            <div className="bio-socials md:ml-16 flex flex-col justify-center items-center">
              {/* Bio Text */}
              <div className="bio-text" style={{ 
                background: "rgba(255, 255, 255, 0.05)", 
                backdropFilter: "blur(10px)", 
                borderRadius: "15px", 
                padding: "2rem", 
                marginInline: "1rem",
                marginBottom: "2rem", 
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                animation: "fadeIn 1.5s ease-out"
              }}>
                <p style={{ 
                  lineHeight: "1.8", 
                  fontSize: "1.1rem", 
                  color: "#e0e0e0", 
                  textAlign: "justify",
                  whiteSpace: "pre-line"
                }}>
                  I’m Jatin Baroliya from Pali, Rajasthan, pursuing B.Tech at IIIT Kota. I enjoy problem-solving and building practical software projects. I recently interned at ISRO, where I developed a deep learning–based anomaly detection system for network traffic using Python and TensorFlow. 
                  I’ve also built projects like **TrustPayHub** (a secure payment platform) and a **Password Manager**. Skilled in C++, Python, JavaScript, and frameworks like React, Next.js, Node.js, and MongoDB, I actively practice coding with 700+ problems solved on LeetCode and GeeksforGeeks. 
                  Beyond academics, I lead video editing for the Neon Club and conducted a workshop with 76 participants, balancing my technical work with leadership and creativity.

                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex flex-row gap-6 justify-center mb-6" style={{ animation: "fadeIn 2s ease-out" }}>
                <a
                  href="https://www.linkedin.com/in/jatin-baroliya-426b3b218/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-white font-semibold rounded-full shadow-md transition-transform duration-300 ease-in-out w-12 h-12 md:w-[140px] md:h-[48px]"
                  style={{
                    backgroundColor: "#0077b5",
                    boxShadow: "0 4px 15px rgba(0, 119, 181, 0.4)",
                    textDecoration: "none",
                    userSelect: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 119, 181, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 119, 181, 0.4)";
                  }}
                >
                  <FaLinkedin size={24} />
                  <span className="hidden md:inline">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Jatinbaroliya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-white font-semibold rounded-full shadow-md transition-transform duration-300 ease-in-out w-12 h-12 md:w-[140px] md:h-[48px]"
                  style={{
                    backgroundColor: "#333",
                    boxShadow: "0 4px 15px rgba(51, 51, 51, 0.4)",
                    textDecoration: "none",
                    userSelect: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(51, 51, 51, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(51, 51, 51, 0.4)";
                  }}
                >
                  <FaGithub size={24} />
                  <span className="hidden md:inline">GitHub</span>
                </a>
                <a
                  href="https://www.instagram.com/_jatinbaroliya/?igsh=NnoxbGRxOTludDlt#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-white font-semibold rounded-full shadow-md transition-transform duration-300 ease-in-out w-12 h-12 md:w-[140px] md:h-[48px]"
                  style={{
                    background: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af)",
                    boxShadow: "0 4px 15px rgba(228, 64, 95, 0.4)",
                    textDecoration: "none",
                    userSelect: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(228, 64, 95, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(228, 64, 95, 0.4)";
                  }}
                >
                  <FaInstagram size={24} />
                  <span className="hidden md:inline">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-16 px-4 md:px-8 flex justify-center items-center" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "#ffffff"}}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          zIndex: 0,
          animation: "bgMove 20s ease-in-out infinite"
        }}></div>
        {/* Floating particles */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0
        }}>
          {[...Array(10)].map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              background: "#00ffff",
              borderRadius: "50%",
              opacity: 0.8,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${3 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}></div>
          ))}
        </div>
        <div className="min-w-4/5 sm:min-w-lg md:min-w-xl lg:min-w-4xl max-w-6xl mx-auto">
          <h1 className="section-heading text-center mb-12" style={{ fontSize: "3rem", fontWeight: "900", background: "linear-gradient(90deg, #00ffff, #8a2be2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textShadow: "0 0 20px rgba(0, 255, 255, 0.7)", animation: "glow 2s ease-in-out infinite alternate, bounceIn 1s ease-out" }}>Contact Me</h1>

          <div className="contact-form-container">
            <form className="w-full" onSubmit={handleSubmit} style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              padding: "2.5rem",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              width: "100%",
              animation: "fadeIn 1s ease-out"
            }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", color: "#e0e0e0", fontWeight: "600" }}>Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  placeholder="Enter your name"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocus({ ...focus, name: true })}
                  onBlur={() => setFocus({ ...focus, name: false })}
                  required
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "8px",
                    border: focus.name ? "2px solid #00ffff" : "2px solid #ffffff",
                    background: "rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "all 0.3s ease",
                    boxShadow: focus.name ? "0 0 15px rgba(0, 255, 255, 0.8)" : "0 2px 10px rgba(0, 0, 0, 0.1)"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.5)"}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = focus.name ? "0 0 15px rgba(0, 255, 255, 0.8)" : "0 2px 10px rgba(0, 0, 0, 0.1)"}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", color: "#e0e0e0", fontWeight: "600" }}>Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  placeholder="Enter your email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocus({ ...focus, email: true })}
                  onBlur={() => setFocus({ ...focus, email: false })}
                  required
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "8px",
                    border: focus.email ? "2px solid #00ffff" : "2px solid #ffffff",
                    background: "rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: "1rem",
                    outline: "none",
                    transition: "all 0.3s ease",
                    boxShadow: focus.email ? "0 0 15px rgba(0, 255, 255, 0.8)" : "0 2px 10px rgba(0, 0, 0, 0.1)"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.5)"}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = focus.email ? "0 0 15px rgba(0, 255, 255, 0.8)" : "0 2px 10px rgba(0, 0, 0, 0.1)"}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", color: "#e0e0e0", fontWeight: "600" }}>Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  placeholder="Enter your message"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocus({ ...focus, message: true })}
                  onBlur={() => setFocus({ ...focus, message: false })}
                  required
                  rows="5"
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "8px",
                    border: focus.message ? "2px solid #00ffff" : "2px solid #ffffff",
                    background: "rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: "1rem",
                    outline: "none",
                    resize: "vertical",
                    transition: "all 0.3s ease",
                    boxShadow: focus.message ? "0 0 15px rgba(0, 255, 255, 0.8)" : "0 2px 10px rgba(0, 0, 0, 0.1)"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.5)"}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = focus.message ? "0 0 15px rgba(0, 255, 255, 0.8)" : "0 2px 10px rgba(0, 0, 0, 0.1)"}
                ></textarea>
              </div>

              <button type="submit" style={{
                width: "100%",
                padding: "0.75rem",
                background: "linear-gradient(135deg, #00ffff, #8a2be2)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 0 25px rgba(0, 255, 255, 1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.7)";
              }}
              >
                Send Message
              </button>

              {status && <p style={{ marginTop: "1rem", textAlign: "center", color: status === 'Sending...' ? '#00ffff' : status.includes('Error') ? '#ff4444' : '#4CAF50' }}>{status}</p>}
        </form>
          </div>
        </div>

        {modalVisible && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div style={{
              backgroundColor: '#ffffff',
              padding: '2.5rem 3rem',
              borderRadius: '12px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              fontSize: '1.2rem',
              fontWeight: '500',
              color: '#333',
              textAlign: 'center',
              minWidth: '320px',
              maxWidth: '90vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              animation: 'scaleIn 0.4s ease-out',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              {modalMessage === 'Sending...' && (
                <>
                  <FaSpinner size={48} style={{ color: '#007bff', animation: 'spin 1s linear infinite' }} />
                  <span style={{ color: '#007bff' }}>{modalMessage}</span>
                </>
              )}
              {modalMessage === 'Message sent successfully!' && (
                <>
                  <FaCheck size={48} style={{ color: '#28a745', animation: 'bounce 0.6s ease' }} />
                  <span style={{ color: '#28a745' }}>{modalMessage}</span>
                </>
              )}
              {modalMessage.includes('Error') && (
                <>
                  <FaTimes size={48} style={{ color: '#dc3545', animation: 'shake 0.5s ease' }} />
                  <span style={{ color: '#dc3545' }}>{modalMessage}</span>
                </>
              )}
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes glow {
            from { box-shadow: 0 0 50px rgba(255, 107, 53, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1); }
            to { box-shadow: 0 0 70px rgba(255, 107, 53, 0.8), inset 0 0 30px rgba(255, 255, 255, 0.2); }
          }
          @keyframes particleFloat {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
            50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          @keyframes glowGreen {
            0%, 100% { filter: drop-shadow(0 0 5px #4CAF50); }
            50% { filter: drop-shadow(0 0 15px #4CAF50); }
          }
          @keyframes glowRed {
            0%, 100% { filter: drop-shadow(0 0 5px #f44336); }
            50% { filter: drop-shadow(0 0 15px #f44336); }
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">&copy; 2024 Jatin Baroliya. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/Jatinbaroliya" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/jatinbaroliya" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:jatinbaroliya03@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
