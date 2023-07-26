const token = "***************************";
const hasBio = false;  
const hasProfileLink = true;  
const hasFollowers = true;  
const hasPublicRepos = true;  

fetch("https://api.github.com/user", {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then((response) => response.json())
  .then((data) => {
    // Obtener la foto de perfil y la biografía de GitHub
    const profileImgUrl = data.avatar_url;
    const bio = data.bio;

    // Mostrar la foto de perfil dinámicamente en el widget
    const profileImgElement = document.getElementById("profile-img");
    profileImgElement.src = profileImgUrl;
    profileImgElement.alt = "Profile Picture";

 
    if (hasBio && bio) {
      const bioElement = document.createElement("div");
      bioElement.id = "bio";
      bioElement.textContent = bio;
      document.getElementById("bio-container").appendChild(bioElement);
    }

 
    if (hasProfileLink) {
      document.getElementById("profile-link").innerHTML = `
        <a href="${data.html_url}" target="_blank">View Profile</a>
      `;
    }

 
    if (hasFollowers) {
      document.getElementById("followers").textContent = data.followers;
    }

 
    if (hasPublicRepos) {
      document.getElementById("public-repos").textContent = data.public_repos;
    }
  })
  .catch((error) => {
    console.error("Error al obtener datos de GitHub:", error);
  });
