import {useState} from 'react'
const Index =()=>{
    const [input,setinput] = useState("");
    const [Task,setTask] = useState([]);
    function removeTask(id){
        const UpdateTask = Task.filter(tasks=>tasks.id!==id);
        setTask(UpdateTask)
    }
    function addTask(){
        if (input.trim()==="") return;
        const newTask={
            id:Task.length+1,
            text:input
        }
        setTask([...Task,newTask]);
        setinput('');
    }
    return(
        <div className="w-screen  h-screen bg-gradient-to-br from-blue-600 to-blue-200 flex items-center justify-center">
            <div className="bg-white h-140 p-5 rounded-sm mb-5">
                <p className='text-2xl mb-5'>TO-DO LIST</p>
               <div className="relative w-full w-md">
  <input
    type="text"
    className="bg-gray-200 rounded-2xl pl-4 pr-20 py-2 w-full focus:outline-none"
    value={input}
    onChange={(e)=>setinput(e.target.value)}
    placeholder="Type here"
  />
  <button
    type="button"
    className="absolute top-1/2 right-0 -translate-y-1/2 bg-red-500 text-white px-4 py-[6px] rounded-2xl"
    onClick={addTask}
  >
    Add
  </button>
</div>
<div className='mt-5'>
    {
        Task.map((task)=>(
            <div key={task.id} className='flex justify-between'>
                <li>{task.text}</li>
                <button type="button" onClick={()=>removeTask(task.id)}>X</button>
            </div>
        ))
    }
</div>

               
            </div>
        </div>
    )
}
export default Index