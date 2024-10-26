import api from "./api";
import { useQuery } from "@tanstack/react-query";


interface IProducts{
    limit:number,
    skip:number, 
    search:string
}

export const getProducts = ({search, limit, skip}: IProducts) => {
    return useQuery(['products', search, skip, limit], () => api.get(`products/search?q=${search}&limit=${limit}&skip=${skip}`), {
        select: (response) => response.data
    })
}
export const getProductById = (id: number) => {
    return  useQuery(['product', id], () => api.get(`products/${id}`), {
        select: (response) => response.data
    })
}