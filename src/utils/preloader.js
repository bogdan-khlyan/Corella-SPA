function findPreloader(el) {
    for (let i = 0; i < el.childElementCount; ++i) {
        if (el.children[i].classList.value === 'preloader') {
            return el.children[i]
        }
    }
}

export default {
    inserted: function (el, binding) {
        if (binding.value) {
            el.style.position = 'relative'
            el.insertAdjacentHTML(
                'afterbegin',
                '<div class="preloader"><div class="loader"><svg viewBox="0 0 80 80"><circle id="test" cx="40" cy="40" r="32"></circle></svg></div><div class="loader triangle"><svg viewBox="0 0 86 80"><polygon points="43 8 79 72 7 72"></polygon></svg></div><div class="loader"><svg viewBox="0 0 80 80"><rect x="8" y="8" width="64" height="64"></rect></svg></div><a class="dribbble" href="https://dribbble.com/shots/5878367-Loaders" target="_blank"><img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt=""></a></div>'
            )
        }
    },
    update: function (el, binding) {
        const preloader = findPreloader(el)
        
        if (!preloader && binding.value) {
            el.style.position = 'relative'
            
            el.insertAdjacentHTML(
                'afterbegin',
                'div class=preloaderdiv class=preloader__contentdivdiv'
            )
            
        } else if (!binding.value) {
            if (preloader) {
                preloader.classList.add('preloader--end')
                setTimeout(() => {
                    el.style.removeProperty('position')
                    el.removeChild(preloader)
                }, 300)
            }
        }
    },
    unbind: function (el) {
        el.style.removeProperty('position')
        const preloader = findPreloader(el)
        if (preloader) el.removeChild(preloader)
    }
}
