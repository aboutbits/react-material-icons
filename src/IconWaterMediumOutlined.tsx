import React from 'react'
import { IconProps } from './types'

const IconWaterMediumOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m255-388 25 228h400l26-240h-9q-38 0-69.5-5.5T542-427q-23-7-48-10t-50-3q-51 0-98.5 13T255-388Zm-10-86q47-23 97.5-34.5T445-520q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h19l35-320H210l35 326Zm34 394q-31 0-53.5-20T200-151l-80-729h720l-80 729q-3 31-25.5 51T681-80H279Zm1-80h400-400Z" />
  </svg>
)

export { IconWaterMediumOutlined as default }