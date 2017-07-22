import React from 'react';

export default  field => {
    return (
        <div className="row">
            <div className="input-field col s6 offset-s3">
                <input {...field.input} id={field.id} type={field.type} className="validate"/>
                {field.meta.touched &&
                field.meta.error &&
                <span className="red-text">{field.meta.error}</span>}
            <label className="active" htmlFor={field.id}>{field.label}</label>
                
            </div>
        </div>
    );
};