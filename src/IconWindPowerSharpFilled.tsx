import React from 'react'
import { IconProps } from './types'

export const IconWindPowerSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-40v-80h80v-229q9 4 19 6t21 2q42 0 70.5-28.5T619-440v-9l161 39 142 254L809-43 560-291v171h80v80H400Zm-280-80v-80h200v80H120ZM40-360v-160h421q-19 14-29.5 34.5T421-440q0 23 9 42t25 33l-133 85-282-80Zm480-20q-25 0-42.5-17.5T460-440q0-25 17.5-42.5T520-500q25 0 42.5 17.5T580-440q0 25-17.5 42.5T520-380Zm92-98q-11-27-35.5-44T520-539q-11 0-21 2t-19 6v-193l213-199 136 85-217 360ZM40-600v-80h200v80H40Zm120-160v-80h240v80H160Z" />
  </svg>
)
