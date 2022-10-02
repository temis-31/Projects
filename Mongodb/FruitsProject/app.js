const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const personSchema = new Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);

const fruit = new Fruit({
  rating: 2,
  review: "Pretty solid as a fruit.",
});

// fruit.save();

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit",
});

// pineapple.save();

const person = new Person({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple,
});

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 4,
  review: "The best fruit",
});

const banana = new Fruit({
  name: "Banana",
  socre: 3,
  review: "Weird texture",
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "To sour for me",
});

// Fruit.find((err, fruits) => {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();

//     fruits.forEach((fruit) => {
//       console.log(fruit.name);
//     });
//   }
// });

// Fruit.deleteOne({ _id: "62d088f71a46fc73f15e433a" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//        console.log("Succesfully deleted the document");
//   }
// });

// Person.deleteMany({ name: "s" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted all the document");
//     mongoose.connection.close();
//   }
// });

Person.updateOne({ name: "Temístocles" }, { favoriteFruit: orange }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully updated the document");
  }
});

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitsDB");
//   }
// });
