import { $host } from '../index';


export const Create_pet = async (name, age, health, hungry, mood, status) => {
    try
    {
        const { data } = await $host.post('/petapi/api/mypet/create_pet', {name, age, health, hungry, mood, status});

        console.log(data);

        if (data?.error)
            throw new Error(data.error);

        return data;
    }catch (error)
    {
        alert(error);

        return {
            error: error.message
        };
    }

};

export const Get_pets = async () => {
    try
    {
        const { data } = await $host.get('/petapi/api/mypet/pets');

        console.log(data);

        if (data?.error)
            throw new Error(data.error);

        return data;
    }catch (error)
    {
        alert(error);

        return {
            error: error.message
        };
    }

};

export const Feed = async (id) => {
    try
    {
        const { data } = await $host.post('/petapi/api/mypet/pet/feed', { id });

        console.log(data);

        if (data?.error)
            throw new Error(data.error);

        return data;
    }catch (error)
    {
        alert(error);

        return {
            error: error.message
        };
    }

};

export const Heal = async (id) => {
    try
    {
        const { data } = await $host.post('/petapi/api/mypet/pet/heal', { id });

        console.log(data);

        if (data?.error)
            throw new Error(data.error);

        return data;
    }catch (error)
    {
        alert(error);

        return {
            error: error.message
        };
    }

};

export const Play = async (id) => {
    try
    {
        const { data } = await $host.post('/petapi/api/mypet/pet/play', { id });

        console.log(data);

        if (data?.error)
            throw new Error(data.error);

        return data;
    }catch (error)
    {
        alert(error);

        return {
            error: error.message
        };
    }

};