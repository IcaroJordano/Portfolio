import axios from "axios";
import CardProjeto from "../components/CardProjeto";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
              {    
              allProjetos{
              titulo
              logo{
              url}
              isbest
              description
              linkDeploy
              data
              imagemImg{url} 
              }

               }  
                `,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Icaro Jordano 8b133e7fe63b082e4161293a105f24`,
          },
        }
      )
      .then((res) => {
        setProjects(res.data.data["allProjetos"]);
        console.log(res.data.data["allProjetos"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="py-24 ">
      <h2 className="w-11/12 lg:w-8/12 text-3xl lg:-leading-9 lg:text-5xl lg:pt-24 lg:ps-24 p-4 font-semibold text-white dark:text-neutral-800 ">
        Coisas que fiz tentando colocar minha marca no universo.
      </h2>
      <p className="p-4 lg:w-8/12 lg:ps-24 text-neutral-300/80 leading-7   dark:text-neutral-600">
        Trabalhei em diversos projetos ao longo dos anos, mas estes são os que
        mais me orgulho. Muitos deles são de código aberto, então se você vir
        algo que desperte seu interesse, confira o código e contribua se tiver
        ideias de como ele pode ser melhorado.
      </p>
      <div className="flex flex-wrap pt-16 lg:px-16 gap-y-14">
        {projects.map((projeto) => (
          <div className="w-full lg:w-4/12">
            <CardProjeto projeto={projeto} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;
