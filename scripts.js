const link = [...document.querySelectorAll('a')];

link.forEach(item => {
    const dot_arr = item.href.split('.');

    if( dot_arr[dot_arr.length - 1] === 'html' ) {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            window.open(item.href, item.title, 'width=1024, height=768, location=no, menubar=no, toolbar=no left=100 top=100')    
        })
    }
})