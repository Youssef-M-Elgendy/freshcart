
'use server';
import axios, { AxiosRequestConfig } from "axios";

export async function getAllBrands() {
    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/brands`,
            method: "GET",
        };

        const { data } = await axios.request(options);
        return data; 
    } catch (error: any) {
        throw error;
    }
}

export async function getProductsByBrand(brandId: string) {
    try {

        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/products`,
            method: "GET",
        };

        const { data } = await axios.request(options);
        return data; 
    } catch (error: any) {
        throw error;
    }
}