import PropTypes from 'prop-types';
import css from './Notification.module.css'

export const Notification = () => { 
    return message && <p className={css.p}>There is feedback</p>;
};

Notification.propTypes = {
    message: PropTypes.string,
};