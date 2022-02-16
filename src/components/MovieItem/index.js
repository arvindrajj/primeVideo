import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        trigger={
          <img alt="thumbnail" src={thumbnailUrl} className="thumbnail-img" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#231f20" />
            </button>
            <ReactPlayer controls url={videoUrl} height="100%" width="100%" />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
