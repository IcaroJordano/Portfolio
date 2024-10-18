import { CardWork } from "./CardWork";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { IoIosArrowRoundDown } from "react-icons/io";

export function Work() {
    return (
        <div className=" w-11/12 lg:w-10/12 pb-10 mt-10 border-solid rounded-2xl border dark:border-neutral-300/50 border-neutral-600/50">
            <h2 className="flex text-slate-100 dark:text-neutral-800 font-bold text-sm m-6"><BsFillSuitcaseLgFill className="w-7 mr-3 scale-150 text-neutral-500" >.</BsFillSuitcaseLgFill> Work</h2>
            <CardWork></CardWork>
            <CardWork></CardWork>
            <CardWork></CardWork>
            <CardWork></CardWork>
            <a className="px-20 justify-center items-center flex lg:px-36 py-3 text-sm text-white dark:text-neutral-900 font-medium dark:bg-neutral-200/50 rounded-md mx-6 lg:ml-7 bg-neutral-600/10" href="">Download CV <IoIosArrowRoundDown className="scale-150 ml-2"></IoIosArrowRoundDown></a>
        </div>
    )
}