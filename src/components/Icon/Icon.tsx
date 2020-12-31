import { CLASS, ICON } from '../../types/classes.types';
import { IconWrapper } from './icon.styles';

type Props = {
  charClass: CLASS
};

const Icon = (props: Props) => {

  const { charClass } = props;

  return (
    <IconWrapper charClass={charClass}>
      <img className={`icon-${charClass}`} alt={CLASS[charClass]} src={ICON[charClass]} />
    </IconWrapper>
  )
}

export default Icon;
