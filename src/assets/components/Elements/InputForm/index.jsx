import Input from "./Input";
import Label from "./Label";

export default function InputForm({ type, name, label, placeholder, ref }) {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} ref={ref} />
    </>
  );
}
