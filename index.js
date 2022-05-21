const container = require("./src/container");

const aplication = container.resolve("app");

const db = container.resolve("db");

aplication
	.start()
	.then(async () => {
		await db.sequelize.sync();
	})
	.catch((e) => {
	console.log("Error subiendo servidor", e);
	process.exit();
})