import React from 'react'
import { IconProps } from './types'

export const IconDirectionsOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 640-208 480-48 48-480l217-217 225 225v112L27-820l57-57L876-85l-57 57ZM320-360h80v-120h81l-80-80h-41q-17 0-28.5 11.5T320-520v160Zm434 38L618-458l62-62-140-140v100h-24L322-754l158-158 432 432-158 158Z" />
  </svg>
)
