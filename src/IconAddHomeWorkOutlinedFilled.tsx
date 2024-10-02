import React from 'react'
import { IconProps } from './types'

export const IconAddHomeWorkOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-600h80v-80h-80v80Zm40 560q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-20-80h40v-100h100v-40H740v-100h-40v100H600v40h100v100Zm220-315q-39-42-91-63.5T720-520q-11 0-20.5.5T680-517v-43L400-762v-78h520v405ZM40-120v-400l280-200 280 200v27q-72 34-116 103.5T440-240q0 31 6.5 61.5T467-120h-67v-240H240v240H40Z" />
  </svg>
)
