// Function to dynamically create project cards
document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-container");

    projects["python-projects"].forEach(project => {
        // Create project card div
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        // Create and append image
        const projectImage = document.createElement("img");
        projectImage.src = project.imgSrc;
        projectImage.alt = project.title;
        projectImage.classList.add("project-image");
        projectDiv.appendChild(projectImage);

        // Create content div
        const projectContent = document.createElement("div");
        projectContent.classList.add("project-content");

        // Add project title
        const projectTitle = document.createElement("h3");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = project.title;
        projectContent.appendChild(projectTitle);

        // Add project description
        const projectDescription = document.createElement("p");
        projectDescription.classList.add("project-description");
        projectDescription.textContent = project.description;
        projectContent.appendChild(projectDescription);

        // Add project link
        const projectLink = document.createElement("a");
        projectLink.classList.add("project-link");
        projectLink.href = project.link;
        projectLink.textContent = "View on GitHub";
        projectContent.appendChild(projectLink);

        // Append content to project card
        projectDiv.appendChild(projectContent);

        // Append project card to container
        projectsContainer.appendChild(projectDiv);
    });
});
