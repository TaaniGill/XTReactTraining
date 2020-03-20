import React, { Component } from 'react';

class Filters extends Component {

  render() {
    return (
      <div className="filters">
        <div className="filters-title"> Filters</div>
        <div className="species filter">
          <div className="filters-header">Species</div>
          <ul>
            {this.props.species.map((specie) => {
              return <li key={specie.name}>
                <label className="filters-label">
                  <input
                    type="checkbox"
                    checked={specie.ischecked}
                    onChange={(e) => { this.props.onfilterselect(e.target.checked, specie.name, "species") }}
                    id={specie.name} />
                  {specie.name}
                </label>
              </li>
            })
            }

          </ul>
        </div>
        <div className="gender filter">
          <div className="filters-header">Gender</div>
          <ul>
            {this.props.gender.map((data) => {
              return <li key={data.name}>
                <label className="filters-label">
                  <input
                    type="checkbox"
                    checked={data.ischecked}
                    onChange={(e) => { this.props.onfilterselect(e.target.checked, data.name, "gender") }}
                    id={data.name}
                  />{data.name}
                </label>
              </li>
            })}
          </ul>
        </div>
        <div className="origin filter">
          <div className="filters-header">Origin</div>
          <ul>
            {this.props.origin.map((data) => {
              return <li key={data.name}>
                <label className="filters-label">
                  <input type="checkbox"
                  checked={data.ischecked}
                    onChange={(e) => { this.props.onfilterselect(e.target.checked, data.name, "origin") }}
                    id="filled-in-box"
                    data-url={data.url} />{data.name}
                </label>
              </li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default Filters;