import Item from './Field';
import FieldForm from './Form';
import useForm from './useForm';

const Form = FieldForm;
Form.Item = Item;
Form.useForm = useForm;

export { Item, useForm };

export default Form;
