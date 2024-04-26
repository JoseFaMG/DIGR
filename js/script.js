function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar.classList.contains('show')) {
    sidebar.classList.add('show');
  } else {
    sidebar.classList.remove('show');
  }
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('show');
}
