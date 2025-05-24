import { FaLink } from "react-icons/fa";

const CardProjeto = ({projeto}) => {
  return (
    <div className="group hover:bg-neutral-800 hover:dark:bg-neutral-100 cursor-pointer  p-8 rounded-xl ">
      <a href={projeto.linkDeploy} target="_blank" >
        <img
          className="p-1 bg-neutral-700 object-cover w-11 h-11 rounded-full"
          src={projeto.logo?.url}
          alt=""
        />
        <h3 className="font-semibold text-white dark:text-neutral-800 py-4">
          {projeto.titulo}
        </h3>
        <p className=" line-clamp-3 text-neutral-300/80 leading-7   dark:text-neutral-600">
          {projeto.description}
        </p>
        <a className="my-4 flex items-center text-neutral-500 group-hover:text-teal-500 ">
          <FaLink className="text-sm mr-2" />
          Ver Projeto
        </a>
      </a>
    </div>
  );
};
export default CardProjeto;
