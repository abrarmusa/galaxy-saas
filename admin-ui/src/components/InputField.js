import React from 'react';

export default  field => {
    return (
        <div className="row">
            <div className="form-group col-md-6 col-md-offset-3">
                <label htmlFor={field.id}>{field.label}</label>
                <input {...field.input} id={field.id} type={field.type} className="form-control"/>
                {field.meta.touched &&
                field.meta.error &&
                <span className="text-danger">{field.meta.error}</span>}
            </div>
        </div>
    );
};