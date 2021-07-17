import React, {Component} from "react";
import {connect} from "react-redux";    

class AbandonList extends Component{
    constructor(props){
        super(props);
        this.state={
            list: []
        };
    }

    
    initialList(){
        let arr=this.props.todos.filter(item=>item.status === "ABANDON");
        console.log("ABANDON LIST", arr);
        this.setState({list: arr});
    }

    componentDidMount(){
        this.initialList();
    }

    render(){
        console.log("Abandon uui", this.state.list);
        return (
            <>
            <header>
                <h1>Abandon List</h1>
            </header>
            <ul>
            {this.state.list.map(item=><li key={item.task}>{item.task}</li>)}
            </ul>            
            </>
        );
    }

}


const mapStateToProps = (state) => ({ todos: state });



export default connect(mapStateToProps)(AbandonList);