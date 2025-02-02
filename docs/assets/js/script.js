document.addEventListener('DOMContentLoaded', () => {
    // Add search functionality
    const searchInput = document.createElement('input');
    searchInput.placeholder = 'Search tickets...';
    searchInput.style.marginBottom = '1rem';
    searchInput.style.padding = '0.5rem';
    searchInput.style.width = '100%';
    
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