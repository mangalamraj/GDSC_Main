import styles from "./banner.module.css"
const Banner = () =>{
    return(
        <div className={styles.parentbanner}>
             <div className={styles.bannnerhead}>
                # Lets Learn, Grow and Innovate together.
             </div>
             <div className={styles.bannersubhead}>
                presenting to you the different field we guide into: WenDev, AppDev, ML,Design etc..
             </div>
             <div className={styles.floaters}>
                <div className={styles.leftf}>
                <img src="images/blue.svg" className={styles.blueball}></img>
                <img src="images/red.svg" className={styles.redball}></img>
                </div>
                <div className={styles.rightf}>
                <img src="images/Vector.svg" className={styles.Vectorball}></img>
                <img src="images/green.svg" className={styles.greenball}></img>
                </div>
               
             </div>
        </div>
    )
}
export default Banner;