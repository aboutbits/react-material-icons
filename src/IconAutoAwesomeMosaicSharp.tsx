import React from 'react'
import { IconProps } from './types'

const IconAutoAwesomeMosaicSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120H120v-720h320v720Zm-80-80v-560H200v560h160Zm160-320v-320h320v320H520Zm80-80h160v-160H600v160Zm-80 480v-320h320v320H520Zm80-80h160v-160H600v160ZM360-480Zm240-120Zm0 240Z" />
  </svg>
)

export { IconAutoAwesomeMosaicSharp as default }
