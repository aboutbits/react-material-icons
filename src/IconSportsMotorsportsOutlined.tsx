import React from 'react'
import { IconProps } from './types'

export const IconSportsMotorsportsOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-480Zm80 240q100 0 170-70t70-170q0-101-73.5-170.5T550-720q-48 0-93 11t-87 33l100 40q41 17 65.5 52.5T560-504q0 60-41.5 102T418-360H162q-2 24-2 54.5v65.5h400ZM176-440h240q27 0 45.5-18.5T480-504q0-19-10.5-34.5T440-562l-148-60q-42 37-71.5 84T176-440Zm384 280H160q-33 0-56.5-23.5T80-240v-90q0-98 37-183.5t100.5-149Q281-726 367-763t183-37q68 0 128 25t105 68.5Q828-663 854-605t26 125q0 66-25 124.5t-68.5 102Q743-210 684.5-185T560-160Z" />
  </svg>
)
