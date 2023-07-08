import React from 'react'

function Footer() {
    return (
        <div id="kt_app_footer" className="app-footer">
            {/*begin::Footer container*/}
            <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                {/*begin::Copyright*/}
                <div className="text-dark order-2 order-md-1">
                    <span className="text-muted fw-semibold me-1">2023 ©</span>
                    <a href="#" target="_blank" className="text-gray-800 text-hover-primary"> Data Express</a>
                </div>
                {/*end::Copyright*/}

                {/*begin::Menu*/}
                <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                    <li className="menu-item">
                        <a href="#" target="_blank" className="menu-link px-2">TS</a>
                    </li>
                </ul>
                {/*end::Menu*/}
            </div>
            {/*end::Footer container*/}

        </div>
    )
}
export default Footer
