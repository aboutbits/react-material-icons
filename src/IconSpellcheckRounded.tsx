import React from 'react'
import { IconProps } from './types'

export const IconSpellcheckRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m564-192 198-198q11-11 28-11t28 11q11 11 11 28t-11 28L621-137q-12 12-27 18t-30 6q-15 0-30-6t-27-18l-85-85q-11-11-11-28t11-28q11-11 28-11t28 11l86 86ZM254-452l-37 105q-5 12-15 19.5t-23 7.5q-22 0-34-18t-4-38l162-435q5-13 16.5-21t25.5-8h32q14 0 25.5 8t16.5 21l162 434q8 21-4.5 39T541-320q-14 0-25-8t-16-21l-36-103H254Zm28-76h156l-76-216h-4l-76 216Z" />
  </svg>
)
