let products = [
    {id:1, title:"Shirt",price:10000,description:"dfg dfgh ty cvb tyu gh", quantity:15,category:"Cloth"},
    {id:2, title:"iPhone15",price:50000,description:"dfg dfgh ty cvb tyu gh", quantity:5,category:"Electronic"},
    {id:3, title:"iPhone15",price:70000,description:"dfg dfgh ty cvb tyu gh", quantity:5,category:"Electronic"},
    {id:4, title:"iPhone15",price:65000,description:"dfg dfgh ty cvb tyu gh", quantity:5,category:"Electronic"},
    {id:5, title:"iPhone15",price:2350000,description:"dfg dfgh ty cvb tyu gh", quantity:5,category:"Electronic"},

]

const getAllProducts = (req,res)=>{
    try {
        res.status(200).send({products:products})
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
}

function getProductByID(req,res){
    const ID = req.params.ID
try {

        const index = products.findIndex((e)=>e.id == ID)
        if(index == -1){
            res.status(400).send({msg:"Product not found"})
        }else{
        const product = products.find((p)=>p.id == ID)
        res.status(200).send({pro:product})
        }
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
}

const createPtroduct = (req,res)=>{
    console.log(req.body)
    const {title,description,price,quantity,category} = req.body
    try {
        const newProd = {
            id:Date.now(),
            title:title,
            description:description,
            price:price,
            quantity:quantity,
            category:category
        }
        products.push(newProd)
        res.status(200).send({msg:"Product added succesfully"})
        
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
}

const deleteById = (req,res)=>{
    
    try {
        const {ID} = req.params
        console.log(ID,"ID")
        const index = products.findIndex((e)=>e.id == ID)
        console.log(index)
        if(index == -1){
            res.status(400).send({msg:"Product not found"})
        }else{
            products.splice(index,1)  
            res.status(200).send({msg:"Product deleted"}) 
        }
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
}
const updateProdcut = (req,res)=>{
    try {
        const {price} = req.body
        const {ID} = req.params
        const index = products.findIndex((e)=>e.id == ID)
        console.log(index)
        if(index == -1){
            res.status(400).send({msg:"Product not found"})
        }else{
            products[index].price= price
            res.status(200).send({msg:"Product PRice updated"})
        }

    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
}
const categorySearch = (req,res)=>{
    try {
        console.log(req.query)
        const {category} = req.query
        catProd = products.filter(e=>e.category == category)
        res.status(200).send({products:catProd})
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
}
const searchByPrice = (req,res)=>{
    try {
        const{minPrice,maxPrice} = req.query
        filterProd = products.filter(e=> e.price >= minPrice && e.price <= maxPrice)
        res.status(200).send({products:filterProd})
        
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
}

module.exports = {
    getAllProducts,
    getProductByID,
    createPtroduct,
    deleteById,
    updateProdcut,
    categorySearch,
    searchByPrice
}