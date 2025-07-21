import { Header } from "../../components/header";

export default function Home() {

  return (
    <div className="flex items-center flex-col bg-gradient-to-b from-amber-300 to-yellow-500 h-[100dvh] px-[10vw] select-none">
      <Header />
      <main className="border-2 w-full h-full"><h1>aqui é o main</h1></main>
      <footer className="border-2 w-full h-fit"><h1>aqui é o footer</h1></footer>
    </div>
  )
}