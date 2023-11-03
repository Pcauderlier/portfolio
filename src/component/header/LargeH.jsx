import { NavLink } from "react-router-dom"
import styled from "styled-components";

const Nav = styled.nav`
    margin: 0;
    height: 100%;
    width: 25%;
    min-width:220px;
    border: 3px solid red;
    position: fixed;
    z-index : 1;
`;

export default function LargeHeader({profileImg,updateIsOpen}){


    return(
    <Nav>
        <div>
            <button onClick={() => updateIsOpen(false)}> {'<<<'} </button>
        </div>
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
                    <NavLink to="/projects" id="RouterNavLink" className={({isActive}) =>  isActive ? "link active" : "link normal"} >
                        {({isActive}) => (
                        <div>
                        <span>Projets en cours :</span>
                        {isActive && (
                            
                        <div className='sousMenu'>
                            <NavLink to="/projects/fit-timer"  className={({isActive}) =>  isActive ? "link active" : "link normal"} >Fit Timer</NavLink>
                            <NavLink to="/projects/epk-data" className={({isActive}) =>  isActive ? "link active" : "link normal"} >Epk Data</NavLink>
                            <NavLink to="/projects/site-vitrine" className={({isActive}) =>  isActive ? "link active" : "link normal"} >Ce site</NavLink>
                        </div>
                        )}
                        </div>

                        )}
                        
                    
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive}) =>  isActive ? "link active" : "link normal"} >Contact</NavLink>
                    </li>
                </ul>
            </div>
        </Nav>
    )
}