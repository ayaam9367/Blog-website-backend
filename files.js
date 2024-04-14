const fs = require('fs');

//reading files
// fs.readFile('./docs/blog1.txt', 'utf8', (error, data) => {
//     if(error){
//         console.log(error);
//     }

//     console.log(data);
// });


//writing files
// fs.writeFile('./docs/blog2.txt', 'hello, world', (error) => {
//     if(error){
//         console.log(error);
//     }
//     console.log('file was written');
// });


//directories
// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets', (error) => {
//     if(error){
//         console.log(error);
//     }

//     else console.log('folder created');
// });
// } else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err)
//         }

//         else console.log('folder deleted')
//     })
// }

//deleting files
// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (error)=> {
//         if(error){
//             console.log(error)
//         }
//         console.log("file deleted");
//     })
// }