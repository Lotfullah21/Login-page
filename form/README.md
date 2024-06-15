The FormV2 component is a functional React component that renders a login form with two input fields for username and password. It includes validation to ensure both fields are filled before submission and uses react-toastify to display success or error messages.

### State:

username (string): Stores the value of the username input field.
password (string): Stores the value of the password input field.

### Functions:

handleUsernameChange(e): Updates the username state with the input value.
handlePasswordChange(e): Updates the password state with the input value.
handleSubmit(e): Validates inputs, logs form data to the console, resets form fields, and displays toast notifications.
