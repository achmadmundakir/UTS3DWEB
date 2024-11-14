// JavaScript for Sidebar
const sidebar = document.getElementById('sidebar');
const overlay = document.querySelector('.overlay');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', () => {
    sidebar.style.width = '250px';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

function closeSidebar() {
    sidebar.style.width = '0';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

