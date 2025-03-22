document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeTooltip = document.getElementById('theme-tooltip');
    const bodyElement = document.body;

    // 初始化页面主题
    function initializeTheme() {
        // 检查localStorage中是否有保存的主题模式
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            bodyElement.classList.add('dark', 'dark-mode');
            themeToggleButton.classList.replace('fa-moon', 'fa-sun');
            themeTooltip.textContent = 'Go to Day';
        } else {
            bodyElement.classList.add('bright', 'light-mode');
            themeToggleButton.classList.replace('fa-sun', 'fa-moon');
            themeTooltip.textContent = 'Go to Night';
        }
    }

    // 切换主题的逻辑
    function toggleTheme() {
        if (bodyElement.classList.contains('light-mode')) {
            bodyElement.classList.replace('light-mode', 'dark-mode');
            bodyElement.classList.replace('bright', 'dark');
            themeToggleButton.classList.replace('fa-moon', 'fa-sun');
            themeTooltip.textContent = 'Go to Day';
            localStorage.setItem('theme', 'dark'); // 保存当前模式为黑夜模式
        } else {
            bodyElement.classList.replace('dark-mode', 'light-mode');
            bodyElement.classList.replace('dark', 'bright');
            themeToggleButton.classList.replace('fa-sun', 'fa-moon');
            themeTooltip.textContent = 'Go to Night';
            localStorage.setItem('theme', 'light'); // 保存当前模式为白天模式
        }
    }

    // 为图标和文字描述添加点击事件
    themeToggleButton.addEventListener('click', toggleTheme);
    themeTooltip.addEventListener('click', toggleTheme);

    // 页面加载时初始化主题
    initializeTheme();
});