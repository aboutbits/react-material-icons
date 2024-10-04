import React from 'react'
import { IconProps } from './types'

const IconOrderApproveRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m691-235-17-17q-9-9-21.5-9t-21.5 9q-9 9-9 21t9 21l39 39q9 9 21 9t21-9l97-95q9-9 9-21.5t-9-21.5q-9-9-21.5-9t-21.5 9l-75 74ZM280-600h400q17 0 28.5-11.5T720-640q0-17-11.5-28.5T680-680H280q-17 0-28.5 11.5T240-640q0 17 11.5 28.5T280-600ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM120-760q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v215q0 17-11.5 28.5T800-505q-17 0-28.5-11.5T760-545v-215H200v562h243q2 15 6 30t9 29q5 11-4 17.5t-17-1.5l-3-3q-6-6-14-6t-14 6l-32 32q-6 6-14 6t-14-6l-32-32q-6-6-14-6t-14 6l-32 32q-6 6-14 6t-14-6l-32-32q-6-6-14-6t-14 6l-46 46v-680Zm160 480h135q17 0 28.5-11.5T455-320q0-17-11.5-28.5T415-360H280q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm0-160h262q17 0 28.5-11.5T582-480q0-17-11.5-28.5T542-520H280q-17 0-28.5 11.5T240-480q0 17 11.5 28.5T280-440Zm-80 242v-562 562Z" />
  </svg>
)

export { IconOrderApproveRounded as default }
