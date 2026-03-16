export default function App({ $target }) {
  // 1. App 전용 도화지(div)를 하나 만듭니다.
  const $page = document.createElement("div");

  // 2. main.js가 넘겨준 root 태그 안에 App 도화지를 딱 붙입니다.
  $target.appendChild($page);

  // 3. 화면이 잘 연결되었는지 콘솔로 확인합니다.
  console.log("App 컴포넌트 렌더링 완료!", $page);

  // (나중에 여기에 TodoForm, TodoList를 붙일 예정입니다!)
}
