let styles = {
    green: new Map([
        ['--text-primary', '#ccc'],
        ['--text-emphasis', '#eee'],
        ['--surface-primary-a', '#0565'],
        ['--surface-primary-b', '#045'],
        ['--surface-primary-c', '#0675'],
        ['--surface-emphasis', '#0775']
    ]),
    blue: new Map([
        ['--text-primary', '#ccc'],
        ['--text-emphasis', '#eee'],
        ['--surface-primary-a', '#1f2d4055'],
        ['--surface-primary-b', '#17212f'],
        ['--surface-primary-c', '#30456255'],
        ['--surface-emphasis', '#64B5F655']
    ]),
    gray: new Map([
        ['--text-primary', '#555'],
        ['--text-emphasis', '#000'],
        ['--surface-primary-a', '#ddd8'],
        ['--surface-primary-b', '#ccc'],
        ['--surface-primary-c', '#aaa8'],
        ['--surface-emphasis', '#bbb8']
    ]),
    red: new Map([
        ['--text-primary', '#ccc'],
        ['--text-emphasis', '#eee'],
        ['--surface-primary-a', '#4d000d55'],
        ['--surface-primary-b', '#29010a'], 
        ['--surface-primary-c', '#a81d2e55'],
        ['--surface-emphasis', '#f2375e55']
    ]),
    purple: new Map([
        ['--text-primary', '#ccc'],
        ['--text-emphasis', '#eee'],
        ['--surface-primary-a', '#291f4355'],
        ['--surface-primary-b', '#190f33'],
        ['--surface-primary-c', '#3f355c55'],
        ['--surface-emphasis', '#4c4e8855']
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

const urlParams = new URLSearchParams(window.location.search);
const doRoundCorners = urlParams.get('corners') === 'rounded';
if (doRoundCorners) {
    document.querySelectorAll('.card').forEach((card) => {
        card.style.setProperty('border-radius', '10px');
    })
}