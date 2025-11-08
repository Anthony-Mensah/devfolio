import { Project } from '../../types';
import { BiCart } from 'react-icons/bi';
import MotionDiv from './motion-div';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const getStatusConfig = (isNDA: boolean, title: string) => {
    if (title.includes('Nexus')) {
      return {
        label: 'Live Project',
        color: 'green',
        icon: <BiCart size={20} />,
        gradient: 'from-primary/20 to-accent/20',
        liveUrl: 'https://sourceonegh.com/nexus-ams-asset-management-solution/', // Add your actual URL here
      };
    }
    if (title.includes('E-commerce')) {
      return {
        label: 'In Development',
        color: 'yellow',
        icon: <BiCart size={30} />,
        gradient: 'from-gray-600/20 to-gray-400/20',
      };
    }
    if (isNDA) {
      return title.includes('Biomarker')
        ? {
            label: 'Under NDA',
            color: 'accent',
            icon: <BiCart size={20} />,
            gradient: 'from-accent/10 to-border/50',
          }
        : {
            label: 'Under NDA',
            color: 'primary',
            icon: <BiCart size={20} />,
            gradient: 'from-primary/10 to-border/50',
          };
    }
    return {
      label: project.type || 'Project',
      color: 'primary',
      icon: <BiCart size={20} />,
      gradient: 'from-primary/20 to-accent/20',
    };
  };

  const status = getStatusConfig(project.isNDA, project.title);
  const statusColor = {
    green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
    yellow: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/30' },
    primary: { bg: 'bg-primary/20', text: 'text-primary', border: 'border-primary/30' },
    accent: { bg: 'bg-accent/20', text: 'text-accent', border: 'border-accent/30' },
  }[status.color];

  return (
    <MotionDiv>
      <div className="bg-card border-border hover:border-primary/50 group/card h-full overflow-hidden rounded-2xl border transition-all duration-500">
        {/* Header Section (Improved) */}
        <div
          className={`relative h-48 bg-gradient-to-br ${status.gradient} flex items-center justify-center overflow-hidden`}
        >
          {project.title.includes('Nexus') ? (
            <div className="relative h-full w-full">
              <img
                src="../../public/nexus.PNG"
                alt={`${project.title} screenshot`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
                <a
                  href={status.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 flex translate-y-4 transform items-center space-x-2 rounded-lg px-6 py-3 font-semibold transition-colors duration-300 group-hover/card:translate-y-0"
                >
                  <span>Visit Live Site</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center">
              <div
                className={`h-16 w-16 ${
                  status.color === 'yellow'
                    ? 'bg-muted'
                    : status.color === 'accent'
                      ? 'bg-accent/30'
                      : 'bg-primary/30'
                } mx-auto mb-3 flex items-center justify-center rounded-full transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-12`}
              >
                {/* <span className="text-2xl">{status.icon}</span> */}
                {status.icon}
              </div>
              <span
                className={`inline-block px-3 py-1 ${statusColor?.bg} ${statusColor?.text} rounded-full border text-sm ${statusColor?.border} backdrop-blur-sm`}
              >
                {status.label}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="mb-3 flex items-start justify-between">
            <h3 className="text-foreground text-xl font-bold">{project.title}</h3>
            <span
              className={`text-${
                status.color === 'yellow' ? 'muted' : status.color
              } text-xs bg-${status.color}/10 rounded-full px-2 py-1`}
            >
              {project.type}
            </span>
          </div>

          <p className="text-muted mb-4 text-sm leading-relaxed">{project.description}</p>

          {/* Technologies */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 ${
                  status.color === 'yellow'
                    ? 'bg-muted/20 text-muted'
                    : `bg-${status.color}/20 text-${status.color}`
                } rounded text-xs`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Live Site Link for Nexus */}
          {project.title.includes('Nexus') && (
            <div className="mb-4">
              <a
                href={status.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 inline-flex items-center space-x-2 text-sm font-medium transition-colors duration-200"
              >
                <span>nexus-asset-management.com</span>
                <span>↗</span>
              </a>
            </div>
          )}

          {/* Impact or Status Message */}
          {project.impact && project.impact.length > 0 ? (
            <div className="space-y-2">
              {project.impact.map((impact, index) => (
                <div key={index} className="text-muted flex items-center text-sm">
                  <span
                    className={`h-2 w-2 ${
                      status.color === 'green' ? 'bg-green-500' : 'bg-primary'
                    } mr-2 rounded-full`}
                  ></span>
                  {impact}
                </div>
              ))}
            </div>
          ) : project.isNDA ? (
            <div className="text-muted text-sm">Details protected by non-disclosure agreement</div>
          ) : status.color === 'yellow' ? (
            <div className="text-muted text-sm italic">
              Project paused - available for completion
            </div>
          ) : null}
        </div>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
