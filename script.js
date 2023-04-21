const links = {
    '官网 / Official': 'https://suningyao.com',
    '简历 / Resume': 'https://resume.suningyao.com/',
    '博客 / Blog': 'https://blog.suningyao.com',
    '研究 / Research': 'https://mirror.xyz/msfew.eth',
    '周报 / Newsletter': 'https://www.proofoftrack.xyz',
    '音乐 / Music': 'https://blog.suningyao.com/docs/Music/liked/',
    '推特 / Twitter': 'https://twitter.com/msfew_eth',
    '开发 / GitHub': 'https://github.com/fewwwww',
    '领英 / Linkedin': 'https://www.linkedin.com/in/suning-yao/',
    '邮箱 / Email': 'mailto:yaosuning@gmail.com',
    '微信 / WeChat': 'https://fewwwww.github.io/WeChat-AddMe/',
}

const ulDOM = document.getElementsByTagName('ul')[0]

// CHANGE: removed the dark color theme, just the remaining cute one
// const switchColorMode = () => {
//     if(!(new Date().getHours() > 6 && new Date().getHours() < 20)) {
//         document.getElementsByTagName('html')[0].style.filter = 'invert(1)'
//         // otherwise, will be looking like laser
//         document.getElementsByTagName('img')[0].style.filter = 'invert(1)'
//     }
// }

// switchColorMode()

document.addEventListener('DOMContentLoaded', function () {
    // contradict to <ul> lol, but whatever
    let keyIndex = 0
    for (let key in links) {
        const aDOM = document.createElement('a')
        const liDOM = document.createElement('li')
        liDOM.innerText = key
        if (keyIndex % 2 === 0) {
            liDOM.style.backgroundColor = '#F0FFFF'
        } else {
            liDOM.style.backgroundColor = '#FFF0FF'
        }
        aDOM.appendChild(liDOM)
        aDOM.href = links[key]
        ulDOM.appendChild(aDOM)
        keyIndex++
    }
});

new cursoreffects.rainbowCursor();
