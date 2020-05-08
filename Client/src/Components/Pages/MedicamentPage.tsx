import * as React from 'react';
import { ItemModel } from '../Medicament';

const defaultImg = '../assets/images/defaultMedicament.png';

export class MedicamentPage extends React.Component<any, ItemModel> {
    state = new ItemModel();

    componentDidMount(){
        const id = this.props.match.params.id || "";
        console.log('id: ', id);
        fetch(`http://localhost:3000/api/medicaments/` + id)
        .then(response => response.json())
        .then((data:ItemModel[]) => this.setState(data[0]));
    }
    render() {
        return (
            <div className="container justify-content-center">
                <img className="w-25" src={this.props.ImgPath || defaultImg} alt=""/>
                <h2 className="">Name: {this.state.WordName}</h2>
                <h3>Hadr Name: {this.state.Name}</h3>
                <p>Desc: {this.state.Type}</p>
            </div>
        );
    }
}