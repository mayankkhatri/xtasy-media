// Define your GraphQL query as a string
const query = `
  query GetProjects {
    projects {
      imageLink
      projectTitle
      projectDescription
      projectLink
    }
  }
`;

// Use your Hygraph content API endpoint
const endpoint =
  "https://ap-south-1.cdn.hygraph.com/content/cm56dje8k037q07w3hb9e1efc/master";

// Headers for the API call
const headers = {
  "Content-Type": "application/json",
  // 'Authorization': 'Bearer YOUR_API_TOKEN' // Uncomment if needed
};

// Fetch data from Hygraph
fetch(endpoint, {
  method: "POST",
  headers: headers,
  body: JSON.stringify({ query }),
})
  .then((response) => response.json())
  .then((result) => {
    if (result.data && result.data.projects) {
      displayProjects(result.data.projects);
    } else {
      console.error("No projects found:", result);
    }
  })
  .catch((error) => console.error("Error fetching projects:", error));

// Function to render projects on the page
function displayProjects(projects) {
  const projectsContainer = document.getElementById("projects");
  projects.forEach((project) => {
    // Create the project card container
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    // Wrap the entire card content in an anchor tag so the whole card is clickable
    projectCard.innerHTML = `
      <a href="${project.projectLink}" target="_blank" class="project-card-link">
        <div class="project-image">
          <div class="scroll-container">
            <div class="scroll-content">
              <img src="${project.imageLink}" alt="${project.projectTitle}">
              <img src="${project.imageLink}" alt="${project.projectTitle}">
            </div>
          </div>
        </div>
        <div class="project-info">
          <h2 class="project-title">
            ${project.projectTitle}
            <i class="ri-external-link-line"></i>
          </h2>
          <p class="project-description">${project.projectDescription}</p>
        </div>
      </a>
    `;

    // Append the card to the projects container
    projectsContainer.appendChild(projectCard);
  });

  // Use GSAP timeline for each scroll-content element to create a seamless loop
  document.querySelectorAll(".scroll-content").forEach((content) => {
    gsap
      .timeline({ repeat: -1 })
      .to(content, {
        duration: 5,
        y: -800, // Scroll by one image height (300px)
        ease: "none",
      })
      .set(content, { y: 0 });
  });
}
