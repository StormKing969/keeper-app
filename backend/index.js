import { Express } from 'express';


// const DB = 
const port = process.env.port || 3000;

const app = Express();

// ==================== Main Function Start ========================
app.listen(port, function() {
    console.log("Server is connected to port " + port);
});
// ==================== Main Function End ========================