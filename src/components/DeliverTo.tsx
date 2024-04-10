import locationPin from "../assets/location.svg";
import styles from "./DeliverTo.module.css";

function DeliverTo() {
  return (
    <div className={styles.locationSlot}>
      <div className={styles.locationPin}>
        <img src={locationPin} alt="Location Pin" />
      </div>
      <div className={styles.locationAddress}>
        <div className={styles.deliverTo}>Deliver to</div>
        <div className={styles.address}>New York 10001</div>
      </div>
    </div>
  );
}

export default DeliverTo;
