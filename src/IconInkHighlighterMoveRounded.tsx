import React from 'react'
import { IconProps } from './types'

const IconInkHighlighterMoveRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-800q-17 0-28.5-11.5T280-840q0-17 11.5-28.5T320-880h215q20 0 29.5 12.5T574-840q0 15-10 27.5T534-800H320ZM200-640q-17 0-28.5-11.5T160-680q0-17 11.5-28.5T200-720h175q20 0 29.5 12.5T414-680q0 15-10 27.5T374-640H200ZM80-480q-17 0-28.5-11.5T40-520q0-17 11.5-28.5T80-560h135q20 0 29.5 12.5T254-520q0 15-10 27.5T214-480H80Zm504 80L480-504 280-304l104 104 200-200Zm-47-161 104 104 199-199-104-104-199 199Zm-84-28 216 216-229 229q-24 24-56 24t-56-24l-2-2-14 14q-6 6-13.5 9t-15.5 3H148q-14 0-19-12t5-22l92-92-2-2q-24-24-24-56t24-56l229-229Zm0 0 227-227q24-24 56-24t56 24l104 104q24 24 24 56t-24 56L669-373 453-589Z" />
  </svg>
)

export { IconInkHighlighterMoveRounded as default }
