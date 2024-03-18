type DataCalculateType = {
    number: {
        [key: number]: string
    },
    digit: {
        [key: number]: string
    }
}

const dataCalculate: DataCalculateType = {
    number: {
        1: 'หนึ่ง',
        2: 'สอง',
        3: 'สาม',
        4: 'สี่',
        5: 'ห้า',
        6: 'หก',
        7: 'เจ็ด',
        8: 'แปด',
        9: 'เก้า'
    },
    digit: {
        0: '',
        1: 'สิบ',
        2: 'ร้อย',
        3: 'พัน',
        4: 'หมื่น',
        5: 'แสน',
        6: 'ล้าน',
        7: 'สิบ',
        8: 'ร้อย',
        9: 'พัน',
    }
}

export const calculateText = (formNumber: string) => {
    console.log(formNumber);
    
    let textValue = "";
    let arrayValue = []
    let value = "";
    let last = 0;
    let decimal = "";
    let lastDecimal = 0;
    if (formNumber.includes(".")) {
        arrayValue = formNumber.split(".")
        value = arrayValue[0];
        last = value.length - 1;
        decimal = arrayValue[1]
        lastDecimal = decimal.length - 1;
    } else {
        value = formNumber
        last = value.length - 1;
    }
        
    for (let i = 0; i < value.length; i++) {
        if ((last === i || (last - i === 6 && last > 6)) && value[i] === "1" && last > 0) {
            textValue += "เอ็ด"
        } else if ((last - i === 1 || last - i === 7) && value[i] === "2") {
            textValue += "ยี่สิบ"
        } else if (value[i] !== "0") {
            if ((last - 1 === i || last - i === 7) && value[i + 1] === "1") {
                textValue = textValue + dataCalculate.digit[last - i]
            } else {
                textValue = textValue + dataCalculate.number[Number(value[i])] + dataCalculate.digit[last - i]
            }
        } else if (last - i === 6) {
            textValue += "ล้าน";
        }
    }
    console.log(textValue);
    

    textValue += "บาท";
    for (let i = 0; i < decimal.length; i++) {
        console.log(decimal.length)
        if (lastDecimal === i && decimal[i] === "1" && lastDecimal > 0) {
            textValue += "เอ็ด"
        } else if ((lastDecimal - i === 1) && decimal[i] === "2") {
            textValue += "ยี่สิบ"
        } else if (decimal[i] !== "0") {
            if (lastDecimal - 1 === i && decimal[i + 1] === "1") {
                textValue = textValue + dataCalculate.digit[lastDecimal - i]
            } else {
                textValue = textValue + dataCalculate.number[Number(decimal[i])] + dataCalculate.digit[lastDecimal - i]
            }
        }
    }
    if (decimal !== "00" && decimal !== "0" && decimal !== "") {
        textValue += "สตางค์";
    }
    return textValue
}


