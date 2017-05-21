var awesomeThoughts = "I am Soon Joo and I am AWESOME!";
console.log(awesomeThoughts);

var bio = {
    "name": "Soon Joo Uh",
    "role": "Web Designer",
    "contacts": {
        "mobile": "626-696-9959",
        "email": "usj3026@gmail.com",
        "github": "usj3026",
        "location": "Los Angeles, Ca",
        "residence": [
            "Seoul, South Korea", "Berlin, Germany", "Shenzhen, China"
                    ]
    },
        "welcomeMessage": "\"The day I broke up with normal, was the first day of my magical life!\"",
        "skills": [
            "UX / UI", " HTML5 / CSS3", " JS / jQuery", " Git / GitHub"
                ],
        "biopic": "images/_MG_3068.png"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName + formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedWelcomeMsg + formattedBiopic);

    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};

var work = {
    "jobs": [{
            "employer": "Offline DBA Sugarlips",
            "title": "Lead Fashion Designer",
            "location": "Los Angeles, Ca",
            "dates": "November 2011 - Current",
            "description": [
                "Collaborate on projects with independent online boutiques and also major retail departments stores like Urban Outfitter's, Macy's, Nordstroms, Dillard's. Create new designs from current trend reports from industry leading events like Fame and Magic show. Create and design new looks, trends and details for all upcoming seasons. Prepare seasonal mood boards to use as inspiration."
            ]
        }]
};

work.display = function() {
    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
        $(".work-entry:last").append(formattedEmployerTitle);
        });
};

var projects = {
    "projects": [{
            "title": "Design Museum Foundation",
            "dates": "2017",
            "description": "This was the first project from CareerFoundry. We used UI elements and patterns to recreate the existing website. We focused on the importance of text and typography as well as the hierarchy in visual and contextual elements.",
            "images": [
                "images/desktop1.jpg.jpeg",
                "images/desktop2.jpg.jpeg",
                "images/desktop3.jpg.jpeg"
            ],
        "wireframe": ""
        },
        {
            "title": "Mobile App Design",
            "dates": "2017",
            "description": "I really enjoy food and wanted to apply my skills towards this CareerFoundry app project. The project features a mobile app design for members to share recipes from regions, cultures and cuisines around the world. Sign-up and log-in to create personal profiles allowing you to list recipes, share photos and make adjustments. Share in the experience with other users and vote on favorite recipes. ",
            "images": [
                "images/App1.jpg-1.jpeg",
                "images/App2.jpg-1.jpeg",
                "images/App3.jpg-1.jpeg",
                "images/App4.jpg-1.jpeg",
                "images/App5.jpg-1.jpeg",
                "images/App6.jpg-1.jpeg"
                ],
            "wireframe": ""    
            },
            {
            "title": "Conduct User Research & create user personas",
            "dates": "2017",
            "description": "We conducted market research for a location based app design. The app allows campers and travelers to book campgrounds or find dry camping hotspots. We created user personas demostrating unique differences and used wireframes to further the design process. ",
            "images": [
                "images/Laura.jpg.jpeg",
                "images/Joe.jpg.jpeg",
                "images/Michelle.jpg.jpeg",
            ],
            "wireframe": ["images/Wireframes.jpg.jpeg"]   
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        };

        if (project.wireframe.length > 0) {
            project.wireframe.forEach(function(frame) {
                var formattedWireframe = HTMLprojectWireframe.replace("%data%", frame);
                $(".project-entry:last").append(formattedWireframe)
            });
        };
    });
};

var education = {
    "schools": [{
        "name": "Otis College of Art Design",
        "location": "Los Angeles, Ca",
        "degree": "B.F.A.",
        "majors": ["Fashion Design"],
        "dates": "2004-2008",
        "url": ["http://otis.edu/"]
    },
    {
        "name": "UCLA Extension",
        "location": "Los Angeles, Ca",
        "degree": "Certificate",
        "majors": ["Design Communication Art"],
        "dates": "2009-2010",
        "url": ["https://www.uclaextension.edu/"]
    }],
    "onlineCourses": [{
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "2017",
            "url": "http:www.udacity.com"
        },
        {
            "title": "UI Design",
            "school": "Career Foundry",
            "dates": "2017",
            "url": "http:www.careerfoundry.com"
        },
        {
            "title": "HTML5 Introduction",
            "school": "W3Cx",
            "dates": "2017",
            "url": "http:www.edx.org"
        },
        {
            "title": "CSS3 Introduction",
            "school": "W3Cx",
            "dates": "2017",
            "url": "http:www.edx.org"
        },
        {
            "title": "Introduction to HTML and JavaScript",
            "school": "Microsoft",
            "dates": "2017",
            "url": "http:www.edx.org"
        }
    ]
};

education.display = function() {
    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);

        var formattedSchool = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchool + formattedDegree + formattedDates + formattedLocation + formattedMajor);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);
        $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL);
    });
};

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] + " "+ name[1];
} 

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();