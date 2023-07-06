export = {
	insertCommas: (a: number | string) => {
		let k = -1;

		while (k !== 0) {
			const [formatted, newK] = string.gsub(a as string, "^(-?%d+)(%d%d%d)", "%1,%2");
			k = newK;
			a = formatted;
		}

		return a as string;
	},
};
