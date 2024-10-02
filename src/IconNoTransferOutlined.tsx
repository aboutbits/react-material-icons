import React from 'react'
import { IconProps } from './types'

export const IconNoTransferOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 652-195h114v35q0 17-11.5 28.5T726-120h-46q-17 0-28.5-11.5T640-160v-40H320v40q0 17-11.5 28.5T280-120h-40q-17 0-28.5-11.5T200-160v-82q-18-20-29-44.5T160-340v-347L27-820l57-57L876-85l-57 57ZM320-280h247L367-480H240v120q0 33 23.5 56.5T320-280Zm469-6-69-69v-125H595l-80-80h205v-120H395l-80-80h391q-15-17-64.5-28.5T482-800q-71 0-115.5 6T296-779l-61-61q39-20 99.5-30T480-880q172 0 246 37t74 123v380q0 14-3 27.5t-8 26.5Zm-449-34q25 0 42.5-17.5T400-380q0-25-17.5-42.5T340-440q-25 0-42.5 17.5T280-380q0 25 17.5 42.5T340-320ZM240-560h47l-47-47v47Zm75-200h391-391Zm52 280Zm228 0Z" />
  </svg>
)
