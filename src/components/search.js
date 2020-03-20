import React, { Component } from 'react';
class Search extends Component {
 state = {
  name: ''
 }
 handleChange = (e) => {
  this.setState({
   name: e.target.value
  })
 }
 handleSubmit = () => {
  this.props.searchByName(this.state.name);
 }
 render() {
  return (
   <div className="horizontal-filters-searchContainer">
    <input type="text" placeholder="Search By Name" className="searchBar" onChange={this.handleChange} />
    <a className="dsubmit" onClick={this.handleSubmit}>
     <span className="iconSearch" style={{ display: 'inline-block' }}>Search</span>
    </a>
   </div>
  )
 }
}
export default Search;