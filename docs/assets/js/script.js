document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.createElement('input');
    searchInput.placeholder = 'Search tickets...';
    searchInput.style.marginBottom = '1rem';
    searchInput.style.padding = '0.75rem';
    searchInput.style.fontSize = '1rem';
    searchInput.style.borderRadius = '5px';
    searchInput.style.border = '1px solid #5865f2';
    searchInput.style.background = '#40444b';
    searchInput.style.color = '#dcddde';
    
    const ticketTable = document.querySelector('.ticket-table');
    if (ticketTable) {
        ticketTable.parentElement.insertBefore(searchInput, ticketTable);
        
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            Array.from(ticketTable.querySelectorAll('tbody tr')).forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }
});
