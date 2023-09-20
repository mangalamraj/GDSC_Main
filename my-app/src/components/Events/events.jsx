import Eventbox from "./eventbox";
import styles from "./events.module.css"

const Events = () => {
    return (
        <div style={{
            alignItems: "center",
            textAlign: "center",

        }}>


            <div className={styles.eventsParents} id="events">
                <div className={styles.mango}>
                    <div className={styles.head}>Recent Events</div>

                    <div className={styles.events}>
                        <Eventbox image="https://res.cloudinary.com/startup-grind/image/upload/c_limit,dpr_2,f_auto,g_center,h_1440,q_auto:good,w_2048/v1/gcs/platform-data-dsc/event_wrapup/WhatsApp%2520Image%25202023-04-03%2520at%252012.10.37%2520AM.jpeg" heading="TechCon" para="Get ready to take your web development skills to the next level! Join us for an exciting workshop hosted by GDSC IIITN and gain hands-on experience in creating dynamic and responsive websites. Don't miss out on this opportunity to learn from experts and connect with fellow web enthusiasts. See you there!"></Eventbox>
                        <Eventbox image="images/hack.svg" heading="InfoSession 2.0" para="INFO SESSION 1.0
                        This is an event introducing GDSC IIITN for the batch 2022. We will introduce you to domain leads, co-leads and members who will be guiding you through the journey with the club. It will also include the insights about the various Google campaigns like Compose Camp, Google Cloud, Android"></Eventbox>
                        <Eventbox image="images/hack2.svg" heading="Hack-Droid" para="HACK-DROID
                        GDSC-IIIT Nagpur brings you Hack-Droid, an Android based hackathon where you get a chance to show off your knowledge by making a project on one of the two problem statements. The problem statements are very engaging and beginner friendly.
                        "></Eventbox>

                    </div>



                    
                </div>

            </div>
            <div style={{ alignItems: "center", textAlign: "center", marginTop: "-35px", display: "flex", justifyContent: "center", }}>
                <a href="https://gdsc.community.dev/indian-institute-of-information-technology-nagpur/">View More</a>
            </div>

        </div>
    )
}
export default Events;