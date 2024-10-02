import React from 'react'
import { IconProps } from './types'

export const IconApkInstallSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-800h400l240 240v170h-80v-130H440v-200H160v640h440v80H80Zm80-80v-640 640Zm40-40q4-49 30-90t68-65l-38-68q0-1 4-15 5-2 9.5-2t6.5 5l39 70q20-8 40-12.5t41-4.5q21 0 41 4.5t40 12.5l39-70 15-4q5 2 6 7t-1 9l-38 68q42 24 68 65t30 90H200Zm110-60q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm180 0q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM800-80 640-240l56-57 64 63v-166h80v166l64-63 56 57L800-80Z" />
  </svg>
)
