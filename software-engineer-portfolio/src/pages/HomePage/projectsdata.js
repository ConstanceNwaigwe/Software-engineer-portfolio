import surveyPic from "./images/socialmediasurvey.png";
import AandMPic from "./images/adviceandlaugh.png";
// import calculator from "./images/calculator.png";
import resturantPic from "./images/krustykrabui.png";
import dataPic from "./images/krustykrabbackend.png";

const projectsData = [
  {
    image: AandMPic,
    name: "Advice and Memes",
    description:
      "An advice generator where developer can get helpful advice and also laugh at programming memes.",
    skills: "React CSS JavaScript",
    uipage: "https://adviceandmemes.netlify.app/",
    code: "https://github.com/Constance-Nwaigwe/Advice-and-Memes",
  },
  {
    image: surveyPic,
    name: "Social Media Survey",
    description:
      "A survey page made to collect infomation about how long user spend on social media.",
    skills: "React CSS JavaScript",
    uipage: "https://socialmediasurvey.netlify.app/",
    code: "https://github.com/ConstanceNwaigwe/new-social-media-survey",
  },
  {
    image: resturantPic,
    name: "Krusty Krab Resturant",
    description:
      "A website site created for the krusty krab from the tv show spongebob squarepants.",
    skills: "React CSS JavaScript",
    uipage: "https://krustykrabresturant.netlify.app/",
    code: "https://github.com/Constance-Nwaigwe/spongebob-UI",
  },
  {
    image: dataPic,
    name: "Krusty Krab Backend data",
    description:
      "The backend server for the krusty krab that holds user information and the recipes used.",
    skills: "Node Sequelize Express",
    uipage: "https://github.com/Constance-Nwaigwe/Spongebob-Recipes",
    code: "https://github.com/Constance-Nwaigwe/Spongebob-Recipes",
  },
];

export { projectsData };
