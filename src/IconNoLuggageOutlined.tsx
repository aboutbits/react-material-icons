import React from 'react'
import { IconProps } from './types.js'

export const IconNoLuggageOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m760-315-80-80v-245H435l-75-75v-85q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v80h80q33 0 56.5 23.5T760-640v325ZM600-600v125l-80-80v-45h80ZM440-720h80v-80h-80v80ZM320-80q-17 0-28.5-11.5T280-120q-33 0-56.5-23.5T200-200v-440q0-24 12.5-44.5T248-713l73 73h-41v440h400v-80l80 80q0 33-23.5 56.5T680-120q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120H360q0 17-11.5 28.5T320-80Zm40-160v-304l80 80v224h-80Zm160-144 80 80v64h-80v-144ZM819-28 27-820l57-57L876-85l-57 57ZM558-518Zm-94 134Z" />
  </svg>
)
