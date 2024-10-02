import React from 'react'
import { IconProps } from './types'

export const IconFamiliarFaceAndZoneOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm0-80q100 0 170-70t70-170q0-17-2.5-33.5T710-546q-15 3-30 4.5t-30 1.5q-63 0-120-24t-102-70q-28 57-77 99t-111 61q3 98 72.5 166T480-240ZM380-400q-17 0-28.5-11.5T340-440q0-17 11.5-28.5T380-480q17 0 28.5 11.5T420-440q0 17-11.5 28.5T380-400Zm200 0q-17 0-28.5-11.5T540-440q0-17 11.5-28.5T580-480q17 0 28.5 11.5T620-440q0 17-11.5 28.5T580-400ZM40-720v-120q0-33 23.5-56.5T120-920h120v80H120v120H40ZM240-40H120q-33 0-56.5-23.5T40-120v-120h80v120h120v80Zm480 0v-80h120v-120h80v120q0 33-23.5 56.5T840-40H720Zm120-680v-120H720v-80h120q33 0 56.5 23.5T920-840v120h-80Z" />
  </svg>
)
