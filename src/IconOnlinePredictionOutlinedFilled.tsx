import React from 'react'
import { IconProps } from './types.js'

export const IconOnlinePredictionOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763l43 43q-47 47-73.5 108T140-480q0 71 26.5 132T240-240l-43 43Zm85-85q-38-38-60-89t-22-109q0-58 22-109t60-89l42 42q-30 30-47 70t-17 86q0 46 17 86t47 70l-42 42Zm158-18q0-23-15.5-45.5t-34.5-47q-19-24.5-34.5-51T340-500q0-58 41-99t99-41q58 0 99 41t41 99q0 30-15.5 56.5t-34.5 51q-19 24.5-34.5 47T520-300h-80Zm0 100v-60h80v60h-80Zm238-82-42-42q30-30 47-70t17-86q0-46-17-86t-47-70l42-42q38 38 60 89t22 109q0 58-22 109t-60 89Zm85 85-43-43q47-47 73.5-108T820-480q0-71-26.5-132T720-720l43-43q54 54 85.5 127T880-480q0 83-31.5 156T763-197Z" />
  </svg>
)