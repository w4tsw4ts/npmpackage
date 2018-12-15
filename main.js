var app = require("./node_modules/w4tsnpmhw/index");

const PORT = process.env.PORT || 3000;

require("./routes/apiRoutes")(app);

app.listen(PORT, function () {
     console.log('Server running...');
})
