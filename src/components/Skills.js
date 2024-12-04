import React from "react";

const Skills = () => {
    const skillCategories = [
        {
            category: "Programming Languages",
            skills: [
                { name: "Python", level: "Intermediate" },
                { name: "Java", level: "Advanced" },
                { name: "JavaScript", level: "Intermediate" },
                { name: "C++", level: "Intermediate" },
                { name: "C", level: "Basic" },
            ],
        },
        {
            category: "Web Technologies",
            skills: [
                { name: "HTML5 & CSS3", level: "Advanced" },
                { name: "React.js", level: "Advanced" },
                { name: "Node.js", level: "Intermediate" },
                { name: "Express.js", level: "Intermediate" },
                { name: "RESTful APIs", level: "Intermediate" },
            ],
        },
        {
            category: "Tools & Platforms",
            skills: [
                { name: "Git & GitHub", level: "Advanced" },
                { name: "Visual Studio Code", level: "Advanced" },
                { name: "WebStorm", level: "Intermediate" }
            ],
        },
        {
            category: "Databases",
            skills: [
                { name: "MongoDB", level: "Basic" },
                { name: "SQLite", level: "Advanced" },
                { name: "SPSS", level: "Intermediate" },
            ],
        },
    ];

    return (
        <section id="skills">
            <div className="skills-container">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div className="skills-card" key={index}>
                            <h3>{category.category}</h3>
                            <ul>
                                {category.skills.map((skill, idx) => (
                                    <li key={idx}>
                                        <span>{skill.name}</span>
                                        <span className={`skill-level skill-${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
