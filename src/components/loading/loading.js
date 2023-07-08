import React from 'react'

export default function Loading() {
    return (
        <>
            <div className="loading">
                <div className="d-flex flex-column flex-root h-screen">

                    <div className="d-flex flex-column flex-center flex-column-fluid">
                        {/*begin::Content*/}
                        <div className="d-flex flex-column flex-center text-center p-10">
                            {/*begin::Wrapper*/}

                            <div className="loader-ball-56">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            
                            {/*end::Wrapper*/}
                        </div>
                        {/*end::Content*/}
                    </div>
                </div>
            </div>
        </>
    )
}
