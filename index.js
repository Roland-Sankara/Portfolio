const experiences = [
	{
		'Kanzu-Code' : [
			'Learning & Development Lead',
			'@ Kanzu-Code',
			'October 2022 - Present',
			[ 
				"...." 
			],
			'https://outbox.co.ug/'
		]
	},
	{
		'Outbox' : [
			'Software Developer & Technical Mentor',
			'@ Outbox',
			'October 2020 - December 2021',
			[ 
				"Worked with product managers and business analysts to redefine the UI of the GetIn Web App, a community referral system to support outreach to pregnant girls in rural communities in Uganda, based on feedback from stakeholders",
				"Documented the codebase of the GetIn App to effectively train the new and existing team members. https://github.com/UNFPAInnovation/GetIN-Web-2.0#readme",
				"Developed the GetIn Web dashboard frontend, leveraging reusable components, unit, and integration tests to ensure a reliable, functional, readable, and maintainable codebase.",
				"Developed an efficient USSD web server callback to handle requests leveraging the NITA(U) Mobile Service Delivery API a solution that was considered by the Project Manager in the final project implementation.",
				"Facilitated learning at the Outbox-Edu Fullstack Software Engineering Bootcamp along with other learning facilitators.",
				"Supported program implementation and assessed students' progress against curriculum learning objectives."
			],
			'https://outbox.co.ug/'
		]
	},
	{
		'CodeImpact' : [
			'Lead Learning Facilitator',
			'@ CodeImpact',
			'July 2020 - September 2022',
			[
				"Facilitated learning in internal and external coding programs and boot camps.", 
				"Managed and oversaw learning program implementation and assessed students' progress against curriculum learning objectives."
			],
			'http://codeimpact.co/'
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
