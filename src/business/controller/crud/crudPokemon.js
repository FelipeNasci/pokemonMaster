const mongoose = require('mongoose');
const Pokemon = require('../../model/Pokemon');

module.exports = {

    async create(req, res) {

        const { user_id } = req.headers; //objectID do usuário
        const { name, attack, defence } = req.body;
        let pokemons = await Pokemon.findOne({ name, user: user_id })

        console.log(pokemons);


        if (pokemons)
            return res.status(404).json({ "error": name + "já foi criado" });

        try {

            pokemons = await Pokemon.create({
                name: name,
                attack: attack,
                defence: defence,
                user: user_id
            });

            return res.status(201).json({ pokemons });

        } catch (error) {
            return res.status(500).json({ error });
        }
    },

    async read(req, res) {

        try {

            const { user_id } = req.headers;
            const pokemons = await Pokemon.find({ user: user_id });

            return res.status(200).json({ pokemons })

        } catch (error) {
            return res.status(500).json({ error });
        }

    },

    async update(req, res) {


        try {

            const { name, attack, defence } = req.body;
            const { user_id } = req.headers;

            let pokemon = await Pokemon.findOne({ name, user: user_id });

            console.log(pokemon);

            if (!pokemon)
                return res.status(404).json({ "message": "Pokémon não encontrado" });

            pokemon = await Pokemon.findOneAndUpdate({ name, user: user_id }, {
                name,
                attack,
                defence
            })

            // A função findOneAndUpdate não retorna o objeto modificado

            pokemon = await Pokemon.findOne({ name, user: user_id });

            return res.status(200).json({ pokemon })

        } catch (error) {
            return res.status(500).json({ error });
        }

    },

    delete(req, res) {
        return res.json({ 'crud': 'delete' })
    }
}