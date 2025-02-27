import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  return (
    <div className='App'>
     <input
     type='text'
     placeholder='type Something..'
     value={text}
      onChange={(e)=>setText(e.target.value)}
     />
     <h1><strong>You Typed:{text}</strong></h1>
     <h1>No of characters:{text.length}</h1>
    </div>
);
}



export default App
