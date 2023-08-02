import css from './LabelInput.module.css';
import PropTypes from 'prop-types';

export const LabelInput = ({
  handleInputChange,
  placeholder,
  type,
  name,
  pattern,
  title,
  labelName,
}) => {
  return (
    <label className={css.label}>
      <span className={css.span}>{labelName}</span>
      <input
        className={css.input}
        onChange={handleInputChange}
        placeholder={placeholder}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required
      />
    </label>
  );
};

LabelInput.propTypes = {
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  labelName: PropTypes.string,
};
