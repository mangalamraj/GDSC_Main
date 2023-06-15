import Eventbox from "./eventbox";
import styles from "./events.module.css"

const Events = () =>{
    return(
        <div className={styles.eventsParents}>
            <div className={styles.mango}>
            <div className={styles.head}>Recent Events</div>
            <div className={styles.events}>
                <Eventbox image="https://dscakgec.org/static/media/wol2.133a968703660c799a08.png" heading = "Week of learning" para="Calling all tech enthusiasts! 'Week of Learning' from 13th May to 22nd May will equip tech enthusiasts with the latest and in-demand skills in the tech industry, including App Development, Web Development, Machine Learning, DevOps, UI/UX designing and startup."></Eventbox>
                <Eventbox image="https://dscakgec.org/static/media/wol2.133a968703660c799a08.png" heading = "Week of learning" para="Calling all tech enthusiasts! 'Week of Learning' from 13th May to 22nd May will equip tech enthusiasts with the latest and in-demand skills in the tech industry, including App Development, Web Development, Machine Learning, DevOps, UI/UX designing and startup."></Eventbox>
                <Eventbox image="https://dscakgec.org/static/media/wol2.133a968703660c799a08.png" heading = "Week of learning" para="Calling all tech enthusiasts! 'Week of Learning' from 13th May to 22nd May will equip tech enthusiasts with the latest and in-demand skills in the tech industry, including App Development, Web Development, Machine Learning, DevOps, UI/UX designing and startup."></Eventbox>
            </div>
            </div>

        </div>
    )
}
export default Events;