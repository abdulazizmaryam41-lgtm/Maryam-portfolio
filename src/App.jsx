const skills = ['Excel', 'Google Sheets', 'Python', 'Canva', 'Data Cleaning', 'Data Visualization']

const projects = [
  {
    number: '01',
    title: 'Sales Performance',
    category: 'Concept project · Excel',
    type: 'sales',
  },
  {
    number: '02',
    title: 'Customer Insights',
    category: 'Concept project · Google Sheets',
    type: 'customers',
  },
  {
    number: '03',
    title: 'Operations Overview',
    category: 'Concept project · Data visualization',
    type: 'operations',
  },
]

function Arrow({ diagonal = false }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {diagonal
        ? <path d="M5 19 19 5M8 5h11v11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        : <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  )
}

function DashboardVisual({ type }) {
  if (type === 'sales') {
    return (
      <div className="dashboard sales-dashboard" aria-label="Sales analytics dashboard concept">
        <div className="dash-title"><span>SALES OVERVIEW</span><span>2026</span></div>
        <div className="dash-kpis">
          <div><small>Revenue</small><strong>—</strong></div>
          <div><small>Orders</small><strong>—</strong></div>
        </div>
        <div className="sales-chart">
          {[42, 68, 51, 82, 64, 96, 74, 88].map((height, index) => (
            <span key={index} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    )
  }

  if (type === 'customers') {
    return (
      <div className="dashboard customers-dashboard" aria-label="Customer analytics dashboard concept">
        <div className="customer-head">
          <span>CUSTOMER<br />INSIGHTS</span>
          <div className="donut"><span /></div>
        </div>
        <div className="customer-bars">
          <div><span /><i /></div>
          <div><span /><i /></div>
          <div><span /><i /></div>
          <div><span /><i /></div>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard operations-dashboard" aria-label="Operations analytics dashboard concept">
      <div className="ops-sidebar"><b>MA</b><span /><span /><span /></div>
      <div className="ops-main">
        <div className="ops-heading">OPERATIONS</div>
        <div className="ops-cards"><i /><i /><i /></div>
        <div className="ops-grid">
          <div className="line-chart"><svg viewBox="0 0 300 120" preserveAspectRatio="none"><path d="M0 95 C35 90,55 54,92 68 S145 100,180 48 S240 68,300 20" /></svg></div>
          <div className="ops-ring"><span /></div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <header className="nav shell" id="top">
        <a className="brand" href="#top" aria-label="Maryam Abdulaziz home">Maryam<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-contact" href="mailto:abdulazizmaryam41@gmail.com">Let’s talk <Arrow /></a>
      </header>

      <section className="hero shell">
        <div className="hero-kicker"><span>Data Analyst / Portfolio</span><span>Mombasa, Kenya</span></div>
        <div className="hero-title">
          <p>Turning raw data</p>
          <h1>into clear<br /><em>decisions.</em></h1>
        </div>
        <div className="hero-bottom">
          <p>I’m Maryam, a data analyst working with Excel, Google Sheets and Python to clean, analyze and visualize data.</p>
          <a className="circle-link" href="#work" aria-label="Explore my work"><Arrow /></a>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading"><p>Selected work</p><p>Concept studies (01—03)</p></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-art">
                <DashboardVisual type={project.type} />
              </div>
              <div className="project-meta">
                <div><h2>{project.title}</h2><p>{project.category}</p></div>
                <span>{project.number}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-inner shell">
          <p className="eyebrow">About me</p>
          <div className="about-grid">
            <h2>Curious mind.<br /><em>Clear insights.</em></h2>
            <div className="about-copy">
              <p>I enjoy working with Excel, Google Sheets and data cleaning, analysis and visualization to help businesses understand trends, solve problems and make decisions.</p>
              <div className="skills" aria-label="Skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              <a href="mailto:abdulazizmaryam41@gmail.com">Start a conversation <Arrow /></a>
            </div>
          </div>
          <div className="services">
            <div><span>01</span><p>Data<br />cleaning</p></div>
            <div><span>02</span><p>Data<br />analysis</p></div>
            <div><span>03</span><p>Data<br />visualization</p></div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="footer-intro">
          <p>Have a project or opportunity?</p>
          <a href="mailto:abdulazizmaryam41@gmail.com">Let’s work together <Arrow diagonal /></a>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/mariam-abdulaziz-/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
          <a href="https://github.com/abdulazizmaryam41-lgtm" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
        </div>
        <div className="footer-bottom"><p>© 2026 Maryam Abdulaziz</p><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  )
}
