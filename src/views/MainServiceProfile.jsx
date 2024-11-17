import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import filterIcon from "/filter-icon.svg";
import bagIcon from "/bag-icon.svg";
import bagIconWhite from "/bag-icon-white.svg";
import bagIconBlack from "/bag-icon-black.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import studentDemo from "/student-demo-image.jpg"


const ServiceProfile = () => {
  const navigate = useNavigate();
  const toProfile = () => { 
    navigate("/serviceProfile/profile");
  }
  const toIncident = () => {
    navigate("/incidentReport")
  }

  const toPrevoidManagement = () => {
    navigate("/prevoidManagement")
  }

  const toManagement = () => {
    navigate("/management")
  }

  const [students, setStudents] = useState([
    { id: 1, name: "Adedoyin Aderonke", email: "themba@gmail.com", address: "12, Beever street Olusoga Houston", contact: "08035567812", date: '12/04/24', dob: "1996-10-21", age: "24", riskLevel: "low", image: studentDemo, youngPersons: [
      {id: "001", name: "James", age: "21 years 3months", referralDate: "05/07/2022"},
      {id: "002", name: "Ayo", age: "26 years 4months", referralDate: "06/06/2024"},
      {id: "003", name: "Sally", age: "38 years 6days", referralDate: "06/07/2021"},
      {id: "004", name: "Tolu", age: "25 years 21days", referralDate: "12/07/2011"},
      {id: "005", name: "Eric", age: "22 years 6days", referralDate: "02/09/2021"},
      {id: "006", name: "Titi", age: "38 years 12days", referralDate: "01/11/2020"},
      {id: "007", name: "Aina", age: "29 years 2months", referralDate: "21/10/2023"}
    ], incidentReport: [
      {id: "001", dateOfIncident: "5/01/2022", timeOfIncident: "05:27", causeOfConcern: "Theft", createdBy: "Kunle"}, 
      {id: "002", dateOfIncident: "11/06/2021", timeOfIncident: "15:11", causeOfConcern: "Health", createdBy: "Shola"}, 
      {id: "003", dateOfIncident: "03/11/2020", timeOfIncident: "11:50", causeOfConcern: "Abuse", createdBy: "Keni"}, 
      {id: "004", dateOfIncident: "22/09/2019", timeOfIncident: "17:11", causeOfConcern: "Health", createdBy: "James"}, 
      {id: "005", dateOfIncident: "18/06/2021", timeOfIncident: "19:13", causeOfConcern: "Theft", createdBy: "Adams"}, 
      {id: "006", dateOfIncident: "07/02/2024", timeOfIncident: "10:11", causeOfConcern: "Health", createdBy: "Ayo"}, 
      {id: "007", dateOfIncident: "24/04/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Lola"}, 
      {id: "010", dateOfIncident: "23/04/2021", timeOfIncident: "20:11", causeOfConcern: "Health", createdBy: "Ronke"}, 
      {id: "011", dateOfIncident: "04/09/2021", timeOfIncident: "11:19", causeOfConcern: "Health", createdBy: "Kemi"}, 
      {id: "012", dateOfIncident: "21/03/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Aina"},  
    ], prevoidManagement: [{serviceId: "001", room: "13", intendedVoidDate: "5/01/2025", createdBy: "Shola"}, {serviceId: "002", room: "03", intendedVoidDate: "11/06/2026", createdBy: "James"}, {serviceId: "003", room: "20", intendedVoidDate: "03/11/2020", createdBy: "Keni"}, {serviceId: "004", room: "40", intendedVoidDate: "22/04/2024", createdBy: "Adams"}, {serviceId: "005", room: "11", intendedVoidDate: "22/09/2021", createdBy: "Kunle"}, {serviceId: "006", room: "08", intendedVoidDate: "18/01/2025", createdBy: "Shola"}, {serviceId: "007", room: "01", intendedVoidDate: "06/01/2027", createdBy: "Aina"}], maintenance: [],
    },

    { id: 2, name: "Olorunsogo Olawale", email: "wale@gmail.com", address: "2, Coker street Olusoga Houston", contact: "08035567812", date: '15/04/24', dob: "2000-02-11", age: "25", riskLevel: "low", image: studentDemo, youngPersons: [
      {id: "001", name: "James", age: "21 years 3months", referralDate: "05/07/2022"},
      {id: "002", name: "Ayo", age: "26 years 4months", referralDate: "06/06/2024"},
      {id: "003", name: "Sally", age: "38 years 6days", referralDate: "06/07/2021"},
      {id: "004", name: "Tolu", age: "25 years 21days", referralDate: "12/07/2011"},
      {id: "005", name: "Eric", age: "22 years 6days", referralDate: "02/09/2021"},
      {id: "006", name: "Titi", age: "38 years 12days", referralDate: "01/11/2020"},
      {id: "007", name: "Aina", age: "29 years 2months", referralDate: "21/10/2023"}
    ], incidentReport: [
      {id: "001", dateOfIncident: "5/01/2022", timeOfIncident: "05:27", causeOfConcern: "Theft", createdBy: "Kunle"}, 
      {id: "002", dateOfIncident: "11/06/2021", timeOfIncident: "15:11", causeOfConcern: "Health", createdBy: "Shola"}, 
      {id: "003", dateOfIncident: "03/11/2020", timeOfIncident: "11:50", causeOfConcern: "Abuse", createdBy: "Keni"}, 
      {id: "004", dateOfIncident: "22/09/2019", timeOfIncident: "17:11", causeOfConcern: "Health", createdBy: "James"}, 
      {id: "005", dateOfIncident: "18/06/2021", timeOfIncident: "19:13", causeOfConcern: "Theft", createdBy: "Adams"}, 
      {id: "006", dateOfIncident: "07/02/2024", timeOfIncident: "10:11", causeOfConcern: "Health", createdBy: "Ayo"}, 
      {id: "007", dateOfIncident: "24/04/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Lola"}, 
      {id: "010", dateOfIncident: "23/04/2021", timeOfIncident: "20:11", causeOfConcern: "Health", createdBy: "Ronke"}, 
      {id: "011", dateOfIncident: "04/09/2021", timeOfIncident: "11:19", causeOfConcern: "Health", createdBy: "Kemi"}, 
      {id: "012", dateOfIncident: "21/03/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Aina"},  
    ], prevoidManagement: [{serviceId: "001", room: "13", intendedVoidDate: "5/01/2025", createdBy: "Shola"}, {serviceId: "002", room: "03", intendedVoidDate: "11/06/2026", createdBy: "James"}, {serviceId: "003", room: "20", intendedVoidDate: "03/11/2020", createdBy: "Keni"}, {serviceId: "004", room: "40", intendedVoidDate: "22/04/2024", createdBy: "Adams"}, {serviceId: "005", room: "11", intendedVoidDate: "22/09/2021", createdBy: "Kunle"}, {serviceId: "006", room: "08", intendedVoidDate: "18/01/2025", createdBy: "Shola"}, {serviceId: "007", room: "01", intendedVoidDate: "06/01/2027", createdBy: "Aina"}], maintenance: [],
    },

    { id: 3, name: "Mafoluku Arike", email: "mafoluku@gmail.com", address: "30, Cole street Olusoga Houston", contact: "08035567812", date: '11/04/24', dob: "1997-06-24", age: "23", riskLevel: "low", image: studentDemo, youngPersons: [
      {id: "001", name: "James", age: "21 years 3months", referralDate: "05/07/2022"},
      {id: "002", name: "Ayo", age: "26 years 4months", referralDate: "06/06/2024"},
      {id: "003", name: "Sally", age: "38 years 6days", referralDate: "06/07/2021"},
      {id: "004", name: "Tolu", age: "25 years 21days", referralDate: "12/07/2011"},
      {id: "005", name: "Eric", age: "22 years 6days", referralDate: "02/09/2021"},
      {id: "006", name: "Titi", age: "38 years 12days", referralDate: "01/11/2020"},
      {id: "007", name: "Aina", age: "29 years 2months", referralDate: "21/10/2023"}
    ], incidentReport: [
      {id: "001", dateOfIncident: "5/01/2022", timeOfIncident: "05:27", causeOfConcern: "Theft", createdBy: "Kunle"}, 
      {id: "002", dateOfIncident: "11/06/2021", timeOfIncident: "15:11", causeOfConcern: "Health", createdBy: "Shola"}, 
      {id: "003", dateOfIncident: "03/11/2020", timeOfIncident: "11:50", causeOfConcern: "Abuse", createdBy: "Keni"}, 
      {id: "004", dateOfIncident: "22/09/2019", timeOfIncident: "17:11", causeOfConcern: "Health", createdBy: "James"}, 
      {id: "005", dateOfIncident: "18/06/2021", timeOfIncident: "19:13", causeOfConcern: "Theft", createdBy: "Adams"}, 
      {id: "006", dateOfIncident: "07/02/2024", timeOfIncident: "10:11", causeOfConcern: "Health", createdBy: "Ayo"}, 
      {id: "007", dateOfIncident: "24/04/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Lola"}, 
      {id: "010", dateOfIncident: "23/04/2021", timeOfIncident: "20:11", causeOfConcern: "Health", createdBy: "Ronke"}, 
      {id: "011", dateOfIncident: "04/09/2021", timeOfIncident: "11:19", causeOfConcern: "Health", createdBy: "Kemi"}, 
      {id: "012", dateOfIncident: "21/03/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Aina"},  
    ], prevoidManagement: [{serviceId: "001", room: "13", intendedVoidDate: "5/01/2025", createdBy: "Shola"}, {serviceId: "002", room: "03", intendedVoidDate: "11/06/2026", createdBy: "James"}, {serviceId: "003", room: "20", intendedVoidDate: "03/11/2020", createdBy: "Keni"}, {serviceId: "004", room: "40", intendedVoidDate: "22/04/2024", createdBy: "Adams"}, {serviceId: "005", room: "11", intendedVoidDate: "22/09/2021", createdBy: "Kunle"}, {serviceId: "006", room: "08", intendedVoidDate: "18/01/2025", createdBy: "Shola"}, {serviceId: "007", room: "01", intendedVoidDate: "06/01/2027", createdBy: "Aina"}], maintenance: [],
    },

    { id: 4, name: "Afolabi Ayomide", email: "mide@gmail.com", address: "5, Day street Olusoga Houston", contact: "08035567812", date: '15/04/24', dob: "1999-07-28", age: "22", riskLevel: "medium", image: studentDemo, youngPersons: [
      {id: "001", name: "James", age: "21 years 3months", referralDate: "05/07/2022"},
      {id: "002", name: "Ayo", age: "26 years 4months", referralDate: "06/06/2024"},
      {id: "003", name: "Sally", age: "38 years 6days", referralDate: "06/07/2021"},
      {id: "004", name: "Tolu", age: "25 years 21days", referralDate: "12/07/2011"},
      {id: "005", name: "Eric", age: "22 years 6days", referralDate: "02/09/2021"},
      {id: "006", name: "Titi", age: "38 years 12days", referralDate: "01/11/2020"},
      {id: "007", name: "Aina", age: "29 years 2months", referralDate: "21/10/2023"}
    ], incidentReport: [
      {id: "001", dateOfIncident: "5/01/2022", timeOfIncident: "05:27", causeOfConcern: "Theft", createdBy: "Kunle"}, 
      {id: "002", dateOfIncident: "11/06/2021", timeOfIncident: "15:11", causeOfConcern: "Health", createdBy: "Shola"}, 
      {id: "003", dateOfIncident: "03/11/2020", timeOfIncident: "11:50", causeOfConcern: "Abuse", createdBy: "Keni"}, 
      {id: "004", dateOfIncident: "22/09/2019", timeOfIncident: "17:11", causeOfConcern: "Health", createdBy: "James"}, 
      {id: "005", dateOfIncident: "18/06/2021", timeOfIncident: "19:13", causeOfConcern: "Theft", createdBy: "Adams"}, 
      {id: "006", dateOfIncident: "07/02/2024", timeOfIncident: "10:11", causeOfConcern: "Health", createdBy: "Ayo"}, 
      {id: "007", dateOfIncident: "24/04/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Lola"}, 
      {id: "010", dateOfIncident: "23/04/2021", timeOfIncident: "20:11", causeOfConcern: "Health", createdBy: "Ronke"}, 
      {id: "011", dateOfIncident: "04/09/2021", timeOfIncident: "11:19", causeOfConcern: "Health", createdBy: "Kemi"}, 
      {id: "012", dateOfIncident: "21/03/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Aina"},  
    ], prevoidManagement: [{serviceId: "001", room: "13", intendedVoidDate: "5/01/2025", createdBy: "Shola"}, {serviceId: "002", room: "03", intendedVoidDate: "11/06/2026", createdBy: "James"}, {serviceId: "003", room: "20", intendedVoidDate: "03/11/2020", createdBy: "Keni"}, {serviceId: "004", room: "40", intendedVoidDate: "22/04/2024", createdBy: "Adams"}, {serviceId: "005", room: "11", intendedVoidDate: "22/09/2021", createdBy: "Kunle"}, {serviceId: "006", room: "08", intendedVoidDate: "18/01/2025", createdBy: "Shola"}, {serviceId: "007", room: "01", intendedVoidDate: "06/01/2027", createdBy: "Aina"}], maintenance: [],
    },

    { id: 5, name: "Olasunkami Ishola", email: "olashola@gmail.com", address: "22, Smith street Olusoga Houston", contact: "08035567812", date: '12/04/24', dob: "2001-01-30", age: "27", riskLevel: "low", image: studentDemo, youngPersons: [
      {id: "001", name: "James", age: "21 years 3months", referralDate: "05/07/2022"},
      {id: "002", name: "Ayo", age: "26 years 4months", referralDate: "06/06/2024"},
      {id: "003", name: "Sally", age: "38 years 6days", referralDate: "06/07/2021"},
      {id: "004", name: "Tolu", age: "25 years 21days", referralDate: "12/07/2011"},
      {id: "005", name: "Eric", age: "22 years 6days", referralDate: "02/09/2021"},
      {id: "006", name: "Titi", age: "38 years 12days", referralDate: "01/11/2020"},
      {id: "007", name: "Aina", age: "29 years 2months", referralDate: "21/10/2023"}
    ], incidentReport: [
      {id: "001", dateOfIncident: "5/01/2022", timeOfIncident: "05:27", causeOfConcern: "Theft", createdBy: "Kunle"}, 
      {id: "002", dateOfIncident: "11/06/2021", timeOfIncident: "15:11", causeOfConcern: "Health", createdBy: "Shola"}, 
      {id: "003", dateOfIncident: "03/11/2020", timeOfIncident: "11:50", causeOfConcern: "Abuse", createdBy: "Keni"}, 
      {id: "004", dateOfIncident: "22/09/2019", timeOfIncident: "17:11", causeOfConcern: "Health", createdBy: "James"}, 
      {id: "005", dateOfIncident: "18/06/2021", timeOfIncident: "19:13", causeOfConcern: "Theft", createdBy: "Adams"}, 
      {id: "006", dateOfIncident: "07/02/2024", timeOfIncident: "10:11", causeOfConcern: "Health", createdBy: "Ayo"}, 
      {id: "007", dateOfIncident: "24/04/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Lola"}, 
      {id: "010", dateOfIncident: "23/04/2021", timeOfIncident: "20:11", causeOfConcern: "Health", createdBy: "Ronke"}, 
      {id: "011", dateOfIncident: "04/09/2021", timeOfIncident: "11:19", causeOfConcern: "Health", createdBy: "Kemi"}, 
      {id: "012", dateOfIncident: "21/03/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Aina"},  
    ], prevoidManagement: [{serviceId: "001", room: "13", intendedVoidDate: "5/01/2025", createdBy: "Shola"}, {serviceId: "002", room: "03", intendedVoidDate: "11/06/2026", createdBy: "James"}, {serviceId: "003", room: "20", intendedVoidDate: "03/11/2020", createdBy: "Keni"}, {serviceId: "004", room: "40", intendedVoidDate: "22/04/2024", createdBy: "Adams"}, {serviceId: "005", room: "11", intendedVoidDate: "22/09/2021", createdBy: "Kunle"}, {serviceId: "006", room: "08", intendedVoidDate: "18/01/2025", createdBy: "Shola"}, {serviceId: "007", room: "01", intendedVoidDate: "06/01/2027", createdBy: "Aina"}], maintenance: [],
    },

    { id: 6, name: "Sanni Ajoke", email: "ajoke@gmail.com", address: "4, John street Olusoga Houston", contact: "08035567812", date: '14/04/24', dob: "2000-09-11", age: "23", riskLevel: "low", image: studentDemo, youngPersons: [
      {id: "001", name: "James", age: "21 years 3months", referralDate: "05/07/2022"},
      {id: "002", name: "Ayo", age: "26 years 4months", referralDate: "06/06/2024"},
      {id: "003", name: "Sally", age: "38 years 6days", referralDate: "06/07/2021"},
      {id: "004", name: "Tolu", age: "25 years 21days", referralDate: "12/07/2011"},
      {id: "005", name: "Eric", age: "22 years 6days", referralDate: "02/09/2021"},
      {id: "006", name: "Titi", age: "38 years 12days", referralDate: "01/11/2020"},
      {id: "007", name: "Aina", age: "29 years 2months", referralDate: "21/10/2023"}
    ], incidentReport: [
      {id: "001", dateOfIncident: "5/01/2022", timeOfIncident: "05:27", causeOfConcern: "Theft", createdBy: "Kunle"}, 
      {id: "002", dateOfIncident: "11/06/2021", timeOfIncident: "15:11", causeOfConcern: "Health", createdBy: "Shola"}, 
      {id: "003", dateOfIncident: "03/11/2020", timeOfIncident: "11:50", causeOfConcern: "Abuse", createdBy: "Keni"}, 
      {id: "004", dateOfIncident: "22/09/2019", timeOfIncident: "17:11", causeOfConcern: "Health", createdBy: "James"}, 
      {id: "005", dateOfIncident: "18/06/2021", timeOfIncident: "19:13", causeOfConcern: "Theft", createdBy: "Adams"}, 
      {id: "006", dateOfIncident: "07/02/2024", timeOfIncident: "10:11", causeOfConcern: "Health", createdBy: "Ayo"}, 
      {id: "007", dateOfIncident: "24/04/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Lola"}, 
      {id: "010", dateOfIncident: "23/04/2021", timeOfIncident: "20:11", causeOfConcern: "Health", createdBy: "Ronke"}, 
      {id: "011", dateOfIncident: "04/09/2021", timeOfIncident: "11:19", causeOfConcern: "Health", createdBy: "Kemi"}, 
      {id: "012", dateOfIncident: "21/03/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Aina"},  
    ], prevoidManagement: [{serviceId: "001", room: "13", intendedVoidDate: "5/01/2025", createdBy: "Shola"}, {serviceId: "002", room: "03", intendedVoidDate: "11/06/2026", createdBy: "James"}, {serviceId: "003", room: "20", intendedVoidDate: "03/11/2020", createdBy: "Keni"}, {serviceId: "004", room: "40", intendedVoidDate: "22/04/2024", createdBy: "Adams"}, {serviceId: "005", room: "11", intendedVoidDate: "22/09/2021", createdBy: "Kunle"}, {serviceId: "006", room: "08", intendedVoidDate: "18/01/2025", createdBy: "Shola"}, {serviceId: "007", room: "01", intendedVoidDate: "06/01/2027", createdBy: "Aina"}], maintenance: [],
    },

    { id: 7, name: "Idowu Labake", email: "idowulabake@gmail.com", address: "9, Elegant street Olusoga Houston", contact: "08035567812", date: '11/04/24', dob: "1996-12-29", age: "24", riskLevel: "low", image: studentDemo, youngPersons: [
      {id: "001", name: "James", age: "21 years 3months", referralDate: "05/07/2022"},
      {id: "002", name: "Ayo", age: "26 years 4months", referralDate: "06/06/2024"},
      {id: "003", name: "Sally", age: "38 years 6days", referralDate: "06/07/2021"},
      {id: "004", name: "Tolu", age: "25 years 21days", referralDate: "12/07/2011"},
      {id: "005", name: "Eric", age: "22 years 6days", referralDate: "02/09/2021"},
      {id: "006", name: "Titi", age: "38 years 12days", referralDate: "01/11/2020"},
      {id: "007", name: "Aina", age: "29 years 2months", referralDate: "21/10/2023"}
    ], incidentReport: [
      {id: "001", dateOfIncident: "5/01/2022", timeOfIncident: "05:27", causeOfConcern: "Theft", createdBy: "Kunle"}, 
      {id: "002", dateOfIncident: "11/06/2021", timeOfIncident: "15:11", causeOfConcern: "Health", createdBy: "Shola"}, 
      {id: "003", dateOfIncident: "03/11/2020", timeOfIncident: "11:50", causeOfConcern: "Abuse", createdBy: "Keni"}, 
      {id: "004", dateOfIncident: "22/09/2019", timeOfIncident: "17:11", causeOfConcern: "Health", createdBy: "James"}, 
      {id: "005", dateOfIncident: "18/06/2021", timeOfIncident: "19:13", causeOfConcern: "Theft", createdBy: "Adams"}, 
      {id: "006", dateOfIncident: "07/02/2024", timeOfIncident: "10:11", causeOfConcern: "Health", createdBy: "Ayo"}, 
      {id: "007", dateOfIncident: "24/04/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Lola"}, 
      {id: "010", dateOfIncident: "23/04/2021", timeOfIncident: "20:11", causeOfConcern: "Health", createdBy: "Ronke"}, 
      {id: "011", dateOfIncident: "04/09/2021", timeOfIncident: "11:19", causeOfConcern: "Health", createdBy: "Kemi"}, 
      {id: "012", dateOfIncident: "21/03/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Aina"},  
    ], prevoidManagement: [{serviceId: "001", room: "13", intendedVoidDate: "5/01/2025", createdBy: "Shola"}, {serviceId: "002", room: "03", intendedVoidDate: "11/06/2026", createdBy: "James"}, {serviceId: "003", room: "20", intendedVoidDate: "03/11/2020", createdBy: "Keni"}, {serviceId: "004", room: "40", intendedVoidDate: "22/04/2024", createdBy: "Adams"}, {serviceId: "005", room: "11", intendedVoidDate: "22/09/2021", createdBy: "Kunle"}, {serviceId: "006", room: "08", intendedVoidDate: "18/01/2025", createdBy: "Shola"}, {serviceId: "007", room: "01", intendedVoidDate: "06/01/2027", createdBy: "Aina"}], maintenance: [],
    },

    { id: 8, name: "Balogun Adeshina", email: "shina@gmail.com", address: "51, Rainbow street Olusoga Houston", contact: "08035567812", date: '12/04/24', dob: "1998-08-15", age: "26", riskLevel: "low", image: studentDemo, youngPersons: [
      {id: "001", name: "James", age: "21 years 3months", referralDate: "05/07/2022"},
      {id: "002", name: "Ayo", age: "26 years 4months", referralDate: "06/06/2024"},
      {id: "003", name: "Sally", age: "38 years 6days", referralDate: "06/07/2021"},
      {id: "004", name: "Tolu", age: "25 years 21days", referralDate: "12/07/2011"},
      {id: "005", name: "Eric", age: "22 years 6days", referralDate: "02/09/2021"},
      {id: "006", name: "Titi", age: "38 years 12days", referralDate: "01/11/2020"},
      {id: "007", name: "Aina", age: "29 years 2months", referralDate: "21/10/2023"}
    ], incidentReport: [
      {id: "001", dateOfIncident: "5/01/2022", timeOfIncident: "05:27", causeOfConcern: "Theft", createdBy: "Kunle"}, 
      {id: "002", dateOfIncident: "11/06/2021", timeOfIncident: "15:11", causeOfConcern: "Health", createdBy: "Shola"}, 
      {id: "003", dateOfIncident: "03/11/2020", timeOfIncident: "11:50", causeOfConcern: "Abuse", createdBy: "Keni"}, 
      {id: "004", dateOfIncident: "22/09/2019", timeOfIncident: "17:11", causeOfConcern: "Health", createdBy: "James"}, 
      {id: "005", dateOfIncident: "18/06/2021", timeOfIncident: "19:13", causeOfConcern: "Theft", createdBy: "Adams"}, 
      {id: "006", dateOfIncident: "07/02/2024", timeOfIncident: "10:11", causeOfConcern: "Health", createdBy: "Ayo"}, 
      {id: "007", dateOfIncident: "24/04/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Lola"}, 
      {id: "010", dateOfIncident: "23/04/2021", timeOfIncident: "20:11", causeOfConcern: "Health", createdBy: "Ronke"}, 
      {id: "011", dateOfIncident: "04/09/2021", timeOfIncident: "11:19", causeOfConcern: "Health", createdBy: "Kemi"}, 
      {id: "012", dateOfIncident: "21/03/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Aina"},  
    ], prevoidManagement: [{serviceId: "001", room: "13", intendedVoidDate: "5/01/2025", createdBy: "Shola"}, {serviceId: "002", room: "03", intendedVoidDate: "11/06/2026", createdBy: "James"}, {serviceId: "003", room: "20", intendedVoidDate: "03/11/2020", createdBy: "Keni"}, {serviceId: "004", room: "40", intendedVoidDate: "22/04/2024", createdBy: "Adams"}, {serviceId: "005", room: "11", intendedVoidDate: "22/09/2021", createdBy: "Kunle"}, {serviceId: "006", room: "08", intendedVoidDate: "18/01/2025", createdBy: "Shola"}, {serviceId: "007", room: "01", intendedVoidDate: "06/01/2027", createdBy: "Aina"}], maintenance: [],
    },

    { id: 9, name: "Olateju Motunrayo", email: "olarayo@gmail.com", address: "33, Martins street Olusoga Houston", contact: "08035567812", date: '12/04/24', dob: "2000-01-11", age: "20", riskLevel: "high", image: studentDemo, youngPersons: [
      {id: "001", name: "James", age: "21 years 3months", referralDate: "05/07/2022"},
      {id: "002", name: "Ayo", age: "26 years 4months", referralDate: "06/06/2024"},
      {id: "003", name: "Sally", age: "38 years 6days", referralDate: "06/07/2021"},
      {id: "004", name: "Tolu", age: "25 years 21days", referralDate: "12/07/2011"},
      {id: "005", name: "Eric", age: "22 years 6days", referralDate: "02/09/2021"},
      {id: "006", name: "Titi", age: "38 years 12days", referralDate: "01/11/2020"},
      {id: "007", name: "Aina", age: "29 years 2months", referralDate: "21/10/2023"}
    ], incidentReport: [
      {id: "001", dateOfIncident: "5/01/2022", timeOfIncident: "05:27", causeOfConcern: "Theft", createdBy: "Kunle"}, 
      {id: "002", dateOfIncident: "11/06/2021", timeOfIncident: "15:11", causeOfConcern: "Health", createdBy: "Shola"}, 
      {id: "003", dateOfIncident: "03/11/2020", timeOfIncident: "11:50", causeOfConcern: "Abuse", createdBy: "Keni"}, 
      {id: "004", dateOfIncident: "22/09/2019", timeOfIncident: "17:11", causeOfConcern: "Health", createdBy: "James"}, 
      {id: "005", dateOfIncident: "18/06/2021", timeOfIncident: "19:13", causeOfConcern: "Theft", createdBy: "Adams"}, 
      {id: "006", dateOfIncident: "07/02/2024", timeOfIncident: "10:11", causeOfConcern: "Health", createdBy: "Ayo"}, 
      {id: "007", dateOfIncident: "24/04/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Lola"}, 
      {id: "010", dateOfIncident: "23/04/2021", timeOfIncident: "20:11", causeOfConcern: "Health", createdBy: "Ronke"}, 
      {id: "011", dateOfIncident: "04/09/2021", timeOfIncident: "11:19", causeOfConcern: "Health", createdBy: "Kemi"}, 
      {id: "012", dateOfIncident: "21/03/2020", timeOfIncident: "08:11", causeOfConcern: "Health", createdBy: "Aina"},  
    ], prevoidManagement: [{serviceId: "001", room: "13", intendedVoidDate: "5/01/2025", createdBy: "Shola"}, {serviceId: "002", room: "03", intendedVoidDate: "11/06/2026", createdBy: "James"}, {serviceId: "003", room: "20", intendedVoidDate: "03/11/2020", createdBy: "Keni"}, {serviceId: "004", room: "40", intendedVoidDate: "22/04/2024", createdBy: "Adams"}, {serviceId: "005", room: "11", intendedVoidDate: "22/09/2021", createdBy: "Kunle"}, {serviceId: "006", room: "08", intendedVoidDate: "18/01/2025", createdBy: "Shola"}, {serviceId: "007", room: "01", intendedVoidDate: "06/01/2027", createdBy: "Aina"}], maintenance: [],
    },

  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);


  const clickedStudent = (student) => {
    setSelectedStudent(student);
    navigate('/services', { state: { selectedStudent: student } }); 
  }

  const deselect = () => {
    setSelectedStudent(null);
  }

  return (
    <div className=' px-4 md:px-0 font-poppins'>
      <header className='flex sm:justify-between sm:gap-0 gap-5 sm:flex-row flex-col my-4'>
        <div className='flex items-center gap-5'>
          <h1 className='text-2xl font-bold'>Service profile</h1>
          <img src={filterIcon} alt="Filter Icon" />
        </div>

        <div className='flex items-center gap-3 cursor-pointer sm:self-auto self-end bg-[#F9F6F6] p-2 rounded-[5px]'>
          <img src={bagIconBlack} alt="Icon" className='' />
          <p>Jonathan D</p>
          <img src={bagIconBlack} alt="Icon" className='' />
        </div>
      </header>

      <hr />


      {/* <div className='flex flex-col md:justify-between md:gap-y-8 gap-y-3 my-3'> */}
      <div className='flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 sm:justify-between my-3'>
        <div className='flex items-center gap-x-5 md:w-[50%] w-full justify-between'>
          <input type="search" name="searchProfile" id="searchProfile" placeholder='Search Profile' className='block bg-blue-100 outline-none rounded-3xl p-3 w-full' />
          
          <img src={filterIcon} alt="filter icon" className='border p-2 rounded' />
        </div>

        <div className='flex md:flex-row flex-col gap-4'>
          <button className='flex gap-2 items-center text-[14px] font-medium p-[8px] rounded-[8px] border border-[#622C98] text-[#622C98]'><p>Back</p> <img src={bagIcon} alt="Icon" className='h-[16px]' /> </button>

          <button onClick={toProfile} className='flex gap-2 items-center text-[14px] font-medium p-[8px] rounded-[8px] bg-[#622C98] text-white'>
            <p>Create New Profile</p>
            <img src={bagIconWhite} alt="Icon" className='' />
          </button>
        </div>
      </div>

      <div className="w-full lg:overflow-x-hidden overflow-x-scroll px-4 md:px-0 font-poppins">
        <table className='border-separate border-spacing-2 md:border-spacing-1 w-full mt-16 border rounded-[5px]'>
          <thead className='bg-gray-200'>
            <tr className='text-center'>
              <th className='px-3 py-2'>Service code</th>
              <th className='px-3 py-2'>Service name</th>
              <th className='px-3 py-2'>Address</th>
              <th className='px-3 py-2'>Email</th>
              <th className='px-3 py-2'>Date of birth</th>
              <th className='px-3 py-2'>Age</th>
            </tr>
          </thead>

          <tbody className='font-medium'>
            {students.map(student => (
              <tr key={student.id} className='px-3 whitespace-nowrap text-center cursor-pointer' onClick={() => clickedStudent(student)}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.date}</td>
                <td>{student.dob}</td>
                <td>{student.age}</td>
              </tr>
            ))}
          </tbody>
        </table>


        
      </div>
    </div>
  )
}

export default ServiceProfile
