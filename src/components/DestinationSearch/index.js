// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(user =>
      user.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <h1>Destination Search</h1>
        <input
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={this.onSearchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="search-icon"
        />
        <ul className="bg-container">
          {searchResults.map(eachUser => (
            <DestinationItem destinationDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
