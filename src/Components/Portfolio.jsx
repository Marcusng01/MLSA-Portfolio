/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/flowers.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "MoodTrack",
    description:
      "Personal project to create a calendar/diary web application that lets you to keep track of the quality of your days using colors.",
    url: "https://marcusng01.github.io/MoodTrack/",
  },
  {
    title: "Java App for Charity Run Event",
    description: "Java App made as practice for a fictional UTHM Charity Run Event",
    url: "https://github.com/Marcusng01/Charity_Run_Java_GUI_Project",
  },
  {
    title: "My Biodata Site",
    description: "A website that explains more about me, my memories and my dreams",
    url: "https://marcusng01.github.io/Web-Development-Lab-3/",
  },
  {
    title: "AI project to Predict Fashion Product Classes",
    description:
      "Artificial Intelligence project made in colaboration with a coursemate to classify fashion products.",
    url: "https://github.com/Marcusng01/Predict-Fashion-Products-Classes-Using-MNIST-Data-Set-",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
