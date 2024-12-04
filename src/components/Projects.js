import React from "react";

const Projects = () => {
    const projects = [
        {
            name: "Portfolio Website",
            description:
                "A personal portfolio website showcasing my skills and projects using Reactx    .",
        },
        {
            name: "Tetris Game",
            description: "A simple Tetris Game made using JavaScript.",
            github: "https://github.com/TanishqRaval/ProjectsJS",
        },
        {
            name: "JavaScript Calculator",
            description:
                "A simple yet functional calculator that performs basic arithmetic operations using JavaScript.",
            github: "https://github.com/TanishqRaval/ProjectsJS",
        },
        {
            name: "SwiftBot Light Search",
            description:
            "The SwiftBot Light Search Program is a Java-based project that enables a Raspberry Pi-powered robot to autonomously navigate towards the brightest light source in its environment. This project showcases innovative applications of robotics, image processing, and object-oriented programming.",
            github: "https://github.com/TanishqRaval/Swiftbot-Code",
        },
        {
            name: "WorldInsight",
            description:
                "World Insight is a React and Express.js-powered web app with Tailwind CSS, enabling users to explore global population data, search countries, and manage a bucket list with a sleek UI.",
            github: "https://github.com/TanishqRaval/WorldInsight",
        },
    ];

    return (
        <section id="projects">
            <div className="projects-container">
                <h2>Projects</h2>
                <div className="projects-row">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-content">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-btn"
                                    >
                                        View on GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
