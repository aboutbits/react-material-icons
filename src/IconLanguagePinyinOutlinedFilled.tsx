import React from 'react'
import { IconProps } from './types.js'

export const IconLanguagePinyinOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-480h80v-120h-80v120ZM180-160l-20-80h60q8 0 14-6t6-14v-125q-17 7-33 13.5T176-360l-16-78q19-4 39.5-11t40.5-15v-136h-60v-80h60v-120h80v120h60v80h-60v96q15-9 29-18t27-18v80q-12 10-26 19.5T320-423v203q0 23-18.5 41.5T260-160h-80Zm222 0-44-66q42-28 72.5-75t42.5-99h-73v-80h80v-120h-60v-80h360v80h-60v120h80v80h-80v240h-80v-240h-86q-14 71-54.5 136.5T402-160Zm288-490-69-30q16-27 35.5-59t31.5-61l74 27q-15 29-35 62t-37 61Zm-189-8q-17-25-39-55t-42-53l72-34q18 23 38.5 52t37.5 53l-67 37Z" />
  </svg>
)