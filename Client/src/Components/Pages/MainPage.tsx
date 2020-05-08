import * as React from 'react';
import { ItemModel, Medicament } from '../Medicament';
import { response } from 'express';

class Category{
    constructor(public Name, public Medicaments = new Array<ItemModel>()){}
}

class MainPageModel{
    constructor(public Items = new Array<ItemModel>(), public Categories = new Array<Category>()){}
}

export class MainPage extends React.Component<any, MainPageModel> {
    constructor(props){
        super(props);
        this.state = new MainPageModel();
    }
    componentDidMount(){
        fetch('http://localhost:3000/api/medicaments')
            .then(response=>response.json())
                .then((data1:ItemModel[])=>{
                    fetch('http://localhost:3000/api/categories')
                        .then(response=>response.json())
                            .then((data2:Category[])=>{
                                this.setState(new MainPageModel(data1,data2));
                                console.log(this.state);
                                
        });
        });

    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="text-uppercase">Main Page</h2>
                    <div className="row justify-content-center">
                    {this.state.Categories.map(x => <div>
                        <br/>
                        <h2 id={x.Name}>{x.Name}</h2>
                        <div className="card-deck justify-content-center">
                        {
                            this.state.Items.filter(z => z.Category == x.Name).map(y => <Medicament {...y}/>)
                        }
                        </div>
                    </div>)}
                </div>
                </div>
            </div>
        );
    }
}