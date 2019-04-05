module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')

        db.get_houses()
        .then(houses => {
            res.status(200).send(houses)
        })
    },
    
    addProperty: (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zipcode} = req.body

        db.add_property([name, address, city, state, zipcode])
            .then(houses => {
                res.status(200).send(houses)
            })
    }
}