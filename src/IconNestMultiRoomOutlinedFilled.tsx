import React from 'react'
import { IconProps } from './types'

const IconNestMultiRoomOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m160-600 320-240 320 240H160Zm0 480v-160h360v160H160Zm440 0v-160h200v160H600ZM160-360v-160h200v160H160Zm280 0v-160h360v160H440Z" />
  </svg>
)

export { IconNestMultiRoomOutlinedFilled as default }
