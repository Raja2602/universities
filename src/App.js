import axios from "axios"
import { useState,useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory from "react-bootstrap-table2-filter";
import { textFilter } from "react-bootstrap-table2-filter";
function App() {
  const[data,setData]=useState([]);
  const[store,setStore]=useState("");
  const[loading,setLoading]=useState(false)
 // useEffect(()=>{
   // getData();
  //},[])
  const getData=()=>{
    setLoading(true)
    axios("http://universities.hipolabs.com/search?country=India").then(res=>{
      console.log(res.data);
      setData(res.data)
      setLoading(false)
      })
  }

  const columns=[{
    dataField:"name",
    text:"Name",
    sort: true,
  },
  {
    dataField:"country",
    text:"Country",
    sort: true,
  },
  {
    dataField:"state-province",
    text:"Province",
    sort: true,
    filter:textFilter(),
    
  },
  {  

    dataField:"web_pages",
    text:"Website",
    sort: true,
  },
  {
    dataField:"alpha_two_code",
    text:"code",
    sort: true,
  }
]

  return (
    <div className="App">
     
     <button onClick={getData} >click here to see universities</button>
     <div className="menu">    
     <button>admission</button>
     <button>universities</button>
     </div>
     
              { (loading==true)?
                <div  className="text-center">
                  <div className="spinner-border text-primary " role="status">
                    <span className="sr-only"></span>
                  </div>
                </div>:null
             }
     <BootstrapTable  keyField="name" data={data} columns={columns} striped pagination={paginationFactory()} filter={filterFactory()} />      
    </div>
  );
}

export default App;
