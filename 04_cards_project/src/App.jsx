
import Card from './components/card.jsx'



function App() {

  const jobOpenings = [
  {
    id: 1,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/960px-Google_%22G%22_logo.svg.png",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bengaluru, India",
  },
  {
    id: 2,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png",
    company: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India",
  },
  {
    id: 3,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/960px-Amazon_icon.svg.png",
    company: "Amazon",
    datePosted: "1 day ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Chennai, India",
  },
  {
    id: 4,
    brandLogo: "https://imgs.search.brave.com/6mt-yZhDq2qbTgKnCdL2WmJ4Xrf1iFKYWBT-hORuk-0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTEvTWV0YS1FbWJs/ZW0tNzAweDM5NC5w/bmc",
    company: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote",
  },
  {
    id: 5,
    brandLogo: "https://imgs.search.brave.com/qgGgR7QVWuFjAuivw7t9W5iEjXoKnZhzEiB510DSVgM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NDk2LzI0NS9zbWFs/bC9pb3MtaWNvbi1s/b2dvLXNvZnR3YXJl/LWFwcGxlLXN5bWJv/bC1kZXNpZ24tbW9i/aWxlLWlsbHVzdHJh/dGlvbi1mcmVlLXZl/Y3Rvci5qcGc",
    company: "Apple",
    datePosted: "6 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Cupertino, USA",
  },
  {
    id: 6,
    brandLogo: "https://imgs.search.brave.com/wy5AwQuJ4OPQDQD3Obzm_IA-GVfWL0ikd3LVY2t26_8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxMS9zbWFs/bC9uZXRmbGl4LWxv/Z28tdHJhbnNwYXJl/bnQtYmFja2dyb3Vu/ZC1mcmVlLXBuZy5w/bmc",

    company: "Netflix",
    datePosted: "Today",
    post: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Los Gatos, USA",
  },
  {
    id: 7,
    brandLogo: "https://imgs.search.brave.com/vnj0Jm8PYjcK-FfltqQNh2ecHefuex1yiPn_nGmYmTw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMwLzIvbnZpZGlh/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTMwMTIz/My5wbmc",
    company: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hr",
    location: "Pune, India",
  },
  {
    id: 8,
    brandLogo: "https://imgs.search.brave.com/Oxo5RS_5Rny8mVNrNVU6qdlyKeKOij550oDInbhSbZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzAvMi9hZG9iZS1y/ZWFkZXItbG9nby1w/bmdfc2Vla2xvZ28t/MzUwNi5wbmc ",
    company: "Adobe",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Noida, India",
  },
  {
    id: 9,
    brandLogo: "https://imgs.search.brave.com/d7GOxY5G8qo6t-mvrtnd8_lBM-kUafMp-Nhd1ISado0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTU4LzgwMS9zbWFs/bC9vcGVuYWktY2hh/dGdwdC1sb2dvLWlj/b24tZnJlZS1wbmcu/cG5n",

    company: "OpenAI",
    datePosted: "2 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "San Francisco, USA",
  },
  {
    id: 10,
    brandLogo: "https://imgs.search.brave.com/atFeEvC46lMzMJt0vhkGOF4hHd1Tp5g_PCaDFzVm0_0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE4LzUxLzc5LzE5/LzM2MF9GXzE4NTE3/OTE5OTJfaWFZNFRr/OTlMNmpha1Y0UlI1/TVhNYWFtbXRJVGhn/QnQuanBn",
    company: "Uber",
    datePosted: "3 days ago",
    post: "Mobile App Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Mumbai, India",
  }
];
  console.log(jobOpenings);
  
  return (
    <div className='parent'>

      {jobOpenings.map(function(elem,idx){

        return <div key = {idx}>

          <Card  company= {elem.company} post = {elem.datePosted} pos = {elem.post} logo ={elem.brandLogo} t1 = {elem.tag1} t2 = {elem.tag2} pe = {elem.pay} loc ={elem.location}/>
        </div>

      })}

    </div>
  )
}

export default App
