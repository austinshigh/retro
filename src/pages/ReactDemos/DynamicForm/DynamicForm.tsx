import type { FormField } from "./DynamicFormField"
import DynamicFormField from "./DynamicFormField"

interface Props {
  fields: Array<FormField>
}

const DynamicForm = ({ fields }: Props) => {
  const handleChange = (value: string) => {
    console.log(name, value)
  }

  const handleSubmitForm = () => {}
  return (
    <>
      {fields.map((field: FormField) => {
        return <DynamicFormField {...field} onChange={handleChange} />
      })}
      <button onClick={handleSubmitForm}>Submit</button>
    </>
  )
}

export default DynamicForm
