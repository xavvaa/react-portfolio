import React, {useState} from "react";

//import logo-images
import layers from "../../img/Creative.png";
import cogwheel from "../../img/ProblemSolving.png";
import pen from "../../img/Leadership.png";
import browser from "../../img/Adaptability.png";


export default function AboutLogos() {
    const [skils, setSkills] = useState([
        {
            type: "Creative",
            animation: "wow fadeInLeft",
            logo: layers   
        },
        {
            type: "Problem Solver",
            animation: "wow fadeInLeft",
            logo: cogwheel   
        },
        {
            type: "Leadership",
            animation: "wow fadeInRight",
            logo: pen   
        },
        {
            type: "Adaptive",
            animation: "wow fadeInRight",
            logo: browser   
        }
    ]);

    return(
        <div className="row mt-5">
            {
            skils.map((skill, index) => {
                return (
                    <div className={"col-6 col-sm-6 col-md-3 " + skill.animation} key={index}>
                        <img src={skill.logo} alt=""/>
                        <h4>{skill.type}</h4>
                    </div>
                );
            })
            }
        </div>
    );
}