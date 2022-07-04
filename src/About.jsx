import Header from './Header'
import styles from './styles.module.scss'
import github from './assets/images/github.svg'
import profile_picture from './assets/images/gh_profile_picture_round.png'

export default function About() {
    return (
        <div>
            <div className={styles.background}>
                <Header></Header>
                <div className={styles.about_container}>
                    <h1 className={styles.page_headeing}>this is About page</h1>
                    <div className={styles.about_text}>This page is made by muddv@github as a quick exercise. Made with react spring parallax, wouter, sass, and images from feather and vite. If you want actual source on history of philosophy go to sources. Also, you can hire me to make your website or web app.</div>
                    <img className={styles.about_profile_image} src={profile_picture}></img>
                    <figcaption className={styles.about_caption}>muddv@github</figcaption>
                    <img className={styles.gh} src={github}></img>
                </div>
            </div>
        </div>
    )
}