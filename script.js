let skillsContent = document.querySelector('.skills-content');
document.addEventListener("DOMContentLoaded", function() {
const aboutSection = document.getElementById("about");
const developerInfo = document.getElementById("developer-info");
const skillsSection = document.getElementById("skills");
const skillsInfo = document.getElementById("skills-info");
const resumeSection = document.getElementById("resume");
const resumeContent = document.querySelector(".resume-content");

aboutSection.addEventListener("click", function() {
  skillsInfo.classList.remove("show");
  resumeContent.classList.remove("show");
  developerInfo.classList.toggle("show");
});

skillsSection.addEventListener("click", function() {
  developerInfo.classList.remove("show");
  resumeContent.classList.remove("show");
  skillsInfo.classList.toggle("show");
});

resumeSection.addEventListener("click", function() {
  
  skillsInfo.classList.remove("show");
  developerInfo.classList.remove("show");
  if (resumeContent.style.display === "block") {
            resumeContent.style.display = "none";  
          } else {
            developerInfo.classList.remove("show");
            skillsInfo.classList.remove("show");
            resumeContent.style.display = "block";

          }

  
      });
  

if (skillsContent) {
  new Waypoint({
      element: skillsContent,
      offset: '80%',
      handler: function(direction) {
          let progress = document.querySelectorAll('.progress .progress-bar');
          progress.forEach((el) => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
      }
  });
}
});

