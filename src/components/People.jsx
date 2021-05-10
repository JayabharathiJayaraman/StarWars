import './people.css';
import React, { Component } from 'react';
import PeopleInfo from './PeopleInfo';

class People extends Component {
    render() {
        const people = this.props.people;
        return (
            <>
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