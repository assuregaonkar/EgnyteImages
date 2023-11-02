const InputNumber = ({ title, ...props }) => {
  return (
    <div>
      {title && <label>{title}</label>}
      <input {...number} />
    </div>
  );
};

export default InputNumber;
