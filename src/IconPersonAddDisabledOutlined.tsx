import React from 'react'
import { IconProps } from './types'

export const IconPersonAddDisabledOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 680-168v8H40v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q13 0 25.5.5T410-438l-42-42h-8q-66 0-113-47t-47-113v-8L56-792l57-57 736 736-57 57Zm-72-344v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM504-572l-64-64v-4q0-33-23.5-56.5T360-720h-4l-64-64q15-8 32.5-12t35.5-4q66 0 113 47t47 113q0 18-4 35.5T504-572ZM120-240h480l-86-94q-38-13-77-19.5t-77-6.5q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm320-396Zm-80 396Z" />
  </svg>
)
