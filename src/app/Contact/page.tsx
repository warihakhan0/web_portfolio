import Footer from "../Footer/footer"
export default function Contact(){
    return(
        <div>
            <div className="bg-purple-700 text-white place-items-center flex flex-col p-10 text-serif font-semibold">
                Email: <a href="mailto:khanwariha092@gmail.com">Khanwariha092@gmail.com</a>
                contact: +92 3313106066
            </div>
            <form action="" className="flex flex-col place-items-center outline-none p-5 justify-between">
                <input type="text" name="" id="name" placeholder="Name" className="p-2 m-4 rounded-md bg-purple-200 text-white shadow-md shadow-black w-1/4"/>
                <input type="tel" placeholder="+92 000 00000" className="p-2 rounded-md m-4 bg-purple-200 text-white shadow-md shadow-black w-1/4"/>
                <input type="email" name="" id="mail" placeholder="mail@gmail.com" className="p-2 m-4 rounded-md bg-purple-200 text-white shadow-md shadow-black w-1/4"/>
                <button type="submit" className=" bg-purple-900 text-white font-sreif font-semibold p-2 w-1/4 rounded-sm hover:bg-purple-400 hover:text-purple-950">Submit</button>
            </form>
            <Footer/>
        </div>
    )
}