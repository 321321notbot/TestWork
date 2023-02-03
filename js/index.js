//Задание №4 
function consoleElementWithDataAttribute(id) {
    console.log($(`*[data-id=${id}]`));

}
consoleElementWithDataAttribute(123);

//Задание №5
function atributeNoPrint() {
    $('*[data-noprint="TRUE"]').css("display", "none");
}
atributeNoPrint();

//Задание №6
function sortElementsInParentClass() {
    const elements = $('.class').toArray();
    elements.sort((a, b) => b.offsetTop - a.offsetTop);
    console.log(elements);
}
sortElementsInParentClass();
