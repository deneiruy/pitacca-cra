import { useForm } from "../../utils/FormContext";

interface Props {
    name: string;
    label: string;
    type: string;
    required?: boolean;
    autocomplete?: boolean;
    step?: string;
    default?: any;
    onClick?: () => any;
    value?: any;
    readOnly?: boolean;
}

export default function FormInput(props: Props) {
    const { register, errors } = useForm();

    return (
        <div className="py-1">
            <label htmlFor={props.name} className="font-medium">
                {props.label}
            </label>
            <input
                type={props.type}
                className="bg-transparent rounded-full w-full py-2 border-2 border-primtext"
                autoComplete={props.autocomplete ? "on" : "off"}
                step={props.step}
                defaultValue={props.default}
                onClick={props.onClick}
                value={props.value}
                readOnly={props.readOnly}
                onFocus={(e) =>
                    (e.target.readOnly = props.readOnly
                        ? props.readOnly
                        : false)
                }
                {...register(props.name, { required: props.required })}
            />
            {errors[props.name] && <h2 className="text-sectext">* Invalid</h2>}
        </div>
    );
}
