import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <section>
      <div className={styles.photoFrame}>
        <img src={foto} alt="" className={styles.image} />
      </div>
      <div>
        <h2 className={styles.title}>{tittle}</h2>
        <p className={styles.parrafo}>{parrafo1}</p>
        {parrafo2 && <p className={styles.parrafo}>{parrafo2}</p>}
      </div>
    </section>
  );
};

export default Profile;
