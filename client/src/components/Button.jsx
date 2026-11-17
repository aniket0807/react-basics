function Button({
    label = "Click Me",
    variant = "primary",
    size = "medium",
    onClick,
    type = "button"
}) {
    return (
        <button
            className={`btn btn-${variant} btn-${size}`}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    );
}

export default Button;