import './App.css'
import UseStorage from './UseStorage'

function App() {
  const [value, setValue] = UseStorage('Value','')
  return (
    <div>
      <input type="text" value={value} onChange={e=>setValue(e.target.value)}></input>
    </div>
  )
}

export default App
