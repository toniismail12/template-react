import { api } from "@api";
import cookie from "cookiejs";
import { Encrypt } from '@services';
import { URL_LOGIN } from "@api-routes";
import { ShowLoading } from '@components';

async function Auth(username, password) {

    ShowLoading()
     
    const res2 = await api.post(URL_LOGIN, {
        username: username,
        password: password,
    }).catch((error)=>{
       alert("gagal-login")
        console.log(error)
    });

    if(res2 !== undefined) {

        // console.log(res2.data)

        cookie.set(
            {
                username: Encrypt(username, "username"),
                token: Encrypt(res2.data.access_token, "token"),
            },
            {
                expires: 1,
                path: "/",
                domain: "",
            }
        );
    }

    return res2;

}

export default Auth;
