import { useEffect, useState } from 'react'

export default function App() {
	const [Name, setName] = useState(false)
	const [Surname, setSurname] = useState(false)
	const [Email, setEmail] = useState(false)
	const [Password, setPassword] = useState(false)
	const [validForm, setForm] = useState(false)

	useEffect(() => {
		validationAll()
	})

	function validationAll() {
		if (Name && Email && Password && Surname) {
			setForm(true)
		} else {
			setForm(false)
		}
	}
	function validationForm(nameInput, validation) {
		switch (nameInput) {
			case 'Name':
				setName(validation)
				break
			case 'Surname':
				setSurname(validation)
				break
			case 'Email':
				setEmail(validation)
				break
			case 'Password':
				setPassword(validation)
				break
			default:
				break
		}
	}

	const validation = {
		name: function (name) {
			const val = /^[A-Za-z]{2,}$/
			return val.test(name)
		},
		surname: function (surname) {
			const val = /^[A-Za-z]{2,}$/
			return val.test(surname)
		},
		email: function (email) {
			const val = /\S+@\S+\.\S+/
			return val.test(email)
		},
		password: function (password) {
			const val = /^(?=.*[A-Z])(?=.*\d).{6,10}$/
			return val.test(password)
		},
	}

	return (
		<>
			<Input
				validationField={validation.name}
				label='Имя'
				validationForm={validationForm}
				type='text'
			/>
			<Input
				validationField={validation.name}
				label='Фамилия'
				validationForm={validationForm}
				type='text'
			/>
			<Input
				validationField={validation.email}
				label='Email'
				validationForm={validationForm}
				type='email'
			/>
			<Input
				validationField={validation.password}
				label='Пароль'
				validationForm={validationForm}
				type='password'
			/>
			<button disabled={!validForm}>Готово</button>
		</>
	)
}

function Input(props) {
	const [validationMessage, setValidationMessage] = useState('')
	const [value, setValue] = useState('')
	function onChange(e) {
		setValue(e.target.value)
		const validateField = props.validationField(e.target.value)
		props.validationForm(props.label, validateField)
		if (validateField) {
			setValidationMessage('')
		} else {
			setValidationMessage('Неверное значение')
		}
	}
	return (
		<div>
			<label>{props.label}</label>
			<br />
			<input type={props.type} onChange={onChange} value={value} />
			<br />
			<label style={{ color: 'red', fontSize: '10px' }}>
				{validationMessage}
			</label>
		</div>
	)
}
