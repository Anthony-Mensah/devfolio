import React from 'react';
import MotionDiv from '../motion-div';

const psynthaxDesc =
  'Building secure digital solutions for pharmaceutical authentication and supply chain transparency';
const psynthaxTechStack = ['VueJs', 'TypeScript', 'Pinia'];
const experiences = [
  {
    name: 'Psynthax (Mpedigree)',
    role: 'Frontend Developer Intern',
    description: psynthaxDesc,
    techStack: psynthaxTechStack,
    duration: 'Oct 2023 - Jan 2024',
  },
  {
    name: 'Aseda Biotech (USA)',
    role: 'Frontend Developer',
    description:
      'Developing cutting-edge biotech platforms for clinical trial management and biomarker analysis.',
    techStack: ['Next.js', 'TypeScript', 'Shadcn ui', 'Zustand'],
    duration: 'May 2025 - August 2025',
  },
  {
    name: 'Psynthax (Mpedigree)',
    role: 'Frontend Developer (NSP)',
    description: psynthaxDesc,
    techStack: psynthaxTechStack,
    duration: 'Oct 2024 - Oct 2025',
  },
  {
    name: 'Green Brain Technologies',
    role: 'Frontend Developer (Debugger)',
    description:
      'Creating innovative debugging tools and developer experiences for modern web applications.',
    techStack: ['React', 'TypeScript', 'Material ui', 'Redux'],
    duration: 'Oct 2025 - To Date',
  },
];
const Experience = () => {
  return (
    <>
      <section id="experience" className="bg-background min-h-screen snap-start px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
              Professional Journey
            </h2>
            <p className="text-muted mx-auto max-w-2xl text-lg">
              My path through the world of frontend development, building digital experiences that
              matter.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="bg-primary/30 absolute left-4 h-full w-0.5 transform md:left-1/2 md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <MotionDiv>
                  <div
                    key={index}
                    className={`flex flex-col items-start md:flex-row ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="bg-primary border-background relative z-10 mb-4 flex h-8 w-8 items-center justify-center rounded-full border-4 md:absolute md:left-1/2 md:mb-0 md:-translate-x-1/2 md:transform">
                      <div className="bg-foreground h-2 w-2 rounded-full"></div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}
                    >
                      <div className="bg-card border-border hover:border-primary/50 rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl">
                        {/* Company & Duration */}
                        <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
                          <h3 className="text-foreground text-xl font-bold">{exp.name}</h3>
                          <span className="text-primary bg-primary/10 w-fit rounded-full px-3 py-1 text-sm font-medium">
                            {exp.duration}
                          </span>
                        </div>

                        {/* Role */}
                        <p className="text-accent mb-3 text-lg font-semibold">{exp.role}</p>

                        {/* Description based on company */}
                        <p className="text-muted text-sm leading-relaxed">{exp.description}</p>

                        {/* Tech Stack Indicators */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.techStack.map((stack, index) => (
                            <span
                              key={index}
                              className="bg-primary/20 text-primary rounded px-2 py-1 text-xs"
                            >
                              {stack}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
