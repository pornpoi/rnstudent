import { APP_CHECKIN, APP_CHECKOUT } from "../constants";

export const setStateCheckIn = (payload) => ({
    type: APP_CHECKIN,
    payload
})


export const setStateCheckOut = () => ({
    type: APP_CHECKOUT,
})

