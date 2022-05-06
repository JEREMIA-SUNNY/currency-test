import React, { useEffect, useState } from "react";
const Currency = () => {
  const [arr, setArr] = useState([]);
  const [firstselc, setFirtselc] = useState("USD");
  const [second, setSecond] = useState("INR");
  const [firstinputs, setFirstinputs] = useState();
  const [check, setCheck] = useState();
  const [check2, setCheck2] = useState();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "Y4zW4uPbsYe99FUk09sHSx98nnQj4gb6");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const languge = result.symbols;
        setArr(Object.keys(languge));
      })

      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    console.log(arr);
  }, [arr]);
  function changedfirst(e) {
    setFirtselc(e.target.value);
  }
  function changedsecond(e) {
    setSecond(e.target.value);
  }
  function inputchangeone(e) {
    const { value } = e.target;
    const orginalvalue = Number(value);
    if (orginalvalue >= 0) {
      setFirstinputs(orginalvalue);
      setCheck(e.target.value);
    }
  }
  function inputchangtwo(e) {
    const { value } = e.target;
    const orginalvalue = Number(value);
    if (orginalvalue >= 0) {
      setFirstinputs(orginalvalue);
      setCheck2(e.target.value);
    }
  }
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "Y4zW4uPbsYe99FUk09sHSx98nnQj4gb6");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${second}&from=${firstselc}&amount=${firstinputs}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const rates = result.info;
        console.log(rates);

        const vaues = rates.rate;
        console.log(vaues);
        if (check.length === 0) {
          setCheck2(vaues);
        } else {
          setCheck(vaues);
        }
      })
      .catch((error) => console.log("error", error));
  }, [firstselc]);

  console.log(setConverted);
  return (
    <div className="maindiv">
      <div>
        <h1>Currency converter</h1>
      </div>
      <div className="inptdivs">
        <div>
          <input
            type="text"
            className="inpt"
            value={check}
            onChange={inputchangeone}
          />
          <select
            name=""
            value={firstselc}
            className="selc"
            onChange={changedfirst}
          >
            {arr.map((elem) => {
              return <option value={elem}>{elem}</option>;
            })}
          </select>
        </div>
        <div>
          <input
            type="text"
            className="inpt"
            value={check2}
            onChange={inputchangtwo}
          />
          <select
            name=""
            id=""
            value={second}
            className="selc"
            onChange={changedsecond}
          >
            {arr.map(
              (elem) =>
                elem !== firstselc && <option value={elem}>{elem}</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Currency;
