import React from 'react';
function MainPage(){
    
    const [details,setDetails]=React.useState([]);
    const[id_display,setIdDisplay]=React.useState({});
    const[view,setView]=React.useState("one");
    const display=async (e)=>{
        setView("all");
        e.preventDefault();
        try{
        fetch("http://localhost:4040/show")
        .then(res=>res.json())
        .then(data=>setDetails(prevData=>prevData.concat(data)));
        }catch(err){
            console.log(err);
        }
    }
    const displayById=async(e)=>{
        setView("one");
        e.preventDefault();
        let value=document.getElementById("movieid").value;
        console.log(value);
        try{
            fetch(`http://localhost:4040/show/${value}`)
            .then(res=>res.json())
            .then(data=>{setIdDisplay(prev=>data);console.log("da",data)});
            }catch(err){
                console.log(err);
            }
    }
    const All=()=>{
        
        return(
            details.map(entry=>{
                return(
                    <tr>
                    <td>{entry._id}</td>
                    <td>{entry.name}</td>
                    <td>{entry.year}</td>
                    <td>{entry.director}</td>
                    <td>{entry.cast}</td>
                    </tr>
                )
            })
        )
    }
    const One=()=>{
        
        return(
            <tr>
                    <td>{id_display._id}</td>
                    <td>{id_display.name}</td>
                    <td>{id_display.year}</td>
                    <td>{id_display.director}</td>
                    <td>{id_display.cast}</td>
             </tr>
        )
    }
    
    return(
        <div>
            <form >
                <div className="m-2">
                    <label htmlFor="Movie ID..">Enter ID:</label>
                    <input type="text" id="movieid" placeholder="Enter Movie ID." className="ml-2 "/>
                    <span><button type="submit" className="btn btn-secondary ml-2 btn-sm" onClick={(e)=>displayById(e)}>Search</button></span>
                </div>
            </form>
            <h1>OR</h1>
            <button className="btn btn-primary" onClick={(e)=>display(e)}>Display all</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Year Released</th>
                        <th scope="col">Director</th>
                        <th scope="col">Cast</th>
                     </tr>
                </thead>
                <tbody>
                    {view==="all"?<All/>:<One/>}
                   
                </tbody>
            </table>
            
        </div>
    )
}
export default MainPage;