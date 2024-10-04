import React from 'react'
import { IconProps } from './types'

const IconGlucoseOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M539-80q-28 0-52.5-12T445-126L227-403l19-20q20-21 48-25t52 11l74 45v-408q0-17 11.5-28.5T460-840q17 0 29 11.5t12 28.5v552l-97-60 104 133q6 8 14 11.5t17 3.5h221q33 0 56.5-23.5T840-240v-280q0-17 11.5-28.5T880-560q17 0 28.5 11.5T920-520v280q0 66-47 113T760-80H539Zm21-360v-200q0-17 11.5-28.5T600-680q17 0 28.5 11.5T640-640v200h-80Zm140 0v-160q0-17 11.5-28.5T740-640q17 0 28.5 11.5T780-600v160h-80ZM180-560q-58 0-99-40t-41-98q0-42 25-75.5t52-65.5l63-72 63 73q27 32 52 65t25 75q0 58-41 98t-99 40Zm0-80q25 0 42.5-17t17.5-41q0-27-18.5-46.5T185-784l-5-5-5 5q-18 20-36.5 39.5T120-698q0 24 17.5 41t42.5 17Zm470 320ZM180-715Z" />
  </svg>
)

export { IconGlucoseOutlined as default }
