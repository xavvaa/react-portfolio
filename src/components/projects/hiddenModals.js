import React, {useState} from "react";

//import images
import cafeine from "../../img/cafeine.png";
import routetrace from "../../img/routetrace.png";
import lola from "../../img/lola.png";



import HiddenModalDescription from "./hiddenModals.description";

export default function HiddenModals() {

    const [projects, setProjects] = useState([
        {
            name: "Café-ine",
            image: cafeine,
            description: [
                "Café-ine is a cozy website showcasing a charming coffee shop with a range of beverages from classic espressos to seasonal blends. It offers a virtual glimpse into the café’s warm atmosphere, with details on the menu, special offers, and its story. Café-ine celebrates not just coffee, but community, comfort, and the art of brewing."
            ]
        },
        {
            name: "RouteTrace",
            image: routetrace,
            description: [
                "Route Trace combines transport options and gives you the best route with live arrival times. Get step-by-step directions with live guidance as you travel! This application focuses on removing doubts about the arrival time and availability of transport vehicles, more specifically, a UV express and a bus."
            ]
        },
        {
            name: "Lo-La",
            image: lola,
            description: [
                "Lo-La is a mobile app for the elderly and those with hearing or visual impairments, designed to assist with daily tasks and enhance accessibility. It addresses concerns like medication reminders, battery usage, and language support, aiming to improve quality of life and adapt to the evolving needs of its users."
            ]
        }
    ]);


    function hiddeModal(name) {
        const modalBG = document.getElementById("gallery-card");
        const modal = document.getElementById(name);
        modalBG.style.display = "none";
        modal.style.display = "none";
    }

    const style = {
        textAlign: "right",
        fontWeight: 900,
        fontSize: 2 + "rem",
        cursor: "pointer"
    }


    return(
		<div id="gallery-card">
        {
            projects.map((project, index) => {
            return (
                <div id={project.name} className="modal-card" key={index}>
                    <div className="visual">
                        <img src={project.image} alt=""/>
                    </div>

                    <div className="modal-info">
                        <h2>{project.name}</h2>

                        <HiddenModalDescription description={project.description} />

                        <div className="modal-bottom">
                            <a href={project.ref} target="_blank">
                                <h3>{project.status}</h3>
                            </a>
                            <p className="close-icon" style={style} onClick={() => hiddeModal(project.name)}>&#10005;</p>
                        </div>

                    </div>
                </div>
            );})
        }
        </div>
    );
}