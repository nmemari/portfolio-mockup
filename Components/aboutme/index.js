import styles from './aboutme.module.css'
import Image from 'next/image'

export default function AboutMe({
    img='',
    title='',
    description1='',
    description2='',
    description3='',
    description4=''
}) {    
    return (
        <div className={styles.main}>
            <div className={styles.textBox}>
                <h1>{title}</h1>
                <p>{description1}</p>
                <p>{description2}</p>
                <p>{description3}</p>
            </div>
            <Image className={styles.image} src={img} width={500} height={650}/>
        </div>
    )
}