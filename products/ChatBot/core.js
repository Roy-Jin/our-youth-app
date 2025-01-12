// 「清语」AI聊天机器人核心代码

let conversationHistory = []; // 对话历史
let msgBox = document.querySelector('.msgBox');
let input = document.querySelector('#input');
let InvokeBtns = document.querySelectorAll('[invoke]');

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
    mui.later(() => {
        msgBox.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, 222);
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

    // 开始调用模型接口
    fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 9331016ec20d49f7836b369a21fd9063.G5xnp7R4xaoqVHiS' // 替换为你的API密钥
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
            addMsg(marked.parse(reply), 'left');
        })
        .catch(error => {
            console.error('Error:', error);
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
                    sendMsg({ content: inpValue, "role": "user" });
                    addMsg(content, 'right');
                    input.value = '';
                }
            }
        }; invokeMap[invoke] && invokeMap[invoke]();
    })
);