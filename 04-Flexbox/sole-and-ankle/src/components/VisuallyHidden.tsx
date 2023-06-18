import {FC, ReactNode} from 'react';

const hiddenStyles = {
  display: 'inline-block',
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};

interface VisuallyHiddenProps {
  children: ReactNode;
}

const VisuallyHidden: FC<VisuallyHiddenProps> = ({children}) => (
  <span style={hiddenStyles}>{children}</span>
);

export default VisuallyHidden;
