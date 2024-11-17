import quiz from "../quiz.jpg";
import netflix from "../netflix.png";
import color from "../color.png";
import portfolio from "../portfolio.png";
import Image from "next/image";
import Footer from "../Footer/footer"
export default function projects(){
    return(
        <div className="p-5 bg-gradient-to-r from-purple-950 to-black">
              <div className="flex flex-col justify-evenly my-9 mx-9">
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
        <Footer/>
      </div>
    );
}