import React from 'react'
import { IconProps } from './types'
const IconWaterDamage: React.FC<IconProps> = (props: IconProps): any => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M12,3L2,12h3v8h14v-8h3L12,3z M12,16c-1.1,0-2-0.9-2-2c0-1.1,2-4,2-4s2,2.9,2,4C14,15.1,13.1,16,12,16z" />
  </svg>
)

export { IconWaterDamage }
