export const profile = {
  name: 'Rishwanth Vankayala',
  title: 'Java Full Stack Developer',
  location: 'Dublin, CA, USA',
  email: 'rishi.vankayala@gmail.com',
  phone: '689-808-1541',
  linkedin: 'https://www.linkedin.com/in/rishwanth-vankayala',
  summary:
    'Full‑stack engineer with 4+ years building high‑performance web apps. Strong in Java, Spring Boot, React, and cloud (AWS/GCP). Passionate about performance, clean architecture, and developer experience.',
  skills: [
    'Java', 'Spring Boot', 'Microservices', 'React.js', 'JavaScript/TypeScript',
    'REST APIs', 'MySQL', 'MongoDB', 'Kafka', 'Docker', 'Kubernetes',
    'AWS', 'GCP', 'JUnit 5', 'CI/CD', 'Grafana'
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'Walmart',
      period: 'Jan 2024 – Jul 2025',
      bullets: [
        'Engineered multi‑tenant microservices (Spring Boot) for Walmart Creators; enabled 10k+ user onboarding.',
        'Improved message throughput by 30% via optimized Kafka pipelines.',
        'Automated monitoring with Grafana; reduced API latency debugging by 40%.',
        'Integrated Braze notifications (email, push, in‑app) increasing engagement by 25%.',
        'Maintained 85%+ unit test coverage with JUnit 5, reducing production issues by 35%.',
        'Centralized logs via OpenObserve, accelerating RCA by 50%.'
      ]
    },
    {
      role: 'Java Full Stack Developer',
      company: 'The Hartford',
      period: 'Jun 2023 – Jan 2024',
      bullets: [
        'Developed REST APIs and React UI; collaborated across teams.',
        'Optimized SQL and indexes; cut query times by 40%.',
        'Secured apps with Spring Security; enforced authN/authZ.',
        'Improved data throughput by 20% with stored procedures and triggers.'
      ]
    },
    {
      role: 'Java Full Stack Developer',
      company: 'Tata Consultancy Services',
      period: 'Sep 2018 – Jul 2021',
      bullets: [
        'Delivered 3+ enterprise apps across SDLC with Agile/Waterfall.',
        'Built responsive front‑ends with React, HTML, CSS; improved client satisfaction by 35%.',
        'Implemented RESTful APIs improving data exchange efficiency by 30%.'
      ]
    }
  ],
  education: [
    { degree: "M.S. in Computer and Information Sciences", school: 'University of Central Florida', year: 'May 2023' },
    { degree: 'B.Tech in Computer Science', school: 'Amrita Vishwa Vidyapeetham University', year: 'May 2018' }
  ],
  projects: [
    {
      name: 'Cache Simulator',
      stack: ['Python', 'Tableau'],
      date: 'Oct 2022',
      link: '',
      description: [
        'Designed a flexible cache + memory hierarchy simulator to streamline system performance; reduced bottlenecks up to 75%.',
        'Implemented LRU, FIFO, Optimal; reduced system latency by 20% and optimized memory usage by 37%.',
        'Presented findings via Tableau dashboards.'
      ]
    },
    {
      name: 'UScholar — Visualizing & Analyzing US Universities',
      stack: ['JavaScript', 'SQL', 'D3.js'],
      date: 'Nov 2021',
      link: 'https://uscholar.vercel.app/',
      description: [
        'Pre‑processed educational & financial data for 4,400+ US universities to analyze cost, dropout rate, and majors.',
        'Built interactive visualizations (pie, bar, bubble maps) with D3.js and integrated into an Angular app.',
        'Improved UI readability by ~80% through plot integration.'
      ]
    },
    {
      name: 'Online Voting System',
      stack: ['PHP', 'SQL', 'HTML5', 'CSS', 'Bootstrap'],
      date: 'Apr 2018',
      link: '',
      description: [
        'Built an interactive, secure online voting web app; achieved a 10% conversion rate.',
        'Integrated with robust SQL backend (phpMyAdmin), Servlets, and Apache.',
        'Drove usability & accessibility via iterative feedback; increased satisfaction to ~85%.'
      ]
    }
  ]
}
