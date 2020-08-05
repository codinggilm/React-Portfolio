import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className='container'>
				<a className={classes.arrow} href="#top">
		            <FontAwesomeIcon icon={faAngleUp} />
		        </a>
				<div className={classes.links}>
		          	<a className={classes.icon} href="https://www.linkedin.com/in/guillaume-croizon/">
		            	<FontAwesomeIcon icon={faLinkedinIn} />
		          	</a>
					<a className={classes.icon} href="https://github.com/codinggilm">
		            	<FontAwesomeIcon icon={faGithub} />
		          	</a>
				</div>
				<hr style={{'borderTop': '2px solid rgba(255, 255, 255, 0.1)'}}></hr>
			</div>
		</footer>
	);
};


export default Footer;