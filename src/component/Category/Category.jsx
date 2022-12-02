import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Category = () => {
    const[data, setData] = useState([]);

useEffect(()=>{
  const apiData = async ()=>{
            let api = await axios.get("http://localhost:3005/property")
            let res = await api.data
            setData(res)
            console.log(res);
         }
         apiData();

    },[])

  return (
    <div>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <h1 className="mb-3">Property Types</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">

                    {
                        data.map((val)=>{
                            return <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" key={val.id}>
                            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                                <div className="rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src={`assets/img/${val.img}`} alt="Icon"/>
                                    </div>
                                    <h6>{val.name}</h6>
                                    <span>{val.number}</span>
                                </div>
                            </a>
                        </div>

                        })
                    }
                    
                   
                </div>
            </div>
        </div>
    </div>
  )
}
export default Category;
