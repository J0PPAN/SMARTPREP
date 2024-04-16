import Link from 'next/link'
import React from 'react'

const Card = (props) => {
  return (
    <div className={`w-[45%]  parent`}>
        <div className="card">
          <div className="content-box bg-primary">
            <span className="card-title">{props.title}</span>
            <p className="card-content">
             {props.desc}
            </p>
            <Link href ='/semselect'>
            <span className="see-more text-primary">See More</span>
            </Link>
          </div>
          <div className="date-box border-primary flex justify-center items-center">
            <span className="month text-primary  ">{props.status}</span>
          </div>
        </div>
      </div>
  )
}

export default Card
