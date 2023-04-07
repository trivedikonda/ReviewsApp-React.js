import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {activeReviewId: 0}

  onClickLeftArrow = () => {
    const {activeReviewId} = this.state
    if (activeReviewId > 0) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeReviewId} = this.state
    console.log(activeReviewId)
    const {reviewsList} = this.props
    if (activeReviewId < reviewsList.length - 1)
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId + 1,
      }))
  }

  renderCurrentReview = currentCarouselData => {
    const {imgUrl, username, companyName, description} = currentCarouselData
    return (
      <div className="each-review">
        <img className="img" src={imgUrl} alt={username} />
        <p className="heading">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewId} = this.state

    const currentCarouselData = reviewsList[activeReviewId]

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Reviews</h1>
          <div className="slide-container">
            <button
              type="button"
              onClick={this.onClickLeftArrow}
              data-testid="leftArrow"
              className="btn"
            >
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            {this.renderCurrentReview(currentCarouselData)}
            <button
              className="btn"
              type="button"
              onClick={this.onClickRightArrow}
              data-testid="rightArrow"
            >
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
