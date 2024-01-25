import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../Atoms/Input/Input'
import styles from './LoginForm.module.css'
import Button from '../../Atoms/Button/Button'
import { useDispatch } from 'react-redux'
import { login } from '../../../Redux/Slices/Auth/Auth'
import { z, ZodError } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface LoginFormProps {
	onLogin: () => void
}

const LoginFormSchema = z.object({
	username: z.string().min(3).max(50),
	password: z.string().min(3).max(50)
})

type LoginFormValues = z.infer<typeof LoginFormSchema>;

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
	const { register, handleSubmit, setError } = useForm<LoginFormValues>({
		defaultValues: {
			username: "Test User"
		},
		resolver: zodResolver(LoginFormSchema)
	})

	const dispatch = useDispatch()

	const onSubmit = async (data: LoginFormValues) => {
    try {
      console.log(data);
      dispatch(login());
      onLogin();
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((err) => {
          setError(err.path[0] as keyof LoginFormValues, {
            type: 'manual',
            message: err.message,
          });
        });
      }
    }
  };

	return (
		<form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
			<Input
				type="text"
				label="Username"
				placeholder="Enter your username"
				register={register}
				name='username'
				className={styles.inputField}
			/>
			<Input
				type="password"
				label="Password"
				placeholder="Enter your password"
				register={register}
				name='password'
				className={styles.inputField}
			/>
			<Button label="Login" />
		</form>
	)
}

export default LoginForm