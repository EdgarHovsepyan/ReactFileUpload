import React from 'react'

const ImageContent = ({ path, filename }) => {
    return (
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <h3 className="text-center">
                    {filename}
                </h3>
                <img src={path} className="img-fluid" alt="Responsive image" />

            </div>
        </div>
    )
}



export default ImageContent
