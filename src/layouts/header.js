import Logo from "@assets/img/logo/logo-pusri.png";

function Header() {
  return (
    <div id="kt_app_header" className="app-header">
      {/*begin::Header container*/}
      <div
        className="app-container container-fluid d-flex align-items-stretch justify-content-between"
        id="kt_app_header_container"
      >
        {/*begin::Sidebar mobile toggle*/}
        <div
          className="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2"
          title="Show sidebar menu"
        >
          <div
            className="btn btn-icon btn-active-color-primary w-35px h-35px"
            id="kt_app_sidebar_mobile_toggle"
          >
            {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
            <span className="svg-icon svg-icon-2 svg-icon-md-1">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.3"
                  d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
        </div>
        {/*end::Sidebar mobile toggle*/}

        {/*begin::Mobile logo*/}
        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <a href="#" className="d-lg-none">
            <img src="/logo/I-PMS-08.png" alt="img" className="h-30px" />
          </a>
        </div>
        {/*end::Mobile logo*/}

        {/*begin::Header wrapper*/}
        <div
          className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
          id="kt_app_header_wrapper"
        >
          {/*begin::Menu wrapper*/}
          <div className="app-header-menu app-header-mobile-drawer align-items-stretch">
            {/*begin::Menu*/}
            <div
              className="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
              id="kt_app_header_menu"
              data-kt-menu="true"
            ></div>
            {/*end::Menu*/}
          </div>
          {/*end::Menu wrapper*/}

          {/*begin::Navbar*/}
          <div className="app-navbar flex-shrink-0">
            {/*begin::User menu*/}
            <div
              className="app-navbar-item ms-1 ms-md-3"
              id="kt_header_user_menu_toggle"
            >
              {/*begin::Menu wrapper*/}
              <div className="cursor-pointer symbol symbol-30px symbol-md-40px">
                <img src={Logo} height={50} alt="img user" />
              </div>

              {/*begin::User account menu*/}
              <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px">
                {/*begin::Menu item*/}
                <div className="menu-item px-3">
                  <div className="menu-content d-flex align-items-center px-3">
                    {/*begin::Username*/}
                    <div className="d-flex flex-column">
                      <div className="fw-bold d-flex align-items-center fs-5">
                        Max Smith
                        <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                          Pro
                        </span>
                      </div>
                      <a
                        href="#"
                        className="fw-semibold text-muted text-hover-primary fs-7"
                      >
                        max@kt.com
                      </a>
                    </div>
                    {/*end::Username*/}
                  </div>
                </div>
                {/*end::Menu item*/}

                {/*begin::Menu separator*/}
                <div className="separator my-2" />
                {/*end::Menu separator*/}

                {/*begin::Menu item*/}
                <div className="menu-item px-5">
                  <a
                    href="../../demo1/dist/account/overview.html"
                    className="menu-link px-5"
                  >
                    My Profile
                  </a>
                </div>
                {/*end::Menu item*/}

                {/*begin::Menu separator*/}
                <div className="separator my-2" />
                {/*end::Menu separator*/}

                {/*begin::Menu item*/}
                <div className="menu-item px-5">
                  <a
                    href="../../demo1/dist/authentication/layouts/corporate/sign-in.html"
                    className="menu-link px-5"
                  >
                    Sign Out
                  </a>
                </div>
                {/*end::Menu item*/}
              </div>
              {/*end::User account menu*/}
              {/*end::Menu wrapper*/}
            </div>
            {/*end::User menu*/}
          </div>
          {/*end::Navbar*/}
        </div>
        {/*end::Header wrapper*/}
      </div>
      {/*end::Header container*/}
    </div>
  );
}

export default Header;
