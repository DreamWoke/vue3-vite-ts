import { defineComponent } from "vue";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

const Input = defineComponent({
  setup(props: InputProps) {
    const handleChange = (event: any) => {
      props.onChange(event.target.value);
    }

    return () => (
      <input value={props.value} onInput={handleChange} />
    )
  }
})
export default Input