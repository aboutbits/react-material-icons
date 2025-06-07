import React from 'react'
import { IconProps } from './types.js'

export const IconNoFlashSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 719-128v48H80v-504h166l8-9L27-820l57-57L876-85l-57 57ZM370-477q-57 12-93.5 55T240-320q0 66 47 113t113 47q59 0 103-37t55-93l-.5 1 .5-1-188-187Zm30 237q-33 0-56.5-23.5T320-320q0-33 23.5-56.5T400-400q33 0 56.5 23.5T480-320q0 33-23.5 56.5T400-240Zm320-115L435-640h68l51 56h166v229Zm40-165v-160h-40v-200h160l-64 144h64L760-520Z" />
  </svg>
)
