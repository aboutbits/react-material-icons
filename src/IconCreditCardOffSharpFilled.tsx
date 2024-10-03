import React from 'react'
import { IconProps } from './types.js'

export const IconCreditCardOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-194 594-480h206v-160H434L274-800h606v606ZM160-480h206L206-640h-46v160ZM818-28 686-160H80v-640h80l80 80H126L26-820l57-57L875-85l-57 57Z" />
  </svg>
)
