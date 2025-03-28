import mangoose from 'mongoose';

const foodSchema = mangoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price :{ type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
})

const foodModel = mangoose.Model.food || mangoose.model('food', foodSchema);

export default foodModel;
// export defalt foodModel;