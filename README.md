# KorrilaBBQ_React
React App practice setting up components, data, props, state, dynamic rendering


## Korrila React Receipts

Korilla is a Korean barbecue taco truck that makes thousands of hungry customers happy every year.

Their CEO is thinking of updating their short order tracking system using React.

Build a prototype of this short order receipts tracker.
Part 1: Get Started

Create a new folder for this project. Make an index.html and app.js ... follow the notes from class/lab to create an App component that renders an h1 with some text inside it
Part 2: Sample Receipts

You'll be rendering some sample receipts:

```bash
const receipt1 =
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  }
const receipt2 = {
  person: 'Jerrica',
  order: {
    main: 'Rice Bowl',
    protein: 'Ginger Soy Chix',
    rice: 'Sticky Rice',
    sauce: 'Korilla',
    toppings: [
      'Yuzu Pickled Sweet Pepper', 'Kale'
    ],
    drink: 'Korchata',
    cost: 19
  },
  paid: false
}
const receipt3 = {
  person: 'Matt',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: true
}
```
    Add the first receipt to the state of the app:

class App extends React.Component {
  state = {
    receipt1
  }
  

    Make a Receipt component that renders the first receipt's
        person
        order
            main
            protein
            rice
            sauce
            drink
            cost

Hungry for More: render the toppings

Add the next two receipts to state and make two more Receipt components so that you get a veiw like this (a little css provided for clarity, but not required)

korilla receipts rendered Mark
 Hint 1
 Hint 2
Part 3: Conditionally Render the receipts if they have been paid or not

Right now, all the receipts are not paid ( paid: false)

Set up a ternary operator to display the receipt if it has not been paid.

Then go into the receipt data and change the value to true and check that the receipt will not display

Matt has settled his bill

To see the React tab in the Dev Console, you have to download it as a Chrome Extension
 Hint 3
Part 4: Refactor for Dynamic Rendering

3 receipts is pretty limiting. Let's put them in an array and then map over them for rendering.

Update your code so it renders the same, but instead of hard coding 3 receipts, it maps over the array.

```bash
const receipts = [
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  },
  {
    person: 'Mark',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: [
        'Yuzu Pickled Sweet Pepper', 'Kale'
      ],
      drink: 'Korchata',
      cost: 19
    },
    paid: false
  },
  {
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: [
        'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
      ],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    },
    paid: true
  }
]
```

 Hint 4
Hungry For More

You'll have to read ahead in the notes...

Add a click event on the receipt that changes the value of paid from false to true. Once clicked the receipt should immediately disappear from the browser view

You'll have to research on your own...

How do you style react components within react?

A nice place to start (Links to an external site.)

But also, why would one style components...rather than use a good old css file?
