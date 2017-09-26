import "module-alias/register"; // Used to take into account path declaration for modules
// See declarations in package.json

import * as http from "http";                   // HTTP server
import * as https from "https";                 // HTTPS server
import * as express from "express";             // The application server
import * as bodyParser from "body-parser";      // Parse HTTP GET and POST variables
import * as path from "path";                   // Deal with system paths
import * as fs from "fs-extra";                 // Acces to files

const app: express.Application = express();

// HTTP
const serverHTTP = http.createServer(app);
const portHTTP = process.env.PORT || 8080;
serverHTTP.listen(portHTTP, () => {
    console.log(`HTTP server running on port ${portHTTP}.`);
});

// HTTPS
const portHTTPS = 8443;
const TLS_SSL =	{
    key : fs.readFileSync( path.join("./app/MM.pem"		 ) ),
    cert: fs.readFileSync( path.join("./app/certificat.pem") )
};
const serverHTTPS = https.createServer(TLS_SSL, app);
serverHTTPS.listen(portHTTPS, () => {
    console.log(`HTTPS server running on port ${portHTTPS}. `);
});

// Configure the web server
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
   res.json( {message: "Il va falloir implémenter tout ça..."} );
});

const dataPath = path.join(__dirname, "../app/data");
app.use("/data", express.static(dataPath));

app.get("/test", (req, res) => {
	res.end("OK, tout va bien !");
})

/*app.get("/testParams", (req, res) => {
	res.json(req.query);
	ou autre solution : 
	let str = "";
		for (let att in req.query){
		str += `${att}:${req.query[att]}\n`;
		}
	res.end();
})*/

app.get("/testParams", (req, res) => {
	if (req.body.nom === undefined){
		res.status(400);
		res.setHeader("Content-Type", "text/html; charset=UTF-8");
		res.end("Vous devez spécifier un nom");
	}
})

app.post("/addPatient", (req, res) => {
	if(req.body.name === undefined){
		// nom, prenom, numSS, addr, sexe, pathologie
		res.end("Patient créé");
	}
})

app.post("/addInf", (req, res) => {
	if(req.body.name === undefined){
		// nom, prenom, addr, sexe, patients, ID
		res.end("Infirmier(e) créé");
	}
})