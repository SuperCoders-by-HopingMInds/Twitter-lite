// create an array of obje with 5 users(name, phone number, password)

const users = [
    {id: 1, name: 'John', phone: '1234567890', password: '123456'},
    {id: 2, name: 'Marry', phone: '1234567890', password: '123456'},
    {id: 3, name: 'Tom', phone: '1234567890', password: '123456'},
    {id: 4, name: 'Ram', phone: '1234567890', password: '123456'},
    {id: 5, name: 'Shyam', phone: '1234567890', password: '123456'},  
]

const home = [
     {id: 1, name: "Hii", user_id: 2},
     {id: 1, name: "Hii", user_id: 1},
     {id: 2, name: "Hello", user_id: 3},
     {id: 3, name: "Hey", user_id: 4},
     {id: 4, name: "Bye", user_id: 1},
     {id: 5, name: "Good", user_id: 5},
]
// one user with multiple homes => `one to many` 
// one home with multiple users => `many to one`
// many - many





// generate an array of objects with 5 artciles(id, title, body)

const articles = [
    {id: 1, title: "Article 1", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},
    {id: 2, title: "Article 2", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},
    {id: 3, title: "Article 3", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},
    {id: 4, title: "Article 4", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},
    {id: 5, title: "Article 5", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},
]

const categories = [
    {id: 1, name: "Category 1"},
    {id: 2, name: "Category 2"},
    {id: 3, name: "Category 3"},
    {id: 4, name: "Category 4"},
    {id: 5, name: "Category 5"},  
]

const articleCategory = [
    {id: 1, article_id: 1, category_id: 1},
    {id: 2, article_id: 1, category_id: 2},
    {id: 3, article_id: 3, category_id: 4},
    {id: 4, article_id: 2, category_id: 4},

]
   
