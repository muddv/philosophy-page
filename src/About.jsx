import Header from './Header'
import styles from './styles.module.scss'

export default function About() {
    return (
        <div>
            
            <div className={styles.background}>
            <Header></Header>
                <h1 className={styles.text}>this is About page</h1>
            </div>
        </div>
    )
}