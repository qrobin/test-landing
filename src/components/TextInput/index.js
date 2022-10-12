function TextInput(props) {
  const { placeholder, label, value, handleChange } = props;
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}

export { TextInput }