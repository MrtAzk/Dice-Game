import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import Player from './components/player'
import Computer from './components/computer'

function App() {
  const [playerName, setPlayerName] = useState();

  useEffect(() => {
    const name = window.prompt("Lütfen oyuncu adınızı girin:", playerName);
    if (name) setPlayerName(name);
  }, []);



  const [rolling, setRolling] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState(false)
  const rollDice = () => {
    setResult(false)
    setRolling(true);
    setTimeout(() => { setRolling(false); setResult(true); }, 3000);

  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center' >
      <div className='mb-72'>
        {result && (
          <span>
            Sonuç: {playerScore===computerScore ? "Berabere bir daha zar attın " :playerScore < computerScore ? 'Kazanan Computer' : `Kazanan ${playerName}`}
          </span>
        )}
      </div>
      <div className='flex gap-20 mb-10 items-center justify-center'>
        <Player rolling={rolling} score={setPlayerScore} name={playerName} />
        <Computer rolling={rolling} score={setComputerScore} />
      </div>

      <button
        onClick={rollDice}

        className="px-8 py-4 w-3xl bg-black text-purple-700 font-bold rounded-xl shadow-lg hover:bg-purple-400 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Zar At
      </button>




    </div>



  )
}

export default App
