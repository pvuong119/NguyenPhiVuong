AOS.init({
    duration: 900,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    disable: function () {
        return window.innerWidth <= 768;
    }
});