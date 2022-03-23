const express = require("express");
const router = express.Router();
const petsController = require('../controllers/petsController');
const petValidator = require("../validations/petValidator");
const jwtToken = require("../jwtValidation");
router.get('/pet', jwtToken.validationToken, petValidator.id, petsController.getPet);
router.get('/pets', jwtToken.validationToken, petsController.getPets);
router.post('/pet', petValidator.add, petsController.postPet);
router.put('/pet', petValidator.update, petsController.putPet);
router.delete('/pet', petValidator.id, petsController.deletePet);

module.exports = router;