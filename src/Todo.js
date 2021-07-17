import React, {Component} from "react";
import "./TodoList.css";
import {connect} from "react-redux";
import {pendingList, completedList, inProgressList, abandonList} from  "./action/todoActions";

class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            status: "",
        };
    }

   handleChange=(e)=>{
       console.log("SELECT Change", e.target.value, this.props.todo.task);
       this.setState({status: e.target.value}); 
       if(e.target.value === "PENDING"){
        this.props.pendingList(this.props.todo.task)
       }
       else if(e.target.value === "COMPLETED"){
        this.props.completedList(this.props.todo.task)
       }
       else if(e.target.value === "ABANDON"){
           this.props.abandonList(this.props.todo.task)
       }
       else if(e.target.value === "INPROGRESS"){
           this.props.inProgressList(this.props.todo.task)
       }         
   }

    render(){
        const {todo}=this.props;
        
                    return (
                        <div className="innerContainer">
                            <div className="listName">
                            <li key={todo.task} className="task">{todo.task}</li>
                            </div>
                            <div>
                            <select className="Choice" id="Choice" defaultValue={todo.status} onChange={this.handleChange}>
                                <option value="PENDING" >Pending</option>
                                <option value="COMPLETED">Completed</option>                                
                                <option value="ABANDON">Abandon</option>
                                <option value="INPROGRESS">Inprogress</option>
                            </select> 
                            </div>
                        </div>
                    )
                
           
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions,
      pendingList: (item) => dispatch(pendingList(item)),
      completedList: (item) => dispatch(completedList(item)),  
      abandonList: (item) => dispatch(abandonList(item)),
      inProgressList: (item) => dispatch(inProgressList(item))      
    }
  }
export default connect(null, mapDispatchToProps)(Todo);




