import styles from './alert.module.css';
import cn from 'classnames';

const Alert = ({ children, type }) => {
  return <div className={cn()}>{children}</div>;
};

export default Alert;
