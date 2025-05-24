import { IoIosArrowForward } from "react-icons/io";

export function CardNota({ projeto }) {
  return (
    <>
      {projeto.isbest && (
        <a
          className=" lg:rounded-2xl W-10/12 lg:w-9/12 p-7 pl-5  lg:mx-24 lg:mb-10 hover:bg-neutral-800 dark:hover:bg-neutral-200/20 hover:bg-neutral-500/[.09] duration-400"
          target="_blank"
          href={projeto.linkDeploy}
        >
          <h2 className="text-gray-400/50 dark:text-gray-400 text-base  lg:text-sm">
            | {projeto.data}
          </h2>
          <h3 className="text-white text-lg lg:text-base my-3 font-bold dark:text-neutral-800 ">
            {projeto.titulo}
          </h3>
          <p className="mb-3 text-gray-400/90 dark:text-neutral-600 text-sm w-full  leading-relaxed">
            {projeto.description}
          </p>
          <a className="text-teal-500 text-sm flex items-center" href="">
            Ler artigo <IoIosArrowForward className="ml-1"></IoIosArrowForward>{" "}
          </a>
        </a>
      )}
    </>
  );
}
