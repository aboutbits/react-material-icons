import React from 'react'
import { IconProps } from './types'

const IconNoLuggageSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m760-315-80-80v-245H435l-75-75v-165h240v160h160v405ZM600-600v125l-80-80v-45h80ZM440-720h80v-80h-80v80ZM200-120v-584l80 80v424h400v-24l80 80v24h-80v40h-80v-40H360v40h-80v-40h-80Zm160-120v-304l80 80v224h-80Zm160-144 80 80v64h-80v-144ZM819-28 27-820l57-57L876-85l-57 57ZM558-518Zm-94 134Z" />
  </svg>
)

export { IconNoLuggageSharp as default }
