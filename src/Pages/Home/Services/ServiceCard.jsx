import React from 'react'

function ServiceCard({ service }) {
    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-6">
            <figure><img src={img} /></figure>
            <div className="card-body relative">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="card-actions justify-between flext absolute bottom-0">
                    <div className="text-orange-500 font-bold">Price:{price}</div>
                    <button>
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard