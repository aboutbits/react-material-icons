import React from 'react'
import { IconProps } from './types'

const IconAutopauseSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-360v-240h80v240h-80Zm160 0v-240h80v240h-80ZM480-40q-108 0-202.5-49.5T120-228v108H40v-240h240v80h-98q51 75 129.5 117.5T480-120q115 0 208.5-66T820-361l78 18q-45 136-160 219.5T480-40ZM42-520q7-67 32-128.5T143-762l57 57q-32 41-52 87.5T123-520H42Zm214-241-57-57q53-44 114-69.5T440-918v80q-51 5-97 25t-87 52Zm449 0q-41-32-87.5-52T520-838v-80q67 6 128.5 31T762-818l-57 57Zm133 241q-5-51-25-97.5T761-705l57-57q44 52 69 113.5T918-520h-80Z" />
  </svg>
)

export { IconAutopauseSharpFilled as default }
