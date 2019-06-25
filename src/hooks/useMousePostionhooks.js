import {useState,useEffect} from 'react';

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        console.log("setting")
        
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            })
        }
        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

}

export {useMousePosition as default}