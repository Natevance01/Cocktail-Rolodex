import { useState, Component} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  

  constructor() {
    super();

    this.state =  {
      monsters: [], //null case
      searchField: '',
    }
    console.log("constructor")
  }

  componentDidMount() {
    console.log("component did mount")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      ))
  }

    

  render() {

    console.log("Render")
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })


    return (
      <>
        <div className="App">
          <input className='search-box' type='search' placeholder='search monsters' 
            onChange= {(e) => {
              const searchField = e.target.value.toLocaleLowerCase();
              this.setState(() => {
                return { searchField }
              })
          }}/>
          {
            filteredMonsters.map((monster) => {
              return (
                <div key={monster.id}>
                  <h1>
                    {monster.name}
                  </h1>
                </div>)
            })
          } 

        </div>
      </>
    )
  }
  
}

export default App
