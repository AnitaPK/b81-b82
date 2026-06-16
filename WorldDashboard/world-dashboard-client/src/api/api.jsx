import axios from "axios";
import axiosInstance from "./axiosInstance";

export async function getTotalPopulation (){
    const res = await axiosInstance.get('/tp')
    console.log(res.data, "In api file")
    if(res.data.success){

      return  res.data.tpoplation
    }
}

export async function getTotalCountries(){
    console.log("#############")
    const res = await axiosInstance.get('/tc')
    if(res.data.success){
        return res.data.countryCount
    }
}
export async function getTopTenCounPop(){
    const res = await axiosInstance.get('/tenCP')
    if(res.data.success){
        return res.data.result
    }
}

export async function getCountryByGivenPop(data){
    const res = await axiosInstance.post('/get-higher-pop-given-value', data)

    if(res.data.success){
        return res.data.result
    }
}