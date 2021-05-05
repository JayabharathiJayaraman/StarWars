import './people.css';
import React, { Component } from 'react';
import PeopleInfo from './PeopleInfo';
import peopleImg from '../Image/people.jpg'
class People extends Component {
    render() {
        const people = this.props.people;
        return (
            <>
                <div>
                    <img className='peopleImg' src={peopleImg} />
                </div>
                <h1>People</h1>
                <div className='peopleName'>
                    {
                        people.map((people => {
                            return (
                                <div className='starwarspeople' key={people.url}>
                                    <p className='starwarspeopleName'>{people.name}</p>
                                    <PeopleInfo peopleInfo={people}></PeopleInfo>
                                </div>
                            )
                        }
                        ))
                    }
                </div>
            </>
        );
    }
}
export default People;