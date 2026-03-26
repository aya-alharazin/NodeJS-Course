readFile('./data/story.txt', 'utf8', (err, data) => {

})
 /*
    
The `./` here is **relative to wherever you run the `node` command from**, not relative to the file itself.
so if your project structure is:
    ```
    nodejs-video/
      05-Core-Modules/
        data/
          story.txt
        relative.js
This works ✅:
bashcd 05-Core-Modules
node relative.js
This FAILS ❌:
bashcd nodejs-video
node 05-Core-Modules/relative.js
# Error: ENOENT: no such file or directory './data/story.txt'


require is always relative to the current file, no matter where you run the command from. Node.js resolves require paths based on the file's location on disk, not the terminal's location.
So require('./data/story') would always find story next to relative.js — regardless of where you ran node from.

*/