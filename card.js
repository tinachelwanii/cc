const cards = [
  {
    img: "./imgs/cources/Fullstack.jpg",
    organization: "IBM",
    title: "IBM Full Stack Software Developer Professional Certificate",
    discription: `Clud Computing,Python Programming, Cloud Applications,IBM Cloud,Application Development`,
    starrating: 4.5,
    review: 34,
    level: "Beginner",
    coursetype: "Specialization",
    duration: "3-6 Months",
    subject: "web development",
  },
  {
    img: "./imgs/cources/Fullstack.jpg",
    organization: "IBM",
    title: "Meta Front-End Developer Professional Certificate",
    discription: `Skills you'll gain: Web Development Computer Programming HTML and CSS Programming Principles Software Engineering Data Management Algorithms User Experience Human Computer Interaction Computer Programming Tools    `,
    starrating: 4.5,
    review: 34,
    level: "Intermediate",
    coursetype: "Specialization",
    duration: "3-6 Months",
    subject: "web development",
  },
  {
    img: "./imgs/cources/WD.jpg",
    organization: "Johns Hopkins University",
    title: "HTML, CSS, and Javascript for Web Developers",
    discription: `Skills you'll gain: HTML and CSS, Web Development, Javascript, Front-End Web Development`,
    starrating: 4.7,
    review: 15800,
    level: "Mixed",
    coursetype: "Course",
    duration: "1-3 Months",
    subject: "web development",
  },
  {
    img: "./imgs/cources/Intro-to-Software-Eng.jpg",
    organization: "Google",
    title: "Google UX Design",
    discription: `Skills you'll gain: Web Development Computer Programming HTML and CSS Programming Principles Software Engineering Data Management Algorithms User Experience Human Computer Interaction Computer Programming Tools    `,
    starrating: 4.5,
    review: 34,
    level: "Beginner",
    coursetype: "Specialization",
    duration: "1-3 Months",
    subject: "web development",
  },
 
  {
    img: "./imgs/cources/Fullstack.jpg",
    organization: "IBM",
    title: "Introduction to Web Development    ",
    discription: `Skills you'll gain: Computer Programming Web Development Cloud Computing Computer Programming Tools Programming Principles Python Programming Software Engineering DevOps HTML and CSS Databases SQL Data Analysis    `,
    starrating: 4.5,
    review: 34,
    level: "Advanced",
    coursetype: "Specialization",
    duration: "1-4 Weeks",
    subject: "web development",
  },
  {
    img: "./imgs/cources/istockphoto-1340766096-612x612.jpg",
    organization: "Meta",
    title: "Introduction to Front-End Development    ",
    discription: `Skills you'll gain: HTML and CSS, Web Development, Javascript, Front-End Web Development    `,
    starrating: 4.5,
    review: 34,
    level: "Mixed",
    coursetype: "Specialization",
    duration: "3-6 Months",
    subject: "web development",
  },
  {
    img: "./imgs/cources/WD.jpg",
    organization: "Meta",
    title: " Meta Back-end developer",
    discription: `Python programming, HTML,CSS , SQL, Database design`,
    starrating: 4.7,
    review: 34,
    level: "Beginner",
    coursetype: "Specialization",
    duration: "Less Than 2 Hours",
    subject: "web development",
  },
  {
    img: "./imgs/cources/Intro-to-Software-Eng.jpg",
    organization: "IBM",
    title: "IBM Back-end development",
    discription: `Application development,computer programming , software engineering.`,
    starrating: 4.5,
    review: 34,
    level: "Intermediate",
    coursetype: "Specialization",
    duration: "3-6 Months",
    subject: "web development",
  },
  {
    img: "./imgs/cources/istockphoto-1340766096-612x612.jpg",
    organization: "IBM",
    title: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perferendis, harum? Debitis ullam harum consequatur doloremque
        recusandae similique nihil quae quaerat.`,
    starrating: 4.5,
    review: 32,
    level: "Mixed",
    coursetype: "Specialization",
    duration: "1-4 Weeks",
    subject: "web development",
  },
  {
    img: "./imgs/cources/WD.jpg",
    organization: "IBM",
    title: "IBM Back-End Development",
    discription: `Application Development,Software Engineering,Python Programming`,
    starrating: 4.5,
    review: 34,
    level: "Beginner",
    coursetype: "Specialization",
    duration: "3-6 Months",
    subject: "web development",
  },
  {
    img: "./imgs/cources/Fullstack.jpg",
    organization: "IBM",
    title: "Web Design for Everybody    ",
    discription: `Skills you'll gain: Computer Programming Web Development Cloud Computing Computer Programming Tools Programming Principles Python Programming Software Engineering DevOps HTML and CSS Databases SQL Data Analysis    `,
    starrating: 4.5,
    review: 34,
    level: "Beginner",
    coursetype: "Specialization",
    duration: "1-3 Months",
    subject: "business",
  },
  {
    img: "./imgs/cources/istockphoto-1340766096-612x612.jpg",
    organization: "Coursera Project Network    ",
    title: "Build a Portfolio Website    ",
    discription: `Skills you'll gain: HTML and CSS, Web Development, Javascript, Front-End Web Development    `,
    starrating: 4.5,
    review: 34,
    level: "Intermediate",
    coursetype: "Specialization",
    duration: "3-6 Months",
    subject: "business",
  },
];

