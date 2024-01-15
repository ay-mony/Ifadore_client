import { useState, MouseEvent } from 'react';
import Modal from './Modal';
import './add.scss';


interface revenueProps {
    tax: string;
    revenue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AddRevenue:React.FC<revenueProps> = ({tax, revenue, onChange, onSubmit}) =>{

    const [open, setOpen] = useState<boolean>(false)

    return(
        <section className='add'>
            <span>{tax}</span>
            <button onClick={(e:MouseEvent<HTMLButtonElement>) => setOpen(!open)}>{revenue}</button>

            {  open && <Modal setOpen={setOpen} onSubmit={onSubmit} onChange={onChange}/>}
        </section>
    )
}

export default AddRevenue
