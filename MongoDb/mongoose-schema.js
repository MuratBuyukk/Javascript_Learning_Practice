const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test')
    .then(_ => console.log('connected successfuly'))
    .catch(err => console.log('connection failed: ' + err));

var blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{body: String, date: Date}],
    date: { type: Date, default: Date.now},
    hidden: Boolean,
    meta:  {
        votes: Number,
        favs: Number
    }
},{collection: 'my_articles', minimize: false, bufferCommands:true, timestamps: true});

blogSchema.methods.showTitle = function(){
    return this.title;
}

blogSchema.statics.getByTitle = function(title){
    return this.find({title});
}

blogSchema.virtual('brief').get(function (){
    return "tilte: " + this.title + " author: " + this.author
});

const Blog = mongoose.model('blog', blogSchema);
const myBlog = new Blog({title: 'First blog'});

console.log(myBlog.showTitle());

// myBlog.save().then(b => console.log(b)).catch(err => console.log(err));

// Blog.create({title: 'Second Blog'});

// Blog.getByTitle('First blog').then(res => console.log(res));

const myBlog2 = new Blog({title: 'time stamp', author: 'Murat buyuk'});
console.log(myBlog2.brief);
console.log(myBlog2.toJSON({virtuals: true}));

myBlog2.save();
