import {Carousel} from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner(){
    return (
        
        <div className="relative">
    
            <div className="absolute w-full h-32 bg-gradient-to-t from-black to-transparent bottom-0 z-30" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                interval={4000}>
                <div>
                    <img className="h-80" loading="lazy"  src="https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-template_106176-1544.jpg?size=626&ext=jpg&ga=GA1.1.1656728899.1688666583&semt=ais"/>

                </div>


                <div>
                    <img className="h-80" loading="lazy" src="https://img.freepik.com/free-vector/promotion-fashion-banner_1188-138.jpg?size=626&ext=jpg&ga=GA1.1.1656728899.1688666583&semt=ais"/>
                    
                </div>


                <div>
                    <img className="h-80" loading="lazy" src="https://img.freepik.com/free-vector/modern-sale-banner-with-text-space-area_1017-27331.jpg"/>
                    
                </div>



                <div>
                    <img className="h-80" loading="lazy" src="https://img.freepik.com/free-vector/new-arrival-template-your-online-store_1361-1293.jpg?w=900&t=st=1688666623~exp=1688667223~hmac=801adbe04d6fe11c9950ad67dae797d7dc4e0d9a8cf9d851a1b5124a6ae3173a"/>
                    
                </div>



                <div>
                    <img className="h-80" loading="lazy" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/watch-sale-ad-promote-template-design-7690eb14f98018ce92ab0a7691be3a5b_screen.jpg?ts=1596463884"/>
                    
                </div>

            </Carousel>
  

        </div>
    )
}
export default Banner; 
