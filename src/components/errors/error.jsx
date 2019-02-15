import React from 'react';
const ErrorComponent = ({ message }) => {
    return <div className="alert alert-danger">{message}</div>;
};
export default ErrorComponent;
