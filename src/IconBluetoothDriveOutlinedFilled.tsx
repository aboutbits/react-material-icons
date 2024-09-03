import React from 'react'
import { IconProps } from './types'

const IconBluetoothDriveOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120q-17 0-28.5-11.5T80-160v-320l84-240q6-18 21.5-29t34.5-11h380v80H234l-42 120h408v80h200v320q0 17-11.5 28.5T760-120h-40q-17 0-28.5-11.5T680-160v-40H200v40q0 17-11.5 28.5T160-120h-40Zm140-200q25 0 42.5-17.5T320-380q0-25-17.5-42.5T260-440q-25 0-42.5 17.5T200-380q0 25 17.5 42.5T260-320Zm360 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-25 0-42.5 17.5T560-380q0 25 17.5 42.5T620-320Zm126-200v-152l-92 92-28-28 112-112-112-112 28-28 92 92v-152h20l114 116-86 84 86 86-114 114h-20Zm40-248 38-36-38-38v74Zm0 172 38-38-38-38v76Z" />
  </svg>
)

export { IconBluetoothDriveOutlinedFilled as default }
