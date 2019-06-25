import React from 'react';
import ReactDOM from 'react-dom';
import NoteApp  from './components/NoteApp'
import * as serviceWorker from './serviceWorker';








// const App = (props) => {
//     const [state, setState] = useState({
//         count: props.count,
//         text: ''
//     })

//     return (
//         <div>
//             <p>The current count is {state.text || 'count'}</p>
//             <button onClick={() => setState({ count: state.count + 1 })}>+1</button>
//             <button onClick={() => setState({ count: props.count })}>reset</button>
//             <button onClick={() => setState({ count: state.count - 1 })}>-1</button>
//             <input value={state.text} onChange={(e) => setState({ text: e.target.value })} ></input>
//         </div>
//     )
// }

// App.defaultProps = {
//     count: 0
// }

// const App = (props) => {
//     const [count, setCount] = useState(props.count)
//      const [text,setText] = useState('');

//      useEffect(()=>{
//          console.log("tests")
//      }, [])
//      useEffect(()=>{
//          console.log('use effect ran')
//          document.title = count;
//      },[count])

//     return (
//         <div>
//             <p>The current count is {text}</p>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <button onClick={() => setCount(0)}>reset</button>
//             <button onClick={()=>setCount(count-1)}>-1</button>
//             <input  onChange={(e)=>setText(e.target.value)} ></input>
//         </div>
//     )
// }

// App.defaultProps= {
//     count : 0
// }

ReactDOM.render( <NoteApp count={0}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
