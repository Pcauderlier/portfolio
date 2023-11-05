import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Home from '../../img/domicile.png'
import Projet from "../../img/projet.png";
import Propos from  "../../img/carte-didentite.png";
import Contact from "../../img/lettre.png";
import Portfolio from "../../img/portefeuille.png";
import Timer from "../../img/minuteur.png";
import Website from "../../img/navigateur-web.png";
import EPK from "../../img/LOGO_EPK_800.png";
import Droite from "../../img/pointes-de-fleches-fines-a-droite.png"
const Nav = styled.nav`
    margin: 0;
    text-align : center;
    margin-left : 1%;
    height: 100%;
    min-width : 60px;
    width: 5%;
    border-radius : 20px;
    position: fixed;
    z-index : 1;
    background: linear-gradient(135deg,rgb(51,190,255),rgb(226,51,255))
    
`;
const Button = styled.button`
    
    margin-top: 15%;
    border : 2px solid black;
    border-radius: 25px;
    width: 60%;
    background-color: inherit;
    &:hover {
        box-shadow: 3px 3px 10px black;
    }
    
`;
const Img = styled.img`
    width : 90%;
    border-radius : 20px;
    margin-top: 15%;
`;
const Div = styled.div`
    text-align: center;

`;
const Ul = styled.ul`
    margin : 0px;
    padding : 0px;

`;
const Li = styled.li`
    margin : 0;
    margin-top: 15%;
    margin-bottom: 15%;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0;
    list-style: none;

`;
const ImgNav = styled.img`
    width : 70%
`;




export default function SmallHeader({profileImg, updateIsOpen}){
    return (
        <Nav>
            <Button onClick={()=> updateIsOpen(true)}><ImgNav src={Droite}/></Button>
            <Img src={profileImg}/>
            <Div>
            <Ul>
                <Li>
                    <NavLink to="/" className={({isActive}) =>  isActive ? "smalllink smallactive" : "smalllink smallnormal"} >
                        <ImgNav src={Home} />
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="/portfolio" className={({isActive}) =>  isActive ? "smalllink smallactive" : "smalllink smallnormal"} >
                        <ImgNav src={Portfolio} />
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="/about" className={({isActive}) =>  isActive ? "smalllink smallactive" : "smalllink smallnormal"} >
                        <ImgNav src={Propos} />       
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="/projects" id="RouterNavLink" className={({isActive}) =>  isActive ? "smalllink smallactive" : "smalllink smallnormal"} >
                        {({isActive}) => (
                        <div>
                        <span><ImgNav src={Projet} /></span>
                        {isActive && (
                            
                        <div className='sousMenu'>
                        <Li>
                            <NavLink to="/projects/fit-timer"  className={({isActive}) =>  isActive ? "verysmalllink smallactive" : "verysmalllink smallnormal"} >
                                <ImgNav src={Timer} />
                            </NavLink>

                        </Li>
                        <Li>
                            <NavLink to="/projects/epk-data" className={({isActive}) =>  isActive ? "verysmalllink smallactive" : "verysmalllink smallnormal"} >
                                <ImgNav src={EPK}/>
                            </NavLink>

                        </Li>
                        <Li>

                            <NavLink to="/projects/site-vitrine" className={({isActive}) =>  isActive ? "verysmalllink smallactive" : "verysmalllink smallnormal"} >
                                <ImgNav src={Website} />
                            </NavLink>
                        </Li>
                        </div>
                        )}
                        </div>

                        )}
                        
                    
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/contact" className={({isActive}) =>  isActive ? "smalllink smallactive" : "smalllink smallnormal"} >
                            <ImgNav src={Contact} />
                        </NavLink>
                    </Li>
                </Ul>
            </Div>
        </Nav>
    )
}