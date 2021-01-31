import React, { Component } from 'react';

import Contact from './Contact';

const contacts = [{
    firstName: 'Барней',
    lastName: 'Стинсовський',
    phone: '+380956319521',
    gender: 'male'
},
{
    firstName: 'Робін',
    lastName: 'Щербатська',
    phone: '+380931460123',
    gender: 'female'
},
{
    firstName: 'Анонімний',
    lastName: 'Анонімус',
    phone: '+380666666666'
},
{
    firstName: 'Лілія',
    lastName: 'Олдровна',
    phone: '+380504691254',
    gender: 'female'
},
{
    firstName: 'Маршен',
    lastName: 'Еріксонян',
    phone: '+380739432123',
    gender: 'male'
},
{
    firstName: 'Теодор',
    lastName: 'Мотсбес',
    phone: '+380956319521',
    gender: 'male'
}];

class Contacts extends Component {

    state = {
        contacts: contacts,
        search: ''
    }
    
    

    handleSearchChange = e => {
        const searchResult = contacts.filter(contact => (`${contact.firstName} ${contact.lastName}`).toLowerCase().includes(e.target.value.toLowerCase()) ||
                                                        (contact.phone).includes(e.target.value)); 
        this.setState({contacts: searchResult});
        this.setState({search: e.target.value});
    }

    render() {
        return(
            <div>
                <div className='input-search'>    
                    <input type='text' value={this.state.search} onChange={this.handleSearchChange} placeholder={'Введіть дані для пошуку'}/>
                </div>
                {this.state.contacts.map((contact, i) => <Contact {...contact} id={i + 1} key={i}/> )}
            </div>
        )
    }
}

export default Contacts;