import React from 'react'
import { IconProps } from './types'

const IconCloudUploadRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520v-286l36 35q11 11 27.5 11t28.5-12q11-11 11-28t-11-28L508-572q-12-12-28-12t-28 12L348-468q-11 11-11.5 27.5T348-412q11 11 27.5 11.5T404-411l36-35v286H260Z" />
  </svg>
)

export { IconCloudUploadRoundedFilled as default }
