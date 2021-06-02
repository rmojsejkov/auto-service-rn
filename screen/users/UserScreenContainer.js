import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import UserScreenView from "./UserScreenView";
import Colors from "../../constants/colors";
import { userActions } from "../../store/actions/usersActions";

const UserScreenContainer = ({navigation, ...props}) => {
    const {
        defaultUsers
    } = useSelector(state => state.user);

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const loadUsers = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(userActions.getDefaultUsers());
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);

    }, [dispatch, setIsLoading, setError]);


    const userEditHandler = user => {
        navigation.navigate('UserEditScreen', {
            lastName: user.lastName,
            firstName: user.firstName,
            surName: user.surName,
            email: user.email,
            phone: user.phone,
            pass: user.pass,
            id: user.id
        })
    }

    const postUserDelete = useCallback( async id => {
        setIsLoading(true);
        try {
            await dispatch(userActions.deleteUser(id));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
    }, [setIsLoading, dispatch]);

    const deleteHandler = id => {
        Alert.alert('Предупреждение',
            'Удалить пользователя?',
            [
                {
                    text: 'Нет',
                    onPress: () => console.log('Нажали закрыть'),
                    style: 'cancel'
                },
                {
                    text: 'Да',
                    onPress: () => postUserDelete(id)
                }
            ]
        );
    }

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    useEffect(() => {
        return navigation.dangerouslyGetParent()
            .addListener('focus', () => {
                loadUsers();
            });
    }, [navigation]);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Пользователи',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: Colors.white,
                fontSize: 24
            }
        })
    }, [navigation]);
    return (
        <UserScreenView
            defaultUsers={defaultUsers}
            loadUsers={loadUsers}
            error={error}
            isLoading={isLoading}
            navigation={navigation}
            deleteHandler={deleteHandler}
            editHandler={userEditHandler}
        />
    )
}

export default UserScreenContainer;