import React from "react"

export class StatusParagraph extends React.Component {

    state = {
        editMode: false,
        myStatus: ""
    }

    enableEditMode = () => {
        if (this.props.isMyAccount) {
            this.setState({
                editMode: true,
                myStatus: this.props.status
            })
        }

    }

    disableEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.putStatus(this.state.myStatus)
    }

    onStatusChange = (e) => {
        this.setState({
            myStatus: e.target.value
        })
    }

    render() {
        return (<>
            {
                this.state.editMode ?
                    <div style={{ fontSize: "20px", margin: "5px 10px" }}>Статус: <textarea autoFocus onChange={this.onStatusChange} onBlur={this.disableEditMode} style={{backgroundColor: "rgb(179, 179, 179)", minWidth: "300px" }} value={this.state.myStatus} /></div> :
                    <div style={{ fontSize: "20px", margin: "5px 10px" }}>Статус: <span onDoubleClick={this.enableEditMode}>{this.props.status}</span></div>

            }
        </>
        )
    }
}
