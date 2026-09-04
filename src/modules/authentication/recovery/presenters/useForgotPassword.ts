import { useState } from "react";

export const useForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsEmailValid(true);
    }

    const onBlurEmail = () => {
        setIsEmailValid(validateEmail(email));
    }
    const handleSubmit = async () => {
        try {
            setIsLoading(true);

            const emailValid = validateEmail(email);
            setIsEmailValid(emailValid);

            if (!emailValid) {
                return;
            }

            const response = { ok: true, json: async () => ({ email }) }; // Mock response for demonstration

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

    const disabled = isLoading || !isEmailValid || email === '';

    return { email, handleEmailChange, onBlurEmail, isEmailValid, handleSubmit, disabled, isLoading };
}
