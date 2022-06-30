const currencies = [
    {
        currency: "United Arab Emirates Dirham",
        currencyCode: "AED",
        flag: "AE"
    },
    {
        currency: "Afghan Afghani",
        currencyCode: "AFN",
        flag: "AF"
    },
    {
        currency: "Albanian Lek",
        currencyCode: "ALL",
        flag: "AL"
    },
    {
        currency: "Armenian Dram",
        currencyCode: "AMD",
        flag: "AM"
    },
    {
        currency: "Netherlands Antillean Guilder",
        currencyCode: "ANG",
        flag: "AN"
    },
    {
        currency: "Angolan Kwanza",
        currencyCode: "AOA",
        flag: "AO"
    },
    {
        currency: "Argentine Peso",
        currencyCode: "ARS",
        flag: "AR"
    },
    {
        currency: "Australian Dollar",
        currencyCode: "AUD",
        flag: "AU"
    },
    {
        currency: "Aruban Florin",
        currencyCode: "AWG",
        flag: "AW"
    },
    {
        currency: "Azerbaijani Manat",
        currencyCode: "AZN",
        flag: "AZ"
    },
    {
        currency: "Bosnia-Herzegovina Convertible Mark",
        currencyCode: "BAM",
        flag: "BA"
    },
    {
        currency: "Barbadian Dollar",
        currencyCode: "BBD",
        flag: "BB"
    },
    {
        currency: "Bangladeshi Taka",
        currencyCode: "BDT",
        flag: "BD"
    },
    {
        currency: "Bulgarian Lev",
        currencyCode: "BGN",
        flag: "BG"
    },
    {
        currency: "Bahraini Dinar",
        currencyCode: "BHD",
        flag: "BH"
    },
    {
        currency: "Burundian Franc",
        currencyCode: "BIF",
        flag: "BI"
    },
    {
        currency: "Bermudan Dollar",
        currencyCode: "BMD",
        flag: "BM"
    },
    {
        currency: "Brunei Dollar",
        currencyCode: "BND",
        flag: "BN"
    },
    {
        currency: "Bolivian Boliviano",
        currencyCode: "BOB",
        flag: "BO"
    },
    {
        currency: "Brazilian Real",
        currencyCode: "BRL",
        flag: "BR"
    },
    {
        currency: "Bahamian Dollar",
        currencyCode: "BSD",
        flag: "BS"
    },
    {
        currency: "Bitcoin",
        currencyCode: "BTC",
        flag: "BT"
    },
    {
        currency: "Bhutanese Ngultrum",
        currencyCode: "BTN",
        flag: "BT"
    },
    {
        currency: "Botswanan Pula",
        currencyCode: "BWP",
        flag: "BW"
    },
    {
        currency: "Belarusian Ruble",
        currencyCode: "BYN",
        flag: "BY"
    },
    {
        currency: "Belize Dollar",
        currencyCode: "BZD",
        flag: "BZ"
    },
    {
        currency: "Canadian Dollar",
        currencyCode: "CAD",
        flag: "CA"
    },
    {
        currency: "Congolese Franc",
        currencyCode: "CDF",
        flag: "CD"
    },
    {
        currency: "Swiss Franc",
        currencyCode: "CHF",
        flag: "CH"
    },
    {
        currency: "Chilean Unit of Account (UF)",
        currencyCode: "CLF",
        flag: "CL"
    },
    {
        currency: "Chilean Peso",
        currencyCode: "CLP",
        flag: "CL"
    },
    {
        currency: "Chinese Yuan (Offshore)",
        currencyCode: "CNH",
        flag: "CN"
    },
    {
        currency: "Chinese Yuan",
        currencyCode: "CNY",
        flag: "CN"
    },
    {
        currency: "Colombian Peso",
        currencyCode: "COP",
        flag: "CO"
    },
    {
        currency: "Costa Rican Colón",
        currencyCode: "CRC",
        flag: "CR"
    },
    {
        currency: "Cuban Convertible Peso",
        currencyCode: "CUC",
        flag: "CU"
    },
    {
        currency: "Cuban Peso",
        currencyCode: "CUP",
        flag: "CU"
    },
    {
        currency: "Cape Verdean Escudo",
        currencyCode: "CVE",
        flag: "CV"
    },
    {
        currency: "Czech Republic Koruna",
        currencyCode: "CZK",
        flag: "CZ"
    },
    {
        currency: "Djiboutian Franc",
        currencyCode: "DJF",
        flag: "DJ"
    },
    {
        currency: "Danish Krone",
        currencyCode: "DKK",
        flag: "DK"
    },
    {
        currency: "Dominican Peso",
        currencyCode: "DOP",
        flag: "DO"
    },
    {
        currency: "Algerian Dinar",
        currencyCode: "DZD",
        flag: "DZ"
    },
    {
        currency: "Egyptian Pound",
        currencyCode: "EGP",
        flag: "EG"
    },
    {
        currency: "Eritrean Nakfa",
        currencyCode: "ERN",
        flag: "ER"
    },
    {
        currency: "Ethiopian Birr",
        currencyCode: "ETB",
        flag: "ET"
    },
    {
        currency: "Euro",
        currencyCode: "EUR",
        flag: "EU"
    },
    {
        currency: "Fijian Dollar",
        currencyCode: "FJD",
        flag: "FJ"
    },
    {
        currency: "Falkland Islands Pound",
        currencyCode: "FKP",
        flag: "FK"
    },
    {
        currency: "British Pound Sterling",
        currencyCode: "GBP",
        flag: "GB"
    },
    {
        currency: "Georgian Lari",
        currencyCode: "GEL",
        flag: "GE"
    },
    {
        currency: "Guernsey Pound",
        currencyCode: "GGP",
        flag: "GG"
    },
    {
        currency: "Ghanaian Cedi",
        currencyCode: "GHS",
        flag: "GH"
    },
    {
        currency: "Gibraltar Pound",
        currencyCode: "GIP",
        flag: "GI"
    },
    {
        currency: "Gambian Dalasi",
        currencyCode: "GMD",
        flag: "GM"
    },
    {
        currency: "Guinean Franc",
        currencyCode: "GNF",
        flag: "GN"
    },
    {
        currency: "Guatemalan Quetzal",
        currencyCode: "GTQ",
        flag: "GT"
    },
    {
        currency: "Guyanaese Dollar",
        currencyCode: "GYD",
        flag: "GY"
    },
    {
        currency: "Hong Kong Dollar",
        currencyCode: "HKD",
        flag: "HK"
    },
    {
        currency: "Honduran Lempira",
        currencyCode: "HNL",
        flag: "HN"
    },
    {
        currency: "Croatian Kuna",
        currencyCode: "HRK",
        flag: "HR"
    },
    {
        currency: "Haitian Gourde",
        currencyCode: "HTG",
        flag: "HT"
    },
    {
        currency: "Hungarian Forint",
        currencyCode: "HUF",
        flag: "HU"
    },
    {
        currency: "Indonesian Rupiah",
        currencyCode: "IDR",
        flag: "ID"
    },
    {
        currency: "Israeli New Sheqel",
        currencyCode: "ILS",
        flag: "IL"
    },
    {
        currency: "Manx pound",
        currencyCode: "IMP",
        flag: "IM"
    },
    {
        currency: "Indian Rupee",
        currencyCode: "INR",
        flag: "IN"
    },
    {
        currency: "Iraqi Dinar",
        currencyCode: "IQD",
        flag: "IQ"
    },
    {
        currency: "Iranian Rial",
        currencyCode: "IRR",
        flag: "IR"
    },
    {
        currency: "Icelandic Króna",
        currencyCode: "ISK",
        flag: "IS"
    },
    {
        currency: "Jersey Pound",
        currencyCode: "JEP",
        flag: "JE"
    },
    {
        currency: "Jamaican Dollar",
        currencyCode: "JMD",
        flag: "JM"
    },
    {
        currency: "Jordanian Dinar",
        currencyCode: "JOD",
        flag: "JO"
    },
    {
        currency: "Japanese Yen",
        currencyCode: "JPY",
        flag: "JP"
    },
    {
        currency: "Kenyan Shilling",
        currencyCode: "KES",
        flag: "KE"
    },
    {
        currency: "Kyrgystani Som",
        currencyCode: "KGS",
        flag: "KG"
    },
    {
        currency: "Cambodian Riel",
        currencyCode: "KHR",
        flag: "KH"
    },
    {
        currency: "Comorian Franc",
        currencyCode: "KMF",
        flag: "KM"
    },
    {
        currency: "North Korean Won",
        currencyCode: "KPW",
        flag: "KP"
    },
    {
        currency: "South Korean Won",
        currencyCode: "KRW",
        flag: "KR"
    },
    {
        currency: "Kuwaiti Dinar",
        currencyCode: "KWD",
        flag: "KW"
    },
    {
        currency: "Cayman Islands Dollar",
        currencyCode: "KYD",
        flag: "KY"
    },
    {
        currency: "Kazakhstani Tenge",
        currencyCode: "KZT",
        flag: "KZ"
    },
    {
        currency: "Laotian Kip",
        currencyCode: "LAK",
        flag: "LA"
    },
    {
        currency: "Lebanese Pound",
        currencyCode: "LBP",
        flag: "LB"
    },
    {
        currency: "Sri Lankan Rupee",
        currencyCode: "LKR",
        flag: "LK"
    },
    {
        currency: "Liberian Dollar",
        currencyCode: "LRD",
        flag: "LR"
    },
    {
        currency: "Lesotho Loti",
        currencyCode: "LSL",
        flag: "LS"
    },
    {
        currency: "Libyan Dinar",
        currencyCode: "LYD",
        flag: "LY"
    },
    {
        currency: "Moroccan Dirham",
        currencyCode: "MAD",
        flag: "MA"
    },
    {
        currency: "Moldovan Leu",
        currencyCode: "MDL",
        flag: "MD"
    },
    {
        currency: "Malagasy Ariary",
        currencyCode: "MGA",
        flag: "MG"
    },
    {
        currency: "Macedonian Denar",
        currencyCode: "MKD",
        flag: "MK"
    },
    {
        currency: "Myanma Kyat",
        currencyCode: "MMK",
        flag: "MM"
    },
    {
        currency: "Mongolian Tugrik",
        currencyCode: "MNT",
        flag: "MN"
    },
    {
        currency: "Macanese Pataca",
        currencyCode: "MOP",
        flag: "MO"
    },
    {
        currency: "Mauritanian Ouguiya",
        currencyCode: "MRU",
        flag: "MR"
    },
    {
        currency: "Mauritian Rupee",
        currencyCode: "MUR",
        flag: "MU"
    },
    {
        currency: "Maldivian Rufiyaa",
        currencyCode: "MVR",
        flag: "MV"
    },
    {
        currency: "Malawian Kwacha",
        currencyCode: "MWK",
        flag: "MW"
    },
    {
        currency: "Mexican Peso",
        currencyCode: "MXN",
        flag: "MX"
    },
    {
        currency: "Malaysian Ringgit",
        currencyCode: "MYR",
        flag: "MY"
    },
    {
        currency: "Mozambican Metical",
        currencyCode: "MZN",
        flag: "MZ"
    },
    {
        currency: "Namibian Dollar",
        currencyCode: "NAD",
        flag: "NA"
    },
    {
        currency: "Nigerian Naira",
        currencyCode: "NGN",
        flag: "NG"
    },
    {
        currency: "Nicaraguan Córdoba",
        currencyCode: "NIO",
        flag: "NI"
    },
    {
        currency: "Norwegian Krone",
        currencyCode: "NOK",
        flag: "NO"
    },
    {
        currency: "Nepalese Rupee",
        currencyCode: "NPR",
        flag: "NP"
    },
    {
        currency: "New Zealand Dollar",
        currencyCode: "NZD",
        flag: "NZ"
    },
    {
        currency: "Omani Rial",
        currencyCode: "OMR",
        flag: "OM"
    },
    {
        currency: "Panamanian Balboa",
        currencyCode: "PAB",
        flag: "PA"
    },
    {
        currency: "Peruvian Nuevo Sol",
        currencyCode: "PEN",
        flag: "PE"
    },
    {
        currency: "Papua New Guinean Kina",
        currencyCode: "PGK",
        flag: "PG"
    },
    {
        currency: "Philippine Peso",
        currencyCode: "PHP",
        flag: "PH"
    },
    {
        currency: "Pakistani Rupee",
        currencyCode: "PKR",
        flag: "PK"
    },
    {
        currency: "Polish Zloty",
        currencyCode: "PLN",
        flag: "PL"
    },
    {
        currency: "Paraguayan Guarani",
        currencyCode: "PYG",
        flag: "PY"
    },
    {
        currency: "Qatari Rial",
        currencyCode: "QAR",
        flag: "QA"
    },
    {
        currency: "Romanian Leu",
        currencyCode: "RON",
        flag: "RO"
    },
    {
        currency: "Serbian Dinar",
        currencyCode: "RSD",
        flag: "RS"
    },
    {
        currency: "Russian Ruble",
        currencyCode: "RUB",
        flag: "RU"
    },
    {
        currency: "Rwandan Franc",
        currencyCode: "RWF",
        flag: "RW"
    },
    {
        currency: "Saudi Riyal",
        currencyCode: "SAR",
        flag: "SA"
    },
    {
        currency: "Solomon Islands Dollar",
        currencyCode: "SBD",
        flag: "SB"
    },
    {
        currency: "Seychellois Rupee",
        currencyCode: "SCR",
        flag: "SC"
    },
    {
        currency: "Sudanese Pound",
        currencyCode: "SDG",
        flag: "SD"
    },
    {
        currency: "Swedish Krona",
        currencyCode: "SEK",
        flag: "SE"
    },
    {
        currency: "Singapore Dollar",
        currencyCode: "SGD",
        flag: "SG"
    },
    {
        currency: "Saint Helena Pound",
        currencyCode: "SHP",
        flag: "SH"
    },
    {
        currency: "Sierra Leonean Leone",
        currencyCode: "SLL",
        flag: "SL"
    },
    {
        currency: "Somali Shilling",
        currencyCode: "SOS",
        flag: "SO"
    },
    {
        currency: "Surinamese Dollar",
        currencyCode: "SRD",
        flag: "SR"
    },
    {
        currency: "South Sudanese Pound",
        currencyCode: "SSP",
        flag: "SS"
    },
    {
        currency: "São Tomé and Príncipe Dobra (pre-2018)",
        currencyCode: "STD",
        flag: "ST"
    },
    {
        currency: "São Tomé and Príncipe Dobra",
        currencyCode: "STN",
        flag: "ST"
    },
    {
        currency: "Salvadoran Colón",
        currencyCode: "SVC",
        flag: "SV"
    },
    {
        currency: "Syrian Pound",
        currencyCode: "SYP",
        flag: "SY"
    },
    {
        currency: "Swazi Lilangeni",
        currencyCode: "SZL",
        flag: "SZ"
    },
    {
        currency: "Thai Baht",
        currencyCode: "THB",
        flag: "TH"
    },
    {
        currency: "Tajikistani Somoni",
        currencyCode: "TJS",
        flag: "TJ"
    },
    {
        currency: "Turkmenistani Manat",
        currencyCode: "TMT",
        flag: "TM"
    },
    {
        currency: "Tunisian Dinar",
        currencyCode: "TND",
        flag: "TN"
    },
    {
        currency: "Tongan Pa'anga",
        currencyCode: "TOP",
        flag: "TO"
    },
    {
        currency: "Turkish Lira",
        currencyCode: "TRY",
        flag: "TR"
    },
    {
        currency: "Trinidad and Tobago Dollar",
        currencyCode: "TTD",
        flag: "TT"
    },
    {
        currency: "New Taiwan Dollar",
        currencyCode: "TWD",
        flag: "TW"
    },
    {
        currency: "Tanzanian Shilling",
        currencyCode: "TZS",
        flag: "TZ"
    },
    {
        currency: "Ukrainian Hryvnia",
        currencyCode: "UAH",
        flag: "UA"
    },
    {
        currency: "Ugandan Shilling",
        currencyCode: "UGX",
        flag: "UG"
    },
    {
        currency: "United States Dollar",
        currencyCode: "USD",
        flag: "US"
    },
    {
        currency: "Uruguayan Peso",
        currencyCode: "UYU",
        flag: "UY"
    },
    {
        currency: "Uzbekistan Som",
        currencyCode: "UZS",
        flag: "UZ"
    },
    {
        currency: "Venezuelan Bolívar Fuerte (Old)",
        currencyCode: "VEF",
        flag: "VE"
    },
    {
        currency: "Venezuelan Bolívar Soberano",
        currencyCode: "VES",
        flag: "VE"
    },
    {
        currency: "Vietnamese Dong",
        currencyCode: "VND",
        flag: "VN"
    },
    {
        currency: "Vanuatu Vatu",
        currencyCode: "VUV",
        flag: "VU"
    },
    {
        currency: "Samoan Tala",
        currencyCode: "WST",
        flag: "WS"
    },
    {
        currency: "CFA Franc BEAC",
        currencyCode: "XAF",
        flag: "XA"
    },
    {
        currency: "Silver Ounce",
        currencyCode: "XAG",
        flag: "XA"
    },
    {
        currency: "Gold Ounce",
        currencyCode: "XAU",
        flag: "XA"
    },
    {
        currency: "East Caribbean Dollar",
        currencyCode: "XCD",
        flag: "XC"
    },
    {
        currency: "Special Drawing Rights",
        currencyCode: "XDR",
        flag: "XD"
    },
    {
        currency: "CFA Franc BCEAO",
        currencyCode: "XOF",
        flag: "XO"
    },
    {
        currency: "Palladium Ounce",
        currencyCode: "XPD",
        flag: "XP"
    },
    {
        currency: "CFP Franc",
        currencyCode: "XPF",
        flag: "XP"
    },
    {
        currency: "Platinum Ounce",
        currencyCode: "XPT",
        flag: "XP"
    },
    {
        currency: "Yemeni Rial",
        currencyCode: "YER",
        flag: "YE"
    },
    {
        currency: "South African Rand",
        currencyCode: "ZAR",
        flag: "ZA"
    },
    {
        currency: "Zambian Kwacha",
        currencyCode: "ZMW",
        flag: "ZM"
    },
    {
        currency: "Zimbabwean Dollar",
        currencyCode: "ZWL",
        flag: "ZW"
    }
],
    myKey = "4e87dfc3a810927fcb7196f0",
    exchangeIcon = document.querySelector(".icon"),
    convertButton = document.querySelector("button"),
    exchangeText = document.querySelector(".exchange"),
    currencyList = document.querySelectorAll("select"),
    oldCurrency = document.querySelector("#old-currency"),
    toCurrency = document.querySelector(".convert-to select"),
    fromCurrency = document.querySelector(".convert-from select");
