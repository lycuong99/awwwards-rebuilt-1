import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const casesData = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formula for your skin's unique needs",
    img: "curology-min",
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for your next venture",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
  },
];
const Cases = () => {
  return (
    <div className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="case-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="case-arrow next">
            <CasesNext />
          </div>
        </div>

        <div className="row">
          {casesData.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span> {caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-img">
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
