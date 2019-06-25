import React,{useContext,useState,useEffect} from 'react';
import NotesContext from '../context/note-context'

const useMousePosition = () => {
    let [position, setPosition] = useState({ x: 0, y: 0 })

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
const Note = ({ note }) => {
    const {dispatch}  = useContext(NotesContext)
    const position = useMousePosition();
    
    return (
        <div key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
           
            <button onClick={() => dispatch({type:'REMOVE_NOTE',title:note.title})}> x</button>
        </div>
    )
}

export { Note as default }