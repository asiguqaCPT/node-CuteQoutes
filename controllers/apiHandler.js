const qoutes = require("../data/quotes")

const getQuote = (req, res)=>{
    const { id } = req.params;
    const quote = qoutes.find(elem=>elem.id === Number(id))
    if(!quote){
        res.status(200)
        res.json({success: true, data: []})
        return;
    }
    res.json(quote)
}

const getQuotes = (req,res)=>{
    res.status(200)
    res.json(qoutes)
}
const addQoute = (req, res)=>{
    const quote = req.body;
    const id = getLastId(qoutes);
    const newQuote = {id, ...quote}
    qoutes.push(newQuote);
    res.json(newQuote)
}
 
const getLastId = (quotes)=>{
    let last = quotes.slice(quotes.length-1)
    const lastId = last[0].id + 1;
    return lastId;
}

module.exports = {
    getQuote,
    getQuotes,
    addQoute,
}