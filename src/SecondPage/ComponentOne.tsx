import axios from "axios"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Post } from "./Interface";
import { useEffect,useState } from "react"
import "./ComponentOne.css";

const ComponentOne = () => {
    const [data, setData] = useState<Post[]>([]);


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'body', headerName: 'Body', width: 400 },
      ];


    useEffect(()=>{
        getData();
    },[]);


    const getData = async () => {
        try{
            const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
            setData(response.data);
        }
        catch(e){
            console.log("eroor: ",e);
        }
      };
console.log(data);

  return (
    <div>
        <div className="heading">
            COMPONENT 1
        </div>
        <div className="table">
        <DataGrid rows={data} columns={columns} />
        </div>
      
    </div>
  )
}

export default ComponentOne
