import styles from './emoji.module.css'
import Image from 'next/image';
import rating1 from './/ratingFaces/rating1.svg'
import rating2 from './/ratingFaces/rating2.svg'

const faces = [
    styles.face1,
    styles.face2
]

function Emoji({rating}){
    const getRatingSrc = () => {
        switch(rating) {
            case 1:
                return rating1;
            case 2:
                return rating2;
        }
    };

    const faceStyle = faces[rating - 1]

    return (
        <div className={styles.circle}>
            <Image
                src={getRatingSrc()}
                alt='Rating face'
                className={faceStyle}
            />
        </div>
    )
}

export default Emoji;

// function Emoji(){
//     return (
//         <div className={styles.circle}>
//             <Image
//                 src={rating1}
//                 alt='Rating face'
//                 className={styles.face1}
//             />
//         </div>
//     )
// }