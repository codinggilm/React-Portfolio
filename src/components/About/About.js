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
								It's a lot more than a job, I am truly passionate about programming and leveraging technology to solve problems. Most of my spare time is spent on learning more, improving my skills, and I'm always building something.
								</p>
								<p>
								After hundreds of hours spent learning and practicing, this portfolio showcases some of what I’ve built so far. My skills include both front-end and back-end development, with a solid fundamental understanding of HTML, CSS, JavaScript, React & Redux, Node and PostgreSQL.
								</p>
								<p>
								If you have a project idea or a commercial need for your business, please get in touch and 
								let's have a chat! 
								</p>
							<span>
								<a href="Guillaume_Croizon_CV.docx" download>
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