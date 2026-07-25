import React from 'react'
import { Bookmark  }  from 'lucide-react'

function card(props) {
  // console.log(props.company)
  return (
    <div className='card'>

         <div>

           <div className='top'>

            <img src={props.logo} alt="" />

            <button>Save <Bookmark size={20} /></button>

          </div>

          <div className='center'>

             <h3>{props.company} <span>{props.post}</span></h3>
             <h2>{props.pos }</h2>

             <div id='tag'>  
                <h4>{props.t1}</h4>
                <h4>{props.t2}</h4>
             </div>

          </div>
          
         </div>

          <div className='bottom'>

            <div>

              <h3>{props.pe}</h3>
              <p>{props.loc}</p>

            </div>

            <div>

              <button>Apply now</button>

            </div>

          </div>
      </div>
  )
}

export default card
