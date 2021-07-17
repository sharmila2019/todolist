import React, {Component} from "react";
import {connect} from "react-redux";    

class PendingList extends Component{
    constructor(props){
        super(props);
        this.state={
            list: []
        };
    }

    
    initialList(){
        let arr=this.props.todos.filter(item=>item.status === "PENDING");
        console.log("PENDING LIST", arr);
        this.setState({list: arr});
    }

    componentDidMount(){
        this.initialList();
    }

    render(){
        console.log("Pending uui", this.state.list);
        return (
            <>
            <header>
                <h1>Pending List</h1>
            </header>
            <ul>
            {this.state.list.map(item=><li key={item.task}>{item.task}</li>)}
            </ul>            
            </>
        );
    }

}


const mapStateToProps = (state) => ({ todos: state });



export default connect(mapStateToProps)(PendingList);