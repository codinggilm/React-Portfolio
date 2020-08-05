import React, { Component } from 'react';
import classes from './Project.module.css';
import sr from '../../../ScrollReveal';
// import './Buttons.css';


class Project extends Component {
	constructor(props) {
        super();
    }

    componentDidMount = () => {
	    const config = {
	      origin: 'left',
	      duration: 1000,
	      delay: 600,
	      distance: '50px',
	      scale: 1,
	      easing: 'ease'
    	}
    	sr.reveal(this.refs.description_reveal, config)

    	const config2 = {
    		origin: 'right',
	      	duration: 1000,
	      	delay: 800,
	      	distance: '50px',
	      	scale: 1,
	      	easing: 'ease'
    	}
    	sr.reveal(this.refs.project_reveal, config2)
  	}

	render() {
		return (
			<div className={classes.wrapper_project}>
				<div className='row'>
					<div className='col-lg-4 col-sm-12' ref='description_reveal'>
						<div className={classes.wrapper_text}>
							<h2 className={classes.title}>{this.props.title}</h2>
							<p>{this.props.text}</p>
							<div className={classes.wrapper_buttons}>
			                	<a href={this.props.demo} target='_blank' rel='noopener noreferrer'>
			                	<button className={`${classes.button} ${classes.btnLive}`}>See Live</button>
			                	</a>
			                	<a 
			                		className={classes.btn} 
			                		href={this.props.code} 
			                		target='_blank'
			                		rel='noopener noreferrer'
			                	>Source Code</a>
							</div>
						</div>
					</div>
					<div className='col-lg-8 col-sm-12' ref='project_reveal'>
						<div className={classes.wrapper_image}>
								<img className={classes.picture} src={this.props.image} alt='' />
						</div>
					</div>
				</div>
			</div>
		);
	}
};


export default Project; 