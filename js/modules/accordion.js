const accordion = (elementSelector, pageSelector, blockSelector) => {
    const blocksArray = document.querySelectorAll(blockSelector);
    const elementsArray = document.querySelectorAll(elementSelector);
    const pagesArray = document.querySelectorAll(pageSelector);
    console.log('accordion');

    const handleChoice = (e, index) => {
        console.log('clik on ' + index);
        for(let i = 0; i < elementsArray.length; i++){
            elementsArray[i].classList.remove('accordion__segment-active');
        }
        for(let i = 0; i < pagesArray.length; i++){
            pagesArray[i].classList.remove('accordion__page-active');
        }
        for(let i = 0; i < pagesArray.length; i++){
            blocksArray[i].classList.remove('accordion__element-active');
        }

        elementsArray[index].classList.add('accordion__segment-active');
        pagesArray[index].classList.add('accordion__page-active');
        blocksArray[index].classList.add('accordion__element-active');
    }

    for(let i = 0; i < elementsArray.length; i++){
        elementsArray[i].addEventListener('click', (e) => handleChoice(e, i));
    }
}

export default accordion;