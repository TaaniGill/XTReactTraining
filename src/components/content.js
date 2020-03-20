import React, { Component } from 'react';
import Search from './search';
import Sort from './sort';
import SelectedFilters from './selectedfilters';
import CharacterList from './CharacterList';


class Content extends Component {

  render() {
    return (
      <div className="content">
        <div className="filters-title">Selected Filters</div>
        <SelectedFilters onfilterselect={this.props.onfilterselect} selectedfilters={this.props.selectedfilters} />
        <div className="horizontal-filters-searchsortContainer">
          <Search searchByName={this.props.searchByName} />
          <Sort sortArray={this.props.sortArray} />
        </div>
        {this.props.isloading ? <div>Loading Data .. </div> :<CharacterList characters={this.props.characters} />}
      </div>
    )
  }
}
export default Content;