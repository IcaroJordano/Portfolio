export function CardWork({work}) {
    return (
        <div className="lg:w-11/12 w-10/12 h-14 my-5  ml-6 flex">
            <img className="bg-neutral-600 max-w-11 max-h-10 rounded-full" src={work.logo?.url} alt="" />
            <div className="w-full pl-3 text-sm">
                <h3 className=" text-slate-100 dark:text-neutral-800 ">{work.title}</h3>
                <div className="flex justify-between text-xs  text-gray-400/90 ">
                    <p>{work.tipo}</p>
                    <p>{work.time}</p>
                </div>
            </div>
        </div>
    )
}