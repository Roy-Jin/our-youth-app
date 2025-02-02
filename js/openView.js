// 节流函数 - 限制函数在一定时间内只执行一次，防止频繁触发事件导致性能问题。
function throttle(func, wait) {
    let timeout = null;
    return function () {
        let context = this;
        let args = arguments;
        if (!timeout) {
            func.apply(context, args);
            timeout = setTimeout(() => {
                timeout = null;
            }, wait);
        }
    };
};

/**
 * 打开子页面
 * @param {String} url 
 * @param {Object} options 
 * @returns {Object}
 * 
 * ### options参数：
 * - id: 子页面的id，默认为 NULL
 * - notTitle: 是否显示标题栏，默认显示
 * - aniShow: 动画效果，默认 "pop-in"
 * - waiting: 是否显示等待动画，默认 false
 */
const openView = throttle((url, options = {}) => {
    if (!url) return false;
    let OPTIONS = {
        url: url,
        id: options.id || null,
        styles: options.notTitle ? {} : {
            titleNView: {
                progress: { color: '#ac7a3a' },
                autoBackButton: true, backButton: { title: '返回', color: '#ac7a3a', }
            }
        },
        show: {
            autoShow: true,
            aniShow: options.aniShow || 'pop-in',
        },
        waiting: {
            autoShow: options.waiting || false,
        },
    };
    return top.mui.openWindow(OPTIONS);
}, 500); // 防止快速点击导致多次打开页面

// 打开新页面
(() => {
    const modules = document.querySelectorAll('[data-open]');
    modules.forEach(module => {
        if (module.dataset.openEvent) return;
        module.dataset.openEvent = true;
        module.addEventListener('click', (e) => {
            e.preventDefault(); // 阻止默认事件
            animatePlayer(e.currentTarget, 'bounce');
            const opt = JSON.parse(module.dataset.openOpt);
            openView(module.dataset.open, opt);
        });
    })
})();