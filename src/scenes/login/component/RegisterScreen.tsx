import React, { Component, useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../../components/Background'
import Logo from '../../../components/Logo'
import Header from '../../../components/Header'
import Button from '../../../components/Button'
import TextInput from '../../../components/TextInput'
import BackButton from '../../../components/BackButton'
import { theme } from '../../../core/theme'
import { emailValidator } from '../../../helpers/emailValidator'
import { passwordValidator } from '../../../helpers/passwordValidator'
import { nameValidator } from '../../../helpers/nameValidator'

export interface IRegisterScreenProps {
    navigation: any
}

export interface IRegisterScreenState {
    name: any,
    email: any,
    password: any
}

class RegisterScreen extends Component<IRegisterScreenProps, IRegisterScreenState> {
    state = {
        name: { value: "", error: "" },
        email: { value: "", error: "" },
        password: { value: "", error: "" }
    }

    onSignUpPressed() {
        const nameError = nameValidator(this.state.name.value)
        const emailError = emailValidator(this.state.email.value)
        const passwordError = passwordValidator(this.state.password.value)
        if (emailError || passwordError || nameError) {
            this.setState({ name: { ...this.state.name, error: nameError } })
            this.setState({ password: { ...this.state.password, error: passwordError } })
            this.setState({ email: { ...this.state.email, error: emailError } })
        }
        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Dashboard' }],
        // })
    }

    render() {
        const { navigation } = this.props;
        const { email, password, name } = this.state;
        return (
            <Background>
                <BackButton goBack={navigation.goBack} />
                <Logo />
                <Header>Create Account</Header>
                <TextInput
                    label="Name"
                    returnKeyType="next"
                    value={name.value}
                    onChangeText={(text) => this.setState({ name: { value: text, error: '' } })}
                    error={!!name.error}
                    errorText={name.error}
                    description=""
                />
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
                    description=""
                />
                <TextInput
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={(text) => this.setState({ password: { value: text, error: '' } })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                    description=""
                />
                <Button
                    mode="contained"
                    onPress={() => this.onSignUpPressed}
                    style={{ marginTop: 24 }}
                >
                    Sign Up
                </Button>
                <View style={styles.row}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login', { screen: 'Login' })}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                </View> 
            </Background >
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})

export default RegisterScreen;