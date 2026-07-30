

const card = (props) => {
  console.log(props)  // access property on console 
  console.log(props.user,props.age)

  return (
    <div>
        <div className="card">

            <img src={props.img} alt="" />
            <h1>{props.user} {props.age}</h1>
            <p>Legend Retired from Football..</p>
            <button>View Profile</button>

      </div>
    </div>
  )
}

export default card
