import React, { Component, useState } from 'react'
import Background from '../../../components/Background'
import BackButton from '../../../components/BackButton'
import Logo from '../../../components/Logo'
import Header from '../../../components/Header'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'
import { emailValidator } from '../../../helpers/emailValidator'

export interface IResetPasswordScreenProps {
    navigation: any
}

export interface IResetPasswordScreenState {
    email: any,
}

class ResetPasswordScreen extends Component<IResetPasswordScreenProps, IResetPasswordScreenState>{
    state = {
        email: { value: "", error: "" },
    }

    sendResetPasswordEmail() {
        const emailError = emailValidator(this.state.email.value)
        if (emailError) {
            this.setState({ email: { ...this.state.email, error: emailError } })
        }
        // navigation.navigate('LoginScreen')
    }

    render() {
        const { navigation } = this.props;
        const { email } = this.state;
        return (
            <Background>
                <BackButton goBack={navigation.goBack} />
                <Logo />
                <Header>Restore Password</Header>
                <TextInput
                    label="E-mail address"
                    returnKeyType="done"
                    value={email.value}
                    onChangeText={(text) => this.setState({ email: { value: text, error: '' } })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    description="You will receive email with password reset link."
                />
                <Button
                    mode="contained"
                    onPress={() => this.sendResetPasswordEmail}
                    style={{ marginTop: 16 }}
                >
                    Send Instructions
                </Button>
            </Background >
        )
    }
}

export default ResetPasswordScreen;