let i,
    api,
    amount,
    selected,
    exchangeRate,
    exchangeAmount,
    currencyOption;
exchangeText.innerHTML = "getting rates, please wait...";

for (i = 0; i < currencyList.length; i++) {
    for (currencyCode in currencies) {
        // console.log(currencies)
        if (i == 0) {
            selected = currencies[currencyCode].currencyCode == "USD" ? "selected" : "";
        } else if (i == 1) {
            selected = currencies[currencyCode].currencyCode == "NGN" ? "selected" : "";
        }
        currencyOption = `<option value="${currencies[currencyCode].currencyCode}"${selected}>${currencies[currencyCode].currencyCode} &nbsp; ${currencies[currencyCode].currency}</option>`;
        currencyList[i].insertAdjacentHTML("beforeend", currencyOption);
    }
    currencyList[i].addEventListener("change", event => {
        flag(event.target);
    });
}

window.addEventListener("load", () => {
    getExchangeRate();
});

exchangeIcon.addEventListener("click", () => {
    let currencySwitch = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = currencySwitch;
    flag(fromCurrency);
    flag(toCurrency);
    getExchangeRate();
});

convertButton.addEventListener("click", (event) => {
    event.preventDefault();
    getExchangeRate();
});

const getExchangeRate = () => {
    amount = oldCurrency.value;
    exchangeText.innerHTML = "getting rates, please wait...";
    if (amount == "" || amount == 0) {
        amount = 1;
        oldCurrency.value = "1";
    }
    api = `https://v6.exchangerate-api.com/v6/${myKey}/latest/${fromCurrency.value}`;
    fetch(api).then(response => {
        response.json().then(rates => {
            exchangeRate = rates.conversion_rates[toCurrency.value];
            exchangeAmount = (amount * exchangeRate).toFixed(2);
            exchangeText.innerHTML = `${amount} ${fromCurrency.value} = ${exchangeAmount} ${toCurrency.value}`;
        });
    });
};

const flag = (event) => {
    for (countryCode in currencies) {
        if (currencies[countryCode].currencyCode == event.value) {
            let countryFlag = event.parentElement.querySelector("img");
            countryFlag.src = `https://countryflagsapi.com/png/${currencies[countryCode].flag}`;
        }
    }
};