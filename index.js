let styles = {
    green: new Map([
        ['--text-primary', '#ccc'],
        ['--text-emphasis', '#eee'],
        ['--surface-primary-a', '#056'],
        ['--surface-primary-b', '#045'],
        ['--surface-primary-c', '#067'],
        ['--surface-emphasis', '#077']
    ]),
    blue: new Map([
        ['--text-primary', '#ccc'],
        ['--text-emphasis', '#eee'],
        ['--surface-primary-a', '#1f2d40'],
        ['--surface-primary-b', '#17212f'],
        ['--surface-primary-c', '#304562'],
        ['--surface-emphasis', '#64B5F6']
    ]),
    gray: new Map([
        ['--text-primary', '#555'],
        ['--text-emphasis', '#000'],
        ['--surface-primary-a', '#ddd'],
        ['--surface-primary-b', '#ccc'],
        ['--surface-primary-c', '#aaa'],
        ['--surface-emphasis', '#bbb']
    ]),
    red: new Map([
        ['--text-primary', '#ccc'],
        ['--text-emphasis', '#eee'],
        ['--surface-primary-a', '#4d000d'],
        ['--surface-primary-b', '#29010a'], 
        ['--surface-primary-c', '#a81d2e'],
        ['--surface-emphasis', '#f2375e']
    ]),
    purple: new Map([
        ['--text-primary', '#ccc'],
        ['--text-emphasis', '#eee'],
        ['--surface-primary-a', '#291f43'],
        ['--surface-primary-b', '#190f33'],
        ['--surface-primary-c', '#3f355c'],
        ['--surface-emphasis', '#4c4e88']
    ])
}

let root = document.querySelector(':root');
let isInitialLoad = true;

function setStyle(style) {
    if (!isInitialLoad) {
        document.querySelector('body').classList.add('transition-ease');
        transitionClassAdded = true;
    }

    const currentStyle = styles[style];

    currentStyle.forEach((value, key) => {
        root.style.setProperty(key, value);
    })

    localStorage.setItem('currentStyle', style);
}

document.querySelectorAll("input[name='style']").forEach((input) => {
    input.addEventListener('change', ({target: { value }}) => setStyle(value));
});

let currentStyle = localStorage.getItem('currentStyle') || 'green';

setStyle(currentStyle);
isInitialLoad = false;
document.querySelector(`input[value='${currentStyle}']`).checked = true;