import * as React from 'react';
import { Link } from 'react-router-dom';

class LinkModel {
    constructor(public _id = 0, public Link = "", public Name = ""){}
}

class DropdownContentModel{
    constructor(public Links = new Array<LinkModel>()){}
}

class DropdownContent extends React.Component<DropdownContentModel>{
    render(){
        const links = this.props.Links || new Array<LinkModel>();
        return(
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                    links.map(x => <a className="dropdown-item" key={x._id} href={`#`+ x.Name}>{x.Name}</a>)
                }
            </div>
        )
    }
}

class MenuModel {
    constructor(public DropdownContent = new DropdownContentModel()){}
}

export class Menu extends React.Component<any, MenuModel> {
    constructor(props){
        super(props);

        this.state = new MenuModel();
        this.state.DropdownContent.Links = [
            new LinkModel(1, "Категория1", "Категория 1"),
            new LinkModel(2, "Категория2", "Категория 2"),
            new LinkModel(3, "Категория3", "Категория 3"),
            new LinkModel(4, "Категория4", "Категория 4")
        ];
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/categories')
        .then(response => response.json())
        .then((data:LinkModel[]) => {
            const model = new MenuModel();
            model.DropdownContent.Links = data
                                            .map(x => new LinkModel(x._id, `/Categories/${x._id}`, x.Name));

            this.setState(model);
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light white-background fixed-top">
                <Link className="navbar-brand" to="/">
                    <i className="fa fa-heartbeat fa-3x primary-color" aria-hidden="true"></i>
                </Link>
                <Link className="navbar-brand right-align basket-desktop" to="/">
                        <i className="fa fa-shopping-cart fa-3x " aria-hidden="true"></i>
                </Link>
                <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Главная <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Order">Заказ</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/Category" id="navbarDropdown" role="button" 
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Категории</Link>
                                    
                            <DropdownContent {...this.state.DropdownContent}/>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Delivery">Поставки</Link>
                        </li>
                    </ul>
                    <Link className="navbar-brand basket-mobile" to="/">
                        <i className="fa fa-shopping-cart fa-3x " aria-hidden="true"></i>
                    </Link>
                </div>
            </nav>
        )
    }
}