document.addEventListener('DOMContentLoaded', () => {
    const loadingText = document.querySelector('.loading-text');
    const loadingProgress = document.querySelector('.loading-progress');

    // Simulate loading process
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        loadingProgress.style.width = `${progress}px`;

        if (progress >= 200) {
            clearInterval(interval);
            loadingText.style.display = 'none';
            loadingProgress.style.display = 'none';
            document.getElementById('user-list').style.display = 'block';

            // Populate user list (removed for brevity)

            // Redirect to https://cre.ep/x.html after 1 second
            setTimeout(() => {
                window.location.href = 'https://cre.ep/x.html';
            }, 1000);
        }
    }, 100);
});