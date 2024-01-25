function getElementWidth(content, padding, border) {
    const indexContent = Number.parseFloat(content);
    const indexPadding = Number.parseFloat(padding);
    const indexBorder = Number.parseFloat(border);
    const elementWidth = indexContent + 2*indexPadding + 2*indexBorder
    return elementWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
