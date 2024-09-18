document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const sections = document.querySelectorAll('.tool-block');
    
    sections.forEach(section => {
        const title = section.querySelector('h2').textContent.toLowerCase();
        const description = section.querySelector('p').textContent.toLowerCase();
        
        // Show section if title or description includes the query
        if (title.includes(query) || description.includes(query)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});
