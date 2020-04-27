 
import Header from './Header';
import Recette from './Recette'
import './App.css';

import React, { Component } from 'react'

 class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }
  
 
  recipes = [];

 Eng = (currentRecipe) => { 
      let recipes = this.state.recipes;
      let index = this.IndexOf(currentRecipe.id);
      if (index != undefined) {
        recipes[index] = currentRecipe;
      }
      if (index == undefined){
        recipes.push(currentRecipe);
      }
      this.setState({recipes: recipes});
      localStorage.setItem('Liste', JSON.stringify(this.state.recipes));
    }

    Supp= (recipe, e) => { 
      let recipes = this.state.recipes;
      let index = this.IndexOf(recipe.id);
      recipes.splice(index, 1);
      localStorage.setItem('Liste', JSON.stringify(recipes));
      this.setState({recipes: recipes});
    }


  getRecordsFromLocalStorage = () => {
    let recs = localStorage.getItem('Liste');
    let recsParsed = JSON.parse(recs);
    return recsParsed;
  }

 

  componentDidMount = () => {
    
    let currentRecipes = localStorage.getItem('Liste');
    if ((currentRecipes !== undefined) || (currentRecipes !== "undefined") || (currentRecipes != null)) {   
      this.setState({ recipes: this.getRecordsFromLocalStorage()});   
    }   
    if((currentRecipes == undefined) || (currentRecipes == "undefined") || (currentRecipes == null)) {
      localStorage.setItem('Liste', JSON.stringify(this.recipes));  
      this.setState({ recipes: this.getRecordsFromLocalStorage()}); 
    }
  }
 

  IndexOf = (id) => {
    for (let i = 0; i < this.state.recipes.length; i++) {
      if (this.state.recipes[i].id == id) return i;
    }
    return undefined;
  }
 
 

  render() {
 
    return (
      <div>
 
 <header className="App-header">
        <Header/>
 </header>  
      <Recette 
       recipes={this.state.recipes}
       Eng={this.Eng.bind(this)}
       Supp={this.Supp.bind(this)} />
       
<footer className="App-footer">
  MOKHTARI Nouhaila | 2020
</footer>
    </div>
    )
  }
}
 
export default App;
