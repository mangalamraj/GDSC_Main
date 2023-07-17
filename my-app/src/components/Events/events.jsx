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

                    <div className={styles.events}>

                        <Eventbox image="images/cr.jpg" heading="Code Rush 2023" para="We are excited to announce CodeRush 2023 👨🏻‍💻, a programming contest hosted by GDSC, IIIT Nagpur in collaboration with AlgoUniversity.

This is a fantastic opportunity to hone your programming skills and win cash prizes of 7500 INR and the total prize pool is 30,000 INR exclusive to IIIT Nagpur 🤯 students.
                        "></Eventbox>
                        <Eventbox image="images/cloudjam.png" heading="GCCP Session" para="Hands-on with Google cloud Platform ,AMA session and Project Development Phase Disscussion.
                        "></Eventbox>
                        <Eventbox image="images/6d30c.webp" heading="6 Companies 30 Days Challenge" para="A Challenge to make sure you start with your goals today , don’t procrastinate and don’t let your college decide your future!
Those who complete the challenge also get referrals and surprise prizes at the end of the challenge along with a personalized roadmap of what comes next in your preparation for your dream company.
                        "></Eventbox>
                    </div>

                    <div className={styles.events}>

                        <Eventbox image="images/ss.webp" heading="Solution Challenge 2022" para="In this we will be telling about GDSC in brief , their perks and opportunities associated with GDSC. Also will elaborate about Solution Challenge 2023,how to take part ,what are the requirements etc.
                        "></Eventbox>
                        <Eventbox image="images/df.webp" heading="Devfest 2022" para="Hey Developers! 👨🏻‍💻

Wanna explore the latest technologies? 🚀

Learn something new? 📋

Participate in some hackathons? 🎖

Networking with other developers? 🏂

<> Google Developers Group - Nagpur presents you

DevFest Nagpur 2022 🪂

                        "></Eventbox>
                        <Eventbox image="images/mls.webp" heading="ML Study Jams" para="Experience the potential of machine learning through our ML Study Jams! Our comprehensive sessions cover all the fundamentals, from data preparation to model deployment, providing a solid foundation in this exciting field. By participating, you'll uncover how ML can enable you to tackle complex problems, streamline tasks, and promote innovation in your industry.
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