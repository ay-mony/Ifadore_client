import './add.scss';
import { Dispatch, SetStateAction } from 'react';
import { modalInputProps } from '../../types/types'

const inputs:modalInputProps[] = [
  {
    id: 0,
    type: 'text',
    placeholder: 'FullName',
    name: 'fullName'
  },
  {
    id: 1,
    type: 'number',
    placeholder: 'Phone',
    minLenght: 11,
    maxLenght: 11,
    name: 'phone'
  },
  {
    id: 2,
    type: 'text',
    placeholder: 'Address',
    name: 'address'
  },
  {
    id: 3,
    type: 'number',
    placeholder: 'Amount',
    min: 0,
    name: 'amount'
  },
  {
    id: 4,
    type: 'text',
    placeholder: 'Type of Tax',
    name: 'typeOfTax'
  },
  {
    id: 5,
    type: 'date',
    name: 'date'
  },
]

interface i {
  setOpen: Dispatch<SetStateAction<boolean>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Modal:React.FC<i> = ({setOpen, onSubmit, onChange}) => {


  return (
    <form className='modal' onSubmit={onSubmit}>
      <section>
        <span onClick={()=>setOpen(false)}>Back</span>

        <h4>Type of Tax</h4>
        {
          inputs.map((input) => (
            <input 
              type={input.type} 
              placeholder={input.placeholder} 
              key={input.id} 
              min={input?.min} required
              name={input.name}
              onChange={onChange}
            />
          ))
        }

        <button type='submit'>SUBMIT</button>
      </section>
    </form>
  )
}

export default Modal
