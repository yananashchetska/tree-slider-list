// 'use strict';

// const tree = document.querySelector('.tree');

// const addChild = (element) => {
//     for (const child of element.childNodes) {
//         if (!element.hasChildNodes()) {
//             return;
//         }
//          else {
//             {
//                 const span = document.createElement('span');
//                 const header = child.firstElementChild;
//                 const parent = header.parentElement;

//                 parent.insertBefore(span, header);
//                 span.appendChild(header)
//                 addChild(child);
//             }
//         }
//     }
// }

// addChild(tree);

'use strict';

const tree = document.querySelector('.tree');

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach((el) => {
    if (el.children.length) {
        const span = document.createElement('span');

        span.textContent = el.firstChild.textContent;
        el.replaceChild(span, el.firstChild);
    }
});

tree.addEventListener('click', (ev) => {
    const isTitle = ev.target.tagName === 'SPAN';

    if (isTitle) {
        const list = ev.target.nextElementSibling;

        if (list.hasAttribute('hidden')) {
            list.removeAttribute('hidden');
        } else {
            list.setAttribute('hidden', '');
        }
    }

});
