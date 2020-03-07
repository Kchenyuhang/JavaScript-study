var userInfo = [];
let main = document.getElementById("main");
let status = [];
// 页面加载方法
window.onload = function () {
    initData();
};

function initData() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "/json/gitTrending.json", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            userInfo = JSON.parse(xmlhttp.responseText);
            console.log(userInfo.length);
            let users = JSON.parse(xmlhttp.responseText);
            initEle();
        }
    };
}
// 初始化数据方法
function initEle() {
    for (let i = 0; i < userInfo.length; i++) {
        status.push(false);
        let user = userInfo[i];
        let card = document.createElement("div");
        card.classList = "card";
        let cardContent = `
        <a href="" style="color: #24292e; width: 16px; cursor: pointer;">${i + 1}</a>
          <div class="imgDiv" id="showBox${i}" style="width: 70px;" onmouseOver="mouseOver(this)" onmouseOut="mouseOut(this)">
            <img src="${
            user.avatar
            }" style="box-shadow: transparent 0px 0px; cursor: pointer;"/>
          </div>

          <div
            class="textInfo flex"
            style="width: 100%;"
          >
            <div class="col-8 flex">
              <div class="col-6">
                <h1 class="userName">${user.userName}</h1>
                <p class="account">${user.account}</p>
              </div>
              <div class="col-6">
                <span class="flex" id='fire' style="color: #586069; font-size: 11px; margin-bottom: 5px">
                    <svg style="width: 12px; height: 16px; margin-right: 4px; fill: rgb(227, 98, 9)" viewBox="0 0 12 16"; version="1.1">
                        <path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path>
                    </svg>
                    POPULAR REPO
                </span>
                  <h1 class="flex repositoriesName">
                    <svg viewBox="0 0 12 16"; version="1.1" style="width: 12px; height: 16px; margin: 5px 7px 0 0; fill: rgb(157, 165, 180)">
                    <path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>  
                  </svg>
                    ${user.repositoriesName}
                  </h1>
                  <div style="color: #586069; font-size: 11px">${
            user.introduction
            }</div>
              </div>
            </div>
            <div class="col-4 btn-div">
                <input class="btn" type="submit" name="commit" value="Follow" onclick="follow(${i}, this)">
            </div>
          </div>`;
        card.innerHTML = cardContent;
        main.appendChild(card);
        imgAddFrame(i, user);
    }
}
// 鼠标点击关注时的方法
function follow(index, obj) {
    let isFollow = status[index];
    obj.style.cursor = "not-allowed";
    setTimeout(function () {
        if (isFollow) {
            obj.value = "Follow";
        } else {
            obj.value = "Unfollow";
        }
        status[index] = !status[index];
        obj.style.cursor = "pointer";
    }, 1500);
}
// 鼠标悬停后出现的小框框，并返回小框框对象
function createFrameSmall(user) {
    let smallFrame = document.createElement("div");
    let smallFrameContent = `<div class="out"></div>
        <div class="in"></div>
        <div class="small-top">
          <div class="imgDiv" style="width: 70px;">
            <img
              src="${user.avatar}"
              style="box-shadow: transparent 0px 0px; cursor: pointer;"
            />
          </div>
          <div class="col-6">
            <h1 class="userName" style="color: #24292e;">${user.userName}</h1>
            <p class="account" style="color: #3a85c3;">${user.account}</p>
          </div>
        </div>
        <div class="small-label">
          <div class="followers">
            <span style="color: rgb(214, 216, 218); font-size: 12px;">1.1k</span>
            <span style="color: #24292e; font-size: 13px;">Followers</span>
          </div>
          <div class="following">
            <span style="color: rgb(214, 216, 218); font-size: 12px;">0</span>
            <span style="color: #24292e; font-size: 13px;">Following</span>
          </div>
          <div class="repos">
            <span style="color: rgb(214, 216, 218); font-size: 12px;">31</span>
            <span style="color: #24292e; font-size: 13px;">Repos</span>
          </div>
        </div>
        <div class="small-location">
          <i class="iconfont">&#xe600;</i>
          <span style="font-size: 15px; color: rgb(88, 96, 153);">France</span>
        </div>`;
    smallFrame.innerHTML = smallFrameContent;
    smallFrame.classList = "smallFrame";
    return smallFrame;
}
// 添加小框框的方法
function imgAddFrame(i, user) {
    let img = document.getElementById("showBox" + i);
    img.appendChild(createFrameSmall(user));
}

// 鼠标进入的方法
function mouseOver(obj) {
    let smallFrame = obj.children[1];
    smallFrame.style.display = "block";
}
// 鼠标离开的方法
function mouseOut(obj) {
    let smallFrame = obj.children[1];
    smallFrame.style.display = "none";
}