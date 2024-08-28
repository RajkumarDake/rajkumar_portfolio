import React from "react";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden ">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-20 absolute bottom-0"
      />
      <div className="z-20 flex items-center justify-center gap-3 m-2 flex-wrap">
        <ProjectCard
          name={"Resort Review Website"}
          image={"/project/img1.png"}
          about={
            "You can write and read resort review in it and it is built on NodeJS, its backend uses mongodb. And it is also mobile responsive"
          }
          demo={"https://riseinn.onrender.com/"}
          code={"https://github.com/RajkumarDake/RiseIn"}
        />
        <ProjectCard
          name={"Code Box"}
          image={"/project/img2.png"}
          about={
            "meet Code Box an online frontend ide where we can write html, css , Java Script in one page."
          }
          demo={"https://rajkumardake.github.io/Codebox.github.io/"}
          code={"https://github.com/RajkumarDake/Codebox.github.io"}
        />
      </div>
    </div>
  );
}

export default Project;
