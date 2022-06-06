import {Component} from 'react';
import './App.css';

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
    return(
    <div className="App">
      <input type='search' placeholder='search monster' onChange={
        e => this.setState({searchField:e.target.value},
          () =>  console.log(this.state))
      }/>
      <Cardlist monsters={filteredmonsters} />      
  </div>);
  }


}

export default App;
