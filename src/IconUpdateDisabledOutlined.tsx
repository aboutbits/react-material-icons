import React from 'react'
import { IconProps } from './types'

const IconUpdateDisabledOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M791-55 671-175q-42 26-90 40.5T480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-53 14.5-101t40.5-90L55-791l57-57 736 736-57 57ZM480-200q36 0 69.5-8.5T613-233L233-613q-16 30-24.5 63.5T200-480q0 117 81.5 198.5T480-200Zm120-360v-80h110q-41-56-101-88t-129-32q-36 0-69.5 8.5T347-727l-58-58q42-26 90-40.5T480-840q82 0 155.5 35T760-706v-94h80v240H600Zm-80 6-80-80v-46h80v126Zm265 265-58-58q11-22 18.5-45t10.5-48h82q-5 42-18.5 80T785-289Z" />
  </svg>
)

export { IconUpdateDisabledOutlined as default }
