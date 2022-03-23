const express = require("express");
const router = express.Router();
const adoptionsController = require('../controllers/adoptionsController');
const adoptionValidator = require("../validations/adoptionValidator");
const jwtToken = require("../jwtValidation");
router.get('/adoption', jwtToken.validationToken, adoptionValidator.id, adoptionsController.getAdoption);
router.get('/adoptions', jwtToken.validationToken, adoptionsController.getAdoptions);
router.post('/adoption', adoptionValidator.add, adoptionsController.postAdoption);
router.put('/adoption', adoptionValidator.update, adoptionsController.putAdoption);
router.delete('/adoption', adoptionValidator.id, adoptionsController.deleteAdoption);
router.get('/adoptionUser', adoptionValidator.id, adoptionsController.getAdoptionByUser);

module.exports = router;