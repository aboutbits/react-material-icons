import React from 'react'
import { IconProps } from './types.js'

export const IconWatchButtonPressRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-280q83 0 141.5-58.5T600-480q0-83-58.5-141.5T400-680q-83 0-141.5 58.5T200-480q0 83 58.5 141.5T400-280ZM340-80q-26 0-47.5-15.5T263-137l-23-77q-6-20-18.5-40.5T189-297q-34-37-51.5-84T120-480q0-51 17.5-98t51.5-85q20-23 32.5-43t18.5-40l23-77q8-26 29.5-41.5T340-880h120q26 0 47.5 15.5T537-823l23 77q6 20 18.5 40.5T611-663q34 37 51.5 84t17.5 99q0 51-17.5 98T611-297q-20 23-32.5 43T560-214l-23 77q-8 26-29.5 41.5T460-80H340Zm460-400q-17 0-28.5-11.5T760-520v-280q0-17 11.5-28.5T800-840q17 0 28.5 11.5T840-800v280q0 17-11.5 28.5T800-480Z" />
  </svg>
)
