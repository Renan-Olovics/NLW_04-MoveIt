import styles from "../styles/components/HomeBar.module.scss";

export function HomeBar() {
	return (
		<div>
			<div className={styles.Homebardento}>
				<img src="icons/blueHouse.svg" alt="HomePage" />
				<img src="icons/greyAward.svg" alt="LeaderBoard" />
			</div>
		</div>
	);
}
