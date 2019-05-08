import React, { Component } from 'react';
import {connect} from 'react-redux'
import Card from '../Components/Card'
import Navigation from '../Containers/Navigation.js'

class Dashboard extends Component {
    getList() {
        let component;
        if(this.props.images.data.length > 0) {
            component = this.props.images.data.map( img => <Card img={img} key={img.title}/>)
        } else {
            component = <div className="no-content"> No content avaliable...</div>
        }
        return component
    }
    render() {
        const list = this.getList()
        return (
            <div className="container-fluid">
                <Navigation />
                <div className="img-container justify-content-md-center offset-md-4 col-md-4">
                    { list }
                </div>
            </div>
        );
  }
}

const mapStateToProps = (state) => ({ images: state.images })

export default connect(
    mapStateToProps
)(Dashboard)

export { Dashboard as UnConnectedDashboard }
