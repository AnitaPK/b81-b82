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
                res.status(400).send({success:false, msg:"Databse error"})
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
        q3 = "select name ,population from country order by population desc limit 10"
        connection.execute(q3, (error,result)=>{
            if(error){
                res.status(400).send({msg:"Database Error...", success:false})
            }else{
                console.log(result)
                res.status(200).send({result:result,success:true})
            }
        })


    } catch (error) {
        res.status(500).send({msg:"Server error", success:false})
    }
}

function getPopulationByContinent(req,res){
    try {
        q4 = "select continent , sum(population) as population from country group by continent;"
        connection.execute(q4,(err,result)=>{
            if(err){
                res.status(400).send({msg:"Database error..."})
            }else{
                res.status(200).send({result:result})
            }
        })
        
    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
}





function getCountryByGivenPop(req,res){
    console.log(req.body)
    try {
        const x = req.body.popCount
        q5 =`SELECT Name, Population FROM country WHERE Population > ? ORDER BY Population DESC;`
        
        connection.execute(q5,[x], (err,result)=>{
            if(err){
                res.status(400).send({msg:"Database error...",success:false})
            }else{
                res.status(200).send({result:result, success:true})
            }
        })
    } catch (error) {
        res.status(500).send({msg:"Server error"})
        
    }
}


module.exports ={
    getTotalPopulation,
    getTotalContries,
    getTopTenPopulatedCountries,
    getPopulationByContinent,
    getCountryByGivenPop
}