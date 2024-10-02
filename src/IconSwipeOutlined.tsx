import React from 'react'
import { IconProps } from './types'

export const IconSwipeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M473-80q-24 0-46-9t-39-26L184-320l30-31q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T400-720q17 0 28.5 11.5T440-680v433l-97-27 102 102q5 5 12.5 8.5T473-160h167q33 0 56.5-23.5T720-240v-160q0-17 11.5-28.5T760-440q17 0 28.5 11.5T800-400v160q0 66-47 113T640-80H473Zm7-280v-160q0-17 11.5-28.5T520-560q17 0 28.5 11.5T560-520v160h-80Zm120 0v-120q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v120h-80Zm-20 80Zm300-400H680v-60h116q-66-58-147-89t-169-31q-88 0-169 31t-147 89h116v60H80v-200h60v81q72-59 159-90t181-31q94 0 181 31t159 90v-81h60v200Z" />
  </svg>
)
