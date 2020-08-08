// 환율 상수
const WON_DOLLAR = 0.00084;
const DOLLAR_WON = 1186.32;

// 입력값과 출력값 DOM을 변수에 할당
const input = document.querySelector("#input");
const output = document.querySelector("#output");

// 환율계산 함수
function caculate() {
  // select의 현재 값을 저장하는 변수
  const type = document.querySelector("#type").value;

  // type 변수의 값에 따라 다음에 할 일을 결정
  // 원을 달러로 변환
  if (type === "dollar") {
    const dollar = parseInt(input.value) * WON_DOLLAR;
    output.innerHTML = `$${dollar}`;
  }
  // 달러를 원으로 변환
  else {
    const won = parseInt(input.value) * DOLLAR_WON;
    output.innerHTML = `\\${won}`;
  }
}
