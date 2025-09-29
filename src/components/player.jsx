import { useEffect, useState } from "react"
import dice1 from '../assets/dice1.png';
import dice2 from '../assets/dice2.png';
import dice3 from '../assets/dice3.png';
import dice4 from '../assets/dice4.png';
import dice5 from '../assets/dice5.png';
import dice6 from '../assets/dice6.png';

const Player = ({rolling,score ,name}) => {
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
     const [playerRoll, setPlayerRoll] = useState(1);


    useEffect(() => {
        if (rolling) {
            const interval = setInterval(() => {

                const random = Math.ceil(Math.random() * 6)
                setPlayerRoll(random)
                score(random)

            }, 100)
            return () => clearInterval(interval)
        }

    }, [rolling])



    return (
        <div className="flex flex-col items-center">
            <h2>{name}</h2>
            <img src={diceImages[playerRoll - 1]} alt={`Dice ${playerRoll}`} />
        </div>
    )
}
export default Player;