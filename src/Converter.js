import React, { useEffect, useState } from "react";
const Converter = () => {
  const [rates, setRates] = useState([
    {
      success: true,
      currencies: {
        AED: "United Arab Emirates Dirham",
        AFN: "Afghan Afghani",
        ALL: "Albanian Lek",
        AMD: "Armenian Dram",
        ANG: "Netherlands Antillean Guilder",
        AOA: "Angolan Kwanza",
        ARS: "Argentine Peso",
        AUD: "Australian Dollar",
        AWG: "Aruban Florin",
        AZN: "Azerbaijani Manat",
        BAM: "Bosnia-Herzegovina Convertible Mark",
        BBD: "Barbadian Dollar",
        BDT: "Bangladeshi Taka",
        BGN: "Bulgarian Lev",
        BHD: "Bahraini Dinar",
        BIF: "Burundian Franc",
        BMD: "Bermudan Dollar",
        BND: "Brunei Dollar",
        BOB: "Bolivian Boliviano",
        BRL: "Brazilian Real",
        BSD: "Bahamian Dollar",
        BTC: "Bitcoin",
        BTN: "Bhutanese Ngultrum",
        BWP: "Botswanan Pula",
        BYN: "New Belarusian Ruble",
        BYR: "Belarusian Ruble",
      },
    },
  ]);
  const [arr, setArr] = useState([]);
  const [selc,setSelc]=useState("usd" )
  useEffect(() => {
    const lang = rates[0].currencies;
    setArr(Object.keys(lang));
    console.log(arr);
  }, []);

  // useEffect(() => {
  //   var myHeaders = new Headers();
  //  myHeaders.append("apikey", "Y4zW4uPbsYe99FUk09sHSx98nnQj4gb6");
  //
  // var requestOptions = {
  //   method: "GET",
  //  redirect: "follow",
  // headers: myHeaders,
  // };

  // fetch("https://api.apilayer.com/currency_data/list", requestOptions)
  // .then((response) => response.text())
  // .then((result) => {
  //
  //   console.log(result);
  // })
  //.catch((error) => console.log("error", error));
  // }, []);
  console.log(selc);
  return (
    <div className="converter">
      <div>
        <div></div>
        <div>
          <input type="text" />
          <select name="" id="" onChange={(e)=>{setSelc(e.target.value)}}>
            <option value="usd">{selc}</option>
            {arr.map((index) => {
              return <option key={index} value={ind}>{ind}</option>;
            })}
            
          </select>
        </div>
        <div>
          <input type="text" />
          <select name="" id="">
            {arr.map((ind) => ind !== selc &&<option key={ind} value={ind}>{ind}</option>
            )}
            
          </select>
        </div>
      </div>
    </div>
  );
};

export default Converter;
var myHeaders = new Headers();
myHeaders.append("apikey", "Y4zW4uPbsYe99FUk09sHSx98nnQj4gb6");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
