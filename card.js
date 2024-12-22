document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.showcase--cards .card');
    const showcase = document.querySelector('.showcase--cards');
    const goToIndexLink = document.querySelector('#goToindexLink');
    const transitionWrapper = document.querySelector('.page-transition-wrapper');
    let cardWidth = cards[0]?.offsetWidth || 0;
    let scrollOffset = 0;

    const content = {
        923: `
            <h1>찬란</h1>
            <h2>이병률</h2>
            <p>
                겨우내 아무일 없던 화분에서 잎이 나니
                <span class="svg-container">
                    <span class="text">찬란</span>
                    <img class="svg" src="./svg/whitestar.svg" alt="찬란" /> </span
                >하다<br />
                흙이 감정을 참지 못하니
                <span class="svg-container">
                    <span class="text">찬란</span>
                    <img class="svg" src="./svg/whitestar.svg" alt="찬란" /> </span
                >하다<br /><br />
                감자에 난 싹을 화분에 옮겨 심으며<br />
                손끝에서 종이 넘기는 소리를 듣는 것도<br />
                오래도록 내 뼈의 방들이 우는 소리 재우는 일도
                <span class="svg-container">
                    <span class="text">찬란</span>
                    <img class="svg" src="./svg/whitestar.svg" alt="찬란" /> </span
                >이다<br /><br />
                살고자하는 일이
                <span class="svg-container">
                    <span class="text">찬란</span>
                    <img class="svg" src="./svg/whitestar.svg" alt="찬란" /> </span
                >이었으므로<br />
                의자에 먼지 앉는 일은 더
                <span class="svg-container">
                    <span class="text">찬란</span>
                    <img class="svg" src="./svg/whitestar.svg" alt="찬란" /> </span
                >이리<br />
                <span class="svg-container">
                    <span class="text">찬란</span>
                    <img class="svg" src="./svg/whitestar.svg" alt="찬란" /> </span
                >하지 않으면 모두 뒤처지고 광장에서 멀어지리<br /><br />
                지난 밤 남쪽의 바다를 생각하던 중에<br />
                등을 켜려다 전구가 나갔고<br />
                검푸른 어둠이 굽이쳤으나<br />
                생각만으로 겨울을 불렀으니
                <span class="svg-container">
                    <span class="text">찬란</span>
                    <img class="svg" src="./svg/whitestar.svg" alt="찬란" /> </span
                >이다<br /><br />
                실로 이기고 지는 깐깐한 생명들이 뿌리까지 피곤한 것도<br />
                햇빛이 가랑이 사이로 남회귀선과 북회귀선이 만나는 것도<br />
                무시무시한
                <span class="svg-container">
                    <span class="text">찬란</span>
                    <img class="svg" src="./svg/whitestar.svg" alt="찬란" /> </span
                >이다<br /><br />
                <span class="svg-container">
                    <span class="text">찬란</span>
                    <img class="svg" src="./svg/whitestar.svg" alt="찬란" /> </span
                >이 아니면 다 그만이다<br />
                죽음 앞에서 모든 목숨은<br />
                <span class="svg-container">
                    <span class="text">찬란</span>
                    <img class="svg" src="./svg/whitestar.svg" alt="찬란" /> </span
                >의 끝에서 걸쇠를 건져 올려 마음에 걸 것이니<br /><br />
                지금껏 많이 살았다싶은 것은
                <span class="svg-container">
                    <span class="text">찬란</span>
                    <img class="svg" src="./svg/whitestar.svg" alt="찬란" /> </span
                >을 배웠기 때문<br />
                그러고도 일 년을 조금 넘게 살았다는 기분이 드는 것도<br />
                다
                <span class="svg-container">
                    <span class="text">찬란</span>
                    <img class="svg" src="./svg/whitestar.svg" alt="찬란" /> </span
                >이다
            </p>
        `,
        350: `
            <h1>서시</h1>
            <h2>윤동주</h2>
            <p>
                죽는날 까지 하늘을 우러러<br />
                한점 부끄럼이 없기를<br />
                잎새에 이는 바람에도<br />
                나는 괴로워 했다<br /><br />
    
                ​별을 노래하는 마음으로<br />
                모든 죽어가는 것을 사랑해야지<br />
                그리고 나에게 주어진 길을<br />
                걸어가야겠다.<br /><br />
                
                ​오늘밤에도 별이 바람에 스치운다<br />
            </p>
        `,
        481: `
            <h1>별 헤는 밤</h1>
            <h2>윤동주</h2>
            <p>
                계절이 지나가는 하늘에는<br />
                가을로 가득 차 있습니다.<br /><br />
                나는 아무 걱정도 없이<br />
                가을 속의 별들을 다 헤일 듯합니다...<br /><br />
    
                가슴 속에 하나 둘 새겨지는 별을<br />
                이제 다 못 헤는 것은<br />
                쉬이 아침이 오는 까닭이요,<br />
                내일 밤이 남은 까닭이요,<br />
                아직 나의 청춘이 다하지 않은 까닭입니다.<br /><br />
    
                별 하나에 추억과<br />
                별 하나에 사랑과<br />
                별 하나에 쓸쓸함과<br />
                별 하나에 동경과<br />
                별 하나에 시와<br />
                별 하나에 어머니, 어머니<br /><br />
    
                어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러 봅니다.<br />
                소학교 때 책상을 같이했던 아이들의 이름과,<br />
                패, 경, 옥 이런 이국 소녀들의 이름과, 벌써 아기 어머니 된 계집애들의 이름과,<br />
                가난한 이웃 사람들의 이름과,<br />
                비둘기, 강아지, 토끼, 노새, 노루, '프랑시스 잠', '라이너 마리아 릴케',<br />
                이런 시인의 이름을 불러 봅니다.<br /><br />
    
                이네들은 너무나 멀리 있습니다.<br />
                별이 아스라이 멀 듯이,<br /><br />
    
                어머님,<br />
                그리고 당신은 멀리 북간도에 계십니다<br /><br />
    
                나는 무엇인지 그리워<br />
                이 많은 별빛이 내린 언덕 위에<br />
                내 이름자를 써 보고,<br />
                흙으로 덮어 버리었습니다.<br /><br />
    
                딴은, 밤을 새워 우는 벌레는<br />
                부끄러운 이름을 슬퍼하는 까닭입니다.<br /><br />
    
                그러나 겨울이 지나고 나의 별에도 봄이 오면<br />
                무덤 위에 파란 잔디가 피어나듯이<br />
                내 이름자 묻힌 언덕 위에도<br />
            </p>
                        <div class="star-container">
            <img class="star" src="./svg/starpoint_w.svg" alt="새와 함께">
        </div>
        `,
        382: `
            <h1>밤 편지</h1>
            <h2>김남조</h2>
            <p>
                편지를 쓰게 해다오<br /><br />
    
                이날의 할 말을 마치고<br />
                늙도록 거르지 않는<br />
                독백의 연습도 마친 다음<br />
                날마다 한 구절씩<br />
                깊은 밤에 편지를 쓰게 해다오<br /><br />
    
                밤 기도에<br />
                이슬 내리는 적멸을<br />
                촛불빛에 풀리는<br />
                나직히 습한 樂曲들을<br />
                겨울 枕上에 적시이게 해다오<br />
                새벽을 낳으면서 죽어가는 밤들을<br />
                가슴 저려 가슴 저려<br />
                사랑하게 해다오<br /><br />
    
                세월이 깊을수록<br />
                삶의 달갑고 절실함도 더해<br />
                젊어선 가슴마다 뿌리내려<br />
                시사할 수 없었음에서<br />
                오래된 한겨울을<br />
                일렁여 버리게 해다오
            </p>
        `,
        441: `
        <h1>새</h1>
        <h2>천상병</h2>
        <p>
                외롭게 살다 외롭게 죽을<br />
                내 영혼의 빈 터에<br />
                새날이 와 새가 울고 꽃잎 필 때는,<br />
                내가 죽는 날<br /> 
                그 다음 날<br /><br /> 

                산다는 것과<br />
                아름다운 것과<br /> 
                사랑한다는 것과의 노래가<br /> 
                한창인 때에<br />
                나는 도랑과 나뭇가지에 앉은<br /> 
                한 마리 새<br /><br /> 

                정감에 가득찬 계절<br /> 
                슬픔과 기쁨의 주일<br /> 
                알고 모르고 잊고 하는 사이에<br /> 
                새여 너는<br /> 
                낡은 목청을 뽑아라.<br /><br />

                살아서<br /> 
                좋은 일도 있었다고<br /> 
                나쁜 일도 있었다고<br /> 
                그렇게 우는 한마리 새.
        </p>
        <div class="bird-container">
            <img class="bird" src="./svg/birdline.svg" alt="새와 함께">
        </div>`,
    };

    // 페이지 전환 애니메이션
    const handlePageTransition = (e) => {
        e.preventDefault();
        transitionWrapper.classList.add('page-transition-active');
        setTimeout(() => (window.location.href = goToIndexLink.href), 600);
    };

    // 화면 크기 변경 시 카드 크기 재조정
    const handleResize = () => {
        cardWidth = cards[0]?.offsetWidth || 0;
        const selectedCard = document.querySelector('.card.selected');
        if (selectedCard) moveToCenter(selectedCard);
    };

    // 방향키 및 스크롤 처리
    const handleArrowKeyAndWheel = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            handleArrowKeys(e);
        } else if (e.type === 'wheel') {
            handleWheelScroll(e);
        }
    };

    const handleArrowKeys = (e) => {
        scrollOffset = e.key === 'ArrowLeft' ? Math.max(0, scrollOffset - 1) : Math.min(cards.length - 1, scrollOffset + 1);
        updateCardPosition();
    };

    const handleWheelScroll = (e) => {
        e.preventDefault();
        scrollOffset = Math.max(0, Math.min(scrollOffset + (e.deltaY > 0 ? 1 : -1), cards.length - 1));
        updateCardPosition();
    };

    // 카드 이동 및 선택 업데이트
    const updateCardPosition = () => {
        const selectedCard = cards[scrollOffset];
        updateShowcasePosition();
        updateCardSelection(selectedCard);
        moveToCenter(selectedCard);
    };

    // 팝업 처리
    const showPopup = (content) => {
        const existingPopup = document.getElementById('popup');
        if (existingPopup) existingPopup.remove();

        const popup = createPopupElement(content);
        document.body.appendChild(popup);

        requestAnimationFrame(() => popup.classList.add('active'));
    };

    const createPopupElement = (content) => {
        const popup = document.createElement('div');
        popup.id = 'popup';
        popup.classList.add('popup');

        const popupContent = document.createElement('div');
        popupContent.classList.add('popup-content');
        popupContent.innerHTML = content;
        popupContent.appendChild(createCloseButton(popup));

        popup.appendChild(popupContent);
        return popup;
    };

    const createCloseButton = (popup) => {
        const closeButton = document.createElement('span');
        closeButton.classList.add('popup-close');
        closeButton.textContent = '✕';
        closeButton.style.transform = 'rotate(90deg)';
        closeButton.style.color = '#ffffff';
        closeButton.style.cursor = 'pointer';

        closeButton.addEventListener('click', () => {
            popup.classList.add('closing');
            setTimeout(() => popup.remove(), 500);
        });
        return closeButton;
    };

    // 카드 클릭 시 팝업 띄우기
    const handleCardClick = (card) => {
        const cardId = card.getAttribute('data-id');
        const popupContent = content[cardId] || '<p>내용이 없습니다.</p>';
        showPopup(popupContent);
    };

    // 카드 위치 업데이트
    const updateShowcasePosition = () => {
        const moveTo = scrollOffset * cardWidth;
        showcase.style.transform = `translateX(-${moveTo}px)`;
    };

    // 카드 선택 업데이트
    const updateCardSelection = (selectedCard) => {
        cards.forEach((card) => {
            card.classList.remove('selected');
            card.style.pointerEvents = 'none';
        });

        selectedCard.classList.add('selected');
        selectedCard.style.pointerEvents = 'auto';
    };

    // 카드가 화면 중앙에 오도록 이동
    const moveToCenter = (selectedCard) => {
        const centerOffset = (window.innerWidth - cardWidth) / 2;
        const cardOffset = selectedCard.offsetLeft;
        const moveTo = centerOffset - cardOffset;
        showcase.style.transform = `translateX(${moveTo}px)`;
    };

    // 이벤트 리스너 등록
    goToIndexLink.addEventListener('click', handlePageTransition);
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleArrowKeyAndWheel);
    showcase.addEventListener('wheel', handleArrowKeyAndWheel);

    // 카드 클릭 이벤트
    cards.forEach((card) => {
        card.addEventListener('click', () => handleCardClick(card));
    });
});
