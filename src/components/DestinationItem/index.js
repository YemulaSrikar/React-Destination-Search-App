// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  return (
    <li className="list-container">
      <img src={imgUrl} className="Image" alt={name} />
      <p className="image-name">{name}</p>
    </li>
  )
}

export default DestinationItem
