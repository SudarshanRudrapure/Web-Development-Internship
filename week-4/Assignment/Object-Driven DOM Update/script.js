const students = [
  {
    name: "Arjun Sharma",
    role: "Full-Stack Developer",
    dept: "Computer Science",
    projects: 12,
    score: "91%",
    skills: "React, Node.js, MongoDB"
  },
  {
    name: "Priya Nair",
    role: "UI/UX Designer",
    dept: "Design & Media",
    projects: 8,
    score: "97%",
    skills: "Figma, CSS, Adobe XD"
  },
  {
    name: "Rohan Mehta",
    role: "Data Analyst",
    dept: "Information Systems",
    projects: 10,
    score: "88%",
    skills: "Python, SQL, Tableau"
  }
];

function loadProfile(index) {
  const s = students[index];
  document.getElementById("name").textContent     = s.name;
  document.getElementById("role").textContent     = s.role;
  document.getElementById("dept").textContent     = s.dept;
  document.getElementById("projects").textContent = s.projects;
  document.getElementById("score").textContent    = s.score;
  document.getElementById("skills").textContent   = s.skills;
}

// Load first profile by default when page opens
loadProfile(0);
