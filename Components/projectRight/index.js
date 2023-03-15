import styles from './projectRight.module.css'
import Image from 'next/image'

export default function ProjectRight({
    img = '',
    title = '',
    description = ''
}) {    
    return (
        <div className={styles.main}>
            <div className={styles.textBox}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <Image className={styles.image} src={img} width={400} height={400}/>
        </div>  
    )
}