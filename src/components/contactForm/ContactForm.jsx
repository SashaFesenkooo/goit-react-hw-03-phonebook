import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "components/contactForm/ContactForm.module.css"

class ContactForm extends Component{

    state = {
        name: '',
        number: '',
    }

    handleSubmit = evt => {
        evt.preventDefault();
        const{name, number} = this.state
        this.props.onSubmit(name, number)
        this.reset();
    }
 

    reset() {
        this.setState({name: "", number:""})
    }

    handleChange = evt => {
        const {name, value} = evt.target
        this.setState({ [name]: value });
    };


    render() {
        const { name, number } = this.state

        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
                <label className={css.text}>
                    Name
                    <input
                    className={css.input}
                    value={name}
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />    
                </label>
          
                <label className={css.text}>
                    Number
                    <input
                    className={css.input}
                    value={number}
                    onChange={this.handleChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </label>
        
                <button className={css.btn} type="submit">Add contact</button>
            </form> 
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default ContactForm