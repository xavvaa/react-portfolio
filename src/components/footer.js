import React from "react";

import github from "../img/github.png";

export default function Footer() {

		//get current year
		const year = new Date().getFullYear();
		
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								className="px-3"
								href="https://github.com/xavvaa/react-portfolio"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt=""/>
							</a>
						</div>
					</div>
					<h5 className="pt-4">Hannah Comia &copy; {year}</h5>
				</div>
			</div>
		);
}
