import ProjectCard from '../project-card';

// React.FC<{ project: Project }>
const projects = [
  {
    id: 1,
    title: 'Nexus Asset Management System',
    type: 'Green Brain • 2025',
    description:
      'A comprehensive asset management system for tracking, monitoring, and optimizing resources. Features real-time analytics and intuitive dashboard interfaces.',
    role: 'Frontend Developer',
    impact: [
      'Reduced asset tracking time by 60%',
      'Real-time performance monitoring',
      'Advanced assest tracking',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind', 'Redux'],
    isNDA: false,
  },
  {
    id: 2,
    title: 'Diya Accessoire (E-commerce)',
    type: '2025',
    description:
      'Modern e-commerce solution with product catalog, shopping cart, and checkout functionality. Project includes responsive design and payment integration features.',
    role: 'Frontend Developer',
    impact: [],
    technologies: ['Next.js', 'Tailwind', 'Zustand', 'Shadcn ui', 'TypeScript'],
    isNDA: false,
  },
  {
    id: 3,
    title: 'Secure Document Authentication',
    type: 'Mpedigree • 2023-2025',
    description:
      'Built secure, scalable web interfaces for document authentication focused on performance and data protection.',
    role: 'Frontend Developer',
    impact: [],
    technologies: ['Vue.js', 'TypeScript', 'Pinia'],
    isNDA: true,
  },
  {
    id: 4,
    title: 'Biomarker Management System',
    type: 'Aseda Biotech • 2025',
    description:
      'Clinical trial management system with focus on biomarker analysis and data visualization. Worked on frontend architecture and user experience optimization.',
    role: 'Frontend Developer',
    impact: [],
    technologies: ['Next.js', 'Tailwind', 'Zustand', 'Shadcn ui', 'TypeScript'],
    isNDA: true,
  },
  {
    id: 5,
    title: 'Edustream',
    type: 'Final Year Project - KNUST • 2024',
    role: 'Full Stack Developer',
    description:
      'A Zoom-inspired interactive module that enables real-time voice recording of lectures, allowing instructors to engage students directly during live sessions. Lecturers can assign exercises on the fly based on the ongoing discussion. The feature supports seamless audio capture and integrates with the exercise delivery system to ensure students receive contextually relevant tasks during the call.',
    impact: [
      'Enhanced real-time interaction between lecturers and students',
      'Enabled adaptive learning through live exercise prompts',
      'Created a more immersive and feedback-driven virtual classroom experience',
    ],
    technologies: [
      'Enhanced real-time interaction between lecturers and students',
      'Electron',
      'Postgres',
      'Tailwind',
    ],
    isNDA: false,
  },
];
const Projects = () => {
  return (
    <>
      <section id="projects" className="bg-background min-h-screen snap-start px-4 pt-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
              Featured Projects
            </h2>
            <p className="text-muted mx-auto max-w-2xl text-lg">
              A showcase of my work across different industries and technologies. Some projects are
              under NDA to protect client confidentiality.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* NDA Notice */}
          <div className="bg-card border-border mt-12 rounded-2xl border p-6 text-center">
            <div className="mb-3 flex items-center justify-center">
              <span className="mr-3 text-2xl">🔒</span>
              <h4 className="text-foreground font-semibold">Respecting Client Confidentiality</h4>
            </div>
            <p className="text-muted mx-auto max-w-2xl text-sm">
              Several projects are protected by non-disclosure agreements. I'm happy to discuss the
              technical challenges, solutions, and my specific contributions during interviews while
              respecting client confidentiality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
