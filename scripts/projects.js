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

// If your project requires authentication, you can add headers with your API token.
// For now, if authentication isn't needed, you can leave the headers as shown.
const headers = {
  "Content-Type": "application/json",
  // If needed, uncomment and add your API token:
  // 'Authorization': 'Bearer YOUR_API_TOKEN'
};

// Fetch data from Hygraph
fetch(endpoint, {
  method: "POST",
  headers: headers,
  body: JSON.stringify({ query }),
})
  .then((response) => response.json())
  .then((result) => {
    // Check if data exists
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
    // Create a container div for each project
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";

    // Populate the project content
    projectDiv.innerHTML = `
      <img src="${project.imageLink}" alt="${project.projectTitle}">
      <h2>${project.projectTitle}</h2>
      <p>${project.projectDescription}</p>
      <a href="${project.projectLink}" target="_blank">Visit Project</a>
    `;

    // Append the project to the container
    projectsContainer.appendChild(projectDiv);
  });
}
