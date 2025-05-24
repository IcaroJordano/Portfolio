import { Link } from "react-router-dom";

export function NavDesktop() {

    return(
        <nav className={`w-96 hidden lg:flex align-bottom text-slate-100 dark:text-slate-900 justify-around bg-zinc-800 dark:bg-neutral-50 rounded-full dark:border-neutral-300/50 dark:border`} >
                <Link className=" text-sm text-center my-auto " to="/">Home</Link>
                <Link className=" text-sm text-center my-auto " to="/about">About</Link>
                <Link className=" text-sm text-center my-auto " to="/services">Tools</Link>
                <Link className=" text-sm text-center my-auto " to="/projects">Projects</Link>
        </nav>
    )
}