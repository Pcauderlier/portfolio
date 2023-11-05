import { NavLink } from "react-router-dom"
import styled from "styled-components";
import Gauche from "../../img/fleches-de-contour-fin-a-gauche.png"

const Nav = styled.nav`
    margin: 0;
    height: 100%;
    width: 25%;
    min-width:272px;

    position: fixed;
    z-index : 1;
    background: linear-gradient(135deg,rgb(51,190,255),rgb(226,51,255));
`;

const HeaderDiv = styled.div`
    width: 90%;
    text-align: center;
    border: 2px solid white;
    margin-top : 7% ;
    margin-left: 5%;
`;

const Li = styled.li`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top : 5%;
    margin-bottom: 5%;
    padding: 0;
    list-style: none;
    
`;

const SousLi = styled.li`
    width : 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top : 5%;
    margin-bottom: 5%;
    padding: 0;
    list-style: none;
`;
const ImgNav = styled.img`
    width : 70%
`;
const Button = styled.button`
    border : 2px solid black;
    border-radius: 25px;
    width: 15%;
    margin-right : 10%;
    background-color: inherit;
    &:hover {
        box-shadow: 3px 3px 10px black;
    }

    `;
const ButtonDiv = styled.div`
    
    margin-top: 5%;
    width : 100%;
    display: flex;
    justify-content : right;
`;

export default function LargeHeader({profileImg,updateIsOpen}){


    return(
    <Nav>
        <ButtonDiv>
            <Button onClick={() => updateIsOpen(false)}> <ImgNav src={Gauche} /> </Button>
        </ButtonDiv>
        <HeaderDiv> Conexion / s'inscrire</HeaderDiv>
        <HeaderDiv id="pc">
            <img src={profileImg} className='profileImg' alt='Phtoto de profil'/>
            <div id='titre'>
                <h1 id='border_bot'>Pierre Cauderlier</h1>
                <h1>Développeur Web</h1>
            </div>
        </HeaderDiv>
        
        <HeaderDiv id="menu">
            <ul>
                <Li>
                    <NavLink to="/" className={({isActive}) =>  isActive ? "link active" : "link normal"} >Acceuil</NavLink>
                </Li>
                <Li>
                    <NavLink to="/portfolio" className={({isActive}) =>  isActive ? "link active" : "link normal"} >Portfolio</NavLink>
                </Li>
                <Li>
                    <NavLink to="/about" className={({isActive}) =>  isActive ? "link active" : "link normal"} >A Propos</NavLink>
                </Li>
                <Li>
                    <NavLink to="/projects" id="RouterNavLink" className={({isActive}) =>  isActive ? "link active" : "link normal"} >
                        {({isActive}) => (
                        <div>
                        <span>Projets en cours :</span>
                        {isActive && (
                            
                        <div className='sousMenu'>
                        <SousLi>
                            <NavLink to="/projects/fit-timer"  className={({isActive}) =>  isActive ? "link active" : "link normal"} >Fit Timer</NavLink>
                        </SousLi>
                        <SousLi>
                            <NavLink to="/projects/epk-data" className={({isActive}) =>  isActive ? "link active" : "link normal"} >Epk Data</NavLink>
                        </SousLi>
                        <SousLi>
                            <NavLink to="/projects/site-vitrine" className={({isActive}) =>  isActive ? "link active" : "link normal"} >Ce site</NavLink>
                        </SousLi>

                        </div>
                        )}
                        </div>

                        )}
                        
                    
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/contact" className={({isActive}) =>  isActive ? "link active" : "link normal"} >Contact</NavLink>
                    </Li>
                </ul>
            </HeaderDiv>
        </Nav>
    )
}