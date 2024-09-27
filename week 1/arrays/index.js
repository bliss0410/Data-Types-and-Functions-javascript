//array is a data structure that stores ordered and mutable collection of data, -1 means not defined, in string slicing it is the last item.

// let arrayOfBiscuits=["cabin", "Fibre Active", "short bread", "Top", "Parle-G"]
// let arrayOfCandies= new Array('milkos', 'tom tom', 'VicksBlue')
// arrayOfBiscuits[0]= 'digestive'//change value in a position
// arrayOfBiscuits[5]='cabin'//give a new index 
// // console.log(arrayOfBiscuits[0])
// // console.log(arrayOfBiscuits[-1])//undefined

// console.log(typeof(arrayOfBiscuits))

//property checks attributes ,gives description
//array property
// console.log(arrayOfBiscuits.length)


// methods are fuctions used in a class
// array methods
//POP:removes from the end
// arrayOfBiscuits.pop()
// console.log(arrayOfBiscuits)

//push:adds an item to the end
// arrayOfBiscuits.push('Pure Bliss')
// console.log(arrayOfBiscuits)

//shift is to remove from begining
// arrayOfBiscuits.shift()
// console.log(arrayOfBiscuits)

//unshift:add from begining
// arrayOfBiscuits.unshift('chic choc')
// console.log(arrayOfBiscuits)

//reverse
// arrayOfBiscuits.reverse()
// console.log(arrayOfBiscuits)

//join array
// arrayOfSnacks= arrayOfBiscuits.join(arrayOfCandies)
// console.log(arrayOfSnacks)
//delimiter:separates like ","

//concat
// arrayOfSnacks= arrayOfBiscuits.concat(arrayOfCandies)
// console.log(arrayOfSnacks)

const bookDb = [
    {
        bookName:'atomic habits',
        year:2002,
        id:1

    },
    {
        bookName:'purple hibiscus',
        year:2004,
        id:2
        
    },
    {
        bookName:'multipurpose',
        year:2003,
        id:3
        
    },
    {
        bookName:'it ends with us',
        year:2002,
        id:4
        
    },
    {
        bookName:'arrow of God',
        year:2009,
        id:5
        
    },
    {
        bookName:'leadership',
        year:2002,
        id:6
        
    }
]
// console.log(bookDb[4].bookName)

//find index

//write a function that find index of an item, using the index it displays the name and year
// the name of book is atomic habits and it was published in 2003

function findBookDetails(id) {
    for (let i = 0; i < bookDb.length; i++) {
        if (bookDb[i].id === id) {
            return `The name of the book is '${bookDb[i].bookName}' and it was published in  the year ${bookDb[i].year}.`;
        }
    }
    return 'Book Detailsnot found ';
}


console.log(findBookDetails(3)); 


