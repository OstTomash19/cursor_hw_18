import React, {Component} from 'react';

import './../css/ContactsStyles.css';

class Contact extends Component {
    render(){
        return(
            <div className='container-contact'>
                <div className='contact-id'>
                    Контакт: {this.props.id}
                </div>
                <div className='contact-info'>
                    <div className='contact-name'>
                            Ім'я: {this.props.firstName} {this.props.lastName}
                    </div>
                    <div className='contact-number'>
                        Номер телефону: {this.props.phone}
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;