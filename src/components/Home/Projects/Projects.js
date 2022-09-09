import React from 'react';
import project1 from "../../../images/project1.jpg";
import project2 from "../../../images/project2.jpg";
import project3 from "../../../images/project3.jpg";
import "./Projects.css";

const Projects = () => {
    return (
       
      <div class="container main-pro">
          <div>
              <h1 class="heading text-center">Our Projects</h1>
          </div>
	     <div class="gallery">

		<div class="gallery-item">
			<img class="gallery-image" src={project1} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"></img>
		</div>

		<div class="gallery-item">
			<img class="gallery-image" src={project2} alt="sunset behind San Francisco city skyline"></img>
		</div>

		<div class="gallery-item">
			<img class="gallery-image" src={project3} alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"></img>
		</div>

	  </div>
   </div>

    );
};

export default Projects;