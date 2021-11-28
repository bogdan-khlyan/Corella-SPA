import {imgToSvgByRef} from "@/helpers/imgToSvg";

const SvgIcon = (props, context) => {
    const onload = (e) => {
        imgToSvgByRef(e.path[0])
            .then(svg => {
                    svg.addEventListener('click', (e) => context.emit('click', e))
                }
            )
    }


    return (
        <img
            alt=""
            src={props.icon}
            onLoad={onload}/>
    )
}

SvgIcon.props = ['icon']

export default SvgIcon
