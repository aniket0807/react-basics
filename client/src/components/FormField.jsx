function FormField({
    label,
    name,
    type = "text",
    placeholder = "",
    required = false,
    helpText = ""
}) {
    return (
        <div className="form-field">

            <label htmlFor={name}>
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
            />

            {helpText && (
                <small className="form-help">
                    {helpText}
                </small>
            )}

        </div>
    );
}

export default FormField;