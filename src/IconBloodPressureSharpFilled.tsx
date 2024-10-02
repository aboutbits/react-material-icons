import React from 'react'
import { IconProps } from './types'

export const IconBloodPressureSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm8-180 91-91-28-28-91 91 28 28ZM80-520v-280h800v324q-40-41-91.5-62.5T680-560q-38 0-72.5 9.5T542-524l-66-134q-5-10-15-15t-21-5q-11 0-21 5t-15 15L280-409l-45-89q-5-10-14.5-16t-20.5-6H80Zm0 360v-280h95l69 138q5 11 14.5 16.5T280-280q11 0 20.5-5.5T315-302l125-248 38 76q-36 38-57 87.5T400-280q0 31 6.5 61.5T427-160H80Z" />
  </svg>
)
