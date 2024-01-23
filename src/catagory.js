import { useEffect, useState } from "react"

export default function  Cat  (props){

  var catebox=undefined;
  const [catagorys,setcatagorys]=useState([])
  var [loddata,setloddata]=useState(true)
  
    useEffect(()=>{
                setloddata(false)

       fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/api/category/list",{
       
        headers:{

               "content-type" :'application/json',
               authorization :"Bearer "+props.token



        }
        
      }).then(respones=>respones.json()).then(data=>{

           setcatagorys(data)


       })
    
  },[])
var save=(event)=>{

     const data={
             cate_name:catebox.value
            }
           
            fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/api/category/save",{
               method:"post",
            headers:{ authorization:"Bearer "+props.token,
                     "Content-type" :'application/json'



            },
             body:JSON.stringify(data)
             


            }).then(respones=>respones.json()).then(rspdata=>{
                if(rspdata.status){
                  setcatagorys([...catagorys,rspdata.category])
                }
            
            })
  event.preventDefault()
}
  
    
         
  

  return<>
   <h1 className="alert-warning text-center"> hello catagory component</h1>
   <form onSubmit={save}>
   <div className=" row mt-3">
   <div className=" col-6">
    <input type="text" className="form-control" ref={ob=>catebox=ob} placeholder="enter your catogary"></input>
    </div>

    <div className=" col-6">
    
    <button className="btn btn-warning"> save</button> &nbsp;go&nbsp;
    {loddata?<button className="text text-warning"> data is loding</button>:""}
    </div>
    </div>


   </form>

       <table className=" table table-warning">
       <thead>
       <tr>
        <th>SO.NO</th>
        <th>catagoryname</th>
       </tr>



       </thead>
        <tbody>
        {catagorys.map((ob,i)=><tr>
          <td>{i+1}</td>  
          <td>{ob.cate_name}</td>
         


        </tr>)}


        </tbody>


       </table>




  </>






}