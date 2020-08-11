export const make = (tag, classNames = null, attributes = {}) => {
    const el = document.createElement(tag);

    if (Array.isArray(classNames)) {
        el.classList.add(...classNames);
    } else {
        el.classList.add(classNames);
    }

    for (let attrName in attributes) {
        el[attrName] = attributes[attrName]
    }

    return el;
}