import React from 'react'
import { IconProps } from './types.js'

export const IconFaceShakeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-40q-94 0-181-31t-159-90v81H80v-200h200v60H164q66 58 147 89t169 31q88 0 169-31t147-89H680v-60h200v200h-60v-81q-72 59-159 90T480-40Zm0-240q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm0-80q100 0 170-70t70-170q0-11-1-21t-3-21q-74 8-143-16.5T452-736q-38 52-93.5 86T240-605q-2 101 68 173t172 72ZM380-520q-17 0-28.5-11.5T340-560q0-17 11.5-28.5T380-600q17 0 28.5 11.5T420-560q0 17-11.5 28.5T380-520Zm200 0q-17 0-28.5-11.5T540-560q0-17 11.5-28.5T580-600q17 0 28.5 11.5T620-560q0 17-11.5 28.5T580-520Z" />
  </svg>
)