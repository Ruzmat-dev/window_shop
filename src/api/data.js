import instance from "./instance";



export const getOffers = async() => {
    try {
        const res = await instance.get("/offers")
        return res
    } catch (error) {
        console.log(error);
    }
}