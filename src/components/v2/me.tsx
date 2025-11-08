import { Plus } from 'lucide-react';
import React from 'react';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiVuedotjs,
} from 'react-icons/si';
import { FaMobile } from 'react-icons/fa';
import MotionDiv from '../motion-div';

const Me = () => {
  const techStack = [
    { name: 'React', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'React Native', icon: FaMobile },
    { name: 'Vue', icon: SiVuedotjs },
  ];

  return (
    <>
      <section
        id="me"
        className="w-full pt-5 md:flex md:h-screen md:snap-start md:items-center md:pt-0"
      >
        <main className="container mx-auto flex flex-col items-center space-y-3 md:flex-row md:justify-center md:space-x-10">
          <div className="justify-end md:flex md:h-[500px] md:flex-1">
            <img
              src="../../../public/saint.jpg"
              alt="Anthony Mensah - Frontend Developer"
              className="aspect-square rounded-3xl object-cover"
            />
          </div>
          {/* about me */}
          <section className="flex flex-col items-center space-y-3 md:flex-1 md:items-start">
            {/* heading */}
            <MotionDiv>
              <h2>About Me</h2>
            </MotionDiv>
            {/* subtext */}
            <MotionDiv>
              <p className="text-muted text-center md:text-start">
                Frontend and Mobile developer with hands-on experience in React, React Native, Vue,
                and Next.js, plus backend exposure using Django and Node.js. Skilled in building
                responsive, user-centric interfaces and collaborating across remote teams with
                strong API integration skills. Passionate about clean code, runtime safety, and
                scalable design.
              </p>
            </MotionDiv>

            {/* Tech Stack */}
            <MotionDiv>
              <div className="w-full py-4">
                <h3 className="text-foreground mb-3 text-center text-lg font-semibold md:text-start">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="group border-border hover:border-foreground flex items-center gap-2 rounded-lg border px-3 py-2 transition-all duration-300"
                      title={tech.name}
                    >
                      <tech.icon className="text-foreground h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-foreground text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>

            {/* stats */}
            <MotionDiv>
              <div className="flex items-center space-x-10 md:space-x-10">
                {/* experience */}
                <aside className="flex flex-col items-center">
                  {/* 3+ years */}
                  <div className="flex items-center space-x-1">
                    <h1>3</h1>
                    {/* icon */}
                    <Plus className="text-primary" size={25} />
                  </div>
                  <p className="text-muted text-center text-sm leading-tight">
                    Years of <br /> experience
                  </p>
                </aside>
                {/* companies */}
                <aside className="flex flex-col items-center">
                  {/* 3+ years */}
                  <div className="flex items-center space-x-1">
                    <h1>3</h1>
                    {/* icon */}
                  </div>
                  <p className="text-muted text-center text-sm leading-tight">
                    Companies worked <br />
                    with{' '}
                  </p>
                </aside>
                {/* projects */}
                <aside className="flex flex-col items-center">
                  <div className="flex items-center space-x-1">
                    <h1>5</h1>
                    {/* icon */}
                    <Plus className="text-primary" size={25} />
                  </div>
                  <p className="text-muted text-center text-sm leading-tight">
                    Projects worked <br /> on
                  </p>
                </aside>
              </div>
            </MotionDiv>
          </section>
        </main>
      </section>
    </>
  );
};

export default Me;
