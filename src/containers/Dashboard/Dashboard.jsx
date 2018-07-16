import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firstAction } from '../../redux/actions/firstActions';
import './dashboard.css';

const mapDispatchToProps = dispatch => ({
    firstAction: () => dispatch(firstAction())
})

const mapStateToProps = state => ({
    ...state
})

class Dashboard extends Component {

    firstAction = (event) => {
        
        this.props.firstAction();
    }

    render() {
        return (
            <div>
                <h1 className="dashboard-text">Welcome to Dashboard</h1>
                <button onClick={this.firstAction}>Test redux action</button>

                <pre>
                    {
                        JSON.stringify(this.props)
                    }
                </pre>

            </div>


        )
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);