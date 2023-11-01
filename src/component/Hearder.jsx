import '../styles/header.css'
import profileImg from '../img/IMG_6728.jpg'

export default function Header(){
 return (

    <nav>
        <div className='headerDiv'> Conexion / s'inscrire</div>
        <div className='headerDiv' id="pc">
            <img src={profileImg} className='profileImg' alt='Phtoto de profil'/>
            <div id='titre'>
                <h1 id='border_bot'>Pierre Cauderlier</h1>
                <h1>Développeur Web</h1>
            </div>
        </div>
    
        <div className='headerDiv' id="menu">
            <ul>
                <li>Acceuil</li>
                <li>Portfolio</li>
                <li>A Propos</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
 )   
}