// Simple testing message to make sure our code works
document.getElementById('searchBtn').addEventListener('click', function() {
    let searchValue = document.getElementById('searchBar').value;
    if(searchValue) {
        alert("Searching directory for: " + searchValue);
    } else {
        alert("Please enter an agency name or city.");
    }
});

// Sector filter buttons interaction
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
