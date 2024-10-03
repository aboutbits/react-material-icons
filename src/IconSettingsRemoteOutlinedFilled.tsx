import React from 'react'
import { IconProps } from './types.js'

export const IconSettingsRemoteOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-40q-17 0-28.5-11.5T320-80v-480q0-17 11.5-28.5T360-600h240q17 0 28.5 11.5T640-560v480q0 17-11.5 28.5T600-40H360Zm120-350q21 0 35.5-14.5T530-440q0-21-14.5-35.5T480-490q-21 0-35.5 14.5T430-440q0 21 14.5 35.5T480-390ZM338-662l-56-56q40-40 91-61t107-21q56 0 107 21t91 61l-56 56q-29-29-65.5-43.5T480-720q-40 0-76.5 14.5T338-662ZM226-774l-58-58q63-61 143.5-94.5T480-960q88 0 168.5 33.5T790-830l-56 56q-50-52-116-79t-138-27q-72 0-138 27t-116 79Z" />
  </svg>
)
