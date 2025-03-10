import "./styles.css";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { SocialIcon } from "react-social-icons";
import { skillsData } from "./skillsdata";
import { projectsData } from "./projectsdata";
import profile from "./images/profile.png";

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
              accessible and responsive web applications is what I'm passionate
              about.
            </p>
            <a className="home_page_contact" href="#contact">
              CONTACT ME
            </a>
          </div>
          <div className="home_page_about_img">
            <img alt="Pic of code" src={profile} />
          </div>
        </div>
        <div className="home_page_skills">
          <div className="home_page_skills_container">
            {skillsData.map((data) => {
              return (
                <div className="home_page_skills_content">
                  <h4>{data.name}</h4>
                  <ProgressBar
                    completed={data.percentage}
                    bgColor={data.color}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="home_page_projects">
          <div className="home_page_projects_title">
            <h3>Projects</h3>
            <a
              className="home_page_contact"
              href="https://github.com/ConstanceNwaigwe?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              VIEW ALL
            </a>
          </div>
          <div className="home_page_projects_container">
            {projectsData.map((data) => {
              return (
                <div className="home_page_projects_content">
                  <div>
                    <a href={data.uipage} target="_blank" rel="noreferrer">
                      <img alt={data.name} src={data.image} />
                    </a>
                  </div>
                  <h4>{data.name}</h4>
                  <p>{data.skills}</p>
                  <p>{data.description}</p>
                  <div className="home_page_projects_view">
                    <a
                      className="home_page_contact"
                      href={data.uipage}
                      target="_blank"
                      rel="noreferrer"
                    >
                      VIEW PROJECT
                    </a>
                    <a
                      className="home_page_contact"
                      href={data.code}
                      target="_blank"
                      rel="noreferrer"
                    >
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
              Have a project? No matter how big or small, I'm sure I can help.
              You can reach me through linkedin.
            </p>
          </div>
          <div className="home_page_contacts_info">
            <p>Connect with me on linkedin or github</p>
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
