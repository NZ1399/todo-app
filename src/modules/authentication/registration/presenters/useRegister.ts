import { useState } from "react";

export const useRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsEmailValid(true);
    }
        const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
        return passwordRegex.test(password);
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setIsPasswordValid(true);
    }
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setIsConfirmPasswordValid(true);
    }
    const onBlurEmail = () => {
        setIsEmailValid(validateEmail(email));
    }
    const onBlurPassword = () => {
        setIsPasswordValid(validatePassword(password));
    }
    const onBlurConfirmPassword = () => {
        setIsConfirmPasswordValid(confirmPassword === password && confirmPassword !== '');
    }
    const handleSubmit = async () => {
        try {
            setIsLoading(true);

            const emailValid = validateEmail(email);
            const passwordValid = validatePassword(password);
            const confirmPasswordValid = confirmPassword === password && confirmPassword !== '';

            setIsEmailValid(emailValid);
            setIsPasswordValid(passwordValid);
            setIsConfirmPasswordValid(confirmPasswordValid);

            if (!emailValid || !passwordValid || !confirmPasswordValid) {
                return;
            }

            const response = { ok: true, json: async () => ({ email, password }) }; // Mock response for demonstration

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Форма валідна:', data);
        } catch (error) {
            console.error('Помилка при відправці форми:', error);
        } finally {
            setIsLoading(false);
        }
    }
    const disabled = isLoading || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid || email === '' || password === '' || confirmPassword === '';

    return { email, password, confirmPassword, handleEmailChange, handlePasswordChange, handleConfirmPasswordChange, onBlurEmail, onBlurPassword, onBlurConfirmPassword, isEmailValid, isPasswordValid, isConfirmPasswordValid, handleSubmit, disabled, isLoading };

}