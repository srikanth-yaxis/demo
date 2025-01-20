import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TripDetailsForm.css";

// Embassy info
const embassyInfo = [
    { code: "P142", value: "N'Djamena" },
    { code: "abidjan", value: "Abidjan" },
    { code: "P2", value: "Abu Dhabi" },
    { code: "P3", value: "Abuja" },
    { code: "P4", value: "Accra" },
    { code: "adana", value: "Adana" },
    { code: "P5", value: "Addis Ababa" },
    { code: "P6", value: "Algiers" },
    { code: "P7", value: "Almaty" },
    { code: "P8", value: "Amman" },
    { code: "P9", value: "Amsterdam" },
    { code: "P10", value: "Ankara" },
    { code: "P11", value: "Antananarivo" },
    { code: "P225", value: "Apia" },
    { code: "P12", value: "Ashgabat" },
    { code: "P13", value: "Asmara" },
    { code: "astana", value: "Astana" },
    { code: "P15", value: "Asuncion" },
    { code: "athens", value: "Athens" },
    { code: "P17", value: "Auckland" },
    { code: "P226", value: "Baghdad" },
    { code: "P19", value: "Baku" },
    { code: "P20", value: "Bamako" },
    { code: "P21", value: "Bandar Seri Begawan" },
    { code: "P22", value: "Bangkok" },
    { code: "bangui", value: "Bangui" },
    { code: "banjul", value: "Banjul" },
    { code: "barcelona", value: "Barcelona" },
    { code: "P24", value: "Beijing" },
    { code: "P25", value: "Beirut" },
    { code: "P26", value: "Belfast" },
    { code: "P27", value: "Belgrade" },
    { code: "P28", value: "Belmopan" },
    { code: "P29", value: "Berlin" },
    { code: "P30", value: "Bern" },
    { code: "P31", value: "Bishkek" },
    { code: "P32", value: "Bogota" },
    { code: "P33", value: "Brasilia" },
    { code: "P34", value: "Bratislava" },
    { code: "P35", value: "Brazzaville" },
    { code: "P36", value: "Bridgetown" },
    { code: "P37", value: "Brussels" },
    { code: "P38", value: "Bucharest" },
    { code: "P39", value: "Budapest" },
    { code: "P40", value: "Buenos Aires" },
    { code: "P41", value: "Bujumbura" },
    { code: "P42", value: "Cairo" },
    { code: "P43", value: "Calgary" },
    { code: "canberra", value: "Canberra" },
    { code: "P44", value: "Cape Town" },
    { code: "P45", value: "Caracas" },
    { code: "P46", value: "Casablanca" },
    { code: "P47", value: "Chengdu" },
    { code: "P48", value: "Chennai ( Madras)" },
    { code: "P49", value: "Chiang Mai" },
    { code: "P50", value: "Chisinau" },
    { code: "P51", value: "Ciudad Juarez" },
    { code: "P52", value: "Colombo" },
    { code: "P53", value: "Conakry" },
    { code: "P54", value: "Copenhagen" },
    { code: "P55", value: "Cotonou" },
    { code: "P223", value: "Curacao" },
    { code: "P56", value: "Dakar" },
    { code: "P57", value: "Damascus" },
    { code: "P58", value: "Dar Es Salaam" },
    { code: "P59", value: "Dhahran" },
    { code: "P60", value: "Dhaka" },
    { code: "P227", value: "Dili" },
    { code: "P61", value: "Djibouti" },
    { code: "P62", value: "Doha" },
    { code: "P63", value: "Dubai" },
    { code: "P64", value: "Dublin" },
    { code: "P65", value: "Durban" },
    { code: "P66", value: "Dushanbe" },
    { code: "erbil", value: "Erbil" },
    { code: "P67", value: "Florence" },
    { code: "P68", value: "Frankfurt" },
    { code: "P69", value: "Freetown" },
    { code: "fukuoka", value: "Fukuoka" },
    { code: "P70", value: "Gaborone" },
    { code: "P71", value: "Georgetown" },
    { code: "P72", value: "Guadalajara" },
    { code: "P73", value: "Guangzhou" },
    { code: "P74", value: "Guatemala City" },
    { code: "P75", value: "Guayaquil" },
    { code: "P76", value: "Halifax" },
    { code: "P77", value: "Hamilton" },
    { code: "P78", value: "Hanoi" },
    { code: "P79", value: "Harare" },
    { code: "P80", value: "Havana" },
    { code: "P81", value: "Helsinki" },
    { code: "P82", value: "Hermosillo" },
    { code: "P83", value: "Ho Chi Minh City" },
    { code: "P84", value: "Hong Kong" },
    { code: "P85", value: "Hyderabad" },
    { code: "P86", value: "Islamabad" },
    { code: "P87", value: "Istanbul" },
    { code: "P88", value: "Jakarta" },
    { code: "P89", value: "Jeddah" },
    { code: "P90", value: "Jerusalem" },
    { code: "P91", value: "Johannesburg" },
    { code: "P228", value: "Juba" },
    { code: "P229", value: "Kabul" },
    { code: "P93", value: "Kampala" },
    { code: "kaohsiung", value: "Kaohsiung" },
    { code: "P94", value: "Karachi" },
    { code: "P95", value: "Kathmandu" },
    { code: "P96", value: "Khartoum" },
    { code: "P97", value: "Kigali" },
    { code: "P98", value: "Kingston" },
    { code: "P99", value: "Kinshasa" },
    { code: "P100", value: "Kolkata" },
    { code: "P101", value: "Kolonia" },
    { code: "P102", value: "Koror" },
    { code: "P103", value: "Krakow" },
    { code: "P104", value: "Kuala Lumpur" },
    { code: "P105", value: "Kuwait" },
    { code: "P106", value: "Kyiv" },
    { code: "P107", value: "La Paz" },
    { code: "P108", value: "Lagos" },
    { code: "lahore", value: "Lahore" },
    { code: "P109", value: "Libreville" },
    { code: "P110", value: "Lilongwe" },
    { code: "P111", value: "Lima" },
    { code: "P112", value: "Lisbon" },
    { code: "P113", value: "Ljubljana" },
    { code: "lome", value: "Lome" },
    { code: "P115", value: "London" },
    { code: "P116", value: "Luanda" },
    { code: "P117", value: "Lusaka" },
    { code: "P118", value: "Luxembourg" },
    { code: "P119", value: "Madrid" },
    { code: "P120", value: "Majuro" },
    { code: "P121", value: "Malabo" },
    { code: "managua", value: "Managua" },
    { code: "P123", value: "Manama" },
    { code: "P124", value: "Manila" },
    { code: "P125", value: "Maputo" },
    { code: "marseille", value: "Marseille" },
    { code: "P126", value: "Maseru" },
    { code: "P127", value: "Matamoros" },
    { code: "P128", value: "Mbabane" },
    { code: "P129", value: "Melbourne" },
    { code: "P130", value: "Merida" },
    { code: "mexicali_tpf", value: "Mexicali Tpf" },
    { code: "P131", value: "Mexico City" },
    { code: "P132", value: "Milan" },
    { code: "P133", value: "Minsk" },
    { code: "P134", value: "Monrovia" },
    { code: "P135", value: "Monterrey" },
    { code: "P136", value: "Montevideo" },
    { code: "P137", value: "Montreal" },
    { code: "P138", value: "Moscow" },
    { code: "P139", value: "Mumbai (Bombay)" },
    { code: "P140", value: "Munich" },
    { code: "P141", value: "Muscat" },
    { code: "P143", value: "Naha" },
    { code: "P144", value: "Nairobi" },
    { code: "P145", value: "Naples" },
    { code: "P146", value: "Nassau" },
    { code: "P147", value: "New Delhi" },
    { code: "P148", value: "Niamey" },
    { code: "P149", value: "Nicosia" },
    { code: "P150", value: "Nogales" },
    { code: "P151", value: "Nouakchott" },
    { code: "P152", value: "Nuevo Laredo" },
    { code: "P153", value: "Osaka-Kobe" },
    { code: "P154", value: "Oslo" },
    { code: "P155", value: "Ottawa" },
    { code: "P156", value: "Ouagadougou" },
    { code: "P157", value: "Panama City" },
    { code: "P158", value: "Paramaribo" },
    { code: "P159", value: "Paris" },
    { code: "P160", value: "Perth" },
    { code: "P161", value: "Phnom Penh" },
    { code: "P162", value: "Podgorica" },
    { code: "ponta_delgada", value: "Ponta Delgada" },
    { code: "P164", value: "Port Au Prince" },
    { code: "P165", value: "Port Louis" },
    { code: "P166", value: "Port Moresby" },
    { code: "P167", value: "Port Of Spain" },
    { code: "porto_alegre", value: "Porto Alegre" },
    { code: "P168", value: "Prague" },
    { code: "P169", value: "Praia" },
    { code: "pretoria", value: "Pretoria" },
    { code: "P231", value: "Pristina" },
    { code: "P170", value: "Quebec" },
    { code: "P171", value: "Quito" },
    { code: "P172", value: "Rangoon" },
    { code: "P173", value: "Recife" },
    { code: "P174", value: "Reykjavik" },
    { code: "P175", value: "Riga" },
    { code: "P230", value: "Rio De Janeiro" },
    { code: "P177", value: "Riyadh" },
    { code: "P178", value: "Rome" },
    { code: "P179", value: "San Jose" },
    { code: "P180", value: "San Salvador" },
    { code: "P181", value: "Sanaa" },
    { code: "P182", value: "Santiago" },
    { code: "P183", value: "Santo Domingo" },
    { code: "P184", value: "Sao Paulo" },
    { code: "P224", value: "Sapporo" },
    { code: "P185", value: "Sarajevo" },
    { code: "P186", value: "Seoul" },
    { code: "P187", value: "Shanghai" },
    { code: "P188", value: "Shenyang" },
    { code: "P189", value: "Singapore" },
    { code: "P190", value: "Skopje" },
    { code: "P191", value: "Sofia" },
    { code: "st_georges", value: "St Georges" },
    { code: "P192", value: "St Petersburg" },
    { code: "P193", value: "Stockholm" },
    { code: "P194", value: "Surabaya" },
    { code: "P195", value: "Suva" },
    { code: "P196", value: "Sydney" },
    { code: "P197", value: "Taipei" },
    { code: "P198", value: "Tallinn" },
    { code: "P199", value: "Tashkent" },
    { code: "P200", value: "Tbilisi" },
    { code: "P201", value: "Tegucigalpa" },
    { code: "P202", value: "Tel Aviv" },
    { code: "tijuana", value: "Tijuana" },
    { code: "P203", value: "Tijuana Tpf" },
    { code: "P204", value: "Tirana" },
    { code: "P205", value: "Tokyo" },
    { code: "P206", value: "Toronto" },
    { code: "P207", value: "Tripoli" },
    { code: "P208", value: "Tunis" },
    { code: "P209", value: "Ulaanbaatar" },
    { code: "usun-new_york", value: "Usun-New York" },
    { code: "P210", value: "Valletta" },
    { code: "P211", value: "Vancouver" },
    { code: "P212", value: "Vienna" },
    { code: "P213", value: "Vientiane" },
    { code: "P214", value: "Vilnius" },
    { code: "P215", value: "Vladivostok" },
    { code: "P216", value: "Warsaw" },
    { code: "P217", value: "Windhoek" },
    { code: "P218", value: "Yaounde" },
    { code: "yekaterinburg", value: "Yekaterinburg" },
    { code: "P220", value: "Yerevan" },
    { code: "P221", value: "Zagreb" },
  ];
  

