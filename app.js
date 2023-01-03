const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";

ajax.open("GET", NEWS_URL, false); // url에서 가져오는 data를 동기적으로 처리함.
ajax.send();

const newsFeed = JSON.parse(ajax.response); // 입력받은 data를 객체로 바꿔서 return

const ul = document.createElement("ul");
document.getElementById("root").appendChild(ul);

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");

  ul.appendChild(li);
  li.innerHTML = newsFeed[i].title;
}
