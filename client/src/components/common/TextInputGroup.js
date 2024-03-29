import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextInputGroup = ({
    name,
    placeholder,
    value,
    error,
    info,
    type,
    onChange,
    disabled
}) => {
    return (
        <div>
            <input
                type={type}
                className={classnames("form-control text-input-group", {
                "is-invalid": error
                })}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {info && <small className="form-tex text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    error: PropTypes.string,
    info: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string
};

TextInputGroup.defaultProps = {
    type: "text"
};

export default TextInputGroup;