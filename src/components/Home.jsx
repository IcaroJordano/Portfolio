import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Home({ title, descricao }) {

    const numero = "5585996837880";  
    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
    const link = isMobile
    ? `https://wa.me/${numero}`
    : `https://web.whatsapp.com/send?phone=${numero}`;

  return (
    <section className=" h-3/6 ">
      <h1 className=" ml-4 lg:ml-24 mt-40 lg:mt-36 text-3xl lg:text-4xl font-bold leading-snug lg:leading-tight w-11/12 lg:w-7/12  text-white dark:text-neutral-800">
        {title}
      </h1>
      <p className="ml-4 lg:ml-24 mt-7 lg:mt-6 w-12/12 lg:w-7/12 text-gray-400 dark:text-neutral-600 text-base leading-relaxed lg:leading-7 ">
        {descricao}
      </p>
      <div className="w-5/12 lg:w-2/12 ml-5 lg:ml-28 mt-8 h-6 flex  justify-between">
        <a
          className="text-neutral-300/80 scale-150 dark:text-neutral-600 w-1/6 rounded-lg"
          href={link}
          target="blank"
        >
          <FaWhatsapp></FaWhatsapp>
        </a>
        <a
          className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg"
          href="mailto:icarojordano08@gmail.com?"
          target="blank"
        >
          <MdOutlineEmail></MdOutlineEmail>
        </a>

        <a
          className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg"
          target="_blank"
          href="https://github.com/IcaroJordano?tab=repositories"
        >
          <FaGithub>.</FaGithub>
        </a>
        <a
          className="scale-150 text-neutral-300/80 dark:text-neutral-600 w-1/6 rounded-lg"
          target="_blank"
          href="https://www.linkedin.com/in/icaro-jordano/"
        >
          <FaLinkedin></FaLinkedin>
        </a>
      </div>
    </section>
  );
}
