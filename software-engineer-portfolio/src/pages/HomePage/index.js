import "./styles.css";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { skillsData } from "./skillsdata";
import { projectsData } from "./projectsdata";

function HomePage() {
  return (
    <div className="home_page">
      <div className="home_page_container">
        <div className="home_page_nav">
          <h1>constancenwaigwe</h1>
          <div>
            <SocialIcon
              url="https://github.com/ConstanceNwaigwe"
              bgColor="#141515"
              fgColor="white"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/constance-nwaigwe-06b90b177"
              bgColor="#141515"
              fgColor="white"
            />
          </div>
        </div>
        <div className="home_page_about">
          <div className="home_page_about_info">
            <h2 className="home_page_about_info_name">
              Hi, I'm <span>Constance Nwaigwe</span>
            </h2>
            <h2>Nice to meet you!</h2>
            <p>
              I'm a Software Engineer based in Maryland, United States. Creating
              accessible and functional web apps is what I'm passionate about.
            </p>
            <a className="home_page_contact" href="#contact">
              CONTACT ME
            </a>
          </div>
          <div className="home_page_about_img">
            <img
              alt="Pic of code"
              src="https://assets.website-files.com/636ebb4d131625f3efdea089/63d50d1c050b767c509c7e6f_no-code-platform.jpg"
            />
          </div>
        </div>
        <div className="home_page_skills">
          <div className="home_page_skills_container">
            {skillsData.map((data) => {
              return (
                <div className="home_page_skills_content">
                  <h4>{data.name}</h4>
                  <p>{data.years} Years Of Experience</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home_page_projects">
          <div className="home_page_projects_title">
            <h3>Projects</h3>
            <a className="home_page_contact" href="#contact">
              CONTACT ME
            </a>
          </div>
          <div className="home_page_projects_container">
            {projectsData.map((data) => {
              return (
                <div className="home_page_projects_content">
                  <img
                    alt={data.image}
                    src="https://assets.website-files.com/636ebb4d131625f3efdea089/63d50d1c050b767c509c7e6f_no-code-platform.jpg"
                  />
                  <h4>{data.name}</h4>
                  <p>{data.skills}</p>
                  <div className="home_page_projects_view">
                    <a className="home_page_contact" href={data.uipage}>
                      VIEW PROJECT
                    </a>
                    <a className="home_page_contact" href={data.code}>
                      VIEW CODE
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="home_page_footer_container">
        <div className="home_page_contacts" id="contact">
          <div className="home_page_contacts_heading">
            <h3>Contact Me</h3>
            <p>
              I would love to learn more about your company and its culture. You
              can reach me through email, linkedin, or a call.
            </p>
          </div>
          <div className="home_page_contacts_info">
            <p>constancenwaigwe@gmail.com</p>
            <p>240-393-9491</p>
            <div>
              <SocialIcon
                url="https://github.com/ConstanceNwaigwe"
                bgColor="#242524"
                fgColor="white"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/constance-nwaigwe-06b90b177"
                bgColor="#242524"
                fgColor="white"
              />
            </div>
          </div>
        </div>
        <div className="home_page_footer">
          <h4>constancenwaigwe</h4>
          <div>
            <SocialIcon
              url="https://github.com/ConstanceNwaigwe"
              bgColor="#242524"
              fgColor="white"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/constance-nwaigwe-06b90b177"
              bgColor="#242524"
              fgColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { HomePage };
