function convertImgToSvg(img) {
    const imgURL = img.src
    const className = img.className

    return fetch(imgURL)
        .then(r => r.text())
        .then(text => {
            const parser = new DOMParser()
            const xmlDoc = parser.parseFromString(text, 'text/xml')
            const svg = xmlDoc.getElementsByTagName('svg')[0]

            if (typeof className !== 'undefined') {
                svg.setAttribute('class', className)
            }

            img.parentNode.replaceChild(svg, img)

            return svg
        })
        .catch(console.error)
}

export function imgToSvgBySelector(selectors) {
    const loadingSvgPromises = []

    document.querySelectorAll(selectors).forEach(img => {
        loadingSvgPromises.push(convertImgToSvg(img))
    })

    return loadingSvgPromises
}

export function imgToSvgByRef(ref) {
    return convertImgToSvg(ref)
}
