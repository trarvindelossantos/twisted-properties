import React from 'react';

const Loader = ({ loading = false, size = '', message = 'Loading' }) => {
    return (
        <div>
            {loading ? (
                <label>
                    <i className={`fa fa-spinner fa-spin ${size}`} />
                    <br />
                    {message}
                </label>
            ) : (
                ''
            )}
        </div>
    );
};

export default Loader;
