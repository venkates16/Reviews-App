// Write your code here
import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  clickLeft = () => {
    const {reviewsList} = this.props
    console.log(reviewsList.length)
    const {count} = this.state

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
    const {reviewsList} = this.props
    console.log(reviewsList.length)
    const {count} = this.state
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
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, companyName, description, username} = reviewsList[count]

    return (
      <div className="container">
        <div className="card">
          <button data-testid="leftArrow">
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
          <button data-testid="leftArrow">
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
