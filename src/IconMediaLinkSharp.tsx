import React from 'react'
import { IconProps } from './types'

const IconMediaLinkSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M300-180v-200l160 100-160 100Zm220-380q-50 0-85-35t-35-85q0-50 35-85t85-35h50v60h-50q-25 0-42.5 17.5T460-680q0 25 17.5 42.5T520-620h50v60h-50Zm110 0v-60h50q25 0 42.5-17.5T740-680q0-25-17.5-42.5T680-740h-50v-60h50q50 0 85 35t35 85q0 50-35 85t-85 35h-50Zm-110-90v-60h160v60H520Zm124 250v-80h196v-360H360v360h-80v-440h640v520H644ZM40-40v-480h640v480H40Zm80-80h480v-320H120v320Zm480-540ZM360-280Z" />
  </svg>
)

export { IconMediaLinkSharp as default }
