import '../../styles/header.css'
import profileImg from '../../img/IMG_6728.jpg'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import LargeHeader from './LargeH'
import SmallHeader from './SmallHeader'
import WindowListener from './WindowListener'


// min-width: 200px;

const RigthDiv = styled.div`
    position: absolute;
    left: ${props => props.divRight}%;
    padding-left : 4.5%;
    min-height: 100%;
    border: solid 2px orange;
    width: ${props => (95-props.divRight)}%;
    z-index : 2;
    
`;


export default function Header(){
let [windowWidth, updateWindowWidth] = useState(window.innerWidth)
let [isOpen, updateIsOpen] = useState(true)
let [divRight,updateDivRight] = useState(25)


useEffect(()=> {
    if (isOpen){ 
        if(windowWidth >= 880){
            updateDivRight(25)
        }
        else{ // min-width de munu ouvert = 220px
            const calc = (22000/windowWidth).toFixed(2) // Car min-width du menu ouvert = 220px calculer en % la taille de divRight
            updateDivRight(calc)
        }
    }
    else{
        if (windowWidth >= 1200){
            updateDivRight(6)
        }
        else{ // min-width de menu fermer = 60px
            const calc = (6000/windowWidth.toFixed(2)) +1
            updateDivRight(calc)
        }
    }

},[isOpen, windowWidth])
 return (
    <div>
        <WindowListener updateWindowWidth={updateWindowWidth}/>

        {isOpen ? 
        <LargeHeader profileImg={profileImg} updateIsOpen={updateIsOpen}/>
        :
        <SmallHeader profileImg={profileImg} updateIsOpen={updateIsOpen}/>
        }
        
        <RigthDiv divRight = {divRight}>
            <Outlet/>
        </RigthDiv >
    </div>
 )   
}