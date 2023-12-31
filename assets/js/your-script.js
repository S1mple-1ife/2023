function typeWriter(elementId, text, speed) {
    var elem = document.getElementById(elementId);
    var i = 0;
    var currentText = '';
    var heart = "<span class='red-heart'>❤</span>"; // 爱心符号放在 span 中
    elem.innerHTML = heart; // 最初在元素中添加爱心

    function typing() {
        if (i < text.length) {
            if (text.charAt(i) === '\n') {
                currentText += '<br>';
            } else {
                currentText += text.charAt(i);
            }
            elem.innerHTML = currentText + heart;
            i++;
            setTimeout(typing, speed);
        } else {
            elem.innerHTML = currentText; // 所有文字显示完毕，移除爱心
        }
    }
    typing();
}

// 调用函数
typeWriter("typewriter-text", "(^U^)ノ~YO 白白 \n一眨眼就2024嘞! 送给你今年的第一份好运。\n小小的赛博烟花,希望你会喜欢。\n去年所有的遗憾,都是今年惊喜的铺垫。\n愿你开心,不论和谁。\n还有好多想说的,以后有机会的话再慢慢说吧。\nPS:原谅我破烂的文笔，憋不出几句话，老套的祝福还是得整一整", 200);


const texts = ["你好2024!", "新年快乐！", "万事如意！","心想事成!"];
let currentIndex = 0;

function cycleText() {
    const elem = document.getElementById("center-text");
    elem.style.animation = 'none'; // 移除动画以便重置
    elem.offsetHeight; // 触发浏览器重绘
    elem.style.animation = null; // 重新应用动画

    elem.innerHTML = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
    setTimeout(cycleText, 3000); // 留出足够时间完成动画 每3秒更换文本
}

cycleText(); // 开始循环

