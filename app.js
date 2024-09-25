document.addEventListener("DOMContentLoaded", function () {
    const username = "ogiansouza"; // Defina o username do GitHub aqui
    const apiUrl = `https://api.github.com/users/${username}`;

    // Função para buscar dados do GitHub e preencher na página
    async function fetchGitHubData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Erro: ${response.status}`);
            }
            const data = await response.json();

            // Preenchendo os dados na página
            document.getElementById("profile-avatar").src = data.avatar_url;
            document.getElementById("profile-name").textContent = data.name;
            document.getElementById("profile-username").textContent = `@${data.login}`;
            document.getElementById("repo-count").textContent = data.public_repos;
            document.getElementById("followers-count").textContent = data.followers;
            document.getElementById("following-count").textContent = data.following;
            document.getElementById("profile-link").href = data.html_url;
            document.getElementById("profile-link").textContent = "Ver no Github";
        } catch (error) {
            console.error("Falha ao carregar os dados:", error);
        }
    }

    fetchGitHubData();
});
