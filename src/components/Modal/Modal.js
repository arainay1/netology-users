import React from 'react';
import classnames from 'classnames';
import './modal.scss';

const Modal = ({ children, close, className }) => {
    const handleSubstrateClick = (event) => {
        if (event.target.classList.contains('substrate') && event.target.classList.contains('modal')) {
            close();
        }
    };

    return (
        <div className="substrate modal" onClick={handleSubstrateClick}>
            <div className={classnames('modal__content', className)}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
