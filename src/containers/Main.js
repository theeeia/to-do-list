import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddToDo from '../components/AddTodo/AddTodo'
import ToDoItem from '../components/ToDoItem/ToDoItem'
import { addTask,completeTask,deleteTask } from '../redux/actions'
import styles from './Main.style'

export class Main extends Component {
  render() {
    return (
      <div style= {styles.appContainer} >
          <div style={styles.container}>
                <h1 style={styles.title}>Todo List</h1>
                <div style={styles.inputWrapper} >
                  <AddToDo addTodo={(task) => this.props.addTodo(task)} />  
                    <hr style={styles.separator}/>
                </div>
                {
                console.log(this.props.taskItems.length)}

                {this.props.taskItems.map((item)=>{
                  return(
                  <ToDoItem  task={item} 
                  deleteTask={(task) => this.props.deleteTodo(task)}  
                  completeTask={(task) => this.props.completeTodo(task)}/>
                  )
                })
                }



          </div>
         
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  taskItems: state.taskItems,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (task) => dispatch(addTask(task)),
  deleteTodo: (task) => dispatch(deleteTask(task)),
  completeTodo: (task) => dispatch(completeTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);