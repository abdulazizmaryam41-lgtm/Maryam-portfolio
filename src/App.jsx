const projects = [
  {
    number: '01',
    title: 'Studio North',
    type: 'Concept · Digital identity',
    className: 'project-art north',
  },
  {
    number: '02',
    title: 'Good Things',
    type: 'Concept · E-commerce',
    className: 'project-art good',
  },
  {
    number: '03',
    title: 'Field Notes',
    type: 'Concept · Editorial',
    className: 'project-art field',
  },
]

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function App() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Maryam Abdulaziz home">Maryam Abdulaziz<span>®</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <a className="contact-link" href="mailto:abdulazizmaryam41@gmail.com">Let’s talk <Arrow /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-kicker"><span>Portfolio / 2026</span><span>Available for select projects</span></div>
        <h1>Designing thoughtful<br /><em>digital experiences.</em></h1>
        <div className="hero-bottom">
          <p>I’m Maryam Abdulaziz, a creative developer and visual designer crafting expressive interfaces for the web.</p>
          <a className="circle-button" href="#work" aria-label="Explore selected work"><Arrow /></a>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading">
          <p>Selected work</p>
          <p>(01—03)</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={project.className}>
                {project.number === '01' && <><div className="north-word">NORTH</div><div className="north-shape" /></>}
                {project.number === '02' && <><div className="good-sun" /><div className="good-copy">GOOD<br />THINGS</div></>}
                {project.number === '03' && <><div className="field-type">FIELD<br /><span>NOTES</span></div><div className="field-leaf" /></>}
              </div>
              <div className="project-meta">
                <div><h2>{project.title}</h2><p>{project.type}</p></div>
                <span>{project.number}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="eyebrow">About</p>
        <div className="about-grid">
          <h2>Curiosity-led.<br /><em>Detail obsessed.</em></h2>
          <div className="about-copy">
            <p>I blend strategy, art direction and development to build brands and digital products that feel clear, useful and distinctly human.</p>
            <div className="skills" aria-label="Skills">
              <span>UI/UX Design</span>
              <span>Web Developer</span>
              <span>Figma</span>
              <span>HTML & CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Branding</span>
            </div>
            <a href="mailto:abdulazizmaryam41@gmail.com">More about me <Arrow /></a>
          </div>
        </div>
        <div className="services">
          <div><span>01</span><p>Creative<br />development</p></div>
          <div><span>02</span><p>Visual<br />design</p></div>
          <div><span>03</span><p>Brand<br />direction</p></div>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <p>Have a project in mind?</p>
          <a href="mailto:abdulazizmaryam41@gmail.com">abdulazizmaryam41@gmail.com</a>
        </div>
        <div className="footer-bottom"><p>© 2026 Maryam Abdulaziz</p><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  )
}
