import * as Yup from 'yup';
//========== AUTH ==========//
export const SignInValidationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string()
		.min(8, 'Too Short!')
		.max(50, 'Too Long!')
		.matches(/[a-z]/, 'Password must contain at least one lowercase letter')
		.matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.matches(/\d/, 'Password must contain at least one number')
		.matches(/[@$!%*?&:#]/, 'Password must contain at least one special character')
		.required('Password is required'),
})