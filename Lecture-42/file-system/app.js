
let fs = require('fs');

let data = 'hi my name is Prince, thanks a lot';

// create -> writeFile() -> it accepts 4 arguments
// fs.writeFile('abc.txt', data, {}, function(){});

// fs.writeFile('abc.txt', data,
//     {
//         //optional part
//         encoding : 'utf-8',
//         flag : 'w'
//     },
//     function(err){
//         if(err){throw err};
//         console.log('file written successfully.');
//     }
// )

fs.writeFile('abc.txt', data,
    // {
    //     //optional part
    //     encoding : 'utf-8',
    //     flag : 'w'
    // },
    function (err) {
        if (err) { throw err };
        console.log('file written successfully.');
    }
)

//read -> readFile();
// it has 3 arguments

// fs.readFile('def.txt',
//     // {
//     //     // optional
//     //     encoding: "utf-8",
//     //     flag: 'r'
//     // },
//     (err,data)=>{
//         if(err){throw err};
//         console.log(data); // it will give buffer.
//     }
// )

        //or

        // fs.readFile('def.txt',
        //     {
        //         // optional
        //         encoding: "utf-8",
        //         flag: 'r'
        //     },
        //     (err,data)=>{
        //         if(err){throw err};
        //         console.log(data); // it will give buffer.
        //     }
        // )

        // or
        fs.readFile('def.txt',
            {
                // optional
                encoding: "utf-8",
                flag: 'r'
            },
            (err,data)=>{
                if(err){throw err};
                console.log(data.toString());
            }
        )

//update -> appendFile();
// it has 4 arguments
fs.appendFile('abc.txt', ' bhaukal',{},(err)=>{
    if(err){throw err};
    console.log('file edited successfully');
})

// delete -> unLink();
// it has 2 arguments
fs.unlink('def.txt', (err)=>{
    if(err){throw err};
    console.log('file deleted succussfully');
})




