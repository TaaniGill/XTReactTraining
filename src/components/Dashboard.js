import React, { Component } from 'react';
import Filters from './Filters';
import Content from './content';
import axios from 'axios';
class Dashboard extends Component {
  state = {
    loading:true,
    characters: [],
    species: [],
    origin: [],
    gender: [],
    selectedFilters: {
      species: [],
      gender: [],
      origin: []
    }
  }
  getCharacters = (paramObj={}) =>{
    this.setState({loading: true});
    var url = "https://rickandmortyapi.com/api/character";
    return axios.get(url, { params: paramObj });
  }
  componentDidMount() {
    this.getCharacters().then((response) => {
        this.setState({loading: false});
        this.processCharacters(response.data.results);
        this.fillFilters(response.data.results);
      });
  }
  fillFilters = (data) => {
    let species = [];
    let origin = [];
    let gender =[];
    for (let i = 0; i < data.length; i++) {
      species.push({name:data[i].species}); 
      gender.push({name:data[i].gender});      
      origin.push(data[i].origin);
    }
    this.setState({
      species: this.removeDuplicates(species),
      gender: this.removeDuplicates(gender),
      origin: this.removeDuplicates(origin)
    });
  }
  processCharacters = (data) => {
    let characters = [];
    for (let i = 0; i < data.length; i++) {
      characters.push({
        id: data[i].id,
        name: data[i].name,
        status: data[i].status,
        species: data[i].species,
        type: data[i].type,
        gender: data[i].gender,
        origin: data[i].origin.name,
        location: data[i].location.name,
        image: data[i].image,
        created: data[i].created
      });

    }
    this.setState({
      characters: characters
    });

  }

  removeDuplicates = (array) => {
    const result = [];
    const map = new Map();
    for (const item of array) {
      if (!map.has(item.name)) {
        map.set(item.name, true);
        result.push({
          name: item.name,
          ischecked: false
        });
      }
    }
    return result;
  }
  updateFilters = (ischecked, filterVal, filterOrigin) => {
    let tempArr = [...this.state[filterOrigin]];
    tempArr.map(arrobj => {
        if(arrobj.name === filterVal){
          arrobj.ischecked = ischecked;
        }
        return arrobj;
     })
     this.setState({
       [filterOrigin]:tempArr
     })
  }
  onfilterselect = (ischecked, filterVal, filterOrigin) => {    
    this.updateFilters(ischecked, filterVal, filterOrigin);
    let arrData = this.state.selectedFilters[filterOrigin].filter((data) => {
      return data.name !== filterVal;
    })
    let selObj = { ...this.state.selectedFilters };
    if (ischecked) {
      selObj[filterOrigin] = [...arrData, { name: filterVal, value: ischecked }];
    } else {
      selObj[filterOrigin] = [...arrData];
    }
    this.setState({ selectedFilters: selObj });
    this.getFilteredData(selObj);

  }
  getFilteredData = (selObj) =>{
    let params = {};
    if (selObj.species.length > 0) {
      params['species'] = selObj.species[0].name;
    }
    if (selObj.gender.length > 0) {
      params['gender'] = selObj.gender[0].name;
    }
    if (selObj.origin.length > 0) {
      params['origin'] = selObj.origin[0].name;
    }
    this.getCharacters(params).then((response) => {
      this.setState({loading: false});
      this.processCharacters(response.data.results);
    });
  }
  searchByName = (characterName) => {
     this.getCharacters({ name: characterName }).then((response) => {
      this.setState({loading: false});
      this.processCharacters(response.data.results);
    });
  }
  sortArray = (orderBy) => {
    let array = [...this.state.characters];
    array.sort(function (a, b) {
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (orderBy === 'asc') {
        if (nameA < nameB)
          return -1;
        if (nameA > nameB)
          return 1;
        return 0;
      } else if (orderBy === 'desc') {
        if (nameA > nameB)
          return -1;
        if (nameA < nameB)
          return 1;
        return 0;
      }
    });

    this.setState({
      characters: array
    })
  }

  render() {
    return (
      <div className="container">
        <Filters onfilterselect={this.onfilterselect} species={this.state.species} origin={this.state.origin} gender={this.state.gender} />
        <Content isloading={this.state.loading} sortArray={this.sortArray} searchByName={this.searchByName} onfilterselect={this.onfilterselect} selectedfilters={this.state.selectedFilters} characters={this.state.characters} />
      </div>
    )
  }
}
export default Dashboard;