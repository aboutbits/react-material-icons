import React from 'react'
import { IconProps } from './types'

const IconSwipeRightOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M473-80q-24 0-46-9t-39-26L184-320l30-31q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T400-720q17 0 28.5 11.5T440-680v280h40v-120q0-17 11.5-28.5T520-560q17 0 28.5 11.5T560-520v120h40v-80q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v80h40q0-17 11.5-28.5T760-440q17 0 28.5 11.5T800-400v160q0 66-47 113T640-80H473ZM80-680q30-106 142-173t258-67q94 0 181 31t159 90v-81h60v200H680v-60h116q-66-58-147-89t-169-31q-118 0-208.5 48T143-680H80Z" />
  </svg>
)

export { IconSwipeRightOutlinedFilled as default }
