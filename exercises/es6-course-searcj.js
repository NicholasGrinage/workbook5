"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];
// what is prog200 start date
function prog200(course) {
  if (course.CourseId == "PROG200") {
    return true;
  } else {
    return false;
  }
}

let x = courses.find(prog200);
if (x) {
  console.log(x.StartDate);
}
// what is the title of the PROJ500 course\
function proj500(course) {
  if (course.CourseId == "PROJ500") {
    return true;
  } else {
    return false;
  }
}
let x1 = courses.find(proj500);
if (x1) {
  console.log(x1.Title);
}

function lessThan50(course) {
  return Number(course.fee) <= 50;
}
let inexpensiveCourses = courses.filter(lessThan50);
console.log(inexpensiveCourses);


