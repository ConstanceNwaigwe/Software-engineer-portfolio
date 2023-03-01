import surveyPic from "./images/socialmediasurvey.png";
// import AandLPic from "./images/adviceandlaugh.png";
import { calculator } from "./images/calculator.png";
import resturantPic from "./images/krustykrabui.png";
import dataPic from "./images/krustykrabbackend.png";

const projectsData = [
  {
    image: resturantPic,
    name: "Krusty Krab Resturant",
    skills: "React CSS JavaScript",
    uipage: "https://krustykrabresturant.netlify.app/",
    code: "https://github.com/Constance-Nwaigwe/spongebob-UI",
  },
  {
    image: calculator,
    name: "React Calculator",
    skills: "React CSS JavaScript",
    uipage: "https://calculatorcreatedwithreact.netlify.app/",
    code: "https://github.com/ConstanceNwaigwe/web-module-project-reducer",
  },
  {
    image: surveyPic,
    name: "Social Media Survey",
    skills: "React CSS JavaScript",
    uipage: "https://socialmediasurvey.netlify.app/",
    code: "https://github.com/ConstanceNwaigwe/new-social-media-survey",
  },
  {
    image: dataPic,
    name: "Krusty Krab Backend data",
    skills: "Node Sequelize Express",
    uipage: "https://github.com/Constance-Nwaigwe/Spongebob-Recipes",
    code: "https://github.com/Constance-Nwaigwe/Spongebob-Recipes",
  },
];

export { projectsData };
