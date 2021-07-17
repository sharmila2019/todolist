import React, {Component} from "react";
import "./HeaderSection.css";
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            // list: ["Today's List", "Completed","Abandon","Pending", "Inprogress"],
            list: [
                {name: "Today's List", href: "/"},
                {name: "Completed List", href: "/Completed-List"},
                {name: "Abandon List", href: "/Abandon-List"},
                {name: "Pending List", href: "/Pending-List"},
                {name: "Inprogress List", href: "/InProgress-List"}
            ]
        };
    }    
    render(){
        return (
            <>
            <ul className="headerContainer">
                {this.state.list.length>0 && this.state.list.map(item=>
                <li className="headerList" key={item.name}>
                    <Link to={item.href} >
                        {item.name}
                    </Link>
                    
                </li>)}             
                
            </ul>
            </>
        );
    }
}

export default Header;