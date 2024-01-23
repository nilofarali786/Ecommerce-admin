import { useState } from "react"

export default function  Home (props){
   var emailbox=undefined
   var passbox= undefined

   var[msg, setmsg]=useState()
   var [isloding,setlodind]=useState(true)

 var save=(event)=>{
      
        const data={ 

                  user:emailbox.value,
                  password:passbox.value


        }
        fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/adminlogin",{
            method:'POST',
          headers:{

                "Content-Type": 'application/json'

          },
          body:JSON.stringify(data)
          


        }).then(respones=>respones.json()).then(resdata=>{
            // console.log(resdata)
             setmsg(resdata.msg)
           if(resdata.status){
                props.chg({loging:true, token:resdata.token})

           }
           else
           props.chg({loging:false, token:undefined})
            


        })
        


    event.preventDefault()

 }
  


  return<>
{props.log?<><h1 className="alert-warning text-center"> hello  home  component</h1>
<img src="mall.jpg"></img>
</>:<>
 <form onSubmit={save}>
 <div className=" row mt-3">
<div className=" col-6">
<input type="email" className=" form-control"  ref={ob=>emailbox=ob} placeholder="enter your email"></input>
</div>
<div className=" col-6">
<input type="password"  className=" form-control"   ref={ob=> passbox=ob} placeholder="enter your password"></input>
</div>
</div>

    <br></br>
<div className=" row">&nbsp;&nbsp;
<div className=" col-6">
 <button className="btn btn-warning btn-lg"> login</button>
 <b className="text text-danger">{msg}</b> 
 

</div>
<div className=" col-6">
<b></b>
</div>
</div>
</form></>}

  </>






}


  
  






