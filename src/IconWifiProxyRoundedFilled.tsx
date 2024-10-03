import React from 'react'
import { IconProps } from './types.js'

export const IconWifiProxyRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M700-180h50v-50h-50v50Zm0-110h50v-50h-50v50Zm110 110h50v-50h-50v50Zm-110 60q-25 0-42.5-17.5T640-180v-160q0-25 17.5-42.5T700-400h50q25 0 42.5 17.5T810-340v50h50q25 0 42.5 17.5T920-230v50q0 25-17.5 42.5T860-120H700Zm-220-26q-12 0-23.5-4.5T436-164L63-537q-13-13-19-28t-6-32q0-17 7-34t22-29q88-69 194-104.5T480-800q113 0 219 35.5T893-660q15 11 22 28t7 34q0 17-6 32.5T897-537l-20 20q-7 7-17 9.5t-19-1.5q-20-7-40-10.5t-40-3.5q-101 0-172 71t-71 172q0 20 3.5 40t10.5 40q3 9 1 19t-9 17q-9 9-20.5 13.5T480-146Z" />
  </svg>
)
