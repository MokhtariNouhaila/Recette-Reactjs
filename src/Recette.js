import React from 'react';
import ajouter from'./image/plus.png'
import effacer from './image/effacer.png';
import modifier from './image/modifier.png';
import triste from './image/triste.png'
import content from './image/content.png'
import down from './image/sort-down.png'

 
class Recette extends React.Component {

    constructor(props) {
        super(props);

        this.Modifier = this.Modifier.bind(this);
         this.Enregistrer = this.Enregistrer.bind(this);


        this.state = {
          
            modifier:true,
            currentRecipe: {id: 1, titre: '', ingredients: [] }, 
            titre: '',
            ingredients:[]
        };
    }
   
 
 
   Modifier(recipe) {
      
        this.setState({ modifier: true });
        this.setState({ currentRecipe: recipe });
    }

      Enregistrer() {
        if(this.state.currentRecipe.content.length==0 || this.state.currentRecipe.titre == ''){
            return alert("les donnees incorrectes");
        }
       
        this.props.Eng(this.state.currentRecipe); 
        
        
      
    }
    Supprimer= (recipe) => {
        this.props.Supp(recipe); 
    }

   

    Ajouter() {
       
        this.setState({ modifier: false });

        if (this.props.recipes.length > 0) {
             let ids = this.props.recipes.map(a => a.id);
            let largestID =  Math.max.apply(Math, ids);
            this.setState({ currentRecipe: {id: largestID + 1, titre: '', content: [] } });
        } 
      else  { 
          
            this.setState({ currentRecipe: {id: 1, titre: '', content:  [] } });
        }         
    }
 



     ChangeTitre(currentRecipe, event) {
        this.setState({ titre: event.target.value });
        this.state.currentRecipe.titre = event.target.value;  
    }

     ChangeIngredients(currentRecipe, event) {
        this.setState({ ingredients: event.target.value.split(',') });
        this.state.currentRecipe.content = event.target.value.split(',');
    }


    
 

    render() {
        const nbr= this.props.recipes.map(recipe => <div>{recipe.id}</div>)
        const num = nbr.length
 
        return (
            <div  className="App-body" >
                
                   <div> <img className=" Ajouter "src={ajouter} data-toggle="modal"  data-target="#exampleModal"  
                  style={{cursor:'pointer'}}onClick={this. Ajouter.bind(this, this.state.currentRecipe)}
                   titre="Ajouter une recette"/></div>
               {this.props.recipes.length > 0 ? 

             <div>  
               <p className="Nbr">Nombre de recette : {num}</p>
              { this.props.recipes.map((recipe) =>
          
           
              
              <div className="bod" >
                     <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                 
<div style={{cursor:'pointer'}}  className="a"data-toggle="collapse" href={'#' + recipe.id}>
  {recipe.titre}
  <img className="iconU" src={down} style={{cursor:'pointer'}}/>
  </div>
                   
         <div>     
                    
           <img  className="iconM"src={modifier}style={{cursor:'pointer'}} 
                          onClick={this.Modifier.bind(this, recipe)} data-toggle="modal"  data-target="#exampleModal" />
           <img  className="icon" src={effacer}style={{cursor:'pointer'}}
                          onClick={this.Supprimer.bind(this, recipe)} /></div> 
                  </h4>
                </div>
                <div id={recipe.id} className="panel-collapse collapse">
                   
                  <ul className="list-group">
                    {recipe.content.map((c)=> <li className="list-group-item">{c}</li>)}
                  
                  </ul>
                 </div>
              </div>
            
            </div>
                 <hr/>
              </div>
          )
          
          
          
          
          
          } </div>
                           : 
<h4 className="pasR">Il n'y a pas de recette  <img src={triste}/>   Mais vous pouvez ajouter une <img src={content}/>
         </h4>
         }
              
              
                









<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{(this.state.modifier )?   
            "Modifier la recette":"Ajouter une recette"}</h5>
        <button type="submit" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form >
          <div className="form-group">
            <label for="recipient-name" className="col-form-label">titre:</label>
            <input type="text" className="form-control" id="recipient-name"   
                        placeholder="entrer le titre "defaultValue={this.state.currentRecipe.titre}
                        onChange = {this.ChangeTitre.bind(this, this.state.currentRecipe)}/>
          </div>
          <div className="form-group">
            <label for="message-text" className="col-form-label">Ingredients:</label>
            <textarea className=" text" id="message-text"  defaultValue={this.state.currentRecipe.content} 
                       placeholder="entrer les ingredients sous la forme : ingredient1,ingredient2,....."
                       onChange = {this.ChangeIngredients.bind(this, this.state.currentRecipe)}></textarea>
          </div>  <div className="modal-footer">
          <input type="submit" className="btn btn-info"   onClick={this.Enregistrer} value="Enregistrer" />
          <input type="reset" className="btn btn-danger" data-dismiss="modal"  value="annuler" />
      </div>  </form>
      </div>
    
       
      
    </div>
  </div>
</div>
              
            </div>

            
        );
    }
}


export default Recette;