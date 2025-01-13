import React from 'react'
import { useState } from 'react'

const TreeItem = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen((prev) => !prev);

    return (
        <div className='treeItem'>
            <div className="treeLabel" onClick={toggleOpen}>
                {data.label}
                {Array.isArray(data.children) && (
                    <div className='toggleIcon'>{isOpen ? "-" : "+"}</div>
                )}
            </div>
            {isOpen && Array.isArray(data.children) && (
                <div className='treeChildren'>
                    {data.children.map((childrenData, index)=>{
                        return <TreeItem key={index} data={childrenData} />
                    })}
                </div>
            )}
        </div>
    )
}

export default TreeItem