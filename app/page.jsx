"use client";
import React, { useEffect } from "react";
import Medialogo from "@/components/Medialogo";
import Navoptions from "@/components/Navoptions";
import HeroCard from "@/components/HeroCard";
import Heading from "@/components/Heading";
import Skillcard from "@/components/Skillcard";
import Timeline from "@/components/Timeline";
import Leftcard from "@/components/Leftcard";
import Rightcard from "@/components/Rightcard";
import Projectcard from "@/components/Projectcard";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const Home = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 30,
        slideShadows: false,
        depth: 200,
        scale: 2,
        modifier: 1,
        stretch: 2,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  const skillContent = [
    {
      title: "Web Technologies",
      logoImg: "techstack.png",
      content: [
        "HTML for semantic markup.",
        "CSS for stylish web design.",
        "JavaScript for interactivity and dynamic content.",
        "Responsive web design principles.",
        "Browser compatibility and optimization.",
      ],
    },
    {
      title: "React.js",
      logoImg: "react.png",
      content: [
        "Building reusable components.",
        "State management with hooks and context.",
        "Routing with React Router.",
        "Fetching data from APIs with useEffect.",
      ],
    },
    {
      title: "Next.js",
      logoImg: "nextjs.png",
      content: [
        "Server-side rendering for improved performance.",
        "Static site generation for fast-loading pages.",
        "API routes for serverless functions.",
      ],
    },
    {
      title: "Node.js",
      logoImg: "nodejs.png",
      content: [
        "Express.js for building scalable server applications.",
        "RESTful API design and implementation.",
        "Working with npm packages and modules.",
      ],
    },
    {
      title: "Tailwind CSS",
      logoImg: "tailwind.png",
      content: [
        "Utility-first approach for rapid UI development.",
        "Responsive and mobile-first design.",
        "Customizing styles with configuration.",
      ],
    },
    {
      title: "Java",
      logoImg: "java.png",
      content: [
        "Core Java programming and object-oriented concepts.",
        "Database connectivity with JDBC.",
        "Multithreading and exception handling.",
        "Building GUI applications with Swing.",
      ],
    },
    {
      title: "C Programming",
      logoImg: "c.png",
      content: [
        "Data structures and algorithms implementation.",
        "Memory management and pointers.",
        "File handling and input/output operations.",
      ],
    },
    {
      title: "Python",
      logoImg: "python.png",
      content: [
        "Basic syntax and data types.",
        "Control structures and loops.",
        "File handling and data manipulation.",
        "Introduction to popular libraries like NumPy and Pandas.",
      ],
    },
  ];

  return (
    <div className="mainArea w-screen h-screen bg-black flex overflow-x-hidden">
      <div className="left bg-[#17252A] min-h-full w-[300px] fixed flex flex-col items-center justify-center gap-5">
        <div className="pfp rounded-full bg-[#2B7A78] w-[160px] h-[160px] flex justify-center items-center">
          <img
            src="pfp.jpg"
            alt=""
            style={{
              height: "150px",
              width: "150px",
              borderRadius: "100%",
            }}
          />
        </div>

        <h1 className="text-[#DEF2F1]  text-3xl font-medium">Aryan Singh</h1>
        <div className="phrase w-full flex flex-col items-center">
          <div className="line w-4/5 h-[1px] bg-[#DEF2F1]"></div>
          <h4 className="text-lg text-[#DEF2F1] font-light my-4">
            "Stay hungry, stay foolish."
          </h4>
          <div className="line w-4/5 h-[1px] bg-[#DEF2F1]"></div>
        </div>
        <div className="smedia w-full flex items-center justify-around">
          <Medialogo
            imgURL={"linkedin.png"}
            dimension={40}
            trans_bg={"#0A66C2"}
          />
          <Medialogo
            imgURL={"github.png"}
            dimension={30}
            trans_bg={"#161616"}
          />
          <Medialogo imgURL={"instagram.png"} dimension={30} />
        </div>
        <div className="navbar text-center w-full h-auto mx-2 flex flex-col items-center">
          <Navoptions content={"ABOUT ME"} />
          <Navoptions content={"MY SKILLS"} />
          <Navoptions content={"WORK EXPERIENCE"} />
          <Navoptions content={"EDUCATION"} />
          <Navoptions content={"PROJECTS"} />
        </div>
        <div className="buttons w-3/4 flex justify-around items-center">
          <button className="text-[#DEF2F1] text-sm bg-[#2B7A78] px-2 py-1 rounded-md shadow-sm shadow-black hover:bg-[#DEF2F1] hover:text-[#2B7A78] transition-all">
            CONTACT ME
          </button>
          <button className="text-[#DEF2F1] text-sm bg-[#2B7A78] px-2 py-1 rounded-md shadow-sm shadow-black hover:bg-[#DEF2F1] hover:text-[#2B7A78] transition-all">
            GET MY CV
          </button>
        </div>
      </div>
      <div className="right bg-[#3AAFA9] h-full w-full overflow-y-auto ml-[300px]">
        <div className="hero w-full p-12">
          <div className="top">
            <h1
              className="text-[80px] text-[#FEFFFF] font-semibold tracking-wide"
              style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}
            >
              ARYAN
            </h1>
            <h1
              className="text-[80px] text-[#17252A] font-semibold tracking-wide ml-20 "
              style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)" }}
            >
              SINGH
            </h1>
          </div>

          <div className="bottom w-full h-[300px] flex justify-center items-center mt-32">
            <HeroCard />
          </div>
        </div>

        <div className="skills w-11/12  h-auto mx-12  flex flex-col justify-center items-center">
          <Heading content={"MY SKILLS"} />
          <div className="cards flex flex-wrap  w-11/12 ">
            {skillContent.map((skill, index) => (
              <Skillcard
                title={skill.title}
                logoImg={skill.logoImg}
                content={skill.content}
              />
            ))}
          </div>
        </div>

        <div className="exp w-full h-auto  flex  flex-col justify-center items-center mt-10 ml-10 overflow-x-hidden">
          <Heading content={"WORK EXPERIENCE"} />
          <div className="timeline w-full h-full  flex justify-center pb-10">
            <div className="left w-5/12 h-full">
              <Leftcard
                style={{ marginTop: "69px" }}
                title={"Campus Ambassador"}
                content={"Thrived as a Careers360 Campus Ambassador, excelling in outreach."}
                year={"Dec 23 - Jan 24"}
                logoImg={"careers360.png"}
              />
            </div>
            <div className="middle  w-[7px] h-full">
              <Timeline />
              <Timeline />
            </div>
            <div className="right  w-5/12 h-full">
              <Rightcard 
              style={{ marginTop: "206px" }} 
              title={"Internshala Student Partner"}
                content={"Student Partner: Fueled collaboration, fostering student engagement and success."}
                year={"Dec 23 - Jan 24"}
                logoImg={"internshala.png"}
              />
            </div>
          </div>
        </div>

        <div className="education mt-16 ml-10 w-full">
          <Heading content={"EDUCATION"} />
          <div className="timeline w-full h-full  flex justify-center">
            <div className="left w-5/12 h-full">
              <Leftcard
                style={{ marginTop: "207px" }}
                title={"St. Joseph's College, Prayagraj"}
                content={"Completed high school with 100 in CS and 91.2% overall."}
                year={"2019"}
                logoImg={"sjc.png"}
              />
            </div>
            <div className="middle  w-[7px] h-full">
              <Timeline />
              <Timeline />
              <Timeline />
            </div>
            <div className="right  w-5/12 h-full">
              <Rightcard
                style={{ marginTop: "69px" }}
                title={"St. Joseph's College, Prayagraj"}
                content={"Secured 92% in 12th grade with a standout 98 in Computer Science."}
                year={"2021"}
                logoImg={"sjc.png"}
              />
              <Rightcard 
              style={{ marginTop: "156px" }}
              title={"SRM University, Haryana (Delhi-NCR)"}
                content={"BTech. in Computer Science Engineering with specialization in Data Science and Artificial Intellligence [ CGPA - 9.12 ]"}
                year={"2022 - Present "}
                logoImg={"srm.png"}
              />
            </div>
          </div>
        </div>

        <div className="projects w-auto h-auto  ml-10 my-16">
          <Heading content={"PROJECTS"} />
          <div className="swiper w-[700px] h-[200px] rounded-lg  p-32 ">
            <div className="swiper-wrapper">
              <div className="swiper-slide ">
                <Projectcard
                  title={"Project Title"}
                  content={"Something very important !"}
                  logoImg={"c.png"}
                />
              </div>
              <div className="swiper-slide">
                <Projectcard
                  title={"Project Title"}
                  content={"Something very important !"}
                  logoImg={"c.png"}
                />
              </div>
              <div className="swiper-slide ">
                <Projectcard
                  title={"Project Title"}
                  content={"Something very important !"}
                  logoImg={"c.png"}
                />
              </div>
              <div className="swiper-slide ">
                <Projectcard
                  title={"Project Title"}
                  content={"Something very important !"}
                  logoImg={"c.png"}
                />
              </div>
              <div className="swiper-slide ">
                <Projectcard
                  title={"Project Title"}
                  content={"Something very important !"}
                  logoImg={"c.png"}
                />
              </div>
              <div className="swiper-slide ">
                <Projectcard
                  title={"Project Title"}
                  content={"Something very important !"}
                  logoImg={"c.png"}
                />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
