import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {    
    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                Navid Memari
            </div>
            <div className={styles.pages}>
                <ul>
                    <li><Link className={styles.link} href='..'>Home</Link></li>
                    <li><Link className={styles.link} href='about'>About</Link></li>
                    <li><Link className={styles.link} href='contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}