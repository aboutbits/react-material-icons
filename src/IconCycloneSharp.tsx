import React from 'react'
import { IconProps } from './types'

const IconCycloneSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM661-80q18-56 27-100t14-70q-43 42-100 66t-122 24q-136 0-238.5-18.5T80-214v-85q56 18 100 27t70 14q-42-43-66-100t-24-122q0-137 18.5-239T214-880h85q-18 56-27.5 100T258-710q43-42 100-66t122-24q137 0 239 18.5T880-746v85q-56-18-100-27.5T710-702q42 43 66 100t24 122q0 137-18.5 239T746-80h-85ZM480-240q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z" />
  </svg>
)

export { IconCycloneSharp as default }
