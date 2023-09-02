import React from 'react'
import module from "./Friends.module.css";

export default function Friends(props) {
    
    return (
        <main className={module.main}>
            <h2 className={module.main__header}>Friends</h2>
            <div className={module.list}>
                {
                    props.isFetching ? null : 
                    props.pages.map((p)=>{
                        return <span onClick={()=>{props.onChangePage(p)}} className={props.currentPage === p && module.current}>{p}</span>
                    })
                }
            </div>
            <div className={module.wrapper}>
                {props.friendsElements}
            </div>
        </main>
    )
}

