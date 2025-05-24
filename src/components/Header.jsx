import { ButtonDarkMode } from "./ButtonDarkMode";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import perfil from "../assets/perfil.png";
import { Link } from "react-router-dom";

export function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setIsHidden(true); // Esconde o menu ao rolar para baixo
      } else {
        setIsHidden(false); // Mostra o menu ao rolar para cima
      }
      setLastScrollTop(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Limpa o eventListener
  }, [lastScrollTop]);
  return (
    <header
      className={`w-full h-10 lg:h-11 z-50 transition-transform duration-300       fixed    align-baseline justify-between flex ${
        isHidden ? "-translate-y-full" : "translate-y-5"
      }`}
    >
      <Link to={'/'} >
      
      <img
        className="w-10 h-10 text-neutral-50 dark:text-neutral-600 border-neutral-50/50 p-1 border bg-zinc-800 ml-4 lg:ml-28 rounded-full dark:bg-neutral-50  dark:border-neutral-300/50 dark:border"
        src={perfil}
        alt=""
      /></Link>
      <NavDesktop></NavDesktop>
      <NavMobile></NavMobile>
      <ButtonDarkMode></ButtonDarkMode>
    </header>
  );
}
