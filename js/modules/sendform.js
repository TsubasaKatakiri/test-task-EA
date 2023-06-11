const sendForm = (formSelector, dialogSelector, dialogCloseSelector, titleSelector, textSelector) => {
    const form = document.querySelector(formSelector);
    const dialog = document.querySelector(dialogSelector);
    const exitButtons = document.querySelectorAll(dialogCloseSelector);
    const dialogTitle = document.querySelector(titleSelector);
    const dialogText = document.querySelector(textSelector);

    const openDialog = (isSuccess) => {
        dialog.showModal();
        if(!isSuccess){
            dialogTitle.innerHTML = 'Fail!';
            dialogText.innerHTML = 'Something went wrong, please, try again later.';
        }
    }

    const closeDialog = () => {
        dialog.close();
    }

    exitButtons.forEach(button => {
        button.addEventListener('click', closeDialog);
    })

    //mock ajax (fetch) request with random output, because specific address wasn't provided in test task
    const success = {
        status: 200,
        address: null,
    }

    const fail = {
        status: 400,
        address: null,
    }

    const simulateFetch = (e) => {
        e.preventDefault();
        const data = new FormData(form);
        //send mock fetch request
        fetch('/echo/json', {
            method: 'POST',
            body: { data },
        }).then(() => {
            setTimeout(() => {
                //generating random result;
                const check = Math.random() > 0.2 ? true : false;
                openDialog(check);
            }, 1000);
        })
        form.reset();
    }

    form.addEventListener('submit', simulateFetch)
}

export default sendForm;