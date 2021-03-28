import { challegesContext } from "../Contexts/ChallengesContext";

import {
	createContext,
	ReactNode,
	useState,
	useEffect,
	useContext,
} from "react";

interface CountdownContextData {
	minutes: number;
	seconds: number;
	hasFinished: boolean;
	isActive: boolean;
	startCountdown: () => void;
	resetCountdown: () => void;
}

interface CountdownProvider {
	children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProvider) {
	const { startNewChallenges } = useContext(challegesContext);

	const threeSeconds = 0.05;
	const twentyFiveMinutes = 25;
	const [time, setTime] = useState(threeSeconds * 60);
	const [isActive, setIsActive] = useState(false);
	const [hasFinished, setHasFinished] = useState(false);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	function startCountdown() {
		setIsActive(true);
	}

	function resetCountdown() {
		clearTimeout(countdownTimeout);
		setIsActive(false);
		setHasFinished(false);
		setTime(threeSeconds * 60);
	}

	useEffect(() => {
		if (isActive && time > 0) {
			countdownTimeout = setTimeout(() => {
				setTime(time - 1);
			}, 1000);
		} else if (isActive && time === 0) {
			setHasFinished(true);
			setIsActive(false);
			startNewChallenges();
		}
	}, [isActive, time]);

	return (
		<CountdownContext.Provider
			value={{
				minutes,
				seconds,
				hasFinished,
				isActive,
				startCountdown,
				resetCountdown,
			}}
		>
			{children}
		</CountdownContext.Provider>
	);
}
