import React, {Component} from 'react';
import '../styles/search-main.css';
import Select from 'react-select';


const options = [
    { value: 'properties', label: 'Properties'},
    { value: 'car', label: 'Car' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'jobs', label: 'Jobs' },
    { value: 'mobiles', label: 'Mobiles' },
    { value: 'bikes', label: 'Bikes' },
    { value: 'books', label: 'Books'},
    { value: 'fashion', label: 'Fashion'},
    { value: 'pets', label: 'Pets'},
    { value: 'services', label: 'Services'}
  ];

class SearchMain extends Component{

    state = {
        selectedOption: null,
      }

      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            placeholder="Select Category"
                        />
                        <div className="col-lg-6">
                            
                        </div>
                        {/* <form action="" className="search-main">
                            <fieldset>
                                <div className="pull-left"><input className="city-field" placeholder="Search category" type="text"/></div>
                                <div className="pull-left"><input className="query-field" placeholder="Search product" type="text"/></div>
                                <div className="pull-right"><input type="button" value="Submit" className="btn btn-primary btn-lg mrg-btn" /></div>
                            </fieldset>
                        </form> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchMain