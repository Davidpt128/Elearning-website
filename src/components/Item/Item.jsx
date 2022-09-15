import React from 'react'

export default function Item(props) {
    let{index,course,button} = props
    
    return (
        <div key={index} className="item">
            <div className="item__content">
                <div className="thumbnail">
                    <img src={course.hinhAnh} alt="" />
                </div>
                <div>
                    <h1>{course.tenKhoaHoc}</h1>
                    <div className="readmore">
                        <button className="custom-btn animation" onClick={()=>{props.functionButton(course.maKhoaHoc)}}>{button}</button>
                    </div>
                </div>
            </div>
        </div>)
}
