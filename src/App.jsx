import './App.css'
import Navbar from './Navbar'
import data from './data/data'
import Card from './Card'

function App() {
  const cards = data.map( location => {
    return(
      < Card 
        key = {location.id}
        location = {location}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className="card-list"> 
        {cards}
      </section>
    </div>
  )
}

export default App
