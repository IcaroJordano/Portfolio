import { useEffect, useState } from "react";

export default function Images({ projetos }) {
  const [maxItens, setMaxItens] = useState(5);

  useEffect(() => {
    const updateMaxItens = () => {
      const width = window.innerWidth;
      setMaxItens(width < 1024 ? 3 : 5); // <1024px = mobile
    };

    updateMaxItens(); // roda na montagem
    window.addEventListener("resize", updateMaxItens); // escuta mudanças

    return () => window.removeEventListener("resize", updateMaxItens); // cleanup
  }, []);

  // pega só os primeiros N projetos com isbest === true
  const projetosFiltrados = projetos?.filter(p => p).slice(0, maxItens);

  return (
    <section className="flex relative w-fit lg:mx-auto lg:justify-center lg:w-fit overflow-x-hidden overflow-hidden lg:overflow-visible mt-16  lg:-ml-28 -ml-16 gap-4  " >
      {projetosFiltrados.map((projeto, index) => (
        <a key={index} target="_blank" href={projeto.linkDeploy}>
          <img
            alt=""
            src={projeto.imagemImg?.url || ""}
            className={`bg-white dark:bg-neutral-600 rounded-2xl ${
              index % 2 === 0 ? "rotate-2" : "-rotate-2"
            } object-cover min-w-28 w-48  lg:w-72 h-48 lg:h-80 mx-5 lg:mx-4`}
          />
        </a>
      ))}
    </section>
  );
}
