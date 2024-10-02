import React from 'react'
import { IconProps } from './types'

export const IconSendTimeExtensionRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-145v-64q0-14 8-25t22-14l130-32-130-32q-14-3-22-14t-8-25v-64q0-23 19-34.5t39-1.5l270 135q22 11 22 36t-22 36L578-109q-20 10-39-1.5T520-145Zm0 65v-160l160-40-160-40v-160l400 200L520-80Zm-320-40q-33 0-56.5-23.5T120-200v-152q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-152q0-33 23.5-56.5T200-800h160q0-42 29-71t71-29q42 0 71 29t29 71h160q33 0 56.5 23.5T800-720v290L556-552q-40-20-78 3t-38 68v243q-40 8-64 37.5T352-120H200Z" />
  </svg>
)
