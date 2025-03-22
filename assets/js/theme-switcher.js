document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    const profileCover = document.getElementById('profile-cover');

    if (!bodyElement.classList.contains('bright') && !bodyElement.classList.contains('dark')) {
        bodyElement.classList.add('bright');
        profileCover.classList.add('shallow-bg');
        themeToggleButton.classList.add('fas', 'fa-moon');
    }

    themeToggleButton.addEventListener('click', () => {
        if (bodyElement.classList.contains('bright')) {
            bodyElement.classList.remove('bright');
            bodyElement.classList.add('dark');

            profileCover.classList.remove('shallow-bg');
            profileCover.classList.add('deep-bg');

            themeToggleButton.classList.remove('fas', 'fa-moon');
            themeToggleButton.classList.add('fas', 'fa-sun');
        } else {
            bodyElement.classList.remove('dark');
            bodyElement.classList.add('bright');

            profileCover.classList.remove('deep-bg');
            profileCover.classList.add('shallow-bg');

            themeToggleButton.classList.remove('fas', 'fa-sun');
            themeToggleButton.classList.add('fas', 'fa-moon');
        }
    });
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        body.classList.add('light-mode');
        themeToggle.classList.add('fa-moon');
        // 切换主题的逻辑
        themeToggle.addEventListener('click', function() {
          if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeToggle.classList.replace('fa-moon', 'fa-sun'); // 切换图标
          } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeToggle.classList.replace('fa-sun', 'fa-moon'); // 切换图标
          }
        });
});



