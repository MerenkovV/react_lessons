import React, { useState } from "react"

export const StatusParagraph = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState("")

    return (<>
        {
            editMode ?
                <div style={{ fontSize: "20px", margin: "5px 10px" }}>Статус: 
                <textarea autoFocus 
                value={status}
                onBlur={()=>{setEditMode(false); props.putStatus(status)}} 
                onChange={(e)=>{setStatus(e.target.value)}}
                style={{ backgroundColor: "rgb(179, 179, 179)", minWidth: "300px" }}/>
                </div> :
                <div style={{ fontSize: "20px", margin: "5px 10px", cursor: "pointer" }}>Статус: <span onDoubleClick={()=>{setEditMode(true); setStatus(props.status)}}>{!props.status ? "----" : props.status}</span></div>

        }
    </>
    )
}
