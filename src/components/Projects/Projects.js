import React, { Component } from 'react';
import Project from './Project/Project';
import classes from './Projects.module.css';
import dog from '../../assets/positive-touch.png';
import burger from '../../assets/burgerbuilder.png';
import face from '../../assets/facerecognition.png';
import robo from '../../assets/robofriends.png';
import recipe from '../../assets/recipe.png';
import portfolio from '../../assets/portfolio.png';
import auction from '../../assets/auction.png';
import flow from '../../assets/flow.png';

import sr from '../../ScrollReveal';


class Projects extends Component {

	componentDidMount = () => {
    	const config = {
	      	duration: 1000,
	      	delay: 250,
	      	scale: 1,
	      	easing: 'ease',
    	}
    	sr.reveal(this.refs.title_reveal, config)
  	}

	render() {
		return (
			<div className={classes.section_projects}>
				<div className='container'>
				<h3 className={classes.title} ref='title_reveal'>Projects</h3>
					<Project 
					title='Flow Tracker'
					image={flow}
					demo='https://flow-tracker-client.herokuapp.com/'
					code='https://github.com/codinggilm/Flow-Tracker'
					text="My latest personal project, and the most complex one. Deployed but not fully polished yet. It's a software similar to Jira where users can create projects & tickets, and assign them to users. It includes features such as project management, user management, data tracking, promise-based rendering and more. I have written a SRS before building it (available in the /public folder), and it was built following a two-weeks sprints development schedule. I used React, Redux, SASS, NodeJs, and PostgreSQL."
					/>
					<Project 
					title='Auction site'
					image={auction}
					demo='https://auction-site-front.herokuapp.com/'
					code='https://github.com/codinggilm/Auction-Site'
					text="An auction app built using React and Node. The goal of this app isn't to have a beautiful UI; the current focus is on the general code quality, the backend implementation, and adding new functionalities. I have implemented real time UI updates using Socket.IO. Please consult the README for instructions on how to use it. The API's code can be found on my github profile as well. A really fun project giving me plenty of challenges to solve."
					/>
					<Project 
					title='Positive Touch'
					image={dog}
					demo='https://positive-touch.netlify.app/'
					code='https://github.com/codinggilm/Positive-Touch'
					text='This is my current commercial project, building a brand new site for the dog-training company 
					Positive Touch Ltd. It is a work in progress, the site is not finished and there is a lot of work left to do before deploying it. 
					I am in charge of the UX/UI design and the entire development. It is built using React and SASS, and the back-end will be built on NodeJS and PostgreSQL.  
					I am not using any library such as Bootstrap or prebuilt React components. I want a challenge, all the code is mine.' 
					/>
					<Project 
					title='Portfolio Site'
					image={portfolio}
					demo=''
					code='https://github.com/codinggilm/React-Portfolio'
					text='This was my first personal project. I have built it from scratch using React, HTML and CSS. 
						I was very eager to start coding my own project after finishing my courses, so starting
						with building my portfolio site was a logical step. It has been a really fun and exciting experience, and 
						I am now planning other projects, involving working with APIs and more complex JavaScript logic.' 
					/>
					<Project 
					title='Burger Builder'
					image={burger}
					demo='https://burger-builder-aae3b.firebaseapp.com/'
					code='https://github.com/codinggilm/Burger-Builder'
					text='This is the latest course project I have built using React and Redux, with a back-end set up on Firebase. 
						Axios and Redux-Thunk are used to send AJAX requests to Firebase and fetch all relevant data 
						(ingredients, users, orders etc.). The styling is done using CSS Modules to generate unique classes 
						scoped to specific components.'
					/>
					<Project 
					title='Face Recognition App'
					image={face}
					demo='https://face-recognition-frontend.herokuapp.com/'
					code='https://github.com/codinggilm/Face-Recognition-front'
					text='This was the final project of a full stack web development course. I really enjoyed building it and 
						learning about building a server and a database, then connnecting them to the front-end. It’s a single 
						page application built using React, Node.js and PostgreSQL. It uses the Clarifai API to detect faces in 
						pictures.'
					/>
					<Project 
					title='Robofriends'
					image={robo}
					demo='https://codinggilm.github.io/Robofriends/'
					code='https://github.com/codinggilm/Robofriends'
					text='A course project that introduced me to React. It taught me all the fundamentals of how the component and 
						props system work together with the virtual DOM to render JSX elements. The app fetches name & email details 
						from the JSON Placeholder API, and unique avatars from the Robohash API.'
					/>
					<Project 
					title='Recipe Explorer'
					image={recipe}
					demo='https://recipe-explorer.netlify.app/'
					code='https://github.com/codinggilm/Recipe-Explorer'
					text="JavaScript has been the first big challenge I've encountered. This was the final 
						project of a JavaScript course, and it was built using only HTML, CSS and ES6 JavaScript. It has taught me the 
						principles and advantages of an MVC architecture, and has helped me to solidify my understanding of 
						JavaScript's more advanced concepts. The app fetches recipes from a web API, and users can set the serving 
						size, create their own custom shopping list of ingredients, or save their favourite dishes."
					/>
				</div>
			</div>
		);
	}
};


export default Projects;