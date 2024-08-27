const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    contact: String,
    reviews: [
        {
            user: String,
            rating: Number,
            comment: String,
        }
    ]
}, {
    timestamps: true
});

const Property = mongoose.model('Property', schema);


const router = require('express').Router()

router.post('/', async function(req, res){
    try {
        const { title, description, image, contact} = req.body;

        if(!title || !description || !image || !contact) {
            return res.status(400).json({ message: 'Incomplete property data'})
        }

        const newProperty = new Property({ title, description, image, contact, reviews: []});
        await newProperty.save();

        return res.status(201).json(newProperty);

    } catch (error) {
        console.error("Error adding property:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})


router.get("/", async function(req, res){
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to add a review for a property
router.post("/:id/review", async function(req, res){
    const { user, rating, comment } = req.body;

    try {
        const property = await Property.findById(req.params.id);
        property.reviews.push({ user, rating, comment });
        await property.save();
        res.status(201).json(property);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a property by ID
router.delete("/:id", async function(req, res){
    const propertyId = req.params.id;

    try {
        // Find the property by ID and delete it from the database
        const deletedProperty = await Property.findByIdAndDelete(propertyId);

        if (!deletedProperty) {
            return res.status(404).json({ message: "Property not found" });
        }

        res.json({ message: "Property deleted", deletedProperty });
    } catch (error) {
        console.error("Error deleting property:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;