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
        </div>
    )
}
export default Banner;