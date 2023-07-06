const Time = {
	toHSM: (seconds: number) => {
		const hours = math.floor(seconds / 3600);
		const minutes = math.floor((seconds % 3600) / 60);
		const remainingSeconds = seconds % 60;

		if (hours > 0) return string.format("%d:%02d:%02d", hours, minutes, remainingSeconds);
		else return string.format("%d:%02d", minutes, remainingSeconds);
	},
};

export = Time;
