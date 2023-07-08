import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import { useContext } from "react";
import { SidebarContext } from '@contexts';

function Main({ children }) {

    const { show_sidebar } = useContext(SidebarContext);

    return (
        <div>

            {/*begin::App*/}
            <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
                {/*begin::Page*/}
                <div className="app-page flex-column flex-column-fluid" id="kt_app_page">

                    {/*begin::Header*/}
                    <Header />
                    {/*end::Header*/}

                    {/*begin::Wrapper*/}
                    <div className={`app-wrapper flex-column flex-row-fluid ${show_sidebar}`}>

                        {/*begin::Sidebar*/}
                        <Sidebar minimize={show_sidebar} />
                        {/*end::Sidebar*/}

                        {/*begin::Main*/}
                        <div className="flex-column flex-row-fluid">

                            {/*begin::Content wrapper*/}
                            {children}
                            {/*end::Content wrapper*/}

                            {/*begin::Footer*/}
                            <Footer />
                            {/*end::Footer*/}

                        </div>
                        {/*end:::Main*/}
                    </div>
                    {/*end::Wrapper*/}

                </div>
                {/*end::Page*/}
            </div>
            {/*end::App*/}

        </div>
    );
}

export default Main;
