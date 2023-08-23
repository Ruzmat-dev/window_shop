import instance from "./instance";



export const getOffers = async() => {
    try {
        const res = await instance.get("/offers")
        return res
    } catch (error) {
        console.log(error);
    }
}

export const getAdvantages = async() => {
    try {
        const res = await instance.get('/advantages')
        return res
    } catch (error) {
        console.log(error);
    }
}