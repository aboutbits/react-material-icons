import React from 'react'
import { IconProps } from './types.js'

export const IconCloudDownloadRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q23-81 85.5-136T440-797v323l-36-35q-11-11-27.5-11T348-508q-11 11-11 28t11 28l104 104q12 12 28 12t28-12l104-104q11-11 11.5-27.5T612-508q-11-11-27.5-11.5T556-509l-36 35v-323q103 14 171.5 92.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Z" />
  </svg>
)