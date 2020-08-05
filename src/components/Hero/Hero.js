import React, { Component } from 'react'; 
import classes from './Hero.module.css'; 
import sr from '../../ScrollReveal';

class Hero extends Component {
	
	componentDidMount = () => {
	    const config = {
	      origin: 'left',
	      duration: 1000,
	      delay: 150,
	      distance: '50px',
	      scale: 1,
	      easing: 'ease',
	    }
    	sr.reveal(this.refs.hero, config)
  	}

	render() {
		return (
				<div className={classes.section}>
				{/*<div className={classes.container}>*/}
				<div className='container' ref='hero'>
						<h1 className={classes.hero_intro}>
						Hi, my name is <span className={classes.name}>GuillaumeGuillaume</span>
						<br />
						Welcome to my portfolio
						</h1>
				</div>		
			</div>	
		);
	}
};

export default Hero;



// <div className={classes.container}>
// 		<div className='container'>
// 			<div className={classes.wrapper_hero}>
// 				<h1 className={classes.hero_intro}>
// 				Hi, my name is <span className={classes.name}>Guillaume</span>
// 				<br />
// 				Welcome to my portfolio
// 				</h1>
// 		</div>
// 		</div>


/*******WORKS*******/

// <div className={classes.container}>
// 	<h1 className={classes.hero_intro}>
// 	Hi, my name is <span className={classes.name}>Guillaume</span>
// 	<br />
// 	Welcome to my portfolio
// 	</h1>
// </div>