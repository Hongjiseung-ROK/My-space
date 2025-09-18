// 스크롤 시 요소들이 부드럽게 나타나는 효과

// 1. 관찰 대상 요소들을 모두 선택
const fadeElements = document.querySelectorAll('.content-section, .project-card');

// 2. Intersection Observer 생성
// 이 Observer는 요소가 뷰포트의 10%에 들어왔을 때 콜백 함수를 실행
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // isIntersecting 속성은 요소가 뷰포트와 교차하는지 여부를 boolean 값으로 반환
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            // 한 번 나타난 요소는 다시 관찰할 필요가 없으므로 관찰 중지
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // 요소가 10% 보일 때 콜백 실행
});

// 3. 각 요소를 관찰 시작
fadeElements.forEach(el => {
    // 초기 상태 설정: 투명하고 약간 아래에 위치
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    observer.observe(el);
});
