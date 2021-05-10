import './peopleInfo.css';
import React, { Component } from 'react';
class PeopleInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    open() {
        this.setState({ expanded: !this.state.expanded })

    }
    close() {
        this.setState({ expanded: !this.state.expanded })
    }
    render() {
        const peopleInfo = this.props.peopleInfo;
        if (!this.state.expanded) {
            return <div className='showPeopleInfo' onClick={this.open}>MoreInfo</div>
        }
        return (
            <div>
                <p className = 'hidePeopleInfo'onClick={this.close}>HideInfo</p>
                <ul className = 'peopleInfo'>
                    <li>Gender: {peopleInfo.gender}</li>
                    <li>BirthDate: {peopleInfo.birth_year}</li>
                </ul>
            </div>
        )
    }
}
export default PeopleInfo;