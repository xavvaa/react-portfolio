import React from "react";

import myImage from "../../img/myImage.png";

//import skillBars
import SkillBars from "./about.description.skillBars";

export default function AboutDescription(props) {
    return (
        <div className="row wow fadeIn" style={{ marginTop: 7 + "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <img
                    className={"img-fluid"}
                    src={myImage}
                    alt="Portfolio Image"
                    style={{
                        borderRadius: 50 + "%",
                        height: 250 + "px",
                        width: 250 + "px"
                    }}
                />
                <p className="mytext pt-3">
                   My name is Hannah Nicole L. Comia. I am a 20-year-old third-year Computer Science student at De La Salle Lipa. 
                   I aspire to become a UI/UX designer in the future.
                </p>
            </div>

            <SkillBars />

        </div>
    );
}