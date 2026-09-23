import { useState } from "react";
import { useNavigate } from "react-router";

export const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const navigate = useNavigate();

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
            if (!validateEmail(email) || password === '') {
                setIsEmailValid(false);
                return;
            }
            // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ email, password }),
            // });
            const response = { ok: true, json: async () => ({ email, password }) }; // Mock response for demonstration

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Форма валідна:', data);
            localStorage.setItem('user', JSON.stringify({ email: data.email }));
            // Here you can handle the successful login, e.g., redirect to another page or store the token
            navigate('/home');
        } catch (error) {
            console.error('Помилка при відправці форми:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const disabled = isLoading || !isEmailValid || !validateEmail(email) || password === '';

    return { email, onBlurEmail, password, setPassword, handleSubmit, isEmailValid, handleEmailChange, disabled, isLoading };
}