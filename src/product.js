import { useEffect, useRef, useState } from "react"

export default function  Pro (props){

  const [catagorys,setcatagorys]=useState([])
  const [brands,setbrand]=useState([])
     var [products,setproducts]=useState([])

         var proname=undefined
         var proprice=undefined
         var caty=undefined
         var brd=undefined
         var filesbox=undefined

      
      useEffect(()=>{

       fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/api/category/list",{

               headers :{
                      'Content-Type':"application/json",
                      authorization :'Bearer '+ props.token,
                      }
               }).then(respones=>respones.json())
               .then(data=>{
                   setcatagorys(data)

                   fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/api/brand/list",{

                   headers :{
                          'Content-Type':"application/json",
                          authorization :'Bearer '+ props.token,
                          }
                   }).then(respones=>respones.json())
                   .then(data=>{

                    //console.log(data)
                    setbrand(data)



                    fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/api/product/list",{
                      headers:{
                       authorization :"Bearer "+props.token,
                          "Content-Type":'application/json'
         
         
                      }
         
         
         
         
                   }).then(respones=>respones.json())
                   .then(data=>{
                     setproducts(data)
                   })
                  })
    })

},[])

      var add=(event)=>{

        event.preventDefault()

             var  fdata = new FormData()
             fdata.append("prod_name",proname.value)
             fdata.append("prod_price",proprice.value)
             fdata.append("prod_cate",caty.value)
            fdata.append("prod_brand",brd.value)
             fdata.append("prod_image",filesbox.files[0])
             
               
        fetch("https://itstack-ecommerce-d13f8b000cca.herokuapp.com/api/product/save",{
              method:'POST',
             headers:{ 
                    
                  authorization : "Bearer " + props.token
               },
                 body:fdata
            }).then(response=>response.json())
               .then(data=>{

                 setproducts ([...products,data.product])



               })

         
       
      }
 


    


     
     

   return<>
 <h1 className="alert-warning text-center"> hello product component</h1>
 <form onSubmit={add}>
 <div className="row mt-3">
<div className="col-6">
<input type="text" className="form-control" ref={ ob=>proname=ob} placeholder="enter your product name"></input>

</div>
<div className="col-6">
<input type="file"  ref={ob=>filesbox=ob} placeholder = "enter the image" className=" form-control"></input>

</div>
 </div>
 <div className=" row mt-3">
<div className="col-6">
<input type="number" className=" form-control" ref={ob=>proprice=ob} placeholder="enter your product price"></input>
</div>
<div className="col-6">
<select className="form-control" ref={ob=>caty=ob}>
  <option value=""> choose your catagory</option>
  {catagorys.map(ob=><option value={ob._id}>{ob.cate_name}</option>)}
</select>

</div>
 </div>
 <div className=" row mt-3">
<div className="col-6">

 <select className="form-control"  ref={ob=>brd=ob}>
  <option value=" "> choose your brand</option>
  {brands.map(ob=><option value={ob._id}>{ob.brand_name}</option>)}
 </select>
</div>
<div className="col-6">

<button className="btn btn-success"> save</button>

</div>
 </div>

 </form>
  
  <table className="table table-warning">
 <thead>
<tr>
<th>so no</th>
<th> name</th>
<th> image</th>
<th>price</th>
<th> catagory</th>
<th> brand</th>





</tr>
</thead>
<tbody>
{products.map((ob,i)=><tr>
 <td>{i+1}</td>
 <td>{ob.prod_name}</td>
 <td><img src={"data:image/png;base64, "+ob.prod_image} height="100" width="100"></img></td>
 <td>{ob.prod_price}</td>
 <td>{catagorys.find(ct=>ct._id==ob.prod_cate).cate_name}</td>
 <td>{brands.find(bd=>bd._id==ob.prod_brand).brand_name}</td>
 



</tr>



)}


</tbody>

 


  </table>
 
 
 
 
 
 
 </>
 
 }
