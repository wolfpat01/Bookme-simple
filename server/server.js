// Classes
class Book {
    constructor(name, link, disc, pic) {
        this.name = name;
        this.link = link;
        this.disc = disc;
        this.pic = pic;
    }

}
var fs = require('fs');
// lunching the server
const express = require('express');
const app = express();
app.use(express.static('./public'));
const sockets = require('socket.io');
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
const io = sockets(server);
console.log('server is running');
io.sockets.on("connection", connectedclient);

// parameters
let booklist = [{
        name: "javascript from scratch",
        link: "www",
        disc: "sdfjsdf",
        pic: "https://image.shutterstock.com/image-vector/book-icon-sign-design-260nw-553945819.jpg"
    },
    {
        name: "html book",
        link: "www",
        disc: "sdfjsdf",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST0dRul2e8s90eiXqkXm78I5svWF15z7_v7AWeeAA8JUGAt_U2"
    },
    {
        name: "css",
        link: "www",
        disc: "sdfjsdf",
        pic: "data:image/jpeg;base64,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"
    },
]

// setting up
let books = [];
takeContentOfAllBooks();

// calculating how manny visitors
let visitors = 0;
setInterval(() => {
    // console.log(visitors);
}, 200);

function connectedclient(socket) {
    visitors++;
    socket.on("disconnect", () => {
        visitors--;
    })
    socket.on("getme", (searching) => {
        let sordedlist = booklist;
        sordedlist = searchwithname(searching, books);
        socket.emit("search", sordedlist);
    })
}

function searchwithname(input, list) {
    var filter, a, txtValue;
    let listend = []
    for (i = 0; i < list.length; i++) {
        if (input) {
            filter = input.toUpperCase();
            a = list[i];
            txtValue = a.name;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                listend.push(a);
                //list[i].style.display = "";
            } else {
                // list[i].style.display = "none";
            }
        } else {
            // listend.push(a)
        }
    }
    return listend;
}

function readTextFile(file) {
    var fileContents = fs.readFileSync('./books/' + file, 'utf8');
    fileContents = fileContents.replace(/\r/g, '');
    fileContents = fileContents.replace(/\n/g, '<br>');
    return fileContents;
}

function takeContentOfAllBooks() {
    var files = fs.readdirSync('./books');
    // loop of each file
    files.forEach(filename => {
        let filename2 = filename.substring(0, filename.length - 4);
        let content = readTextFile(filename);
        let splited = content.split("<!!endelement>");
        // 0 image
        // 1 content
        books.push(new Book(filename2,"#",encodeURI(splited[1]),encodeURI(splited[0])));
        console.log(books)
    });

}
