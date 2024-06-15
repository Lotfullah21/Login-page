import { useState } from "react";
import { toast } from "react-toastify";
import "../App.css";

const FormV2 = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!username || !password) {
			toast.error("Both fields are required");
			return;
		}

		const formData = {
			username: username,
			password: password,
		};

		console.log("Form Data: ", formData);

		setUsername("");
		setPassword("");
		toast.success("Form submitted");
	};

	return (
		<section className="section">
			<form className="form" onSubmit={handleSubmit}>
				<h4>Login Page</h4>

				<div className="form-row">
					<label htmlFor="usernameID" className="form-label">
						Username
					</label>
					<input
						type="text"
						id="usernameID"
						value={username}
						onChange={handleUsernameChange}
						className="form-input"
						placeholder="Username"
						required
					/>
				</div>

				<div className="form-row">
					<label htmlFor="passwordID" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-input"
						id="passwordID"
						value={password}
						onChange={handlePasswordChange}
						placeholder="Password"
						required
					/>
				</div>

				<button type="submit" className="btn btn-submit">
					Submit
				</button>
			</form>
		</section>
	);
};

export default FormV2;
