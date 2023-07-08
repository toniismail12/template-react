import React from "react";
import { useContext } from "react";
import { SidebarContext } from "@contexts";
import { LogoMinimize, LogoFull } from "./logo";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlinePullRequest,
  AiOutlineDashboard,
  AiOutlineDeploymentUnit
} from "react-icons/ai";

function Sidebar({ minimize }) {
  const { show_sidebar, set_show_sidebar } = useContext(SidebarContext);

  const handle_show_sidebar = (show) => () => {
    show === "yes" ? set_show_sidebar("minimize") : set_show_sidebar("yes");
  };

  return (
    <div className={`app-sidebar flex-column ${minimize}`}>
      {/*begin::Logo*/}
      <div className="app-sidebar-logo px-6">

        {/*begin::Logo image*/}
        <LogoFull/>

        <LogoMinimize/>
        {/*end::Logo image*/}

        {/*begin::Sidebar toggle*/}
        <div
          onClick={handle_show_sidebar(show_sidebar)}
          className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
        >
          {/*begin::Svg Icon | path: icons/duotune/arrows/arr079.svg*/}
          <span className="svg-icon svg-icon-2 rotate-180">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                fill="currentColor"
              />
              <path
                d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                fill="currentColor"
              />
            </svg>
          </span>
          {/*end::Svg Icon*/}
        </div>
        {/*end::Sidebar toggle*/}
      </div>
      {/*end::Logo*/}

      {/*begin::sidebar menu*/}
      <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
        {/*begin::Menu wrapper*/}
        <div className="app-sidebar-wrapper hover-scroll-overlay-y my-5">
          {/*begin::Menu*/}
          <div className="menu menu-column menu-rounded menu-sub-indention px-3">
            <>
              {/*begin::Menu*/}
              <div
                className="menu menu-rounded menu-column menu-active-bg menu-hover-bg menu-title-white-900 fs-5 fw-semibold w-250px"
                id="#kt_aside_menu"
                data-kt-menu="true"
              >
                <div className="menu-item">
                  <div className="menu-content pb-2">
                    <span className="menu-section text-muted text-uppercase fs-7 fw-bold ">
                      MENU
                    </span>
                  </div>
                </div>
                <div className="menu-item">
                  <Link
                    to="/dashboard"
                    className="menu-link border-3 border-start border-transparent"
                  >
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                      <span className="svg-icon svg-icon-2 me-0">
                        <AiOutlineDashboard />

                        <path
                          opacity="0.3"
                          d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                          fill="currentColor"
                        />
                        <path
                          d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                          fill="currentColor"
                        />
                      </span>
                    </span>

                    <span className="menu-title">Dashboard</span>
                  </Link>
                </div>
                <div className="menu-item">
                  <div className="menu-content pb-2">
                    <span className="menu-section text-muted text-uppercase fs-7 fw-bold">
                      Menu
                    </span>
                  </div>
                </div>
                <div className="menu-item">
                  <Link
                    to="/request"
                    className="menu-link border-3 border-start border-transparent"
                  >
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                      <span className="svg-icon svg-icon-2 me-0">
                        <AiOutlinePullRequest />

                        <path
                          opacity="0.3"
                          d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                          fill="currentColor"
                        />
                        <path
                          d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                          fill="currentColor"
                        />
                      </span>
                    </span>
                    <span className="menu-title">Menu</span>
                  </Link>
                </div>
                <div className="menu-item pt-5">
                  <div className="menu-content pb-2">
                    <span className="menu-section text-muted text-uppercase fs-7 fw-bold">
                      Menu
                    </span>
                  </div>
                </div>
                <div className="menu-item">
                  <Link
                    to="/users"
                    className="menu-link border-3 border-start border-transparent"
                  >
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                      <span className="svg-icon svg-icon-2 me-0">
                        <AiOutlineUser />

                        <path
                          opacity="0.3"
                          d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                          fill="currentColor"
                        />
                        <path
                          d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                          fill="currentColor"
                        />
                      </span>
                    </span>
                    <span className="menu-title">Menu</span>
                  </Link>
                </div>
                <div className="menu-item">
                  <Link
                    to="/unit_kerja"
                    className="menu-link border-3 border-start border-transparent"
                  >
                    <span className="menu-icon">
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                      <span className="svg-icon svg-icon-2 me-0">
                        <AiOutlineDeploymentUnit />

                        <path
                          opacity="0.3"
                          d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                          fill="currentColor"
                        />
                        <path
                          d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                          fill="currentColor"
                        />
                      </span>
                    </span>
                    <span className="menu-title">Menu</span>
                  </Link>
                </div>
              
              
              </div>
              {/*end::Menu*/}
            </>
          </div>

          {/*end::Menu*/}
        </div>
      </div>
        {/*end::Menu wrapper*/}
      {/*end::sidebar menu*/}
    </div>
  );
}

export default Sidebar;
