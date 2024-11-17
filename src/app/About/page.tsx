import blue from "../blue.png"
import Image from "next/image"
import Footer from "../Footer/footer"
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

export default function About(){
    return(
        <div className="bg-purple-700 h-auto flex flex-col justify-evenly">
          <div className="flex flex-row p-10">
        <div className="">
          <h2 className="text-white font-serif text-3xl mb-5 font-bold border-b-2 border-purple-950">About Me</h2>
          <p className="w-2/4 rounded-md text-purple-300 bg-purple-950 p-5">
<br />
<br />
My journey in development began with an interest in understanding how the web works, and it quickly grew into a fulfilling career path. I've honed my skills in TypeScript, JavaScript, and various modern libraries and frameworks, including Next.js, React, and Inquirer.js. These tools allow me to build not only visually appealing but also high-performance applications that enhance user experience.
<br />
<br />
Whether collaborating with teams or working independently, I’m always committed to producing high-quality results. When I’m not coding, you might find me exploring the latest tech trends, learning new languages, or sharing knowledge with others in the developer community. I'm excited to bring this energy and dedication to any project I work on!</p>
          <button type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-white mt-5 w-2/4 p-2 rounded-md font-serif font-semibold text-purple-950 hover:bg-purple-950 hover:text-white">
          <a href="https://milestones-coral.vercel.app/view.html" target="_blank">View Resume</a></button>
          <div className="flex flex-row gap-5 my-5 text-3xl text-slate-300 mx-20">
         <a href="https://www.instagram.com/wariha._/" target = "_blank"> <FaInstagram /></a>
         <a href="https://www.linkedin.com/in/wariha-ayoob-khan-5467b5279/" target="_blank"><FaLinkedinIn /></a>
         <a href="https://github.com/warihakhan2" target="_blank"><FaGithub /></a>
     <a href="https://discord.com/channels/@me" target="_blank"><FaDiscord /></a>
          </div>
        </div>
        <Image src={blue} width = {430} height={130} alt = "image" className="rounded-full mb-5 mr-9"/>
        </div>
        <Footer/>
      </div>
    );
}