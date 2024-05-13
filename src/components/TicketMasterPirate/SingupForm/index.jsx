// import { useState } from "react";
import { useForm } from 'react-hook-form'
import style from './form.module.css'

//*********************** Signup form *********************/
//*********************** Show form to signup *********************/
const SignupForm = () => {
	const { register, handleSubmit, reset } = useForm()
	// const [name, setName] = useState("");
	// const [age, setAge] = useState("");
	// const [adress, setAdress] = useState("");
	// const [zipcode, setZipcode] = useState("");
	// const [phone, setPhone] = useState("");

	const handleClearClick = () => {
		// setName("");
		// setAge("");
		// setAdress("");
		// setZipcode("");
		// setPhone("");
		reset()
		console.log('clear')
	}

	let handleSubmitForm = data => {
		console.log(data)
		// e.preventDefault();
		// console.log("Submit", { name, age, adress, zipcode, phone });
	}
	return (
		<div className={style.formContainer}>
			<form
				onSubmit={handleSubmit(handleSubmitForm)}
				className={style.form}>
				<h1>Signup</h1>
				<div className={style.formGroup}>
					<label>
						name
						<input {...register('name', { required: true })} />
					</label>
					<br />
					<label>
						Age
						<input {...register('age', { required: true })} />
						<br />
					</label>
					<label>
						Adress
						<input {...register('adress', { required: true })} />
					</label>
					<br />
					<label>
						Zipcode
						<input {...register('zipcode', { required: true })} />
					</label>
					<br />
					<label>
						Phone
						<input
							{...register('phone', { required: true })}
							// value={phone}
							// onChange={(e) => setPhone(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<button
						type='button'
						onClick={handleClearClick}
						className={style.formSubmintButton}>
						Clear
					</button>
					<button>Submit</button>
				</div>
			</form>
		</div>
	)
}
export default SignupForm
