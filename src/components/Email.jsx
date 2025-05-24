import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";
export function Email() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:IcarojordanoO8@gmail.com?subject=Contato via site&body=Olá, meu e-mail é: ${email}`;
  };

  return (
    <div className="w-11/12 lg:w-10/12 rounded-2xl pl-5 pt-5 border-solid border dark:border-neutral-300/50 border-neutral-600/50">
      <h2 className="flex items-center text-slate-100 font-bold text-sm dark:text-neutral-800">
        <MdOutlineMailOutline className="w-7 mr-3 scale-150 text-neutral-600" />
        Mantenha-se atualizado
      </h2>
      <p className="my-4 text-gray-400/90 text-sm w-5/6 dark:text-neutral-600">
        Entre em contato pelo e-mail a qualquer momento. Sem compromisso e no
        seu tempo.
      </p>
      <form className="flex flex-row h-10 my-5" onSubmit={handleSubmit}>
        <input
          className="lg:w-72  w-60 bg-zinc-600/10 dark:bg-zinc-300/30 dark:text-black/100 text-white/100 mr-3 lg:mr-5 pl-3 text-sm rounded-lg border-solid border border-neutral-600 dark:border-neutral-300"
          type="email"
          placeholder="Endereço de e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="lg:w-12 w-14 dark:bg-neutral-800 font-bold decoration-white text-slate-50 text-sm bg-gray-400/40 rounded-md cursor-pointer"z
          type="submit"
          value="Join"
        />
      </form>
    </div>
  );
}
