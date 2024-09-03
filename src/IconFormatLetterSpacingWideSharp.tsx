import React from 'react'
import { IconProps } from './types'

const IconFormatLetterSpacingWideSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-640h80v640h-80Zm640 0v-640h80v640h-80ZM294-280l150-400h72l150 400h-70l-34-102H400l-36 102h-70Zm126-160h120l-58-166-62 166Z" />
  </svg>
)

export { IconFormatLetterSpacingWideSharp as default }