import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageurl,newsurl,author,date,source}=this.props;
    return (
      
      <div className="my-3">

      
        <div className="card">
  <img src={imageurl?imageurl:'https://www.freecodecamp.org/news/content/images/2021/11/niclas-illg-wzVQp_NRIHg-unsplash.jpg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} <span className="position-absolute top-0 translate middle badge rounded-pill bg-danger" style={{left:'70%',zIndex:1}}>{source}
    <span className="visually-hidden">unread messages</span></span></h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} className="btn btn-dark">Read More</a>
  </div>
</div>
</div>
     
    )
  }
}

export default NewsItem
