// import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCart from "./TodoCart";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState('')
  // const {todo} = useAppSelector((state)=>state.todoReducer)
  const {data: todo,isLoading,isError} = useGetTodosQuery(priority)
  if(isLoading){
    return <p>Loading.....</p>
  }
  console.log(priority);
  console.log(isError);
  return (
    <div>
      <div className=" flex justify-between mb-5">
        <AddTodoModal/>
        <TodoFilter priority={priority} setPriority={setPriority}/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        {todo?.data?.length > 0 ?
        <div className="bg-white w-full h-full rounded-lg space-y-3 p-5">
        {
          todo?.data?.map(item=><TodoCart key={item.id} {...item}/>)
        }
        </div>
        :
        <div className="text-2xl font-bold bg-white p-6 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div>  
      }
      </div>
    </div>
  );
};

export default TodoContainer;
