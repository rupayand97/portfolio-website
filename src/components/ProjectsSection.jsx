import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Travel Inspiration Platform",
    description: "A web app to help traveller to find best destinations",
    image: "/projects/project1.png",
    tags: ["HTML, CSS, JavaScript, Firebase"],
    demoUrl: "https://stately-sprinkles-ae8f52.netlify.app/",
    githubUrl: "https://github.com/rupayand97/Travel_Inspiration_Platform",
  },
  {
    id: 2,
    title: "Resume Builder",
    description: "A web app to help students to build good resume",
    image: "/projects/project2.png",
    tags: ["HTML, CSS, React, Firebase"],
    demoUrl: "https://inspiring-crepe-7e5239.netlify.app/login",
    githubUrl: "https://github.com/rupayand97/Resume-builder-app",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description: "A Simple interactive TicTac Toe game built for two player to play in the browser",
    image: "/projects/project3.png",
    tags: ["HTML, CSS, JavaScript"],
    demoUrl: "https://tic-tac-toe-woad-xi.vercel.app/",
    githubUrl: "https://github.com/rupayand97/Tic-Tac-Toe",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/rupayand97"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};