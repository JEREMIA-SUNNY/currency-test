import { useEffect, useState } from "react";

const Page = () => {
  const [arr, setArr] = useState([]);
  const [pages,setPages]=useState(1);
  const [active,setActive]=useState(false)
    useEffect(() => {
    const fetchdata = async () => {
        if(arr.length==0){
            setActive(true)
        }
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pages}&_limit=5`
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      setArr(data);
      if(arr.length==0){
        setActive(false)
    }
    };
    fetchdata();
  }, [pages]);
  console.log(arr);

  return (
    <div>
    <div>{active?<p>loading</p>:""}</div>
      {arr.map((ind, id) => {
        return <div>{ind.title}</div>;
      })}
        <div>{Array(20).fill(false).map((elem,ind)=>{
            return <button className={`${pages===ind+1?"active":""}`} onClick={(e)=>setPages(ind+1)}>{ind+1}</button>
        })}</div>
    </div>
  );
};

export default Page;
