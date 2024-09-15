import React, { useState } from "react";

export default function SkillBars() {

    const [technologies, setTechnologies] = useState([
        { name: "HTML", percentage: 85 },
        { name: "CSS", percentage: 80 },
        { name: "Javascript", percentage: 29 },
        { name: "ReactJS", percentage: 31 },
        { name: "NodeJS", percentage: 30 },
        { name: "Figma", percentage: 90 },
        { name: "C++", percentage: 60 },
    ]);

    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 wow fadeIn">
            {technologies.map((tech, index) => (
                <div className="progress mb-3" key={index}>
                    <div
                        className={`progress-bar fill-${tech.percentage}-bar`}
                        role="progressbar"
                        style={{ width: tech.percentage + "%" }}
                        aria-valuemin="0"
                        aria-valuemax="100">
                        <span className="progress-text">
                            {tech.name} ({tech.percentage}%)
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
