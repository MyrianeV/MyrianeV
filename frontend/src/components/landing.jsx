import pic from '../assets/pfp.png'
import landing from '../assets/landing.png'

export default function Landing() {
  return (
    <div className="text-center mt-20">
        <img src={landing} className='w-[820px] h-[450px] mx-auto block object-cover'/>
    </div>
  );
}