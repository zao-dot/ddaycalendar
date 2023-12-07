// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "우리 가족 모두가 행복한 12월이 되길!" },
  { "number": 2, "message": "달콤하고 따뜻한 간식을 먹어볼까요?." },
  { "number": 3, "message": "크리스마스에 어떤 행운이 있을까요?!" },
  { "number": 4, "message": "2023년, 가장 행복했던 일을 알려주세요." },
  { "number": 5, "message": "2023년은 어떤 해로 기억에 남을까요?" },
  { "number": 6, "message": "다가오는 2024년은 어떻게 보내고 싶으세요?" },
  { "number": 7, "message": "24일까지 행복하고 건강한 일만 가득하길!" },
  { "number": 8, "message": "남은 12월에 가장 기대되는 일은 무엇인가요?" },
  { "number": 9, "message": "오늘은 특별한 일이 일어나길 바라요!" },
  { "number": 10, "message": "매일 매일이 행복으로 가득한 12월을 보내요." },
  { "number": 11, "message": "12월 11일은 희영이의 생일이네요! 생일 축하합니다!" },
  { "number": 12, "message": "모두가 함께일 때 행복은 더 커집니다." },
  { "number": 13, "message": "2023년 처음 들었던 노래는 무엇인가요?" },
  { "number": 14, "message": "2024년에는 무슨 노래를 처음 듣고 싶은가요?" },
  { "number": 15, "message": "모두에게 행복이 넘치는 24일을 기대해요!" },
  { "number": 16, "message": "내년에 어떤 목표를 이루고 싶은가요?" },
  { "number": 17, "message": "하얀 눈이 올까요?" },
  { "number": 18, "message": "눈사람을 만들면서 놀아 보아요!" },
  { "number": 19, "message": "작은 행복을 하나로 뭉치는 12월!" },
  { "number": 20, "message": "12월, 함께 나누는 특별한 행복의 순간들." },
  { "number": 21, "message": "지금 가장 하고 싶은 일을 해봅시다!" },
  { "number": 22, "message": "어떤 음식을 먹고 싶은가요?" },
  { "number": 23, "message": "다 함께하는 24일, 행복할 거예요." },
  { "number": 24, "message": "2023년 안녕!" }
];

