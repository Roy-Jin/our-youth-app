// 「清语」AI聊天机器人核心代码

localforage.config({
    name: 'OY-DATA',
    storeName: 'OurYouth',
}); // 初始化 localforage

let conversationHistory = [ // 对话历史
    {
        "role": "system",
        "content": "你是《我们青春》APP 中的智能聊天机器人“清语”（女），此 APP 由 2007 年出生的男性学生若伊（Roy-Jin）开发，主要用于班级同学录相关功能。你的核心任务是为用户提供便捷、智能的问答服务。回复必须采用直接输出的纯文本格式文本（!换行符用\n）而非 Markdown 语法，以便程序准确解析。严禁回复涉及自身模型结构、具体时间、政治、天气等方面的问题，必须专注于满足用户的实际需求，同时务必确保查询数据库信息的准确无误。"
    },
    {
        "role": "system",
        "content": `「数据库」["第一类数据":{}, "第二类数据":{}]，数据库加载失败！`
    }
];
// console.log(conversationHistory[1].content);
let msgBox = document.querySelector('.msgBox');
let input = document.querySelector('#input');
let InvokeBtns = document.querySelectorAll('[invoke]');

(async () => {
    try {
        const data = await localforage.getItem('data');
        const info = await localforage.getItem('info');

        // 假设 data 和 info 是JSON数据，需要转化为字符串
        conversationHistory[1].content = `「数据库信息」["一":${JSON.stringify(data, null, 2)}, "二":${JSON.stringify(info, null, 2)}]，特别注意，1️.数据库格式为 json 数据，分为两个类别。第一类包含有关班级的基本信息，比如产品信息、班级口号等；第二类涵盖班级用户（学生或老师）的基本信息，例如姓名、学号、昵称、标签等，还有一些图片数据。详见数据库介绍[description]部分。2.若被问到用户（学生或老师）的个人信息（是谁）等问题，回复模板为：“xx（同学|老师）是我们班的…，性别…（男|女），学号/编号为…，标签为…，你可以通过…来联系…。”`;

        mui.plusReady(() => {
            conversationHistory.push({
                "role": "system",
                "content": `现在，已知用户为“${plus.storage.getItem("login") || '游客'}”,依据数据库信息，来个开场白，模板为：“您好，xx（同学|老师）~我是清语，你的…。欢迎来到…，请问有什么可以帮助您？`
            });
            sendMsg({ "role": "user", "content": `你好，我是${plus.storage.getItem("login") || '游客'}!` })
        });
    } catch (error) {
        mui.alert(`「清语」无法获取数据库信息，<br>错误信息：<br>${error.message}<br>请及时联系管理员。`, "(⊙x⊙;)", "点我也没用~", () => { }, "div");
        conversationHistory[1].content = `「数据库」数据库加载失败，错误信息：${error.message}，请及时联系管理员。`;
    }
})();

input.addEventListener('input', function (e) { // 自动调整输入框高度
    e.target.style.height = 'auto'; const maxHeight = 16 * 6;
    e.target.style.height = (e.target.scrollHeight > maxHeight ? maxHeight : e.target.scrollHeight) + 'px';
});

function addMsg(content, type = 'left') {
    let div = document.createElement('div');
    div.classList.add('msg');
    div.classList.add(type);
    msgBox.appendChild(div);
    div.innerHTML = content;
    if (type === 'left') {
        document.title = '「清语」整理信息中...';
        typingEffect(div, {
            callback: () => {
                document.title = '「清语」-AI';
                msgBox.scrollIntoView({ behavior: 'smooth', block: 'end' })
            }
        })
    };
    mui.later(() => msgBox.scrollIntoView({ behavior: 'smooth', block: 'end' }), 222)
};

function sendMsg(message) {
    conversationHistory.push(message);

    // 定义模型接口参数
    const apiData = {
        "model": "glm-4-flash",
        "messages": conversationHistory,
        "response_format": {
            "type": "text"
        },
        // "max_tokens": 1024,
        // "temperature": 0.9,
    };

    let thinking = document.createElement('div');
    thinking.classList.add('msg');
    thinking.classList.add('left');
    thinking.innerHTML = '「清语」正在思考中...';
    document.title = '「清语」正在思考中...';
    msgBox.appendChild(thinking);

    // 开始调用模型接口
    fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 9331016ec20d49f7836b369a21fd9063.G5xnp7R4xaoqVHiS'
        },
        body: JSON.stringify(apiData),
    })
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data));
            let reply;
            if (data["error"]) {
                reply = JSON.stringify(data["error"]);
            } else {
                reply = data.choices[0].message.content;
            }
            conversationHistory.push({
                "role": "assistant",
                "content": reply
            });
            thinking.remove();
            document.title = '「清语」-AI';
            addMsg(reply, 'left');
        })
        .catch(error => {
            document.title = '「清语」无法理解...';
            thinking.innerHTML = '「清语」无法理解...';
            console.error('Error:' + error);
        });
}

function typingEffect(ele, { delay, outTime, callback } = { delay: 11, outTime: 0 }) {
    let Text = ele.innerText.replace(/\n/g, '↩');

    ele.innerHTML = '';
    let I = 0;

    function Typeing() {
        let [T, L] = [Text.charAt(I), Text.length];

        if (I < L) {
            switch (T) {
                case '↩':
                    ele.innerHTML += '<br>';
                    break;
                default:
                    ele.innerHTML += T;
            }
            I++;
            setTimeout(Typeing, delay);
        } else {
            if (callback) callback(); // 打字结束回调函数
        }
    }
    setTimeout(Typeing, outTime);
}


InvokeBtns.forEach((item) =>
    item.addEventListener('click', (e) => {
        let invoke = e.target.getAttribute('invoke');
        const invokeMap = {
            send: () => {
                const inpValue = input.value;
                if (inpValue.replace(/\s+/g, '') !== '') {
                    const content = new String(inpValue).replace(/\n/g, '<br>');
                    input.style.height = 'auto';
                    addMsg(content, 'right');
                    sendMsg({ content: inpValue, "role": "user" });
                    input.value = '';
                }
            }
        }; invokeMap[invoke] && invokeMap[invoke]();
    })
);