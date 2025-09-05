document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeTooltip = document.getElementById('theme-tooltip');
    const bodyElement = document.body;

    // 初始化页面主题
    function initializeTheme() {
        // 检查URL参数
        const urlParams = new URLSearchParams(window.location.search);
        const themeParam = urlParams.get('theme');
        
        if (themeParam === 'light') {
            // 白天模式（需要显式指定）
            bodyElement.classList.add('bright', 'light-mode');
            themeToggleButton.classList.replace('fa-sun', 'fa-moon');
            themeTooltip.textContent = 'Go to Night';
            
            // 更新页面显示的图片 - 白天模式用selfie_sun.png
            const profileImage = document.getElementById('profile-image');
            if (profileImage) profileImage.src = 'images/selfie_sun.png';
            
            // 显示IC-Light说明文字
            const imageCredit = document.getElementById('image-credit');
            if (imageCredit) imageCredit.style.display = 'block';
            
            // 确保og:image为白天模式图片
            const ogImage = document.getElementById('og-image');
            const twitterImage = document.getElementById('twitter-image');
            if (ogImage) ogImage.setAttribute('content', 'https://jin-cao-tma.github.io/images/selfie_sun.png');
            if (twitterImage) twitterImage.setAttribute('content', 'https://jin-cao-tma.github.io/images/selfie_sun.png');
        } else {
            // 黑夜模式（默认）
            bodyElement.classList.add('dark', 'dark-mode');
            themeToggleButton.classList.replace('fa-moon', 'fa-sun');
            themeTooltip.textContent = 'Go to Day';
            
            // 更新页面显示的图片 - 黑夜模式用selfie2.jpg
            const profileImage = document.getElementById('profile-image');
            if (profileImage) profileImage.src = 'images/selfie2.jpg';
            
            // 隐藏IC-Light说明文字
            const imageCredit = document.getElementById('image-credit');
            if (imageCredit) imageCredit.style.display = 'none';
            
            // 更新og:image为黑夜模式图片
            const ogImage = document.getElementById('og-image');
            const twitterImage = document.getElementById('twitter-image');
            if (ogImage) ogImage.setAttribute('content', 'https://jin-cao-tma.github.io/images/selfie2.jpg');
            if (twitterImage) twitterImage.setAttribute('content', 'https://jin-cao-tma.github.io/images/selfie2.jpg');
        }
    }

    // 切换主题的逻辑
    function toggleTheme() {
        if (bodyElement.classList.contains('light-mode')) {
            // 切换到黑夜模式，重定向到不带参数的URL（默认黑夜）
            window.location.href = window.location.origin + window.location.pathname;
        } else {
            // 切换到白天模式，重定向到带参数的URL
            window.location.href = window.location.origin + window.location.pathname + '?theme=light';
        }
    }

    // 为图标和文字描述添加点击事件
    themeToggleButton.addEventListener('click', toggleTheme);
    themeTooltip.addEventListener('click', toggleTheme);

    // 页面加载时初始化主题
    initializeTheme();
});