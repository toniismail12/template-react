import React from 'react';
import Draggable from "react-draggable";
import { useState } from 'react';

const Modal = ({ children, show_modal, width, onClose }) => {
    const [currentPosition, setCurrentPosition] = useState({
        xRate: 41,
        yRate: 15
    })

    const onDrag = (e, data) => {
        setCurrentPosition({ xRate: data.lastX, yRate: data.lastY })
    }

    return (
        <>


            <div className={show_modal ? "modal fade display-block show bg-tranparent" : "modal fade"}>
                <Draggable
                    position={{
                        x: currentPosition.xRate,
                        y: currentPosition.yRate
                    }}
                    onDrag={onDrag}
                >
                    {/*begin::Modal dialog*/}
                    <div className={`modal-dialog modal-dialog-centered mw-${width}px`}>
                        {/*begin::Modal content*/}
                        <div className="modal-content">
                            {/*begin::Modal header*/}
                            <div className="modal-header pb-0 border-0 justify-content-end">
                                {/*begin::Close*/}
                                <div className="btn btn-sm btn-icon btn-active-color-primary" onClick={onClose}>
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                                    <span className="svg-icon svg-icon-1">
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                            <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
                                        </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                </div>
                                {/*end::Close*/}
                            </div>
                            {/*begin::Modal header*/}
                            {/*begin::Modal body*/}
                            <div className="modal-body scroll-y pt-0 pb-15">
                                {/*begin::Wrapper*/}
                                {children}
                                {/*end::Wrapper*/}
                            </div>

                            {/*end::Modal body*/}
                        </div>
                        {/*end::Modal content*/}
                    </div>
                    {/*end::Modal dialog*/}
                </Draggable>
            </div>

        </>
    )
}

export default Modal