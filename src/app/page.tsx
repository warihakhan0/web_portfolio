import Image from "next/image";
import blue from "../app/blue.png"
import quiz from "../app/quiz.jpg";
import netflix from "../app/netflix.png";
// import pfp from "../app/ai.jpg";
import color from "../app/color.png";
import portfolio from "../app/portfolio.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import Footer from "../app/Footer/footer"
export default function Home() {
  return (
    <div 
    className="w-{100%} h-screen flex flex-col">
      <div className="bg-gradient-to-r from-black to-purple-950 flex flex-row-reverse justify-between h-auto">
        <Image src= {blue} width={420}  height={290} alt="picture" 
        className="rounded-full flex mr-6 mb-14"/>
        <div className="flex flex-col text-left justify-center">
        <h1 className="text-6xl font-serif font-bold text-gray-100 mx-10">Wariha Khan</h1>
        <p className="w-3/4 text-purple-300 my-6 mx-10">Welcome to my portfolio! I&apos;m Wariha Khan, a passionate and skilled Web Developer. My goal is to create impactful digital experiences through clean, functional, and user-centered design. Here, you&apos;ll find a collection of my projects, from web applications and design prototypes to collaborative work and case studies.</p>
        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-purple-800 w-1/4 p-2 text-white font-semibold text-lg font-serif hover:bg-purple-950 mx-10"><a href="/Contact" target="_blank">Contact Me </a></button>
        </div>
      </div>
      {/* About section */}
      <div className="bg-purple-700 h-auto p-10 flex flex-row justify-center">
        <div className="">
          <h2 className="text-white font-serif text-3xl mb-5 font-bold border-b-2 border-purple-950">About Me</h2>
          <p className="w-2/4 rounded-md text-purple-300 bg-purple-950 p-5">
<br />
<br />
My journey in development began with an interest in understanding how the web works, and it quickly grew into a fulfilling career path. I&apos;ve honed my skills in TypeScript, JavaScript, and various modern libraries and frameworks, including Next.js, React, and Inquirer.js. These tools allow me to build not only visually appealing but also high-performance applications that enhance user experience.
<br />
<br />
Whether collaborating with teams or working independently, I&apos;m always committed to producing high-quality results. When I&apos;m not coding, you might find me exploring the latest tech trends, learning new languages, or sharing knowledge with others in the developer community. I&apos;m excited to bring this energy and dedication to any project I work on!</p>
          <button type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-white mt-5 w-2/4 p-2 rounded-md font-serif font-semibold text-purple-950 hover:bg-purple-950 hover:text-white">
          <a href="https://milestones-coral.vercel.app/view.html" target="_blank">View Resume</a></button>
          <div className="flex flex-row gap-5 my-5 text-3xl text-slate-300 mx-20">
         <a href="https://www.instagram.com/wariha._/" target = "_blank"> <FaInstagram /></a>
         <a href="https://www.linkedin.com/in/wariha-ayoob-khan-5467b5279/" target="_blank"><FaLinkedinIn /></a>
         <a href="https://github.com/warihakhan2" target="_blank"><FaGithub /></a>
         <a href="https://discord.com/channels/@me" target="_blank"><FaDiscord /></a>
         
          </div>
        </div>
        <Image src={blue} width = {430} height={130} alt = "image" className="rounded-full mb-10 mr-5"/>
      </div>
      {/* Projects */}
      <div className="bg-purple-950 text-white my-5">
        <div className="font-serif text-center font-bold p-10">
          <h1 className="text-2xl">My Projects</h1>
          <h4 className="text-slate-300">My work</h4>
        </div>
        {/* projects */}
        <div className="flex flex-row justify-evenly my-9 mx-9">
          {/* 1st project */}
          <div className="bg-white h-auto text-black p-5 shadow-md shadow-black mb-10">
          <Image src = {quiz} height={230} width={210} alt = "calculator"/>
            <h3 className="mb-4 font-serif mt-2">Quiz app</h3>
            <button type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-yellow-500 p-2 rounded-lg text-white font-serif font-semibold shadow-md shadow-black"><a href="https://github.com/warihakhan2/Quiz-app-builder/tree/main/quiz%20app%20builder"  target="_blank">View Project</a></button>
          </div>
          {/* 1st project ends here */}
          {/* 2nd projects here */}
          <div className="bg-white h-auto text-black p-5 shadow-md shadow-black mb-10">
          <Image src = {netflix} height={230} width={210} alt = "calculator"/>
            <h3 className="mb-4 font-serif mt-2">Netflix Clone</h3>
            <button type="button"className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-yellow-500 p-2 rounded-lg text-white font-serif font-semibold shadow-md shadow-black">
              <a href="https://github.com/warihakhan2/Netflix-clone" target="_blank">View Project</a>
              </button>

          </div>
          {/* 2nd projects ends here */}
          {/* 3rd project starts here */}
          <div className="bg-white h-auto text-black p-5 shadow-md shadow-black mb-10">
          <Image src = {portfolio} height={230} width={210} alt = "calculator"/>
            <h3 className="mb-4 font-serif mt-2">Portfolio</h3>
            <button type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-yellow-500 p-2 rounded-lg text-white font-serif font-semibold shadow-md shadow-black">
              <a href="https://github.com/warihakhan2/simple-portfolio" target="_blank">View Project</a>
              </button>

          </div>
          {/* 3rd project ends here */}
          {/* 4th project starts Here */}
          <div className="bg-white h-auto text-black p-5 shadow-md shadow-black mb-10">
            <Image src = {color} height={230} width={210} alt = "calculator"/>
            <h3 className="mb-4 font-serif mt-2">Random color generator</h3>
            <button type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <a href="https://github.com/warihakhan2/random-color-generator" className="bg-yellow-500 p-2 rounded-lg text-white font-serif font-semibold shadow-md shadow-black">View Project</a>
              </button>
          </div>
{/* 4th project ends Here */}
        </div>
        {/* projects section ends here */}
      </div>
      {/* projects div ends here */}
      <Footer/>
    </div>
  );
}
