interface FormFieldProps {
  name: string
  label: string
  type: string
  required?: boolean
  onChange: (name: string, input: string) => void
  errorMessage?: string
}

export type FormField = {
  name: string
  label: string
  type: string
  required?: boolean
}

const DynamicFormField = ({
  name,
  label,
  type,
  required,
  onChange,
  errorMessage,
}: FormFieldProps) => {
  return (
    <>
      <div className="form-field">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          type={type}
          required={required}
          onChange={e => onChange(name, e.target.value)}
        ></input>
        <div>{errorMessage !== "" && errorMessage}</div>
      </div>
    </>
  )
}

export default DynamicFormField