const TripDetailsForm = () => {
  const [visaType, setVisaType] = useState("Student");
  const [purpose, setPurpose] = useState("Study");
  const [visaCenter, setVisaCenter] = useState("P85"); // Default to Hyderabad
  const [targetDate, setTargetDate] = useState(null);
  const [dateConfirmed, setDateConfirmed] = useState(false);
  const [waitTime, setWaitTime] = useState(0); // Waiting days
  const [minDate, setMinDate] = useState(new Date()); // Minimum selectable date

  // Fetch wait time dynamically when the visa center is changed

  // Fetch wait time dynamically
  useEffect(() => {
    const fetchWaitTime = async () => {
      try {
        const url = `http://localhost:5000/api/wait-times?cid=${visaCenter}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        console.log("API Response:", text);

        // Extract first valid days from the response (e.g., "140 Days|...")
        const waitTimes = text.split('|').filter((item) => item.trim() !== "");
        const daysToWait = parseInt(waitTimes[0]) || 0; // Parse the first valid wait time

        // Calculate the new minimum date
        const today = new Date();
        const newMinDate = new Date();
        newMinDate.setDate(today.getDate() + daysToWait);

        // Update state
        setWaitTime(daysToWait);
        setMinDate(newMinDate);
      } catch (error) {
        console.error("Error fetching wait time:", error);
      }
    };

    fetchWaitTime();
  }, [visaCenter]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      visaType,
      purpose,
      visaCenter,
      targetDate,
      dateConfirmed,
    });
  };

  return (
    <form className="trip-details-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="visa-type">Visa Type</label>
        <select
          id="visa-type"
          value={visaType}
          onChange={(e) => setVisaType(e.target.value)}
        >
          <option value="Student">Student</option>
          <option value="Tourist">Tourist</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="purpose">Purpose of Travel</label>
        <select
          id="purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        >
          <option value="Study">Study</option>
          <option value="Tourism">Tourism</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="visa-center">Preferred Visa Center</label>
        <select
          id="visa-center"
          value={visaCenter}
          onChange={(e) => setVisaCenter(e.target.value)}
        >
          {embassyInfo.map((embassy) => (
            <option key={embassy.code} value={embassy.code}>
              {embassy.value}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="appointment-date" className="form-label">
          Targeted Visa Appointment Date
        </label>
        <div className="date-picker-container">
          <DatePicker
            selected={targetDate}
            onChange={(date) => setTargetDate(date)}
            dateFormat="MM/dd/yyyy"
            minDate={minDate} // Restrict dates before the calculated minimum date
            placeholderText="Select a date"
            className="date-picker-input"
          />
        </div>
        <p className="error-message">
  Apologies! The current wait time in{" "}
  <strong>
    {embassyInfo.find((embassy) => embassy.code === visaCenter)?.value}
  </strong>{" "}
  is <strong>{waitTime} days</strong>. Please choose a date on or after{" "}
  <strong>
    {minDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    })}
  </strong>
  .
  <span className="info-note">
    <i className="info-icon">ℹ️</i> This wait time information is sourced from the <strong>US Embassy</strong>.
  </span>
</p>


      </div>


      <div className="form-group">
  <label>Have you decided your date of travel?</label>
  <div className="radio-group">
    <div className="radio-option">
      <input
        type="radio"
        id="yes"
        name="date-decided"
        checked={dateConfirmed}
        onChange={() => setDateConfirmed(true)}
      />
      <label htmlFor="yes">Yes</label>
    </div>
    <div className="radio-option">
      <input
        type="radio"
        id="no"
        name="date-decided"
        checked={!dateConfirmed}
        onChange={() => setDateConfirmed(false)}
      />
      <label htmlFor="no">No</label>
    </div>
  </div>
</div>


      <button type="submit" className="save-button">
        Save and Continue
      </button>
    </form>
  );
};

export default TripDetailsForm;
