import React from 'react'
import style from './TextareaWithErr.module.css'

export default function TextareaWithErr({ input, meta, ...props }) {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.container + " " + (hasError ? style.error : "")}>
            <p className={style.paragraph}>{meta.error}</p>
            <props.tag cols={props.cols} rows={props.rows} {...input} {...props} />
        </div>
    )
}
