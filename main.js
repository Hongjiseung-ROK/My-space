document.addEventListener('DOMContentLoaded', () => {

    // 스크롤 시 콘텐츠 섹션이 부드럽게 나타나는 효과
    const sections = document.querySelectorAll('.content-section');

    const revealSection = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                // 다시 올라갈 때 효과를 원하지 않으면 이 부분은 제거
                // section.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', revealSection);
    revealSection(); // 페이지 로드 시 보이는 영역 체크

    // 네비게이션 링크 클릭 시 부드럽게 해당 섹션으로 이동
    // HTML의 <scroll-behavior: smooth>와 중복될 수 있으나,
    // 모든 브라우저 호환성을 위해 추가할 수 있습니다.
    const navLinks = document.querySelectorAll('.sticky-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
