import styles from "./Crew.module.scss";

const Crew = () => {
  return (
    <div className={styles.CrewKabaap} id="crew">

      <div className={styles.body}>
        <header>
          <div className={styles.title}>
            <h3>The creative crew</h3>
          </div>
          <div className={styles.content}>
            <h5>who we are</h5>
            <p>
              We are team of creatively diverse. driven. innovative individuals
              working in various locations from the world.
            </p>
          </div>
        </header>
        <main>
          <div className={styles.profile}>
            <figure data-value="GDSC Lead">
              <img src="images/srishti.jpeg" alt="" />
              <figcaption style={{ marginBottom: "50px" }}>Srishti Pandey</figcaption>
            </figure>
          </div>
        </main>
        <main>
        

          <div className={styles.profile}>
            <figure data-value="Web Dev Lead">
              <img src="images/Deep.jpg" alt="" />
              <figcaption>Deep Panchani</figcaption>
            </figure>
          </div>

          <div className={styles.profile}>
            <figure data-value="Design Lead">
              <img src="images/ritu.jpg" alt="" height="350px" />
              <figcaption style={{ marginBottom: "50px" }}>Ritu Bhangale</figcaption>
            </figure>
          </div>

          <div className={styles.profile}>
            <figure data-value="APP Dev Lead">
              <img src="images/ml.jpg" alt="" height="350px" />
              <figcaption>Raj Aryan</figcaption>
            </figure>
          </div>

          <div className={styles.profile}>
            <figure data-value="Management Lead">
              <img src="images/ambuj.jpeg" alt="" height="350px" />
              <figcaption>AMBUJ RAJ</figcaption>
            </figure>
          </div>

          <div className={styles.profile} id="profile">
            <figure data-value="ML Lead">
              <img src="images/drock.jpg" alt="" height="300px" />
              <figcaption>Divyansh Kumar</figcaption>
            </figure>
          </div>
          <div className={styles.profile} id="profile2">
            <figure data-value="Content Lead">
              <img src="images/chetan.jpeg" alt="" height="300px" />
              <figcaption>Chetan Amritanshu</figcaption>
            </figure>
          </div>
        </main>

      </div>
    </div>
  );
};

export default Crew;