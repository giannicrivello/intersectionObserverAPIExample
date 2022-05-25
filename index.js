
let boxElement;
let prevRatio = 0.0;
window.addEventListener("load", (event) => {
	boxElement = document.querySelector("#box");
	createObserver();
}, false);

function createObserver() {
	let observer;

	let options = {
		root: null,
		rootMargin: "0px",
		threshold:buildThresholdList(), 
	}


	observer = new IntersectionObserver(handleIntersect, options);
	observer.observe(boxElement);
}
function buildThresholdList() {
	  let thresholds = [];
	  let numSteps = 20;

	  for (let i=1.0; i<=numSteps; i++) {
		      let ratio = i/numSteps;
		      thresholds.push(ratio);
		    }

	  thresholds.push(0);
	  return thresholds;
}
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
	    entry.target.classList.remove("rocket");
	    entry.target.className = "animateRocket";
	    console.log(entry.target.classList);
    } else {
	    entry.target.className = "rocket";
    }
	  prevRatio = entry.intersectionRatio;
  });
}
