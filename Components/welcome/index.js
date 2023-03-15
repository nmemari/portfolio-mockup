import styles from './welcome.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Welcome({img = ''}) {    
    return (
        <div className={styles.main}>
            <div className={styles.mainMsg}>Oh! Hello there! <br/> Fancy seeing you here.</div>
            <div className={styles.name}>I'm Navid</div>
            <div className={styles.invitation}>While you're here, take a look at my work.</div>
            <Link className={styles.btn} href='#project'><Image src={img} width={50} height={50}/></Link>
        </div>
    )
}