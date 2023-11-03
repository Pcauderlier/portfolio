import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Nav = styled.nav`
    margin: 0;
    margin-left : 1%;
    height: 100%;
    min-width : 60px;
    width: 5%;
    border-radius : 20px;
    position: fixed;
    z-index : 1;
    background-color : red
    
`;
const Button = styled.button`
    margin-top: 15%
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
    margin-top: 5%;
    margin-bottom: 5%;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0;
    list-style: none;

`;




export default function SmallHeader({profileImg, updateIsOpen}){
    return (
        <Nav>
            <Button onClick={()=> updateIsOpen(true)}>{'>>>'}</Button>
            <Img src={profileImg}/>
            <Div>
            <Ul>
                <Li>
                    <NavLink to="/" className={({isActive}) =>  isActive ? "smalllink active" : "smalllink normal"} >Acceuil</NavLink>
                </Li>
                <Li>
                    <NavLink to="/portfolio" className={({isActive}) =>  isActive ? "smalllink active" : "smalllink normal"} >Portfolio</NavLink>
                </Li>
                <Li>
                    <NavLink to="/about" className={({isActive}) =>  isActive ? "smalllink active" : "smalllink normal"} >A Propos</NavLink>
                </Li>
                <Li>
                    <NavLink to="/projects" id="RouterNavLink" className={({isActive}) =>  isActive ? "smalllink active" : "smalllink normal"} >
                        {({isActive}) => (
                        <div>
                        <span>Projets en cours :</span>
                        {isActive && (
                            
                        <div className='sousMenu'>
                            <NavLink to="/projects/fit-timer"  className={({isActive}) =>  isActive ? "smalllink active" : "smalllink normal"} >Fit Timer</NavLink>
                            <NavLink to="/projects/epk-data" className={({isActive}) =>  isActive ? "smalllink active" : "smalllink normal"} >Epk Data</NavLink>
                            <NavLink to="/projects/site-vitrine" className={({isActive}) =>  isActive ? "smalllink active" : "smalllink normal"} >Ce site</NavLink>
                        </div>
                        )}
                        </div>

                        )}
                        
                    
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/contact" className={({isActive}) =>  isActive ? "smalllink active" : "smalllink normal"} >Contact</NavLink>
                    </Li>
                </Ul>
            </Div>
        </Nav>
    )
}