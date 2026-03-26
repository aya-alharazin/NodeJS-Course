/*
Types of streams 
1- read
2-write
3-duplex
4-transform
*/
const {createReadStream,createWriteStream} = require('fs')
const readStream = createReadStream('data/input.txt')
const writeStream = createWriteStream('data/output.txt')
readStream.pipe(writeStream)
/*
Here we open pipe between readStream and writeStream
So the readStream read chunck of data and writeStream 
write that chunck on the same time
*/