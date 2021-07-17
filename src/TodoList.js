import React, { Component } from "react";
import {connect} from "react-redux";
import "./TodoList.css";
import Todo from "./Todo";
import {todayList} from  "./action/todoActions";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            list: {
                task: "",
                status: ""
            }            
        };
    }
    handleChange=(e)=>{
        console.log("log", e.target.value);
        this.setState({list: {task: e.target.value, status: "PENDING"}});
    }
    
    handleClick=()=>{
        console.log("Clicked Add", this.state.list);
        if(this.state.list.task !== ""){
        this.props.addTask(this.state.list);
        }
        
        this.setState({list: {task: "", status: "PENDING"}});
    }

    

    render(){
        const {todos}= this.props;
        return (
            <>
            <header>
           <h1>Today's To Do List</h1>
       </header>
            <div className="container">
                <input type="text" className="textArea" placeholder="Enter your to do" value={this.state.list.task} onChange={this.handleChange}/>
                <input type="submit" className="button"value=" Add " onClick={this.handleClick.bind(this)} />
            </div>
            <br />
            <div className="outerDiv">
                <div className="outerContain">
                    {todos.length>0 && todos.map(item => <Todo key={item.task} todo={item}/>)}
                </div>            
            </div>
            </>
        );
    }
}


const mapStateToProps = (state) => ({ todos: state })

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      addTask: (item) => dispatch(todayList(item))      
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)