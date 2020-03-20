import React, { Component } from 'react';
class Sort extends Component {
   state = {
      isOpen: false,
      orderBy: 'nothing'
   }
   handleToggle = () => {
      this.setState({
         isOpen: !this.state.isOpen
      })
   }
   sortArray = (orderby) => {
      let orderBy = orderby === 'asc' ? 'Ascending' : 'Descending';
      this.setState({
         orderBy: orderBy,
         isOpen: !this.state.isOpen
      })
      this.props.sortArray(orderby);
   }
   render() {
      return (
         <div className="horizontal-filters-sortContainer">
            <div className="sort-sortBy">
               Sort by : <span>{this.state.orderBy}</span>
               <span className="sort-downArrow" onClick={this.handleToggle}>&#x25BC;</span>
               <ul className="sort-list" style={{ display: this.state.isOpen ? 'block' : 'none' }} >
                  <li onClick={this.sortArray.bind(this, 'asc')}>
                     <label className="sort-label ">
                        Ascending
                     </label>
                  </li>
                  <li onClick={this.sortArray.bind(this, 'desc')}>
                     <label className="sort-label ">
                        Desecending
                     </label>
                  </li>
               </ul>
            </div>
         </div>
      )
   }
}
export default Sort;