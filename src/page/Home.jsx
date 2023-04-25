import './Home.css';
import card1 from "../images/beer1.jpg";
import card2 from "../images/beer3.jpg";
import card3 from "../images/beer6.jpg";

function Home({onNav}) {
    return (
    <>
    <div class ="main__card">
        <div class="card">
            
                        <h3 class="card__title">New York</h3>
                        <img src={card1} alt="beer with snack" class="card__pic"/>
                        <div class="card__text">Craft beer store in New York City offers a wide variety of locally brewed and imported beers, 
                        ranging from classic styles to experimental brews. The store also offers beer tastings, tap takeovers, 
                        and other events that allow customers to sample new and unique beers while also learning more about the brewing process and the craft beer industry. 
                        </div>
                            <a href="#/order" class="card__cta" onClick={onNav}>Order</a>
                    </div>
                    <div class="card">
                        <h3 class="card__title">Seattle</h3>
                        <img src={card2} alt="beer with dark background" class="card__pic"/>
                        <div class="card__text">Seattle, also known as the "Emerald City," is a hub for craft beer enthusiasts. 
                        There are several craft beer stores in Seattle that offer a vast selection of unique and flavorful beers from local breweries and beyond. 
                        These stores not only offer a wide range of craft beer options, but they also provide a welcoming and knowledgeable environment for customers to explore and learn about different types of beer.
                        </div>
                          <a href="#/order" class="card__cta" onClick={onNav}>Order</a>
                    </div>
                    <div class="card">
                        <h3 class="card__title"> Washington D.C.</h3>
                        <img src={card3} alt="beer under sunlight" class="card__pic"/>
                        <div class="card__text"> Washington D.C. is home to a variety of craft beer stores that offer a diverse selection of local and regional brews as well as international imports. 
                        These stores cater to the tastes of beer enthusiasts and connoisseurs alike, offering a range of beer styles and flavors to suit every palate.</div>
                     
                         <a href="#/order" class="card__cta" onClick={onNav}>Order</a>
                           
                    </div>
                    </div>
                    </>
                    
    );
}
export default Home;