document.addEventListener('DOMContentLoaded', () => {
    // 1. Determine current page and language
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'zh'; // Default to Chinese
    
    // Get filename without extension (e.g., "terms" from "/terms.html")
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1).replace('.html', '') || 'index';

    // 2. Update Language Toggles
    const zhLink = document.getElementById('lang-zh');
    const enLink = document.getElementById('lang-en');
    
    if (zhLink) zhLink.href = `?lang=zh`;
    if (enLink) enLink.href = `?lang=en`;

    // Highlight active language
    if (lang === 'zh') {
        if (zhLink) zhLink.classList.add('font-bold', 'underline');
    } else {
        if (enLink) enLink.classList.add('font-bold', 'underline');
    }

    // 3. Fetch and Render Markdown
    const mdFile = `${page}.${lang}.md`;
    
    fetch(mdFile)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not load ${mdFile}`);
            }
            return response.text();
        })
        .then(text => {
            const contentDiv = document.getElementById('content');
            if (contentDiv) {
                // Parse Markdown to HTML
                contentDiv.innerHTML = marked.parse(text);
            }
        })
        .catch(error => {
            console.error('Error loading content:', error);
            const contentDiv = document.getElementById('content');
            if (contentDiv) {
                contentDiv.innerHTML = `
                    <div class="p-4 bg-red-50 text-red-600 rounded-lg">
                        <h3 class="font-bold">Error Loading Content</h3>
                        <p>Unable to load the content for this page.</p>
                        <p class="text-sm mt-2 text-gray-500">${error.message}</p>
                        <p class="text-sm mt-2">Note: If you are opening this file locally (file://), please use a local server (like VS Code Live Server) or GitHub Pages due to browser security restrictions (CORS).</p>
                    </div>
                `;
            }
        });
});
