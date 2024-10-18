const defaultColor = '#6BD1FF';

const codeEditor = document.querySelector('.code-editor');
const customizationColor = document.querySelector('.customization__color');

customizationColor.value = defaultColor;

customizationColor.addEventListener('input', () => {
    codeEditor.style.backgroundColor = customizationColor.value;
});
