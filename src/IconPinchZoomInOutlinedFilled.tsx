import React from 'react'
import { IconProps } from './types'

const IconPinchZoomInOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m62-460-42-42 117-118H40v-60h200v200h-60v-97L62-460Zm218-260v-200h60v98l117-118 43 43-118 117h98v60H280ZM593-40q-24 0-46-9t-39-26L304-280l30-31q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v280h40v-120q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v120h40v-80q0-17 11.5-28.5T760-480q17 0 28.5 11.5T800-440v80h40q0-17 11.5-28.5T880-400q17 0 28.5 11.5T920-360v160q0 66-47 113T760-40H593Z" />
  </svg>
)

export { IconPinchZoomInOutlinedFilled as default }
