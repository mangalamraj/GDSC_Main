import styles from "./eventbox.module.css";

const Eventbox = (props) => {
  return (
    <div className={styles.Card_card__89R3Q}>
      <div >
        <img
          src={props.image}
          className={styles.Card_cardImage__hnV6a}
          width="320px"
          height="250px"
        ></img>
        <div className={styles.Card_cardBody__39nbs}>
          <a href="" target="_blank" rel="noopener noreferrer">
            <h3 className={styles.Card_cardHeader__w3dhQ}>{props.heading}</h3>
          </a>
          <br></br>
          <p>
            {props.para}
          </p>

        </div>
      </div>
    </div>
  );
};

export default Eventbox;