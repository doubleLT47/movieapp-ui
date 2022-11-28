import request from "../services/request";
import { path } from "./apiPath";
export const registerApi = async (body) => {
    const res = await request("POST", path.register, { body} );
    return res.data
}

export const loginApi = async (user) => {
    const res = await request("POST", path.login, {body: user})
    return res.data
}