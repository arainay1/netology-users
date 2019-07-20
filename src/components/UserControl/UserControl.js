import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import Button from '@app/components/Button';
import Modal from '@app/components/Modal';
import UserForm from './UserForm';
import './user-control.scss';

const UserControl = ({ user }) => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    const handleButtonClick = () => {
        setShowModal(true);
    };

    return (
        <Fragment>
            <div className="user-control">
                {user.id && (
                    <Link className="user-control__button button" to="/users">
                        К списку
                    </Link>
                )}
                <Button className="user-control__button" onClick={handleButtonClick}>
                    {user.id ? 'Редактировать' : 'Добавить'}
                </Button>
            </div>
            {showModal && createPortal(
                <Modal close={closeModal} className="user-control__modal">
                    <UserForm user={user} close={closeModal}/>
                </Modal>,
                document.getElementById('modal')
            )}
        </Fragment>
    );
};

export default UserControl;
