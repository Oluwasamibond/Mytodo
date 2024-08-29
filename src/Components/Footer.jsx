import styles from './footer.module.css'
function Footer({completedTodos, totalTodos}){
    return(
        <div className={styles.footer}> 
            <span>Completed Todos:{completedTodos}</span>
            <div>
                <span>Total Todos:{totalTodos}</span>
            </div>
        </div>
    )
}

export default Footer