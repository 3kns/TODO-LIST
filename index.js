const readline = require('readline');

let tasks = [];

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function takeInstr(){
    setTimeout(() => {rl.question('choose one;\n"add": to add new tasks\n"view": to view tasks \n"exit":to close application\n\t', (action) =>{
        if(action !== 'exit'){
            if(action === 'add'){
                rl.question('Enter description of task: ', (description) => {newTask(description)});
            } else if(action === 'view'){
                viewTask();
            } else{
                console.log('Invalid action');
                takeInstr();
            }
        }
        else{
            console.log('Exiting...');
            rl.close();}
    })}, 1000)}
    
function newTask(description){
    console.log(`Adding new task: ${description}`);
    setTimeout(()=> {
        tasks.push(description);
        console.log(`New task added: ${description}`);
        takeInstr();
    }, 2000);
}

function viewTask(){
    setTimeout(() => {console.log('opening tasks...')}, 1000);
    setTimeout(()=> {
        if (tasks.length === 0){
            console.log('There are no tasks in here.');
        }
        else {
            console.log('TASKS: ');
            tasks.forEach((task, index) => {
                console.log(`${index + 1}: ${task}`);
            })
        }
        takeInstr();
    }, 1000)
}

takeInstr()