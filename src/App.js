// App 컴포넌트를 가져옵니다. (바닐라 JS는 확장자 .js 필수!)
import App from "./App.js";

// 1. html에서 id가 root인 태그를 낚아챕니다.
const $root = document.getElementById("root");

// 2. App을 생성하면서 root 태그를 던져줍니다.
new App({ $target: $root });
