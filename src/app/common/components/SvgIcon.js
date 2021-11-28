import {imgToSvgByRef} from "@/helpers/imgToSvg";

const SvgIcon = (props) => {
    const onload = (e) => imgToSvgByRef(e.path[0])

    return (
        <img ref="svg-icon" src={props.icon} onLoad={onload} alt=""/>
    )
}

SvgIcon.props = ['icon']

export default SvgIcon
