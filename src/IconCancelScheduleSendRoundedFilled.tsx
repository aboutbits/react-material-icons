import React from 'react'
import { IconProps } from './types.js'

export const IconCancelScheduleSendRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m679-251 55 55q6 6 15 6t15-6q6-6 6-15t-6-15l-54-54 55-55q6-6 6-15t-6-15q-6-6-15-6t-15 6l-55 55-55-55q-6-6-15-6t-15 6q-6 6-6 15t6 15l55 55-56 56q-6 6-6 14t6 14q6 6 15 6t15-6l55-55Zm-559 31v-149q0-14 8-25t22-14l174-43q10-2 16-10t6-19q0-11-6-19t-16-10l-174-43q-14-3-22-14t-8-25v-149q0-22 17.5-33.5T175-777l404 169q23 9 20.5 35T571-538q-32 11-58 31.5T466-460q-27 32-43 69.5T402-311q-2 15-10 27.5T370-265l-194 82q-20 8-38-3.5T120-220ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Z" />
  </svg>
)
