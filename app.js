const express = require("express")
const taskRoutes = require('./routes/tasks')
const errorHandlerMiddleware = require("./middleware/error.handler");
const notFound = require("./middleware/not-found");
const { default: mongoose } = require("mongoose");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json())
app.use(cors());

app.use(notFound)

app.use(errorHandlerMiddleware)

//routes

app.use('/api/v1/tasks', taskRoutes);

mongoose.connect("mongodb+srv://boletorishabhtask:49ZOYdrlwFgMuBfw@cluster0.fa0eq11.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}..`)
})