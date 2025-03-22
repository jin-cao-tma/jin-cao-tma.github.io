document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  const bodyElement = document.body;
  const profileCover = document.getElementById('profile-cover');

  // 初始化页面主题
  function initializeTheme() {
      // 检查localStorage中是否有保存的主题模式
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
          bodyElement.classList.add('dark', 'dark-mode');
          profileCover.classList.add('deep-bg');
          themeToggleButton.classList.add('fas', 'fa-sun');
      } else {
          // 如果没有保存主题模式，或者保存的主题模式不是'dark'，则默认使用'light-mode'
          bodyElement.classList.add('bright', 'light-mode');
          profileCover.classList.add('shallow-bg');
          themeToggleButton.classList.add('fas', 'fa-moon');
      }
  }

  // 切换主题的逻辑
  themeToggleButton.addEventListener('click', () => {
      if (bodyElement.classList.contains('light-mode')) {
          bodyElement.classList.replace('light-mode', 'dark-mode');
          bodyElement.classList.replace('bright', 'dark');

          themeToggleButton.classList.replace('fa-moon', 'fa-sun');

          localStorage.setItem('theme', 'dark'); // 保存当前模式为黑夜模式
      } else {
          bodyElement.classList.replace('dark-mode', 'light-mode');
          bodyElement.classList.replace('dark', 'bright');

          themeToggleButton.classList.replace('fa-sun', 'fa-moon');

          localStorage.setItem('theme', 'light'); // 保存当前模式为白天模式
      }
  });

  // 页面加载时初始化主题
  initializeTheme();
});