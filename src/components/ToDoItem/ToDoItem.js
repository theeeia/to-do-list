import React from 'react' 
import styles from "./ToDoItem.style.js"

export default function ToDoItem({task,deleteTask, completeTask}) {
    return (
        <div>
          <div style={styles.taskContainer}>
            <div style={styles.taskWrapper}>
              <p style={{ ...styles.task, textDecoration: task.completed === true ? 'line-through' : 'none' }}>{task.text}</p>
              <div style={styles.iconWrapper}>
                <i className="fas fa-check-circle" style={styles.completedIcon} onClick={() => completeTask(task.text)}></i>
                <i className="fas fa-trash-alt" style={styles.deleteIcon} onClick={() => deleteTask(task.text)}></i>
              </div>
            </div>
          </div>
        </div>
      );
    }