import './add.scss';
import { Dispatch, SetStateAction, useState } from 'react';
import { modalInputProps } from '../../types/types'

const inputs:modalInputProps[] = [
  {
    id: 0,
    type: 'text',
    placeholder: 'FullName',
<<<<<<< HEAD
    name: 'fullName'
=======
    name: ''
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9
  },
  {
    id: 1,
    type: 'number',
    placeholder: 'Phone',
    minLenght: 11,
    maxLenght: 11,
<<<<<<< HEAD
    name: 'phone'
=======
    name: ''
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9
  },
  {
    id: 2,
    type: 'text',
    placeholder: 'Address',
<<<<<<< HEAD
    name: 'address'
=======
    name: ''
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9
  },
  {
    id: 3,
    type: 'number',
    placeholder: 'Amount',
    min: 0,
<<<<<<< HEAD
    name: 'amount'
=======
    name: ''
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9
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
<<<<<<< HEAD
    name: 'date'
=======
    name: ''
  },
  {
    id: 5,
    type: 'text',
    placeholder: 'Type of Tax',
    name: ''
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9
  },
]

interface i {
  setOpen: Dispatch<SetStateAction<boolean>>;
<<<<<<< HEAD
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Modal:React.FC<i> = ({setOpen, onSubmit, onChange}) => {

=======
  onchange: any;
  onSubmit: any
}

const Modal:React.FC<i> = ({setOpen, onSubmit, onchange}) => {

  const [revenueDetails, setRevenueDetails] = useState({
    fullName: '',
    phone: '',
    amount: '',
    date: '',
    typeOfTax: ''
  })

  const handleChange = () => {

  }

  const handleSubmit = (e:any) => {

  }
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9

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
<<<<<<< HEAD
              onChange={onChange}
=======
              onChange={onchange}
>>>>>>> 07d8d54c1f022957c579c0ebb3a016020a3827d9
            />
          ))
        }

        <button type='submit'>SUBMIT</button>
      </section>
    </form>
  )
}

export default Modal
