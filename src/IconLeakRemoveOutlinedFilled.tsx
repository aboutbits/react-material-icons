import React from 'react'
import { IconProps } from './types.js'

export const IconLeakRemoveOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M790-56 654-194q-6 18-10 36t-4 38h-80q0-36 8.5-70t25.5-64l-58-58q-27 42-41.5 90.5T480-120h-80q0-69 20-132.5T478-370L370-478q-54 36-117.5 57T120-400v-80q53 0 101.5-14.5T312-536l-58-58q-30 17-64 25.5t-70 8.5v-80q20 0 37.5-4t34.5-10L56-792l56-56 736 736-58 56Zm-22-250-62-60q30-17 64-25.5t70-8.5v80q-20 0-37.5 3T768-306ZM648-424l-58-58q54-38 117.5-58T840-560v80q-53 0-101.5 14.5T648-424ZM482-592l-58-58q27-41 41.5-89T480-840h80q0 69-20 132t-58 116ZM366-708l-60-60q6-17 10-34.5t4-37.5h80q0 36-8.5 69.5T366-708Z" />
  </svg>
)
