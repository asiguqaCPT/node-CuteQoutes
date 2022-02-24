const router = require("express").Router();
const { getQuotes, addQoute, getQuote } = require("../controllers/apiHandler")
                   
router.get('/', getQuotes);
router.get('/:id', getQuote)
router.post('/', addQoute);

module.exports = router;

