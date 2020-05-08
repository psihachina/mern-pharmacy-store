import * as React from 'react';
import { Link } from 'react-router-dom';



export class ItemModel {
    constructor(public _id = "", public Name = "", public Type = "", public WordName="", public ImgPath = "",public Category=""){}
}

export class Medicament extends React.Component<ItemModel> {
    render() {
        const defaultImg = 'assets/images/defaultMedicament.png';
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.ImgPath || defaultImg} alt="Card image cap" />
                <div className="card-body">
                    <Link to={`/Medicaments/` + this.props._id}><h5 className="card-title">{this.props.Name}</h5></Link>
                    <p className="card-text">{this.props.Type}</p>
                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
            </div>
        );
    }
}