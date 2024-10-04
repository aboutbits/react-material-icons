import React from 'react'
import { IconProps } from './types'

const IconPhotoAutoMergeOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280q-33 0-56.5-23.5T280-360v-440q0-33 23.5-56.5T360-880h235q-8 19-11.5 39t-3.5 41H360v408q45-42 101.5-65T580-480q61 0 118 23t102 65q1 1 0 0v-188q21 0 41-3.5t39-11.5v235q0 33-23.5 56.5T800-280H360Zm220-350ZM224-81q-33 4-58.5-16T135-150L80-587q-5-33 16-59t54-30l50-6v80l-40 5 54 437 298-40h218q0 26-21 43.5T661-135L224-81Zm-10-79Zm493-540 71-200h44l72 200h-43l-15-44h-72l-15 44h-42Zm67-74h52l-26-82-26 82ZM580-400q-35 0-69 10t-63 30h264q-29-20-63-30t-69-10Zm0-340q46 0 78 32t32 78q0 46-32 78t-78 32q-46 0-78-32t-32-78q0-46 32-78t78-32Zm0 80q-13 0-21.5 8.5T550-630q0 13 8.5 21.5T580-600q13 0 21.5-8.5T610-630q0-13-8.5-21.5T580-660Z" />
  </svg>
)

export { IconPhotoAutoMergeOutlined as default }
