const Word = {
	singularize: (a: string) => {
		if (a.sub(-3) === "ies") a = `${a.sub(1, -4)}y`;
		else if (a.sub(-1) === "s") a = a.sub(1, -2);

		return a;
	},

	capitalize: (a: string) => {
		return `${a.sub(1, 1).upper()}${a.sub(-a.size() + 1)}`;
	},
};

export = Word;
