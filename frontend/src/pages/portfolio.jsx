import Landing from '../components/landing.jsx'
import Reminder from '../components/Reminder.jsx'
import Tstamp from '../assets/toulouse-stamp.png'
import Pstamp from '../assets/prague-stamp.png'
import Sstamp from '../assets/slovenia-stamp.png'
import HuGTicket from '../assets/HuG-ticket.png'
import { Link } from "react-router-dom";
import { useState } from 'react'
import Minime from './minime.jsx'
import frame from '../assets/paint-frame.png'

export default function Portfolio() {
    const[showReminder, setShowReminder] = useState(false);
    const handleTstampClick = () => {
        setShowReminder(true);
    }
    const closeTstampClick = () => {
        setShowReminder(false);
    }

  return (
    <div className="text-center mt-20">
        <Landing/>
        <h2 className='text-5xl mb-12' style={{fontFamily: 'Changa One'}}>Conceptrice de costumes</h2>
        <p>WORK PICS</p>
        <img src={frame} className='w-96 h-80 mx-auto block object-cover'/>
        <div className='mb-16'>
            {/* <img src={HuGTicket} className='w-100 h-60 object-cover mx-auto'/> */}
        </div>
        <h2 className='text-5xl mb-12' style={{fontFamily: 'Changa One, cursive'}}>World Stage</h2>
        <div className='flex justify-center gap-20 mb-28'>
            <Link to="/prague">
                <img src={Pstamp} className='w-72 h-50 object-cover hover:-translate-y-2 transition-all duration-300 cursor-pointer'/>
            </Link>
            <Link to="/slovenia">
                <img src={Sstamp} className='w-72 h-50 object-cover hover:-translate-y-2 transition-all duration-300 cursor-pointer'/>
            </Link>
            <img src={Tstamp} className='w-72 h-50 object-cover hover:-translate-y-2 transition-all duration-300 cursor-pointer'
            onClick={handleTstampClick}/> {/*hover:shadow-2xl*/}
        </div>
        <Minime/>
        <Reminder isOpen={showReminder}
        onClose={closeTstampClick}
        message='Message for future work * IN FRENCH *'/>
    </div>
  );
}