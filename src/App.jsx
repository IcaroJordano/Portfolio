import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Rotas } from "./pages/Rotas"

function App() {
  return (
    <div className="  bg-zinc-950 dark:bg-zinc-100  w-dvh flex justify-center  overflow-hidden">
      <div className="bg-zinc-900 border-x border-neutral-600/10 dark:bg-slate-50 lg:overflow-visible overflow-hidden h-full w-auto lg:w-11/12 ">
        <Header></Header>
        <Rotas/>
        <Footer/>        
      </div>
    </div>
  )
}

export default App
