/*



▒█▀▀█ ░▀░ ▀▀█▀▀ ░▀░ █▀▀ █░░█ ▒█▀▀█ █▀▀█ █▀▀▄ █▀▀▀ █▀▀ 
▒█░▄▄ ▀█▀ ░░█░░ ▀█▀ █▀▀ █▄▄█ ▒█▀▀▄ █▄▄█ █░░█ █░▀█ █▀▀ 
▒█▄▄█ ▀▀▀ ░░▀░░ ▀▀▀ ▀░░ ▄▄▄█ ▒█▄▄█ ▀░░▀ ▀▀▀░ ▀▀▀▀ ▀▀▀

#*************************************
# Developed and engineered by 
# Felipe Alfonso Gonzalez <f.alfonso@res-ear.ch>
# Computer Science Engineer
# Chile
#*************************************

*/

const username = "username"; // Replace "username" with the GitHub username you want to query
const hasBio = false; // Change to false if the user has no bio
const hasProfileLink = true; // Change to false if you don't want to show the profile link
const hasFollowers = true; // Change to false if you don't want to show the number of followers
const hasPublicRepos = true; // Change to false if you don't want to show the number of public repositories

fetch(`https://api.github.com/users/${username}`)
  .then((response) => response.json())
  .then((data) => {
    // Get the GitHub user's profile picture and bio
    const profileImgUrl = data.avatar_url;
    const bio = data.bio;

    // Show the profile picture dynamically in the widget
    const profileImgElement = document.getElementById("profile-img");
    profileImgElement.src = profileImgUrl;
    profileImgElement.alt = "Profile Picture";

    // Show the bio dynamically in the widget if available and hasBio is true
    if (hasBio && bio) {
      const bioElement = document.createElement("div");
      bioElement.id = "bio";
      bioElement.textContent = bio;
      document.getElementById("bio-container").appendChild(bioElement);
    }

    // Show the profile link if hasProfileLink is true
    if (hasProfileLink) {
      document.getElementById("profile-link").innerHTML = `
        <a href="${data.html_url}" target="_blank">View Profile</a>
      `;
    }

    // Show the number of followers if hasFollowers is true
    if (hasFollowers) {
      document.getElementById("followers").textContent = data.followers;
    }

    // Show the number of public repositories if hasPublicRepos is true
    if (hasPublicRepos) {
      document.getElementById("public-repos").textContent = data.public_repos;
    }
  })
  .catch((error) => {
    console.error("Error fetching GitHub data:", error);
  });
