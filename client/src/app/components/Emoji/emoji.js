import styles from './emoji.module.css'
import Image from 'next/image';
import rating1 from './/ratingFaces/rating1.svg'

function Emoji(){
    return (
        <div className={styles.circle}>
            <Image
                src={rating1}
                alt='Rating face'
                className={styles.face}
            />
        </div>
    )
}

export default Emoji;