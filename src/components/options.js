import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const iconFree = <FontAwesomeIcon icon={faUserGraduate} />;
const iconBasic = <FontAwesomeIcon icon={faUser} />;
const iconEnterprise = <FontAwesomeIcon icon={faUserPlus} />;
const iconProfesional = <FontAwesomeIcon icon={faUserTie} />;

const options = [
  {
    name: "Free",
    price: 0,
    intro: "Uncommercial plan",
    li1: "Unlimited emails",
    li2: "Mailing list",
    li3: "Gmail inbox integration",
    li4: "Email Support",
    icon: iconFree,
  },
  {
    name: "Basic",
    price: 50,
    intro: "Basic plan for individual purpose",
    li1: "Unlimited emails",
    li2: "Mailing list",
    li3: "Gmail inbox integration",
    li4: "Email Support",
    icon: iconBasic,
  },
  {
    name: "Enterprise",
    price: 250,
    intro: "Small and medium companys",
    li1: "Unlimited emails",
    li2: "Mailing list",
    li3: "Gmail inbox integration",
    li4: "Email Support",
    icon: iconEnterprise,
  },
  {
    name: "Profesional",
    price: 450,
    intro: "Unlimited number of employees",
    li1: "Unlimited emails",
    li2: "Mailing list",
    li3: "Gmail inbox integration",
    li4: "Email Support",
    icon: iconProfesional,
  },
];
export default options;
