const experiences = [
	{
		CodeImpact : [
			'Learning Instructor',
			'@ CodeImpact',
			'July 2020 - Present',
			[
				'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, AWS, React, WordPress, and Netlify.',
				'Teaching teenagers the fundamentals of Programming and front-end development.'
			],
			'https://www.facebook.com/codeimpactug/'
		]
	},
	{
		'Outbox-Edu' : [
			'Trainee',
			'@ Outbox-Edu',
			'March 2020 - July 2020',
			[
				'Learnt the core programming skills in both Front-end and Back-end technologies, frameworks and tools such as JavaScript, Node.js/Express.js, MongoDB, React.js, Heroku, Netlify, Github.',
				'Collaborated remotely with peers on various Projects both Front and Back-end.',
				'Improved both my Technical and Soft skills such as communication and collaboration.'
			],
			'https://outbox.co.ug/'
		]
	},
	{
		'Andela-UG' : [
			'Trainee',
			'@ Andela-UG',
			'Jan 2020 - Feb 2020',
			[
				'Learnt the fundamental web development skills using technologies such as HTML, CSS and Programming using the Python programming language.',
				'Worked with tools like Medium to develop my Technical writing skills.',
				'Used Git and GitHub for version control management.'
			],
			'https://andela.com/'
		]
	}
];

//The DOM Elements
const companyList = document.querySelector('#company');
const positionHeld = document.querySelector('#title');
const company = document.querySelector('#company-link');
const timeline = document.querySelector('#timeline');
const activities = document.querySelector('#activities');

//Add the List of Experiences
const list = experiences.map((experience) => `<li>${Object.keys(experience)[0]}</li>`).join('');
companyList.innerHTML = list;
companyList.childNodes.forEach((item) => item.addEventListener('click', (e) => autoFill(e.target.innerHTML)));

//Function that will add content to DOM
const autoFill = (companyName) => {
	for (let name of experiences) {
		if (Object.keys(name)[0] === companyName) {
			let details = name[companyName];
			positionHeld.innerText = details[0];
			company.innerText = details[1];
			timeline.innerText = details[2];
			activities.innerHTML = details[3].map((activity) => `<li>${activity}</li>`).join('');
			company.setAttribute('href', details[4]);
		}
	}
};
//Add background color
const listItems = companyList.childNodes;
const companyItem = company.innerText.split(' ')[1];
const background = () => {
	for (let co of listItems) {
		if (co.innerText === companyItem) {
			co.style = 'background-color:rgba(64, 224, 208, 0.171); color: rgb(110, 224, 154); font-weight: bold;';
		} else {
			co.style = 'background-color:none;';
		}
	}
};
setInterval(() => {
	const listItems = companyList.childNodes;
	const companyItem = company.innerText.split(' ')[1];
	const background = () => {
		for (let co of listItems) {
			if (co.innerText === companyItem) {
				co.style = 'background-color:rgba(64, 224, 208, 0.171); color: rgb(110, 224, 154); font-weight: bold;';
			} else {
				co.style = 'background-color:none;';
			}
		}
	};
	background();
}, 200);
