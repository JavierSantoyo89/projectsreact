import { useEffect } from "react";
import '../../index.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {Header,Footer} from "@components/parcials";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import img11 from "../../assets/11.jpg";
import img12 from "../../assets/12.jpg";
import img13 from "../../assets/13.jpg";
import img14 from "../../assets/14.jpg";
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];
//* Crete random size of images
function randomSize(min = 550, max = 800) {
  min = Math.ceil(150);
  max = Math.floor(300);
  return Math.floor(Math.random() * (max - min) + min);
}

//* Shuffle images
const shuffle = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};
const shuffleImages = shuffle(images);
// console.log(shuffleImages);

const portfolioImages = shuffleImages.map((image) => {
      return <img key={image + 1} src={image} alt="image" width={randomSize()} />;
});
// console.log(portfolioImages);

export const Home = () => {
  useEffect(() => {
              toastyfyLoadingPage();
  }, []);

  function toastyfyLoadingPage() {
    toast("Busca el proyecto que mas te guste!!!");
  }
  return (
    <main  className=" min-w-min">
      <Header />
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          100: 1,
          350: 2,
          750: 3,
          900: 5,
          1200: 6,
          1500: 7,
          1800: 8,
          2100: 9,
          2400: 10,
        }}
      >
        <Masonry>{portfolioImages}</Masonry>
      </ResponsiveMasonry>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  )
};
