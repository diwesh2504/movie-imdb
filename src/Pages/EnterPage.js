import React from 'react';
function EnterPage(){
    const handleSubmit=async (e)=>{
        e.preventDefault();
        
        fetch("http://localhost:4040/post",{
            method:"POST",
            body:JSON.stringify({
                name:document.getElementById("name").value,
                director:document.getElementById("director").value,
                year:document.getElementById("year").value,
                id:document.getElementById("id-movie").value,
                cast:document.getElementById("cast").value
            }),
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        }).then(res=>res.json())
        .catch(err=>console.log(err))
    }
    return(
        <>
        <div className="jumbotron">
           <h1>Enter Movie Details</h1> 
        </div>
        <div className="row">
            <div className="col-2"></div>
            <div className="col">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Movie Name.."/>
               </div>
                <div className="form-group">
                    <label htmlFor="director">Director</label>
                    <input type="text" className="form-control" id="director" placeholder="Directed By.."/>
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year Released</label>
                    <input type="text" className="form-control" id="year" placeholder=""/>
                </div>
                <div className="form-group">
                    <label htmlFor="id-movie">ID</label>
                    <input type="text" className="form-control" id="id-movie" placeholder="Movie ID"/>
                </div>
                <div className="form-group">
                    <label htmlFor="cast">Cast</label>
                    <input type="text" className="form-control" id="cast" placeholder="Actors.."/>
                </div>
                <div className="form-group">
                    
                    <input type="submit" className="btn btn-primary " id="submit" />
                </div>
            </form>

            </div>
            <div className="col"></div>
        </div>
        </>
    )

}
export default EnterPage;