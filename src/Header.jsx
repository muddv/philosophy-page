import styles from './styles.module.scss'
import { Link } from "wouter";

export default function Header() {
    return (
        <header className={styles.header}>
        wow this is header
        <Link href="/">Main</Link>
        <Link href="sources">Sources</Link>
        <Link href="about">About</Link>
        </header>
    )
}