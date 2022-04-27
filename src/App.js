import "./App.css";
import { Navbar } from "./components/Navbar";
import Card from "./components/Card";
function App() {
  let products = [
    {
      id: "1",
      title: "product 1",
      price: "100",
      btnTitle: "link1",
      bgColor: "bg-danger",
      img : "efgrty.jpg"
    },
    {
      id: "2",
      title: "product 2",
      price: "200",
      btnTitle: "link2",
      bgColor: "bg-light",
      img : "c2.jpg"
    },
    {
      id: "3",
      title: "product 3",
      price: "300",
      btnTitle: "link3",
      bgColor: "bg-secondary",
      img : "c1.jpg"
    },
    {
      id: "4",
      title: "product 4",
      price: "400",
      btnTitle: "link4",
      bgColor: "bg-primary",
      img : "c3.jpg"
    },
  ];

  let cards =
    products &&
    products?.map((product, index) => {
      return <Card key={index} {...product} />;
    });
  return (
    <>
      <Navbar />
      <div className="container bg-light ">
        <div className="row mt-3 text-center">{cards}</div>
      </div>
    </>
  );
}

export default App;
