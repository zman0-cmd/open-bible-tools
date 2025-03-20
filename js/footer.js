async function loadFooter() {
    try {
        const response = await fetch('../../projectMetadata.json');
        const metadata = await response.json();

        const footer = document.createElement('footer');
        footer.innerHTML = `
            </br>
            <div class="container">
                ${metadata.footer.text1}</br>
                ${metadata.footer.text2}${metadata.project.license}</br>
                ${metadata.footer.text3}<a href="${metadata.project.repository}">GitHub</a></br>
                ${metadata.footer.text4}${metadata.project.version} ${metadata.footer.text5}${metadata.project.lastUpdate}
            </div>
            `;

        document.body.appendChild(footer);
    } catch (error) {
        console.error('Error loading project metadata:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadFooter);