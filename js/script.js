document.addEventListener('DOMContentLoaded', function() {
    // ==================== //
    // CONTROLE DE TEMA    //
    // ==================== //
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Verifica o tema salvo ou o preferido do sistema
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Aplica o tema inicial
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Alterna entre temas
    themeToggle.addEventListener('click', function() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Atualiza se as preferências do sistema mudarem
    prefersDarkScheme.addEventListener('change', e => {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', newTheme);
    });

    // ==================== //
    // ANIMAÇÕES DE SCROLL //
    // ==================== //
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'slideUp 0.8s ease-out forwards';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // ==================== //
    // EFEITO PARALLAX     //
    // ==================== //
    const heroBg = document.querySelector('.hero-bg');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // ==================== //
    // INTERAÇÕES DE CARDS //
    // ==================== //
    const projectCards = document.querySelectorAll('.projeto-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
