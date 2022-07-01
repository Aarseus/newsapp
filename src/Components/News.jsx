import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps={
      country:'in',
      pageSize:8,
      category:'sports',
    }
    static propTypes={
      country: PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string,
    }
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1

        }
    
    }

    async updateNews(){
     
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3a14e2aaef045a3b41867fa05fdffad&&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data= await fetch(url);
        let parsedData=await data.json()
        this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults,
        loading:false})
        
    }
        async componentDidMount(){
        // const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3a14e2aaef045a3b41867fa05fdffad&page=${this.state.page}&pageSize=${this.props.pageSize}`
        // this.setState({loading: true})
        // let data= await fetch(url);
        // let parsedData=await data.json()
        // this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults,
        // loading:false})
        this.updateNews()
        }
        handlePreviousClick=async()=>{
          // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3a14e2aaef045a3b41867fa05fdffad&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
          // this.setState({loading: true})
          // let data= await fetch(url);
          // let parsedData=await data.json()
          // this.setState({loading: false})
          // this.setState({
          //   page:this.state.page-1,
          //   articles:parsedData.articles
          // })
          this.setState({page:this.state.page-1})
          this.updateNews();
        }
        handleNextClick=async()=>{
          // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
          // {
          //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b3a14e2aaef045a3b41867fa05fdffad&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
          //   this.setState({loading: true})
          // let data= await fetch(url);
          // let parsedData=await data.json()
          // this.setState({loading: false})
          // this.setState({
          //   page:this.state.page+1,
          //   articles:parsedData.articles
          // })
          // }
          this.setState({page:this.state.page+1})
          this.updateNews()
        }
  render() {
    return (
      <>
        <div className="container my-3">
           
          <h1 className="text-center">NewsApp - Top Headlines</h1>
          {this.state.loading &&<Spinner/>}
          <div className="row">
            {!this.state.loading &&this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title:''} description={element.description?element.description:'' } imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt }source={element.source.name}/>
            </div>
            })}
            
          
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
