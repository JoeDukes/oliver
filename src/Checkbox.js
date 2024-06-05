import React from "react";

export default Checkbox = ({ label, isSelected, onCheckboxChange }) => (
    <div className="form-check">
        <label>
        <input
            type="checkbox"
            name={label}
            checked={isSelected}
            onChange={onCheckboxChange}
            className="form-check-input"
        />
        {label}
        </label>
    </div>
);
