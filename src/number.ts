const ABBREVIATIONS = ["k", "M", "B", "T", "Qa", "Qn", "Sx", "Sp", "Oc", "N"]

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

	abbreviate(a: number, decimals?: number) {
		if (!decimals) {
			decimals = 3
		}

		return `${math.floor(((a < 1 && a) || math.floor(a) / 10 ** (math.log10(a) - math.log10(a) % 3)) * 10 ** (decimals || 3)) / 10 ** (decimals || 3)}${(ABBREVIATIONS[math.floor(math.log10(a) / 3)] || "")}`
	}
};
