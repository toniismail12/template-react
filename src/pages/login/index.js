import Logo from "@assets/img/logo/logo-white.png";
import { HideLoading } from "@components";
import { Auth } from '@controllers'
import { APP_DESC, COPYRIGHT } from "@variable"

export default function Login() {

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (event.target.first.value === "") {
      // return Toastify("custom", "username wajib diisi")
      return alert("username wajib diisi")
    }

    if (event.target.last.value === "") {
      // return Toastify("custom", "password wajib diisi")
      return alert("username wajib diisi")
    }

    var username = event.target.first.value;
    var password = event.target.last.value;

    const res = await Auth(username, password)

    if (res !== undefined) {

      setTimeout(() => {
        // navigate("/dashboard");
        return (window.location.href = "/dashboard")
      }, 1000);

    } else {
      HideLoading()
      return alert("error login")
    }

  }


  return (
    <div className="d-flex flex-column flex-root h-screen" id="kt_app_root">
      {/*begin::Authentication - Sign-in */}
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        {/*begin::Body*/}
        <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
          {/*begin::Form*/}
          <div className="d-flex flex-center flex-column flex-lg-row-fluid">
            {/*begin::Wrapper*/}
            <div className="w-lg-500px p-10">

              {/*begin::Form*/}
              <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form" action="#" onSubmit={handleSubmit}>
                {/*begin::Heading*/}
                <div className="text-center mb-11">
                  {/*begin::Title*/}
                  <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                  {/*end::Title*/}
                  {/*begin::Subtitle*/}
                  <div className="text-gray-500 fw-semibold fs-6">Your Account</div>
                  {/*end::Subtitle=*/}
                </div>
                {/*begin::Heading*/}

                {/*end::Separator*/}
                {/*begin::Input group=*/}
                <div className="fv-row mb-8">
                  {/*begin::Email*/}
                  <input type="text" placeholder="Username" name="first" autoComplete="off" className="form-control bg-transparent" />
                  {/*end::Email*/}
                </div>
                {/*end::Input group=*/}
                <div className="fv-row mb-3">
                  {/*begin::Password*/}
                  <input type="password" placeholder="Password" name="last" autoComplete="off" className="form-control bg-transparent" />
                  {/*end::Password*/}
                </div>
                {/*end::Input group=*/}
                {/*begin::Wrapper*/}
                <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                  <div />
                </div>
                {/*end::Wrapper*/}

                {/*begin::Submit button*/}
                <div className="d-grid mb-10">
                  <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
                    {/*begin::Indicator label*/}
                    <span className="indicator-label">Sign In</span>
                    {/*end::Indicator label*/}

                    {/*begin::Indicator progress*/}
                    {/* <span className="indicator-label">Please wait...
                                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                        </span> */}
                    {/*end::Indicator progress*/}
                  </button>
                </div>
                {/*end::Submit button*/}

              </form>
              {/*end::Form*/}

            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Form*/}

          <div className="w-lg-500px d-flex flex-stack px-10 mx-auto">
            <div className="d-flex fw-semibold text-primary fs-base gap-5">
              <span>{COPYRIGHT} </span>
            </div>
          </div>

        </div>
        {/*end::Body*/}

        {/*begin::Aside*/}
        <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2 auth-bg">
          {/*begin::Content*/}
          <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">

            <img
              src={Logo}
              height={300}
              alt="img logo"
              className="d-none d-lg-block mx-auto mb-5 mb-lg-5 rounded-2 p-2"
              style={{
                width:'500px',
                height:'140px'
              }}
            />

            {/*begin::Title*/}
            {/* <h1 className="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">Fast, Efficient and Productive</h1> */}
            {/*end::Title*/}

            {/*begin::Text*/}
            <div className="d-none d-lg-block text-white fs-base text-center">
              {APP_DESC}
            </div>
            {/*end::Text*/}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Aside*/}
      </div>
      {/*end::Authentication - Sign-in*/}
    </div>
  );
}
