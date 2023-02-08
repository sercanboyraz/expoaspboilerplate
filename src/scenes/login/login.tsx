import React, { Component, useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import BackButton from '../../components/BackButton'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import Stores from '../../stores/storeIdentifier'
import { inject, observer } from 'mobx-react'
import AuthenticationStore from '../../stores/authenticationStore'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface ILoginProps {
    navigation: any,
    authenticationStore: AuthenticationStore
}

export interface ILoginState {
    email: any,
    password: any
}

@inject(Stores.AuthenticationStore)
@observer
class Login extends Component<ILoginProps, ILoginState> {
    state = {
        email: { value: "admin", error: "" },
        password: { value: "123qwe", error: "" }
    }

    async onLogin() {
        const emailError = emailValidator(this.state.email.value)
        const passwordError = passwordValidator(this.state.password.value)
        if (emailError || passwordError) {
            this.setState({ email: { ...this.state.email, error: emailError } })
            this.setState({ password: { ...this.state.password, error: passwordError } })
        }
        else {
            this.props.authenticationStore.login(
                {
                    password: this.state.password!.value,
                    userNameOrEmailAddress: this.state.email.value,
                    rememberMe: true
                }).then(async x => {
                    var userIdValidation = await AsyncStorage.getItem('aspboilerplate:userId');
                    Number.parseInt(userIdValidation) > 0 &&
                        this.props.navigation.navigate('Roles', { screen: 'Roles' })
                })
        }
        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Dashboard' }],
        // })
    }

    render() {
        const { navigation } = this.props;
        const { email, password } = this.state;
        return (
            <Background>
                <BackButton goBack={navigation.goBack} />
                <Logo />
                <Header>Welcome back.</Header>
                <TextInput
                    label="Email"
                    returnKeyType="next"
                    value={email.value}
                    onChangeText={(text) => this.setState({ email: { value: text, error: '' } })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    description={""}
                />
                <TextInput
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={(text) => this.setState({ password: { value: text, error: '' } })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                    description={""}
                />
                <View style={styles.forgotPassword}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ResetPasswordScreen')}
                    >
                        <Text style={styles.forgot}>Forgot your password?</Text>
                    </TouchableOpacity>
                </View>
                <Button mode="contained" onPress={() => this.onLogin()}>
                    Login
                </Button>
                <View style={styles.row}>
                    <Text>Don’t have an account? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('registerScreen', { screen: 'RegisterScreen' })}>
                        <Text style={styles.link}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </Background >
        )
    }
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        // color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        // color: theme.colors.primary,
    },
})

export default Login;