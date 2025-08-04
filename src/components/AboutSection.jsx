import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground text-justify">
              Hi! I'm currently studying full-stack web development at Masai
              School. I'm learning how to build complete websites and web apps,
              from the front end to the back end.
            </p>

            <p className="text-muted-foreground text-justify">
              As a fresher, I enjoy solving problems with code and turning ideas
              into real projects. I'm currently working with HTML/CSS,
              TailwindCSS, JavaScript, React, Node.js, Express and MongoDB.
            </p>
            <p className="text-muted-foreground text-justify">
              My goal is to become a skilled developer and work on useful,
              real-world projects. This portfolio shows my learning journey and
              some of the projects I've built.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="pdf/resume.pdf"
                // target="_blank"
                download="Resume-Rupayan Das.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    creating responsive webside and web applications with modern
                    franmworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI-UX Designt</h4>
                  <p className="text-muted-foreground">
                    Designing Intuitive user intefaces and seamless user
                    experiences
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* next addition by me */}
          <div className="flex justify-center">
            <img
              src="projects/photo.jpg"
              alt="photo"
              className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-primary"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
