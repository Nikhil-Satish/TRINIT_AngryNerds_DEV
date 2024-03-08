// Timer.js
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Timer = () => (

  <CountdownCircleTimer
    isPlaying
    duration={70}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
  
    {/* {({ remainingTime }) => remainingTime} */}
    {({ remainingTime }) => {
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60
    
        return `${hours}:${minutes}:${seconds}`
    }}
  </CountdownCircleTimer>
)

export default Timer;
