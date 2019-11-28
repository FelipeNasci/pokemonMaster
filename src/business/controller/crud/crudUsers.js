const mongoose = require('mongoose');
const User = require('../../model/User');
const Pokemon = require('../../model/Pokemon');
module.exports = {

    async create(req, res) {

        const { name, password } = req.body;

        try {

            if (await User.findOne({ name }))
                return res.json({ "error": "usuário já cadastrado" });

            const user = await User.create({
                name: name,
                password: password,
                time: new Date()
            });

            user.password = undefined;

            return res.status(201).json({ user });

        } catch (error) {
            return res.status(500).json({ "error": error })
        }

    },

    async read(req, res) {

        const { name, password } = req.body;

        try {

            const user = await User.findOne({ name, password });

            if (!user)
                return res.status(401).json({ "message": "Usuário ou senha inválidos" });

            user.password = undefined;
            return res.status(200).json({ user });

        } catch (error) {
            return res.status(500).json({ error });
        }

    },

    async update(req, res) {

        try {
            const { name, password, newPassword } = req.body;

            let user = await User.findOne({ name, password });

            if (!user)
                return res.status(401).json({ "message": "Usuário ou senha inválidos" });

            user = await User.findOneAndUpdate({ name, password }, {
                password: newPassword,
                //name: "novo Nome",
                //$addToSet: { pokemon: "data" } //inserir dados em uma lista existente
            })

            user = await User.findOne({ name, password });

            user.password = undefined;
            return res.status(200).json({ user })

        } catch (error) {
            return res.status(500).json({ error });
        }


    },

    async delete(req, res) {

        const { name, password } = req.body

        try {

            await User.findOneAndDelete({ name, password });
            return res.status(200).json({ "status": "Usuário deletado" });

        } catch (error) {
            return res.status(500).json({ error });
        }

    }
}