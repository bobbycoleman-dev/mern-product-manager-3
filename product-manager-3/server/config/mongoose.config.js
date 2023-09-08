// connect mongoose library
const mongoose = require("mongoose");

// get env variables
const dbName = process.env.DB;
const dbConString = process.env.DB_CONSTRING;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

// set db connection uri
const uri = `mongodb+srv://${username}:${pw}${dbConString}/${dbName}?retryWrites=true&w=majority`;

// establish connection to db
mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log("✅✅✅✅✅ Established a connection to the database"))
	.catch((err) => console.log("❌❌❌❌❌ Something went wrong when connecting to the database", err));
