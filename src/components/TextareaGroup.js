export default function TextareaGroup({ form, name, title, type = "text", placeholder, inputChange, error, className, disabled }) {
  if (!placeholder) placeholder = title

  let randomID = 'id-' + (Math.round(Math.random() * 100000))
  className = className ? `form-group ${className}` : 'form-group';

  return (
    <div className={className}>
      <label htmlFor={randomID}>{title}</label>
      <textarea disabled={disabled} className="form-control form-control-sm" id={randomID} name={name} type={type} placeholder={placeholder} value={form[name]} onChange={inputChange}></textarea>
      {
        error[name] && <p className="error-text">{error[name]}</p>
      }
    </div>
  )
}