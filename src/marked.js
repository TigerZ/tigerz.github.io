const hljs = require('highlight.js');

const { $ } = global;
// Create reference instance
const myMarked = require('marked');

// Get reference
const renderer = new myMarked.Renderer();

renderer.link = function (href, title, text) {
    const prefix = 'tigerface-embed:';
    if (title && title.startsWith(prefix)) {
        const name = title.substr(prefix.length);
        return `<div>${text}</div><div id="${name}" style="border:1px solid rgba(0,0,0,0.3);background-color:rgba(255,255,0,0.2);width:320px;height:240px"></div><script src="${href.replace(/html/g, 'js')}?_t=${+new Date()}"></script>`;
    } else if (href && href.endsWith('md')) {
        return `<a title="${title}" href="#${href}">${text}</a>`;
    }
    return `<a href="${href}" title="${title}">${text}</a>`;
};

myMarked.setOptions({
    highlight(code, lang) {
        const hljsCode = (hljs.highlight(lang, code, false)).value;
        return `<div class="hljs">${hljsCode}</div>`;
    },
});

function openmd(url, id) {
    $(`#${id}`).html('正在装入数据，请稍等...');
    $.get(`${url}?_t=${+new Date()}`, (md) => {
        const result = myMarked(md, { renderer });
        $(`#${id}`).html(result);
    });
}

global.openmd = openmd;
