import React, {useEffect} from 'react';
import './Tamagochi.module.css';
import { Create_pet, Get_pets, Feed, Heal, Play } from '../../http/pet/Pet_API';

const Tamagochi = () => {
    const [ name, setName ] = React.useState('');
    const [ age, setAge ] = React.useState('');
    const [ health, setHealth ] = React.useState('');
    const [ hungry, setHungry ] = React.useState('');
    const [ mood, setMood ] = React.useState('');
    const [ status, setStatus ] = React.useState('');
    const [ id , setId ] = React.useState('');
    let createpetdata;
    let pets;
    let feeddata;
    let healdata;
    let playdata;
    async function CreatePet() {
        createpetdata = await Create_pet(name, age, health, hungry, mood, status)

    }

    async function Pets() {

        try {
            pets = await Get_pets();
            const body = document.querySelector('tbody');
            let tags = "";
            pets.map(d => {
                tags += `<tr>
                <td>${d.id}</td>
                <td>${d.name}</td>
                <td>${d.age}</td>
                <td>${d.health}</td>
                <td>${d.hungry}</td>
                <td>${d.mood}</td>
                <td>${d.status}</td>
                </tr>`;
            })
            body.innerHTML = tags;
        } catch (error) {
            console.log(error);
        }
    }

    async function toFeed () {
        feeddata = await Feed(id);
    }

    async function toHeal () {
        healdata = await Heal(id);
    }

    async function toPlay(){
        playdata = await Play(id);
    }

    useEffect(() => {
        // определяем и вызываем async-функцию внутри useeffect
        const fetchData = async () => {
            setInterval(Pets, 1000);
        };

        fetchData();
    }, []);

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
        <button className="button" onClick={Pets}>GetPets</button>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Health</th>
                <th>Hungry</th>
                <th>Mood</th>
                <th>Status</th>
            </tr>
            <tbody></tbody>
        </table>
        <label>ID for feed</label>
        <input type='text' id='input' placeholder='ID for feed'
               onChange = {(e) => setId(e.target.value)} />
        <button className="button" onClick={toFeed}>Feed</button>
        <button className="button" onClick={toHeal}>Heal</button>
        <button className="button" onClick={toPlay}>Play</button>
    </div>
  );
};

export default Tamagochi;
