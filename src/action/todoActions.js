import {TODAY_TODO_LIST, PENDING_LIST, ABANDON_LIST, COMPLETED_LIST, INPROGRESS_LIST, DELETED_LIST} from "./type";

// Action Creator for today's TODO List
export function todayList(item){
    return {
      
        type: TODAY_TODO_LIST,
        task: item.task,
        status: item.status
      }
}

// Action Creator for pending TODO List
export function pendingList(task){
    return {
      
        type: PENDING_LIST,
        task: task
      }
}

// Action Creator for abandon TODO List
export function abandonList(task){
    return {
      
        type: ABANDON_LIST,
        task: task
      }
}

// Action Creator for In progress TODO List
export function inProgressList(task){
    return {
      
        type: INPROGRESS_LIST,
        task: task
      }
}

// Action Creator for delete- TODO List
export function deleteList(task){
    return {
      
        type: DELETED_LIST,
        task: task
      }
}

// Action Creator for completed TODO List
export function completedList(task){
    return {
      
        type: COMPLETED_LIST,
        task: task
      }
}