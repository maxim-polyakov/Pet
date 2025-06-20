import React from 'react';
import './Tamagochi.module.css';
import { Create_pet } from '../../http/pet/Pet_API';

const Tamagochi = () => {
    const [ name, setName ] = React.useState('');
    const [ age, setAge ] = React.useState('');
    const [ health, setHealth ] = React.useState('');
    const [ hungry, setHungry ] = React.useState('');
    const [ mood, setMood ] = React.useState('');
    const [ status, setStatus ] = React.useState('');

    let data;
    async function CreatePet() {
        data = await Create_pet(name, age, health, hungry, mood, status)

    }
  return (
    <div>
        <label>Name</label>
        <input type='text' id='input' placeholder='Input name'
                 onChange = {(e) => setName(e.target.value)} />
        <label>Age</label>
        <input type='text' id='input' placeholder='Input age'
                 onChange = {(e) => setAge(e.target.value)} />
        <label>Health</label>
        <input type='text' id='input' placeholder='Input health'
               onChange = {(e) => setHealth(e.target.value)} />
        <label>Hungry</label>
        <input type='text' id='input' placeholder='Input hungry'
               onChange = {(e) => setHungry(e.target.value)} />
        <label>Mood</label>
        <input type='text' id='input' placeholder='Input mood'
               onChange = {(e) => setMood(e.target.value)} />
        <label>Status</label>
        <input type='text' id='input' placeholder='Input status'
               onChange = {(e) => setStatus(e.target.value)} />
        <button className="button" onClick={CreatePet}>CreatePet</button>
    </div>
  );
};

export default Tamagochi;
