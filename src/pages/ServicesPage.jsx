import axios from "axios";
import { useEffect, useState } from "react";

const ServicesPage = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
             
{
  allSkills{
    title
    descricao
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
        setSkills(res.data.data["allSkills"]);
        console.log(res.data.data["allHomepages"]);
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(() => {
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, [1000]);
    // });
  }, []);

  return (
    <div className="py-28">
      <div className=" lg:w-8/12 lg:ps-24">
        <h3 className="ps-8  text-3xl lg:-leading-9 lg:text-5xl lg:pt-8  p-4 font-semibold text-white dark:text-neutral-800">
          Software que uso, gadgets que adoro e outras coisas que recomendo.
        </h3>
        <p className="ps-8 p-4 my-8 text-neutral-300/80 leading-7   dark:text-neutral-600">
          Me perguntam muito sobre as coisas que eu uso para construir software,
          permanecer produtivo ou que ja tive vivencia. Aqui está uma grande
          lista de todas as minhas coisas favoritas.
        </p>
        <div className="border-s  ms-4 ps-4">
          {skills?.map((skill) => (
            <div>
              <h4 className="text-lg lg:-leading-9    p-4 font-semibold text-white dark:text-neutral-800">
                {skill.title}
              </h4>
              <p className="pt-0 lg:w-9/12 text-sm  p-4  text-neutral-300/80 leading-7   dark:text-neutral-600">
                {skill.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesPage;
