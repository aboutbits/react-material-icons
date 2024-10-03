import React from 'react'
import { IconProps } from './types.js'

export const IconNestSunblockOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-680v-120h80v120H80Zm0 520v-120h80v120H80Zm210-433-57-57 85-85 57 57-85 85Zm28 368-85-85 57-57 85 85-57 57Zm2-215v-80h240l-72-96 64-48 120 160q15 20 4 42t-36 22H320Zm500 240q-25 0-42.5-17.5T760-260v-440q0-25 17.5-42.5T820-760q25 0 42.5 17.5T880-700v440q0 25-17.5 42.5T820-200ZM80-320v-80q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-80q66 0 113 47t47 113q0 66-47 113T80-320Z" />
  </svg>
)
