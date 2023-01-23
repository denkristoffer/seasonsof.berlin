import Arrow from "../components/arrow";
import Credits from "../components/credits";
import styles from "./page.module.css";
import seasons from "./data.json";
import Analytics from "./components/analytics";

export default function Index() {
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.heading}>
          The {seasons.length} seasons of Berlin
        </h1>

        <ol className={styles.list}>
          {seasons.map((season) => {
            return (
              <li className={styles.listItem} key={season.name}>
                {season.name}
                {season.isActive && (
                  <span className={styles.wrapper}>
                    <Arrow />
                    <em className={styles.highlight}>You are here</em>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <Credits />

      <Analytics />
    </div>
  );
}