var createdcards = [];

const cards_wrapper = $(".cards-wrapper");

function cardFunction() {
  cards.forEach(createCard);
  // console.log(createdcards);
}

function createCard(e) {
  var subject = e.subject.toLowerCase();
  subject = subject.replace(/ /g, "");
  var duration = e.duration.toLowerCase();
  duration = duration.replace(/ /g, "");
  var level = e.level.toLowerCase();
  level = level.replace(/ /g, "");
   //console.log(level);
  // console.log(duration);
  var card = `<div class="card ${subject} ${duration} ${level}">
    <div class="card-img">
      <img
        src=${e.img}
        alt=""
      />
    </div>
    <div class="card-body">
      <div class="card-company">
        <img src=${e.logo} alt="" />
        <div class="organization">IBM</div>
      </div>
      <h4 class="card-title">${e.title}</h4>
      <p class="card-para">
                  <p class="skills">Skills you'll gain: </p>
                  ${e.discription}
      </p>
      <div class="features-wrapper">
        <div class="card-rate_review">
          <div class="card-rating">
            <i class="fa fa-star"></i>
            <p class="star">${e.starrating}</p>
          </div>
          <div class="card-review">(${e.review}k reviews)</div>
        </div>
        <div class="course-features">
          <ul>
            <li><span>.</span>${e.level}</li>
            <li><span>.</span>${e.coursetype}</li>
            <li><span>.</span>${e.duration}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`;
  cards_wrapper.append(card);
  createdcards.push(card);
  //   console.log(card);
}
cardFunction();

function change() {
  console.log("running change function");
  let results = Array.from(document.querySelectorAll(".cards-wrapper > div"));
  // let results = createdcards;
  // console.log(results);
  let subjectChecked = $(".filters-wrapper input.subject:checked"),
    durationChecked = $(".filters-wrapper input.duration:checked");
    levelChecked = $(".filters-wrapper input.level:checked");
  // Hide all results
  results.forEach(function (result) {
    result.style.display = "none";
  });
  // Filter results to only those that meet ALL requirements:
  // console.log(durationChecked);
  if (subjectChecked.length != 0) {
    filterRequirements(subjectChecked);
  }

  if (durationChecked.length != 0) {
    filterRequirements(durationChecked);
  }
  if (levelChecked.length != 0) {
    filterRequirements(levelChecked);
  }

  // if (durationChecked.length === 0 && subjectChecked.length === 0) {
  //   cardFunction();
  //   return;
  // }

  function filterRequirements(checkedelement) {
    results = Array.from(checkedelement).reduce(function (sum, input) {
      const attrib = input.getAttribute("name");
      console.log(attrib);
      return sum.concat(
        results.filter(function (result) {
          //console.log(result.classList);
          return result.classList.contains(attrib);
        })
      );
    }, []);
  }
  // Show those filtered results:
  results.forEach(function (result) {
    console.log(result);
    result.style.display = "block";
  });
}
