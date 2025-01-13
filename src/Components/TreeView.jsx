import React from 'react'
import menus from './TreeData.jsx'
import TreeItem from './TreeItem.jsx'
import './TreeView.css'

const TreeView = () => {
    return (
        <div className='mainTreeBox'>
            <div className="sideBar">
                {menus.map((data, index) => {
                    return <TreeItem data={data} key={index} />
                })}
            </div>
        </div>
    )
}

export default TreeView