import { useEffect } from "react";

export default function WindowListener({updateWindowWidth }){
    useEffect(() => {
        function handleResize(){
            const ww = window.innerWidth
            updateWindowWidth(ww)
        }
        handleResize();
        window.addEventListener("resize",handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })
}