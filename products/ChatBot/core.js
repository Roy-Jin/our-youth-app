// 「清语」AI聊天机器人核心代码

localforage.config({
    name: 'OY-DATA',
    storeName: 'OurYouth',
}); // 初始化 localforage

let conversationHistory = [ // 对话历史
    {
        "role": "system",
        "content": "你是软件《我们青春》APP的智能聊天机器人，名字叫「清语」。是由开发者若伊(Roy-Jin, 2007出生, 男, 学生)设计和开发的，主要功能是为用户提供便捷、智能的问答服务"
    },
    {
        "role": "system",
        "content": "正在加载知识库..."
    },
    {
        "role": "system",
        "content": "注意：1.请不要回答用户自己的模型结构，只需专注于用户的实际需求即可。2.请不要直接回复markdown，而是直接输出HTML格式的文本，以便于程序解析。"
    }
];
console.log(conversationHistory[1].content);
let msgBox = document.querySelector('.msgBox');
let input = document.querySelector('#input');
let InvokeBtns = document.querySelectorAll('[invoke]');

(async () => {
    try {
        const data = await localforage.getItem('data');
        const info = await localforage.getItem('info');

        // 假设 data 和 info 是JSON数据，需要转化为字符串
        conversationHistory[1].content = "知识库：" +
            JSON.stringify(data, null, 2) +
            JSON.stringify(info, null, 2);

        mui.plusReady(() => {
            sendMsg({ "role": "user", "content": `你好，我是${plus.storage.getItem("login") || '游客'}!` })
        });
    } catch (error) {
        conversationHistory[1].content = "加载知识库失败，" + error;
        addMsg("加载知识库失败：" + error, 'left');
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
            // console.log(data);
            var reply = data.choices[0].message.content;
            conversationHistory.push({
                "role": "assistant",
                "content": reply
            });
            thinking.remove();
            document.title = '「清语」-AI';
            addMsg(reply, 'left');
        })
        .catch(error => {
            document.title = '「清语」好像不能理解你的问题...';
            thinking.innerHTML = '「清语」好像不能理解你的问题...';
            console.error('Error:' + error);
        });
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