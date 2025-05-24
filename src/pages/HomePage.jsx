import { useEffect, useState } from "react";
import Content from "../components/Content";
import Home from "../components/Home";
import Images from "../components/Images";
import axios from "axios";

const HomePage = () => {
  const [homepage, setHomepage] = useState([]);
  const [projects, setProjects] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
              {    
              allHomepages{
                title
                curriculo{
                url}
    description
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
        setHomepage(res.data.data["allHomepages"][0]);
        console.log(res.data.data["allHomepages"][0]);
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

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
          
{
  allWorks{
    title
    tipo
    time
    
    logo{
    	url
    }
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
        setWorks(res.data.data["allWorks"]);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
              {    
              allProjetos{
              titulo
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
    <div>
      <Home title={homepage.title} descricao={homepage.description} />
      <Images projetos={projects} />
      <Content works={works} curriculo={homepage.curriculo?.url} projetos={projects} />
    </div>
  );
};
export default HomePage;
