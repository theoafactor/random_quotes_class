const express = require("express");
const quotes = require("./quotes_bank");
require("dotenv").config();

const server = express();


//ROUTES
server.get("/generate-quote", (request, response) => {


    console.log(request.query)

    if(request.query.q){
        //a query is set
        // get the number of quote indicated
        console.log(`Get ${request.query.q} quote`)
    }else{
        //no query is set
        //get any one random quote
        console.log("Get 1 quote")
    }

    response.status(200).send({
        
    })


});


//listening
server.listen(process.env.PORT, () => console.log(`Server is listening on ${process.env.PORT}`))