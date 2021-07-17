// import * as action from "./../action/todoActions";

 const todoReducer = (state=[], action) => {
    switch (action.type) {
      case 'TODAY_TODO_LIST':
          {
              console.log("Reached Here");
              return state.concat([{task: action.task,
                status: action.status}])     
    
          }
        
            
      case 'PENDING_LIST': 
      console.log("Reached PEnding");
          return state.map(item=>action.task===item.task
            ?{task:action.task, status: "PENDING"}
            :item
            )
      
      case 'ABANDON_LIST':
        console.log("Reached abandon");
        return state.map(item=>action.task===item.task
            ?{task:action.task, status: "ABANDON"}
            :item
            )
      case 'COMPLETED_LIST':
        console.log("Reached complete");
        return state.map(item=>action.task===item.task
            ?{task:action.task, status: "COMPLETED"}
            :item
            )
      case 'INPROGRESS_LIST':
        console.log("Reached inprogress");
        return state.map(item=>action.task===item.task
            ?{task:action.task, status: "INPROGRESS"}
            :item
            )     
      default:
        return state;
    }
  };


  export default todoReducer;