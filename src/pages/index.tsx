import Head from "next/head";
import { GetServerSideProps } from "next";

import { CompletedChalleges } from "../components/CompletedChalleges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { HomeBar } from "../components/HomeBar";

import styles from "../styles/components/Home.module.css";
import { CountdownProvider } from "../Contexts/CountdownContext";
import { ChallengesProvider } from "../Contexts/ChallengesContext";

interface HomeProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
}

export default function Home(props: HomeProps) {
	console.log(props);
	return (
		<ChallengesProvider
			level={props.level}
			currentExperience={props.currentExperience}
			challengesCompleted={props.challengesCompleted}
		>
			<div>
				<HomeBar />
				<div className={styles.container}>
					<Head>
						<title>Início | Move.It</title>
					</Head>

					<ExperienceBar />
					<CountdownProvider>
						<section>
							<div>
								<Profile />
								<CompletedChalleges />
								<Countdown />
							</div>
							<div>
								<ChallengeBox />
							</div>
						</section>
					</CountdownProvider>
				</div>
			</div>
		</ChallengesProvider>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted),
		},
	};
};
