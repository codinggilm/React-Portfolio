import React, { Component } from 'react';
import Project from './Project/Project';
import classes from './Projects.module.css';
import burger from '../../assets/burgerbuilder.png';
import face from '../../assets/facerecognition.png';
import robo from '../../assets/robofriends.png';
import recipe from '../../assets/recipe.png';
import sr from '../../ScrollReveal';


class Projects extends Component {

	componentDidMount = () => {
    	const config = {
    		// origin: 'left',
	      	duration: 1000,
	      	delay: 250,
	      	// distance: '100px',
	      	scale: 1,
	      	easing: 'ease',
    	}
    	sr.reveal(this.refs.title_reveal, config)
  	}

	render() {
		return (
		<div className={classes.section_projects}>
			<div className='container'>
			{/*<div className={classes.container}>*/}
			<h3 className={classes.title} ref='title_reveal'>Projects</h3>
				<Project 
					title='Burger Builder'
					image={burger}
					demo='https://burger-builder-aae3b.firebaseapp.com/'
					// href='https://burger-builder-aae3b.firebaseapp.com/'
					code='https://github.com/codinggilm/Burger-Builder'
					text='This is the latest project I have built using React and Redux, with a back-end set up on Firebase. 
						Axios and Redux-Thunk are used to send AJAX requests to Firebase and fetch all relevant data 
						(ingredients, users, orders etc.). The styling is done using CSS Modules to generate unique classes 
						scoped to specific components.'
					/>
					<Project 
					title='Face Recognition App'
					image={face}
					demo='https://face-recognition-frontend.herokuapp.com/'
					// href='https://face-recognition-frontend.herokuapp.com/'
					code='https://github.com/codinggilm/Face-Recognition-front'
					text='This was the final project of a full stack web development course. I really enjoyed building it and 
						learning about setting up a server and a database, and connnecting them to the front-end. It’s a single 
						page application built using React, Node.js and PostgreSQL. It uses the Clarifai API to detect faces in pictures.'
					/>
					<Project 
					title='Robofriends'
					image={robo}
					demo='https://codinggilm.github.io/Robofriends/'
					// href='https://codinggilm.github.io/Robofriends/'
					code='https://github.com/codinggilm/Robofriends'
					text='My first React project. It taught me all the fundamentals about how the component and prop system work 
						together with the virtual DOM to render JSX elements. The app fetches name & email details from the JSON 
						Placeholder API, and unique avatars from the Robohash API. The power of React really impressed me!'
					/>
					<Project 
					title='Recipe Explorer'
					image={recipe}
					demo='https://recipe-explorer.netlify.app/'
					// href='https://recipe-explorer.netlify.app/'
					code='https://github.com/codinggilm/Recipe-Explorer'
					text="JavaScript has been the first big challenge I've encountered during my learning journey. This was the final 
						project of a JavaScript course, and it was built using only HTML, CSS and ES6 JavaScript. It has taught me the 
						principles and advantages of an MVC architecture, and has helped me to solidify my understanding of 
						JavaScript's more advanced concepts. The app fetches recipes from a web API, and users can define the serving 
						size, create their own custom shopping list of ingredients, or save their favourite dishes."
					/>
			</div>
		</div>
	);
	}
};


export default Projects;