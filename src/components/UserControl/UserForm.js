import React, { useContext } from 'react';
import { UsersContext } from '@app/providers/Users';
import Form, { Input, TextArea } from '@app/components/Form';
import Button from '@app/components/Button';
import './user-form.scss';

const validate = (value) => {
    const errors = [];

    if (value.length === 0) {
        errors.push('Пустое поле ввода');
    }

    return errors;
};

const UserForm = ({ user, close }) => {
    const {
        actions: {
            addUser,
            updateUser
        }
    } = useContext(UsersContext);

    const save = (event) => {
        event.preventDefault();

        const firstName = event.target['first-name'].value;
        const lastName = event.target['last-name'].value;
        const position = event.target['position'].value;
        const description = event.target['description'].value;

        const formUser = {
            firstName,
            lastName,
            position,
            description
        };

        const errors = [validate(firstName).length, validate(lastName).length, validate(position).length];

        if (errors.some(item => item > 0)) {
            alert('Форма содержит ошибки');
        }

        if (user.id) {
            updateUser({ ...user, ...formUser });
        } else {
            addUser(formUser);
        }

        close();
    };

    return (
        <Form onSubmit={save} className="user-form">
            <header className="user-form__header">
                {user.id ? 'Редактирование пользователя' : 'Добавление пользователя'}
            </header>
            <div className="user-form__inputs">
                <Input
                    required
                    className="user-form__row"
                    label="Имя"
                    value={user.firstName}
                    name="first-name"
                />
                <Input
                    required
                    className="user-form__row"
                    label="Фамилия"
                    value={user.lastName}
                    name="last-name"
                />
                <Input
                    required
                    className="user-form__row"
                    label="Должность"
                    value={user.position}
                    name="position"
                />
                <TextArea
                    className="user-form__row"
                    label="Описание"
                    value={user.description}
                    name="description"
                />
            </div>
            <div className="user-form__controls">
                <Button
                    type="button"
                    className="user-form__cancel"
                    onClick={close}
                >
                    Отмена
                </Button>
                <Button
                    type="submit"
                    className="user-form__submit"
                >
                    Сохранить
                </Button>
            </div>
        </Form>
    );
};

export default UserForm;
