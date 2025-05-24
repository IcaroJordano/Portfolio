import { MdOutlineEmail } from "react-icons/md";
import perfil from "../assets/perfil.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const AboutPage = () => {
  const numero = "5585996837880";
  const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
  const link = isMobile
    ? `https://wa.me/${numero}`
    : `https://web.whatsapp.com/send?phone=${numero}`;

  return (
    <div className="py-24 flex flex-col lg:flex-row">
      <img
        className="flex lg:hidden w-72 lg:w-96 lg:h-96 h-72 m-14 rounded-xl rotate-6 "
        src={perfil}
        alt=""
      />
      <div className="lg:w-7/12 lg:ps-24">
        <h3 className="  text-3xl lg:-leading-9 lg:text-5xl lg:pt-24  p-4 font-semibold text-white dark:text-neutral-800">
          I’m Spencer Sharp. Eu moro em Nova York, onde eu desenho o futuro.
        </h3>
        <p className="p-4  text-neutral-300/80 leading-7   dark:text-neutral-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          possimus, beatae ab maxime, hic excepturi distinctio soluta ducimus
          aspernatur illum reprehenderit aliquid veritatis aliquam, consectetur
          voluptatum enim quibusdam quo sit!
          <br></br>
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          nesciunt omnis quidem fuga quaerat deleniti ullam necessitatibus
          cumque aperiam iure accusamus sequi eius iste, atque amet aliquid
          perspiciatis quia praesentium?
          <br></br>
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          nesciunt omnis quidem fuga quaerat deleniti ullam necessitatibus
          cumque aperiam iure accusamus sequi eius iste, atque amet aliquid
          perspiciatis quia praesentium?
        </p>
      </div>
      <div className=" flex-col pb-28 pt-20 ps-8">
        <img
          className="hidden lg:flex w-96 h-96 rounded-xl rotate-6 "
          src={perfil}
          alt=""
        />
        <div className=" flex-col gap-8 mt-12 h-6 flex">
          <a
            className="flex text-neutral-300/80 text-xm  dark:text-neutral-600  rounded-lg"
            href={link}
            target="blank"
          >
            <FaWhatsapp className="text-2xl mr-2"></FaWhatsapp>
            Fale comigo pelo Whatsapp
          </a>
          <a
            className="flex text-neutral-300/80 text-xm  dark:text-neutral-600  rounded-lg"
            href="mailto:icarojordano08@gmail.com?"
            target="blank"
          >
            <MdOutlineEmail className="text-2xl mr-2"></MdOutlineEmail>
            Fale comigo pelo Email
          </a>

          <a
            className="flex text-neutral-300/80 text-xm  dark:text-neutral-600  rounded-lg"
            target="_blank"
            href="https://github.com/IcaroJordano?tab=repositories"
          >
            <FaGithub className="text-2xl mr-2">.</FaGithub>
            Me siga no Github
          </a>
          <a
            className="flex text-neutral-300/80 text-xm  dark:text-neutral-600  rounded-lg"
            target="_blank"
            href="https://www.linkedin.com/in/icaro-jordano/"
          >
            <FaLinkedin className="text-2xl mr-2"></FaLinkedin>
            Me siga no Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
