function  WomenCollection(props) {
    const {title,image1,image2,image3,image4,image5}=props.ladiesFashion
    return ( <div>

         <div className="collectionSection">
            <h5>{title}</h5>
            <div className="BannerBox">
          <img src="assets/Labiesbannner.jpg" alt="banner" />
        </div>
            <div className="mensCollections">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
                <img src={image5} alt="" />
            </div>
           
          
        </div> 
    </div> );
}

export default WomenCollection;