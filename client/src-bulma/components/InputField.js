import React from 'react';

export default  field => {
    return (
        <div className="columns">
        <div className="field column is-half is-offset-3">
            <label className="label" htmlFor={field.id}>{field.label}</label>
            <p className="control">
            <input {...field.input} id={field.id} type={field.type} className="input"/>
            </p>
            {field.meta.touched &&
            field.meta.error &&
            <span className="has-text-danger">{field.meta.error}</span>}
        </div>
        </div>
    );
};