import cookie from "cookiejs";
import Decrypt from './decrypt';

function GetCookies(key) {
    
    // get value cookies by key
    const cookies = typeof window !== "undefined" ? cookie.get(key) : null ;

    // set decrypt by value cookies and key
    var hasil_decrypt = cookies !== null ? Decrypt(cookies, key) : null; 
    
    // return decrypt
    return hasil_decrypt;
    
}

export default GetCookies;