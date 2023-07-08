import Logo from "@assets/img/logo/logo-pusri.png";
import Logowhite from "@assets/img/logo/logo-white.png";

function LogoFull(){
    return(
        <img
          src={Logowhite}
          height={50}
          alt="img"
          className="app-sidebar-logo-default"
        />
    )
}

function LogoMinimize(){
    return(
        <img
          src={Logo}
          height={40}
          alt="img"
          className="app-sidebar-logo-minimize"
        />
    )
}

export default LogoFull
export {LogoFull, LogoMinimize}
