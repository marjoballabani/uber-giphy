import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchImages } from '../Actions/imagesActions'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = { page: 0, search: "" }
        // Pagination logic for images
        window.onscroll = () => {
            let scrolledCount = window.innerHeight + document.documentElement.scrollTop
            if ( scrolledCount === document.documentElement.offsetHeight) this.loadImages(true)
        };
    }
    /**
    * Used to fetch data for the first time
    * If we go to the end of page this is used to get new data
    **/
    loadImages = (more = false) => {
        this.setState({page: more ? this.state.page + 1 : 0})
        this.props.fetchImages(this.state.page, this.state.search, more)
    }

    // On search field change
    handleSearch = (event) => { this.setState({search: event.target.value}) }

    render() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="form-inline offset-md-5 ">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                        value={this.state.search}
                        onChange={this.handleSearch}
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                        onClick={() => this.loadImages()}
                    > Search </button>
                </div>
            </nav>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({ images: state.images })

export default connect(
    mapStateToProps,
    {fetchImages}
)(Navigation)
