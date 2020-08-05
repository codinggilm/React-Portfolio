import React, { Component } from 'react';
import classes from './Contact.module.css';
import sr from '../../ScrollReveal';

class Contact extends Component {

	componentDidMount = () => {

		const config = {
    		// origin: 'left',
	      	duration: 1000,
	      	delay: 250,
	      	// distance: '100px',
	      	scale: 1,
	      	easing: 'ease'
    	}
    	sr.reveal(this.refs.title_reveal, config)

    	const config2 = {
    		origin: 'bottom',
	      	duration: 1000,
	      	delay: 600,
	      	distance: '50px',
	      	scale: 1,
	      	easing: 'ease'
    	}
    	sr.reveal(this.refs.contact_reveal, config2)
  	}

	render() {
		return (
			<div className={classes.section_contact}>
				<div className={classes.container}>
					<h2 className={classes.title} ref='title_reveal'>Contact</h2>
					<div className={classes.wrapper_contact} ref='contact_reveal'>
						<p className={classes.contact_text}>Have a question or want to work together?</p>
						<a href='mailto:guillaume.croizon1@gmail.com'>
						<button className={`${classes.button} ${classes.btn_contact}`}>Get in touch</button>
						</a>
					</div>
				</div>
			</div>
		);	
	}
};


export default Contact;