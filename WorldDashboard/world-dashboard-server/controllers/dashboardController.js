const connection = require('../config/db')

async function getTotalPopulation (req,res){
    try {
        const q1 = "select sum(Population) as tPopulation from country;"
        // const [resultDB] = await connection.execute("select sum(Population) as tPopulation from country;")
        // console.log(resultDB[0])
        
        await connection.execute(q1,(err,result)=>{
            if(err){
                console.log(err)
                res.status(400).send({msg:"database error"})
            }else{
                console.log(result[0])
        const tpoplation  = result[0].tPopulation

        res.status(200).send({tpoplation:tpoplation, success:true})

            }
        })  
    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
}


async function getTotalContries(req,res){
    try {
        const q2 = "select count(*) as cCount from country"
        
        await connection.execute(q2, (err,result)=>{
            if(err){
                res.status(400).send({msg:"Databse error"})
            }else{
                console.log(result[0])
                res.status(200).send({success:true,countryCount:result[0].cCount})
            }
        })

    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
}

function getTopTenPopulatedCountries(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
}

function getPopulationByContinent(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
}

module.exports ={
    getTotalPopulation,
    getTotalContries,
    getTopTenPopulatedCountries,
    getPopulationByContinent
}