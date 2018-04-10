const fs = require('fs');
const path = require('path');
const musiciansJson = path.join(__dirname, '..', 'data', 'storage.json');

exports.get = (req, res) => {
	fs.readFile( musiciansJson, (err, data) => {
		let musicians;

		if(err){
			return res.sendStatus(500);
		}

		try{
			musicians = JSON.parse(data);
		} catch (e) {
			return res.sendStatus(500);
		}

		res.status(200);
		res.json(musicians);
	});
}

exports.post = (req, res) => {
	fs.readFile( musiciansJson, (err, data) => {
		let musicians;
		let musician;
		let newMusician;

		if(err){
			return res.sendStatus(500);
		}

		if(!req.body.name || !req.body.band || !req.body.instrument){
			return res.sendStatus(400);
		}

		try{
			musicians = JSON.parse(data);
		} catch (e) {
			return res.sendStatus(500);
		}

		if(musician = musicians.find( el => el.name === req.body.name && el.band === req.body.band && el.instrument === req.body.instrument )){
			return res.status(409).send({ "message" : "Musician already exist."});
		}

		newMusician = {
			id: musicians.length + 1,
			name: req.body.name,
			band: req.body.band,
			instrument: req.body.instrument
		}
		musicians.push(newMusician);

		try{
			fs.writeFile(musiciansJson, JSON.stringify(musicians), (err) => {
        if (err) {
          return res.sendStatus(500);
        }
    });
		} catch (e) {
			return res.sendStatus(500);
		}
		res.sendStatus(201);
	});
}

exports.getById = (req, res) => {
	fs.readFile( musiciansJson, (err, data) => {
		let musicians;
		let musician;

		if(err){
			return res.sendStatus(500);
		}

		try{
			musicians = JSON.parse(data);
		} catch (e) {
			return res.sendStatus(500);
		}

		musician = musicians.find( el => el.id === parseInt(req.params.id) );
		if(musician){
			return res.status(200).send(musician);
		}else{
			return res.sendStatus(404);
		}
	});
}

exports.put = (req, res) => {
	fs.readFile( musiciansJson, (err, data) => {
		let musicians;
		var musician;

		if(err){
			return res.sendStatus(500);
		}

		musicians = JSON.parse(data);
		musician = musicians.find( el => el.id === parseInt(req.params.id) );

		if(!musician){
			return res.sendStatus(404);
		}

		if(!req.body.name || !req.body.band || !req.body.instrument){
			return res.sendStatus(400);
		}
			
		musician.name = req.body.name;
		musician.band = req.body.band;
		musician.instrument = req.body.instrument;

			fs.writeFile(musiciansJson, JSON.stringify(musicians), (err) => {
        if (err) {
         	return res.sendStatus(500);
        }
    		});
			return res.send(musician);


	});
}

exports.delete = (req, res) => {
	fs.readFile( musiciansJson, (err, data) => {
		let musicians;
		let musician;

		if(err){
			return res.sendStatus(500);
		}

		try{
			musicians = JSON.parse(data);
		} catch (e) {
			return res.sendStatus(500);
		}

		musician = musicians.find( el => el.id === parseInt(req.params.id) );

		if(musician){

			musicians.splice( parseInt(req.params.id), 1 );

			try{
				fs.writeFile(musiciansJson, JSON.stringify(musicians), (err) => {
        	if (err) {
          	return res.sendStatus(500);
        	}
    		});
			} catch (e) {
				return res.sendStatus(500);
			}
			return res.status(200).send({ "message": "Musician has been successfully removed."});
		}else{
			return res.sendStatus(404);
		}
	});
}