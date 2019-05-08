import React, { Component } from 'react';
import {connect} from 'react-redux'
import Card from '../Components/Card'
import Navigation from '../Containers/Navigation.js'

class Dashboard extends Component {
    render() {
    return (
        <div className="container-fluid">
            <Navigation />
            <div className="img-container justify-content-md-center offset-md-4 col-md-4">
                { (this.props.images.data.length > 0) ?
                    this.props.images.data.map( img => {
                        return <Card img={img} />
                    }) : <div className="no-content"> No content avaliable...</div>
                }
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({ images: state.images })

export default connect(
    mapStateToProps
)(Dashboard)
