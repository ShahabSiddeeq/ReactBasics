import {Component} from 'react';
import './App.css';

import {SearchBox} from './components/searchBox/searchBox.component';

import { Cardlist } from './components/card-list/card-list.component';


class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
        
    };
}
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
    .then( response => response.json())
      .then(users => this.setState({monsters:users}));
}


render(){
    const {monsters,searchField} = this.state;
    const filteredmonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredmonsters);
    return(
    <div className="App">
      <SearchBox 
                placeholder="Search Monster"
                handleChange={e => this.setState({searchField:e.target.value})}
      />
      <Cardlist monsters={filteredmonsters} />      
  </div>);
  }


}

export default App;
