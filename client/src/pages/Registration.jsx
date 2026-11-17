import FormField from "../components/FormField";
import Button from "../components/Button";

function Registration() {

    const handleRegistration = () => {
        alert("Registration form submitted for testing.");
    };

    return (
        <main className="page-container">

            <h1>Student Registration</h1>

            <p>Enter your details below.</p>

            <form
                className="registration-form"
                onSubmit={(event) => {
                    event.preventDefault();
                    handleRegistration();
                }}
            >

                <FormField
                    label="Full Name"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                />

                <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                />

                <FormField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    helpText="Use at least 8 characters."
                    required
                />

                <FormField
                    label="Course"
                    name="course"
                    placeholder="Enter your course"
                    required
                />

                <Button
                    label="Register"
                    variant="primary"
                    size="large"
                    type="submit"
                />

            </form>

        </main>
    );
}

export default Registration;