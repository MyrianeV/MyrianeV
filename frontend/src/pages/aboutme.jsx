import front from '../assets/front-postcard.png'
import back from '../assets/back-postcard.png'
import { useState } from 'react';

export default function AboutMe() {
  const[isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="text-center mt-20">
       <p className='mb-10'>You wanted to know more about me? im blushing</p>
      {/* POSTCARD CODE */}
      <div className="flex justify-center mb-8">
        <div className='relative w-[700px] h-[500px] cursor-pointer transition-transform duration-300 hover:-translate-y-1'
        style={{perspective: '1000px'}}
        onClick={handleFlip}>
          <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-gpu ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}>
                  {/* Front side */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <img 
                  src={front} 
                  alt="Postcard front"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Back side */}
              <div 
                className="absolute inset-0 w-full h-full backface-hidden"
                style={{ 
                  backfaceVisibility: 'hidden', 
                  transform: 'rotateY(180deg)' 
                }}
              >
                <img 
                  src={back} 
                  alt="Postcard back"
                  className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>


      {/* OUTSIDE OF THE POSTCARD CODE */}
      <p>ABOUT ME STUFF</p>
    </div>
  );
}