import { createContext } from 'react';

import headerState from './header.state';
import { THeaderState } from './header.types';

export default createContext(headerState as THeaderState);
