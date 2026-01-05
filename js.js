function toggleJourneyBoard() {
    const journeyBoard = document.querySelector('.journey-board');
    const icon = journeyBoard.querySelector('.toggle-btn i');
    
    // Toggle expanded class for showing content
    journeyBoard.classList.toggle('expanded');
    
    // Toggle collapsed class to hide/show the title text
    journeyBoard.classList.toggle('collapsed');
    
    // Change icon based on the state
    if (journeyBoard.classList.contains('expanded')) {
        icon.classList.remove('bi-chevron-right');
        icon.classList.add('bi-chevron-left');
    } else {
        icon.classList.remove('bi-chevron-left');
        icon.classList.add('bi-chevron-right');
    }
}
