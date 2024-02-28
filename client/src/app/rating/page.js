import styles from './page.module.css'
import Emoji from '../components/Emoji/emoji';

function RatingGreeting(){
    return (
        <>
        <h1 className={styles.title}>How are you feeling today?</h1>
        <Emoji/>
        <Emoji/>
        <Emoji/>
        </>
    )
}

export default RatingGreeting;