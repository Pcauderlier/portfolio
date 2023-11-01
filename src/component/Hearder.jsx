import '../styles/header.css'
import profileImg from '../img/IMG_6728.jpg'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header(){
 return (
    <div>
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
                    <li>
                        <NavLink to="/" className={({isActive}) =>  isActive ? "link active" : "link normal"} >Acceuil</NavLink>
                    </li>
                    <li>
                     <NavLink to="/portfolio" className={({isActive}) =>  isActive ? "link active" : "link normal"} >Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) =>  isActive ? "link active" : "link normal"} >A Propos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive}) =>  isActive ? "link active" : "link normal"} >Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <div id='page'>
            <Outlet/>
        </div>
    </div>
 )   
}