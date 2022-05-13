const links = {
    '官网 / Portfolio': 'https://suningyao.com',
    '简历 / Resume': 'https://resume.suningyao.com/',
    '博客 / Blogs in CN': 'https://blog.suningyao.com',
    '研究 / Research (90%)': 'https://foresightventures.medium.com',
    '音乐 / Music by me': 'https://music.suningyao.com',
    '推特 / Twitter': 'https://twitter.com/msfew_eth',
    '开发 / Github': 'https://github.com/fewwwww',
    '领英 / Linkedin': 'https://www.linkedin.com/in/suning-yao/',
    '邮箱 / Email': 'mailto:yaosuning@gmail.com',
    '微信 / WeChat': 'https://fewwwww.github.io/wechat-addme/',
}

const ulDOM = document.getElementsByTagName('ul')[0]

const switchColorMode = () => {
    if(!(new Date().getHours() > 6 && new Date().getHours() < 20)) {
        document.getElementsByTagName('html')[0].style.filter = 'invert(1)'
        // otherwise, will be looking like laser
        document.getElementsByTagName('img')[0].style.filter = 'invert(1)'
    }
}

switchColorMode()

document.addEventListener('DOMContentLoaded', function () {
    for (let key in links) {
        const aDOM = document.createElement('a')
        const liDOM = document.createElement('li')
        liDOM.innerText = key
        aDOM.appendChild(liDOM)
        aDOM.href = links[key]
        ulDOM.appendChild(aDOM)
    }
});
