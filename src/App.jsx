import './App.css'
import Title from './components/Title'
import Counter from './components/Counter'
import BlueBackgorund from "./assets/blue-background.avif"

function App() {


  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-center" style={{backgroundImage: `url(${BlueBackgorund})`}}>
      <div className="min-w-[50%] min-h-[300px] bg-neutral-200 rounded-2xl p-8">
        <Title title="Contagem Regressiva para 2026"/>
        <div className="flex justify-center items-center h-[200px] gap-[2rem]">
          <Counter title="Dias" number={2} />
          <Counter title="Horas" number={2} />
          <Counter title="Minutos" number={2} />
          <Counter title="Segundos" number={2} />
        </div>
      </div>
    </div>
  )
}

export default App
