// Style
import './App.css'
import { Header, Tags } from './components'

function App() {

  return (
    <>
      <Header />
      <section className="hero section">
        <h1>ID STUDIOS</h1>
        <Tags
        bgColor={'--orange'}
        number={1}
        name={`console.log(“hello world”);`}
        />
      </section>
    </>
  )
}

export default App
