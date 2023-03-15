import styles from './projectLeft.module.css'
import Image from 'next/image'

export default function ProjectLeft({
    img = '',
    title = '',
    description = ''
}) {
    return (
        <div className={styles.main}>
            <Image className={styles.image} src={img} width={400} height={400}/>
            <div className={styles.textBox}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}