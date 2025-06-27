import logo from "../../assets/logo.png"
const Navbar = () =>{
    return(
        <header className="flex p-4 gap-3 border-b-2 border-gray-300">
           <div className="w-12 h-12 cursor-pointer">
             <img className="w-full h-full" src={logo} alt="logo"/>
           </div>
           <h1 className="text-emerald-800 text-4xl font-bold cursor-pointer">Noto</h1>
        </header>
    )
}

export default Navbar