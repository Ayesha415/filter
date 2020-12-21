import React, { Component } from 'react'
import JSONDATA from './MOCK_DATA.json';
export default class Filter extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue:""
        }
      
    }
    handleSearch = (event) => {
        this.setState({
            searchValue : event.target.value
        })
        console.log(this.state.searchValue)
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="search..." value={this.state.searchValue} onChange={this.handleSearch}/>
                 {JSONDATA.filter((val) => {
                  if(this.state.searchValue == ""){
                      return val
                  }
                  else if (val.first_name.toLocaleLowerCase().includes(this.state.searchValue.toLocaleLowerCase())){
                      return val
                  }
                 }).map((val,key)=>{
                   return <div key={key}>{val.first_name}</div>
                 })}
            </div>
        )
    }
}
