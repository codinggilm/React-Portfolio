import React, { Component } from 'react'; 
import classes from './About.module.css';
import picture from '../../assets/drums.jpg';
import sr from '../../ScrollReveal';

class About extends Component {

	componentDidMount = () => {
    	const config1 = {
	      	duration: 1000,
	      	delay: 250,
	      	scale: 1,
	      	easing: 'ease',
    	}
    	sr.reveal(this.refs.title_reveal, config1)

	    const config2 = {
	      origin: 'bottom',
	      duration: 1000,
	      delay: 600,
	      distance: '50px',
	      scale: 1,
	      easing: 'ease',
    	}
    	sr.reveal(this.refs.image_reveal, config2)

    	const config3 = {
    		origin: 'left',
	      	duration: 1000,
	      	delay: 800,
	      	distance: '50px',
	      	scale: 1,
	      	easing: 'ease',
    	}
    	sr.reveal(this.refs.text_reveal, config3)
  	}

	render() {
		return (
			<div className={classes.section_about}>
				<div className='container'>
					<h2 className={classes.title} ref='title_reveal'>
						About me 
					</h2>	
					<div className='row'>
						<div className='col-md-6 sm-12' ref='image_reveal'>
							<div className={classes.wrapper_image}>
									<img className={classes.me} src={picture} alt='' />
							</div>
						</div>
						<div className='col-md-6 sm-12' ref='text_reveal'>
							<div className={classes.wrapper_info}>
								<p>
								Having learnt to play piano at 8, then drums at 15 and playing in bands ever since, 
								I am a creative person at heart.
								Coding offers me endless creative horizons and an incredibly rewarding problem-solving experience. 
								It is my path to a career doing something I truly love, and a lot more than just a job.
								</p>
								<p>
								I have spent many hours learning from sites like Udemy and practicing. 
								This portfolio showcases some of what I’ve built during my developer journey so far. 
								These projects have taught me a lot about the core technologies 
								I am currently focusing on: HTML, CSS, JavaScript and React. 
								</p>
							<span>
								<a href='src/assets/Guillaume_Croizon_CV.docx' download>
								<button className={`${classes.button} ${classes.btn_contact}`}>Download Resume</button>
								</a>
							</span>
							</div>
						</div>
					</div>
				</div>
			</div>	 
		);
	}
};

export default About;