import mini from '../assets/minime-pic.png'
import fb from '../assets/fb-white.png'
import insta from '../assets/insta-white.png'
import linked from '../assets/linked-white.png'

export default function Minime() {
  return (
    <div className="text-center mt-20 mb-16">
            <div className='flex justify-center gap-5 ml-20'>
                <img src={mini} className='w-80 h-96 object-cover'/> 
                <div className='mr-20 max-w-2xl'>
                    <h2 className='text-5xl mb-4' style={{fontFamily: 'Changa One, cursive'}}>À Propos</h2>
                    <p className='mb-8'>Tout juste diplômée de l’École de théâtre professionnel du Collège Lionel-Groulx, 
                        Myriane Vorano est une conceptrice de costumes et scénographe originaire de Toulouse. 
                        Étant une passionnée de littérature, elle se démarque par son approche très personnelle du 
                        texte et une attention particulière qu’elle porte aux enjeux vécus par les personnages. 
                        Dans chacune de ses créations se trouve empathie et intelligence, donnant des résultats impressionnants 
                        qui mettent en valeur l’histoire et la personnalité de chacun des personnages.</p>
                    <p className='mb-10'> Lors de son parcours, Myriane a pu travailler sur plusieurs projets comme 8 Femmes mis en 
                        scène par Benoît Landry et Écume mis en scène par Camille Provencher au printemps 2024 en tant 
                        que conceptrice de costumes. Elle fut aussi assistante scénographe sur le spectacle de Cendrillon, 
                        mis en scène par Isabelle Leblanc à l’hiver 2023 et assistante costumes et chef habilleuse sur le 
                        spectacle d’Andronica, mis en scène par Marilyn Perreault à l’hiver 2022.</p>
                        
                </div>
            </div>
            <div>
                <h2 className='flex justify-center text-5xl mt-12 mb-8' style={{fontFamily: 'Changa One, cursive'}}>Dire Bonjour</h2>
                <p>Phone: 438-985-6481</p>
                <p>Email: vmyriane@gmail.com</p>
                <div className='flex justify-center gap-10 mb-2'>
                    <img src={fb} className='w-8 h-8'/>
                    <img src={insta} className='w-8 h-8'/>
                    <img src={linked} className='w-8 h-8'/>
                    </div>
                </div>
                <p>Want to see more about me? Here's my CV:</p>
    </div>
  );
}