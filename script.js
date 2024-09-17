function showTab(tabId) {
    // Hide all tab content
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.add('hidden');
    });

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.remove('hidden');
}

// Initially show the Blog tab
document.addEventListener("DOMContentLoaded", function() {
    showTab('blog');
});
