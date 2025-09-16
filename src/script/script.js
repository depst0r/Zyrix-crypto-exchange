import '/src/sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    //!Header
    const loadingElementByPages = url => {
        fetch(url)
            .then(res => res.text())
            .then(html => {
                document.getElementById('header').innerHTML = html
            })
    }

    loadingElementByPages('/shared/header.html')
})