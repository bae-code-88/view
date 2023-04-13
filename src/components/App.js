import "./App.css";
import options from "./options";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const listx = <FontAwesomeIcon icon={faCheck} />;
  return (
    <>
      <div className="App">
        <div className="intro">
          <h1>Pricing plans</h1>
          <p>Choose best plan for You and Your company!</p>
        </div>

        <section className="tables">
          {options.map((item, index) => {
            return (
              <div className="price_table" key={index}>
                <div className="icon">{item.icon}</div>
                <div className="pricing_example_txt">
                  <h2>${item.price}</h2>
                  <h2>{item.name}</h2>
                </div>
                <h4>{item.intro}</h4>
                <div className="underline"></div>

                <ul className="options fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-faCheck">{listx}</i>
                    </span>
                    {item.li1}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-faCheck">{listx}</i>
                    </span>
                    {item.li2}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-faCheck">{listx}</i>
                    </span>
                    {item.li3}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-faCheck">{listx}</i>
                    </span>
                    {item.li4}
                  </li>
                </ul>

                <button className="btn">Select plan</button>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default App;
