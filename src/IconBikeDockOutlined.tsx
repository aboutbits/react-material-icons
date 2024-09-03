import React from 'react'
import { IconProps } from './types'

const IconBikeDockOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-80l170-49 62-520q4-30 26-50.5t53-20.5h98q31 0 53 20.5t26 50.5l62 520 170 49v80H120Zm320-120h80v-480q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v480Z" />
  </svg>
)

export { IconBikeDockOutlined as default }
