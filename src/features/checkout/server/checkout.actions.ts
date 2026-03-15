"use server";
import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { shippingAdressValues } from "../schemas/checkout.schemas";



export async function createCashOrder({
    cartId,
    shippingAddress,
}: {
    cartId: string;
    shippingAddress: shippingAdressValues;
}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || null;

    if (!token) {
        throw new Error("Authentication required");
    }

    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
            method: "POST",
            headers: {
                token,
            },
            data: {
                shippingAddress,
            },
        };

        const { data } = await axios.request(options);
        return data;
    } catch (error) {
        throw error;
    }
}

export async function createOnlineOrder({
    cartId,
    shippingAddress,
    url
}: {
    cartId: string;
    shippingAddress: shippingAdressValues;
    url:string;
}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || null;

    if (!token) {
        throw new Error("Authentication required");
    }

    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/orders/${cartId}?url=${url}`,
            method: "POST",
            headers: {
                token,
            },
            data: {
                shippingAddress,
            },
        };

        const { data } = await axios.request(options);
        return data;
    } catch (error) {
        throw error;
    }
}