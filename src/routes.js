import React from "react";
import {  
  Switch,
  Route
} from "react-router-dom";
import List from "./TodoList";
import PendingList from "./tasks/Pending";
import AbandonList from "./tasks/Abandon";
import InprogressList from "./tasks/Inprogress";
import CompletedList from "./tasks/Completed";


const Routes=()=>{
    return (
        
            <Switch>
                <Route path='/' component={List} exact/>
                <Route path='/Pending-List' component={PendingList} exact />
                <Route path='/Abandon-List' component={AbandonList} exact />
                <Route path='/InProgress-List' component={InprogressList} exact />
                <Route path='/Completed-List' component={CompletedList} exact />
            </Switch>
        
    );
}

export default Routes;