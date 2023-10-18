"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, setTask] = useState("")
  const [disc, setDisc] = useState("")
  const [mainTask, setMainTask] = useState([])
  function handleSumbit(e){
    e.preventDefault();
    setTask("");
    setDisc("");
    setMainTask([...mainTask, {task, disc}]);
  }
  const deleteHandler = (i) =>{
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setMainTask(copyTask);
  }

  let renderTask = <h1>No Task Available</h1> 

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.task}</h5>
            <h6 className='text-lg font-medium '>{t.disc}</h6>
          </div>
          <button className='bg-red-400 text-white px-4 py-2 rounded font-bold' onClick={()=>{
            deleteHandler(i)
          }}>Delete</button>
        </li>
      );
    })
  }
  return (
    <>
    <h1 className='bg-black text-white text-center p-5 text-5xl font-bold'>My ToDo List</h1>
    <form onSubmit={handleSumbit}>
        <input value={task} type='text' placeholder='Enter Task Here' className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' autoFocus onChange={(e)=>{
          setTask(e.target.value);
        }}/>      
        <input value={disc} type='text' placeholder='Enter Discription Here' className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' onChange={(e)=>{
          setDisc(e.target.value)
        }}/>      
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
    </form>
    <hr/>
      <div className='bg-slate-300 p-8 text-2xl'>
            <ul className=''>
              {renderTask}
            </ul>
      </div>
    </> 
  )
}

export default page;