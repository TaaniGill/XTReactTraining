import React, { Component } from 'react';
class SelectedFilters extends Component {

   render() {

      const { selectedfilters } = this.props;
      return (

         <div className="filter-summary-selectedFilterContainer">
            <ul className="filter-summary-filterList">
               {
                  Object.keys(selectedfilters).map(key => {
                     return selectedfilters[key].length > 0 && selectedfilters[key].map((filter) => {
                        return <li key={filter.name}>
                           <div className="filter-summary-filter">
                              <label className="filter-summary-removeFilter">
                                 {filter.name}
                                 <span className="filter-summary-removeIcon sprites-remove" onClick={() => { this.props.onfilterselect(false, filter.name, key) }}>X</span>
                              </label>
                           </div>
                        </li>

                     })
                  })
               }
            </ul>
         </div>
      )
   }
}
export default SelectedFilters;