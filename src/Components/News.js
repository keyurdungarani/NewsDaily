import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // const updateNews = async() => {
  //     // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${ page}&pageSize=${props.pageSize}`;
  //     // setState({loading: true})
  //     // let data = await fetch(url);
  //     // let parsedData = await data.json();
  //     // console.log(parsedData)
  //     // setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})  
  //     // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
  //   }
    // useEffect(()=>{
    //   fetchData()
    // },[])
    useEffect(() => {
      fetchData();
      // eslink-disable-next-line
    }, [])
    
      // updateNews()

        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
        // setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData)
        // setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    
    // const handlePrevious = async ()=>{
    //   setPage(page - 1)
    //   // updateNews()
    //   fetchData()
    //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${ page - 1}&pageSize=${props.pageSize}`;
    //   // setState({loading: true})
    //   // let data = await fetch(url);
    //   // let parsedData = await data.json();
    //   // console.log(parsedData)
    //   // setState({
    //   //   page:  page - 1,
    //   //   articles: parsedData.articles,
    //   //   loading: false
    //   // })
    // }
  // const handleNext = async ()=>{
  //       console.log("next");
  //       setPage(page+1)
  //       // updateNews()
  //       fetchData()
  //       // if( page + 1 > Math.ceil( totalResults/props.pageSize)){

  //       // }else {
  //       //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${ page + 1}&pageSize=${props.pageSize}`;
  //       //   setState({loading: true})
  //       //   let data = await fetch(url);
  //       //   let parsedData = await data.json();
  //       //   console.log(parsedData)
  //       //   setState({
  //       //     page:  page + 1,
  //       //     articles: parsedData.articles,
  //       //     loading: false
  //       //   })
  //       // }
  //   }
  const fetchData = async ()=>{
    // updateNews()
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
      // setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json(); 
      // console.log(parsedData)
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setLoading(false)  
      document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    }

    return (
      <>
      <h1 className='text-center' style={{margin:"35px 0px", marginTop:"90px"}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
       {loading && <Spinner></Spinner>}
       <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length !==  totalResults}
        loader={<Spinner />} 
        // endMessage={<p style={{ textAlign: 'center' }}>Yay! You've seen it all.</p>}
      >
      <div className="container">

      
      <div className="row">
        { articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0,20): ""} description={element.description ? element.description.slice(0,50) : ""} imgUrl={element.urlToImage} readMore={element.url} author={element.author ? element.author : "unknown"} date={element.publishedAt} source={element.source.name}></NewsItem>
              </div>   
          })}
          </div>
        </div>
          
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            <button disabled={ page<=1} type="button" className="btn btn-dark" onClick={handlePrevious}>&larr; Previous</button>
            <button disabled={ page + 1 > Math.ceil( totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>
        </div> */}
      
      
    </>
    )
}
export default News
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  catetory: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  catetory: PropTypes.string
}
