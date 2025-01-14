import React, { Component } from 'react';
import Item from './Item';
import { Table } from 'react-bootstrap';



export default class Tablee extends Component {

  state={
    title: "",
    language: "",
    Private: "",
    status: true,
}


change=async (e)=>{ 

  await  this.setState({
    [e.target.name] : e.target.value,
  });
   
    if(this.state.Private==="private")
      {
        this.setState({status : true,})
      }
    if(this.state.Private==="Public")
      {
        this.setState({status : false,});
      }
    }

    reset=()=>{
      this.setState({title: "",
      language: "",
      Private: "",
      status: null,})
    }

  

    render() {
     console.log(this.state);
      const {title,language,status,Private}=this.state
    
      return (

        <>
       <center> <div style={{  width:"auto" }}>
        
          <input name="title" className="mb-3" placeholder="repo title" value={title} onChange={this.change} />
           <br></br>
           <input name="language" className="mb-3" placeholder="repo language" value={language} onChange={this.change} />
           <br></br>

          <select  name="Private" value={Private} onChange={this.change} >
          <option value="select">rebo status</option>
          <option value="Public">Public</option>
           <option  value="private" >private</option>
          </select>

          <button type="submit" className="btn btn-info btn-rounded" onClick={this.props.adddata.bind(this,title,language,status,this.reset)} >Add Repo</button>

        </div>
        </center>
        <br></br>
        {/* style={{ width: '100%', border: "1px solid black" }} */}
        <Table striped bordered hover variant="dark">
          <thead>

            <tr style={{ background:"blue" }}>
              <th>Number</th>
              <th>Title</th>
              <th>Repo status</th>
              <th>Check</th>
              <th>is Private</th>
              <th>Language</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>


            {this.props.repo.map((item, Key) => {

              return <Item it={item} key={Key} n={Key} deletdata={this.props.deletdata} changestatus={this.props.updatedata} />
            })}

          </tbody>

        </Table>


      </>
    )
  }
  //}
}