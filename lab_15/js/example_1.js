function propsCounts(mentor) {
    let count = Object.keys(mentor).length;
    console.log(count);
}

let mentor = {
    course: "JS",
    duration: 3,
    direction: "web-debvelopment"
}

propsCounts(mentor);