import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
export default function Footer(){
    return(
      <div>
      <footer className="bg-purple-900 text-white pt-10 flex flex-row justify-between">
          <div className="ml-5 p-4 place-items-start">
            <a href="mailto:khanwariha092@gmail.com" target="_blank" className="font-semibold text-lg font-serif border-b-2 border-purple-400">Email Address</a>
            
          <p className="text-base text-slate-200 font-serif mt-2">Address: Pakistan, Sindh, Hyderabad</p>
          <h2 className="font-serif ">If want to work with me </h2>
        <button className="bg-purple-200 w-32 p-1 text-purple-950 font-semibold text-sm font-serif hover:bg-purple-950 hover:text-white mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><a href="/Contact" target="_blank">Contact Me </a></button>
          </div>
          <div className="flex flex-col">
          <h2 className="font-semibold text-lg font-serif border-b-2 border-purple-400 w-48 ml-4">Give Your Feedback</h2>
          <textarea name="" id="feedback" placeholder="Give your Reviews" cols={40} rows={8} className="bg-purple-400 text-purple-950 mt-4 mr-4 mb-4"></textarea>
          </div>
      </footer>
        <div className="flex flex-row justify-center gap-10 text-3xl mt-5">
     <a href="https://www.instagram.com/wariha._/" target = "_blank"> <FaInstagram /></a>
     <a href="https://www.linkedin.com/in/wariha-ayoob-khan-5467b5279/" target="_blank"><FaLinkedinIn /></a>
     <a href="https://github.com/warihakhan2" target="_blank"><FaGithub /></a>
     <a href="https://discord.com/channels/@me" target="_blank"><FaDiscord /></a>
        </div>
        <div className="bg-white mt-4 p-3">
        <p className="text-center bg-white text-purple-900 font-semibold">&copy; Wariha Khan. All Rights Reserved.</p>
        </div>
        </div>
    );
}