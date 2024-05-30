// Write your code here
import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  clickLeft = () => {
    let {reviewsList} = this.props
    console.log(reviewsList.length)
    let {count} = this.state

    if (count <= reviewsList.length - 1 && count !== 0) {
      this.setState(each => {
        console.log(count)
        return {count: each.count - 1}
      })
    } else {
      this.setState(each => {
        console.log(count)
        return {count: 0}
      })
    }
  }

  clickRight = () => {
    let {reviewsList} = this.props
    console.log(reviewsList.length)
    let {count} = this.state
    if (count < reviewsList.length - 1) {
      this.setState(each => {
        console.log(count)
        return {count: each.count + 1}
      })
    } else {
      this.setState({count: 3})
    }
  }

  render() {
    let {count} = this.state
    let {reviewsList} = this.props
    let {imgUrl, companyName, description, username} = reviewsList[count]

    return (
      <div className="container">
        <div className="card">
          <button testid="leftArrow">
            <img
              onClick={this.clickLeft}
              className="left"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button> 

          
          <div className="profile">
            <h1>Reviews</h1>
            <img className="review" src={imgUrl} alt={username} />
            <p>{username}</p>
            <p>{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button testid="rightArrow">
            <img
              onClick={this.clickRight}
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="right"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
