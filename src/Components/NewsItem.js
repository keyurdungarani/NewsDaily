import React from 'react'

const NewsItem = (props)=>  {
    let {title, description, imgUrl, readMore, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'85%'}}>
                {source}
             </span>
            <img src={imgUrl ? imgUrl : "https://a.c-dn.net/b/3Xuu2Z/USD_outlook.jpg"} className="card-img-top" alt="img isn't available" />
            <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className='text-muted'>by {author} on {new Date(date).toUTCString()}</small></p>
                <a href={readMore} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}
export default NewsItem;