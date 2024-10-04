import React from 'react'
import { IconProps } from './types.js'

export const IconKeyVerticalRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-680q0-33 23.5-56.5T500-760q33 0 56.5 23.5T580-680q0 33-23.5 56.5T500-600q-33 0-56.5-23.5T420-680Zm-160 0q0-100 70-170t170-70q100 0 170 70t70 170q0 67-33 121.5T620-472v335q0 8-3 15.5t-9 13.5l-80 80q-6 6-13 8.5T500-17q-8 0-15-2.5T472-28L345-155q-5-5-8-12t-4-14q-1-7 1-14t7-13l39-52-43-57q-4-5-6-11t-2-12q0-6 2-12.5t6-11.5l43-61v-47q-54-32-87-86.5T260-680Zm80 0q0 56 34 98.5t86 56.5v125l-41 58h-.5.5l61 82-55 71 75 75v-.5.5l40-40h.5-.5v-371q52-14 86-56.5t34-98.5q0-66-47-113t-113-47q-66 0-113 47t-47 113Z" />
  </svg>
)
