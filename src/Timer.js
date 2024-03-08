// Timer.js
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Timer = () => (

  <CountdownCircleTimer
    isPlaying
    duration={70}
    size={90}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[300, 60, 15, 0]}
  >
  
    {/* {({ remainingTime }) => remainingTime} */}
    {({ remainingTime }) => {
        const hours = Math.floor(remainingTime / 3600)
        let hh = String(hours).padStart(2,'0');
        const minutes = Math.floor((remainingTime % 3600) / 60)
        let mm = String(minutes).padStart(2,'0');
        const seconds = remainingTime % 60
        let sec = String(seconds).padStart(2,'0');
    
        return `${hh}:${mm}:${sec}`
    }}
  </CountdownCircleTimer>
)

export default Timer;
