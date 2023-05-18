import { useState, Component} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-bar/SearchBox.component.jsx'


class App extends Component {
  

  constructor() {
    super();

    this.state =  {
      monsters: [], //null case
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      ))
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

    

  render() {
    /*console.log('rendered from App.jsx')*/

    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })


    return (
      <>
        <div className="App">
          <h1 className="app-title">Monsters Rolodex</h1>
          <SearchBox 
            onChangeHandler={onSearchChange} 
            placeholder='search monsters'
            className={'monster-search-box'}
          />
          <CardList monsters={filteredMonsters}/>

        </div>
      </>
    )
  }
  
}

export default App
