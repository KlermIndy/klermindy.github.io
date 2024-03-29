function calculate() {
    // $('#exampleModal').modal('toggle');
    const priceAbove = 5000;
    const priceBelowTopLaminate = 8000;
    const priceBelowTopGranite = 13000;
    
    const priceAboveOriginal = 5000;
    const priceBelowTopLaminateOriginal = 7000;
    const priceBelowTopGraniteOriginal = 12000;
    
    const priceFullHeightCabinet = 13500;
    const priceCabinetStretch = 1200;
    const priceShelve = 1200;
    const priceIslandLaminate60 = 8500;
    const priceIslandGranite60 = 12500;
    const priceIslandGranite80 = 13500;
    const priceIslandGranite90 = 14500;
    
    const priceFullHeightCabinetOriginal = 12000;
    const priceCabinetStretchOriginal = 1000;
    const priceShelveOriginal = 1000;
    const priceIslandLaminate60Original = 8000;
    const priceIslandGranite60Original = 12000;
    const priceIslandGranite80Original = 13000;
    const priceIslandGranite90Original = 14000;

    const xAbove = parseFloat($('#xAbove').val()) || 0;
    const yAbove = parseFloat($('#yAbove').val()) || 0;
    const zAbove = parseFloat($('#zAbove').val()) || 0;
    let aboveMinusWidth = parseFloat($('#aboveMinusWidth').val()) || 0;
    const xBelow = parseFloat($('#xBelow').val()) || 0;
    const yBelow = parseFloat($('#yBelow').val()) || 0;
    const zBelow = parseFloat($('#zBelow').val()) || 0;
    let belowMinusWidth = parseFloat($('#belowMinusWidth').val()) || 0;
    const fullHeightCabinet = parseFloat($('#fullHeightCabinet').val()) || 0;
    const cabinetStretch = parseFloat($('#cabinetStretch').val()) || 0;
    const shelve = parseFloat($('#shelve').val()) || 0;
    const island = parseFloat($('#island').val()) || 0;

    const district = $('#district').val();
    const districtPrice = parseFloat($('#districtPrice').val()) || 0;

    // แบบปกติ, แบบท้อปลามิเนต, แบบท้อปหินแกรนิต, แบบครัวปูนกรณีไม่รวมท้อป, แบบครัวปูนแบบรวมท้อป
    const type = parseInt($('#type').val()) || 0;

    let aboveWidth = xAbove + yAbove + zAbove;
    let belowWidth = xBelow + yBelow + zBelow;

    // พื้นที่ซ้อนทับลบด้านละ 0.6 เมตร
    aboveMinusWidth *= 0.3;
    belowMinusWidth *= 0.6;

    let resultPriceAbove = 0;
    let resultPriceBelowTopLaminate = 0;
    let resultPriceBelowTopGranite = 0;
    resultPriceAbove = Math.ceil(((aboveWidth - aboveMinusWidth) * priceAbove) / 100) * 100;
    resultPriceBelowTopLaminate = Math.ceil(((belowWidth - belowMinusWidth) * priceBelowTopLaminate) / 100) * 100;
    resultPriceBelowTopGranite = Math.ceil(((belowWidth - belowMinusWidth) * priceBelowTopGranite) / 100) * 100;

    // กรณีไม่คีย์ค่า
    if (resultPriceAbove < 0)
        resultPriceAbove = 0;
    if (resultPriceBelowTopLaminate < 0)
        resultPriceBelowTopLaminate = 0;
    if (resultPriceBelowTopGranite < 0)
        resultPriceBelowTopGranite = 0;

    // ยืดตู้ปิดบัว
    let resultPriceCabinetStretch = Math.ceil((cabinetStretch * priceCabinetStretch) / 100) * 100;

    // ตู้เต็มสูง
    let resultPriceCabinFullHeightCabinet = Math.ceil((fullHeightCabinet * priceFullHeightCabinet) / 100) * 100;

    // ชั้นวางของ
    let resultPriceShelve = Math.ceil((shelve * priceShelve) / 100) * 100;

    // Island
    let resultPriceIslandLaminate60 = Math.ceil((island * priceIslandLaminate60) / 100) * 100;
    let resultPriceIslandGranite60 = Math.ceil((island * priceIslandGranite60) / 100) * 100;
    let resultPriceIslandGranite80 = Math.ceil((island * priceIslandGranite80) / 100) * 100;
    let resultPriceIslandGranite90 = Math.ceil((island * priceIslandGranite90) / 100) * 100;

    let result = '';
    if(type == 3) {
        result += 'กรณีมีโครงปูนพร้อมท้อปแล้ว';
        result += ' <br /> ';
        result += ' <br /> ';
    } else if(type == 4) {
        result += 'กรณีมีโครงปูนแล้ว';
        result += ' <br /> ';
        result += ' <br /> ';
    }

    if (belowMinusWidth == 0) {
        result += 'ครัวตัวไอ ขนาด ' + xBelow + ' เมตร';
    }
    else if (belowMinusWidth == 0.6) {
        result += 'ครัวตัวแอล ขนาด ' + xBelow + 'x' + yBelow + ' เมตร';
    }
    else if (belowMinusWidth == 1.2) {
        result += 'ครัวตัวยู ขนาด ' + xBelow + 'x' + yBelow + 'x' + zBelow + ' เมตร';
    }

    if (aboveWidth > 0) {
        result += ' <br /> ';
        if (aboveMinusWidth > 0) {
            result += 'ตู้บน (ระยะรวม ' + aboveWidth.toFixed(2) + ' เมตร หักลบพื้นที่ซ้อนทับ ' + aboveMinusWidth + ' เมตร เหลือ ' + (aboveWidth - aboveMinusWidth).toFixed(2) + ' เมตร)';
        }
        else {
            result += 'ตู้บน (ระยะรวม ' + aboveWidth.toFixed(2) + ' เมตร)';
        }

        result += ' <br /> ';
        result += '👉 ' + numberWithCommas(resultPriceAbove) + ' บาท';

    }

    let belowTypeStr = ['ตู้ล่างมีสองราคาค่ะ', 'ตู้ล่าง', 'ตู้ล่าง', 'ตู้ล่าง', 'ตู้ล่างมีสองราคาค่ะ'];
    let belowTypeLaminateStr = ['ตู้ล่าง ท้อป ลามิเนต', 'ตู้ล่าง ท้อป ลามิเนต', '', 'ตู้ล่างอย่างเดียวไม่รวมท้อป', 'ตู้ล่างอย่างเดียวไม่รวมท้อป'];
    let belowTypeGraniteStr = ['ตู้ล่าง ท้อป หินแกรนิต', '', 'ตู้ล่าง ท้อป หินแกรนิต', '', 'ตู้ล่าง + ท้อป หินแกรนิต'];
    if (belowWidth > 0) {
        result += ' <br /> ';
        if (belowMinusWidth > 0) {
            result += belowTypeStr[type] + ' (ระยะรวม ' + belowWidth.toFixed(2) + ' เมตร หักลบพื้นที่ซ้อนทับ ' + belowMinusWidth + ' เมตร เหลือ ' + (belowWidth - belowMinusWidth).toFixed(2) + ' เมตร)';
        }
        else {
            result += belowTypeStr[type] + ' (ระยะรวม ' + belowWidth.toFixed(2) + ' เมตร)';
        }

        if(type != 2) {
            result += ' <br /> ';
            result += '👉 '+ belowTypeLaminateStr[type] +' ' + numberWithCommas(resultPriceBelowTopLaminate) + ' บาท';
        }
        if(type != 1 && type != 3) {
            result += ' <br /> ';
            result += '👉 '+ belowTypeGraniteStr[type] +' ' + numberWithCommas(resultPriceBelowTopGranite) + ' บาท';
        }
    }

    let islandTypeStr = ['Island มีสองราคาค่ะ', 'Island', 'Island'];
    if (island > 0) {
        result += ' <br /> ';
        result += islandTypeStr[type] + ' (ระยะรวม ' + island + ' เมตร)';

        if (type != 2) {
            result += ' <br /> ';
            result += '👉 ท้อป ลามิเนต ลึก 60 cm ' + numberWithCommas(resultPriceIslandLaminate60) + ' บาท';
        }
        if (type != 1) {
            result += ' <br /> ';
            result += '👉 ท้อป หินแกรนิต ลึก 60 cm ' + numberWithCommas(resultPriceIslandGranite60) + ' บาท';
        }
    }

    if (shelve > 0) {
        result += ' <br /> ';
        result += 'ชั้นวางของ (ระยะรวม ' + shelve + ' เมตร)';
        result += ' <br /> ';
        result += '👉 ' + numberWithCommas(resultPriceShelve) + ' บาท';
    }

    if (fullHeightCabinet > 0) {
        result += ' <br /> ';
        result += 'ตู้เต็มสูง (ระยะรวม ' + fullHeightCabinet + ' เมตร)';
        result += ' <br /> ';
        result += '👉 ' + numberWithCommas(resultPriceCabinFullHeightCabinet) + ' บาท';
    }

    if (cabinetStretch > 0) {
        result += ' <br /> ';
        result += 'ค่ายืดตู้ปิดบัวกรณีเพดานสูงเกิน 220 cm';
        result += ' <br /> ';
        result += '👉 ' + numberWithCommas(resultPriceCabinetStretch) + ' บาท';
    }

    if (type == 0 || type == 1 || type == 2) {
        if (aboveWidth > 0 && belowWidth > 0 && ([island, shelve, fullHeightCabinet, cabinetStretch].filter(x => x > 0).length == 0)) {
            result += ' <br /> ';
            if (type != 2) {
                result += ' <br /> ';
                result += 'รวมทั้งตู้ด้านบนและด้านล่าง กรณี ท้อป ลามิเนต ' + numberWithCommas(resultPriceAbove + resultPriceBelowTopLaminate) + ' บาท';
            }
            if (type != 1) {
                result += ' <br /> ';
                result += 'รวมทั้งตู้ด้านบนและด้านล่าง กรณี ท้อป หินแกรนิต ' + numberWithCommas(resultPriceAbove + resultPriceBelowTopGranite) + ' บาท';
            }
        } else if ([aboveWidth, belowWidth, island, shelve, fullHeightCabinet, cabinetStretch].filter(x => x > 0).length > 1) {
            result += ' <br /> ';
            if (type != 2) {
                result += ' <br /> ';
                result += 'รวมทั้งหมด กรณี ท้อป ลามิเนต ' + numberWithCommas(resultPriceAbove + resultPriceBelowTopLaminate + resultPriceIslandLaminate60 + resultPriceShelve + resultPriceCabinetStretch + resultPriceCabinFullHeightCabinet) + ' บาท';
            }
            if (type != 1) {
                result += ' <br /> ';
                result += 'รวมทั้งหมด กรณี ท้อป หินแกรนิต ' + numberWithCommas(resultPriceAbove + resultPriceBelowTopGranite + resultPriceIslandGranite60 + resultPriceShelve + resultPriceCabinetStretch + resultPriceCabinFullHeightCabinet) + ' บาท';
            }
        }
    } else if (type == 3 || type == 4) {
        if (aboveWidth > 0 && belowWidth > 0 && ([island, shelve, fullHeightCabinet, cabinetStretch].filter(x => x > 0).length == 0)) {
            result += ' <br /> ';
            result += ' <br /> ';
            result += 'รวมทั้งตู้บนและตู้ล่างอย่างเดียวไม่รวมท้อป ' + numberWithCommas(resultPriceAbove + resultPriceBelowTopLaminate) + ' บาท';
            if (type == 4) {
                result += ' <br /> ';
                result += 'รวมทั้งตู้บนและตู้ล่าง + ท้อป หินแกรนิต ' + numberWithCommas(resultPriceAbove + resultPriceBelowTopGranite) + ' บาท';
            }
        } else if ([aboveWidth, belowWidth, island, shelve, fullHeightCabinet, cabinetStretch].filter(x => x > 0).length > 1) {
            result += ' <br /> ';
            result += ' <br /> ';
            result += 'รวมทั้งหมด (ตู้ล่างอย่างเดียวไม่รวมท้อป) ' + numberWithCommas(resultPriceAbove + resultPriceBelowTopLaminate + resultPriceIslandLaminate60 + resultPriceShelve + resultPriceCabinetStretch + resultPriceCabinFullHeightCabinet) + ' บาท';
            if (type == 4) {
                result += ' <br /> ';
                result += 'รวมทั้งหมด (ตู้ล่าง + ท้อป หินแกรนิต) ' + numberWithCommas(resultPriceAbove + resultPriceBelowTopGranite + resultPriceIslandGranite60 + resultPriceShelve + resultPriceCabinetStretch + resultPriceCabinFullHeightCabinet) + ' บาท';
            }
        }
    }

    if (districtPrice > 0 && district != '')
    {
        result += ' <br /> ';
        result += ' <br /> ';
        result += 'ค่าระยะทางสำหรับไปกลับจังหวัด' + district + 'สองรอบคือวันวัดหน้างานและวันติดตั้งรวม ' + numberWithCommas(districtPrice) + ' บาท';
    }

    if (island > 0)
    {
        result += ' <br /> ';
        result += ' <br /> ';
        result += 'Island มีสี่ราคาค่ะ (ระยะรวม ' + island + ' เมตร)';
        result += ' <br /> ';
        result += '👉 ท้อป ลามิเนต ลึก 60 cm ' + numberWithCommas(resultPriceIslandLaminate60) + ' บาท';
        result += ' <br /> ';
        result += '👉 ท้อป หินแกรนิต ลึก 60 cm ' + numberWithCommas(resultPriceIslandGranite60) + ' บาท';
        result += ' <br /> ';
        result += '👉 ท้อป หินแกรนิต ลึก 80 cm ' + numberWithCommas(resultPriceIslandGranite80) + ' บาท';
        result += ' <br /> ';
        result += '👉 ท้อป หินแกรนิต ลึก 90 cm ' + numberWithCommas(resultPriceIslandGranite90) + ' บาท';

    }

    result += ' <br /> ';
    result += ' <br /> ';
    result += 'ราคารวม ครัว+ติดตั้ง';
    result += ' <br /> ';
    result += '✅ ฟรีค่าแรงปูกระเบื้องหรือโมเสค เหนือตู้ล่าง 60 cm';
    result += ' <br /> ';
    result += '✅ ฟรีค่าแรงติดตั้ง hood , เตาอบ, ซิ้งค์, ตระแกรง';
    result += ' <br /> ';
    if (aboveWidth > 0) {
        result += '✅ ตู้บนรับช่องไมโครเวฟ';
        result += ' <br /> ';
    }
    result += '✅ แถมตะแกรงใส่ช้อนส้อม';
    if (districtPrice == 0 && district != '')
    {
        result += ' <br /> ';
        result += '✅ จังหวัด' + district + 'ไม่คิดค่าระยะทางเพิ่ม';
    }
    result += ' <br /> ';
    result += '** ราคาไม่รวมซิ้งค์และอุปกรณ์ไฟฟ้า ลูกค้าซื้อมาเองหรือสั่งจากทางเราก็ได้ค่ะ ทางเราติดตั้งให้ฟรีไม่คิดค่าแรงเพิ่ม';
    result += ' <br /> ';
    result += ' <br /> ';
    result += 'เราใช้วัสดุเป็น MDF ทั้งโครงตู้และหน้าบานค่ะ';
    result += ' <br /> ';
    result += '** กรณีลูกค้าต้องการทำโครงปูน ลูกค้าต้องก่อปูนไว้ค่ะ';
    if (aboveWidth > 0)
    {
        result += ' <br /> ';
        result += ' <br /> ';
        result += 'กรณีที่ทำตู้บน';
        result += ' <br /> ';
        result += '👉 ทำตู้บนถึงเพดานที่ 220 cm';
        result += ' <br /> ';
        if (cabinetStretch > 0)
        {
            result += '(หากสูงกว่านี้มีค่ายืดตู้บนและค่าปิดบัว)';
        }
        else
        {
            result += '(หากสูงกว่านี้มีค่ายืดตู้บนและค่าปิดบัว ขอความสูงเพดานค่ะ)';
        }
        result += ' <br /> ';
        result += '👉 ตู้ล่างสูง 80-90 cm ลึก 60 cm';
        result += ' <br /> ';
        result += '👉 ระหว่างตู้บนล่าง 60 cm';
        result += ' <br /> ';
        result += '👉 ตู้บนสูง 30-80 cm ลึก 30 cm';
    }
    result += ' <br /> ';
    result += ' <br /> ';
    result += 'คิววันวัดหน้างาน ถ้าลูกค้าสะดวก ส่วญใหญ่แล้วไม่เกิน 1 อาทิตย์ค่ะ หลังจากวันวัดหน้างานใช้เวลาผลิตประมาณ 20-25 วัน และติดตั้งใช้เวลา 1-2 วันค่ะ';
    result += ' <br /> ';
    result += ' <br /> ';
    result += 'ขอบคุณค่ะ';

    $('#result').html(result);
    $('#exampleModal').modal('toggle');
}

function clearAll() {
    $('#xAbove').val('');
    $('#yAbove').val('');
    $('#zAbove').val('');
    $('#aboveMinusWidth').val('');
    $('#xBelow').val('');
    $('#yBelow').val('');
    $('#zBelow').val('');
    $('#belowMinusWidth').val('');
    $('#fullHeightCabinet').val('');
    $('#cabinetStretch').val('');
    $('#shelve').val('');
    $('#island').val('');
    $('#district').val('');
    $('#districtPrice').val('');
    $('#type').val('0');
    $('#result').html('');
}

function numberWithCommas(x) {
    return x.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function generatePost() {
    const topType = $('#topType').val();
    const topColor = $('#topColor').val();
    const frontColor = $('#frontColor').val();
    const price = $('#price').val();
    const nameAndAddress = $('#nameAndAddress').val();
    const manualText = $('#nameAndAddress').val();

    const line = '➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖';

    let pricing = '🔥 ทุกแบบเราคิดราคาตาม 🔥';
    pricing += ' <br /> ';
    pricing += '1. รูปแบบห้องครัว (ตัวไอ, ตัวแอล, ตัวยู)';
    pricing += ' <br /> ';
    pricing += '2. ขนาดของห้องครัว';
    pricing += ' <br /> ';
    pricing += '3. ท้อปเคาเตอร์ (ท้อป ลามิเนต, ท้อป หินแกรนิต)';

    let property = 'WORLD CLASS KITCHEN ครัวบิ้วอิน';
    property += ' <br /> ';
    property += '🎉🎉 เราพร้อมที่จะให้คำปรึกษา ออกแบบและประเมินราคาคร่าวๆ เพื่อเป็นตัวเลือกในการตัดสินใจ';
    property += ' <br /> ';
    property += '✔ เน้นคุณภาพของสินค้า';
    property += ' <br /> ';
    property += '✔ การบริการ';
    property += ' <br /> ';
    property += '✔ ราคาที่ย่อมเยา (คิดตามขนาดของห้องครัว)';

    let contact = 'สนใจสอบถามข้อมูลได้นะค่ะ';
    contact += ' <br /> ';
    contact += '📞Tel : 095-6482715';
    contact += ' <br /> ';
    contact += '✅ Line : @worldclasskitchen';
    contact += ' <br /> ';
    contact += '✅ Inbox : m.me/worldclasskitchen.itt';
    contact += ' <br /> ';
    contact += '✅ Email : worldclasskitchen@hotmail.com';

    const hashtag = '#ครัวบิ้วอิน #บิ้วอินครัว #ครัวบิ้วอินคอนโด #บิ้วอินคอนโด #ครัวบิ้วอินราคาถูก #บิ้วอินครัวราคาถูก #ครัวสไตล์โมเดิร์น #worldclasskitchen';

    let suffix1 = pricing;
    suffix1 += ' <br /> ';
    suffix1 += contact;
    suffix1 += ' <br /> ';
    suffix1 += ' <br /> ';
    suffix1 += hashtag;

    let suffix2 = line;
    suffix2 += ' <br /> ';
    suffix2 += property;
    suffix2 += ' <br /> ';
    suffix2 += line;
    suffix2 += ' <br /> ';
    suffix2 += contact;
    suffix2 += ' <br /> ';
    suffix2 += ' <br /> ';
    suffix2 += hashtag;


    let result = 'หน้าบานสี' + frontColor + 'กับท้อป' + topType + 'สี' + topColor +'สวยๆค่ะ'
    result += ' <br /> ';
    result += suffix1;
    result += ' <br /><br /> ';

    result += '👉👉 ขอบคุณลูกค้า ' + nameAndAddress + ' มากๆค่ะ ที่ไว้วางใจเรา';
    result += ' <br /> ';
    result += '💵 เซตนี้ ราคา ' + price + ' บาท';
    result += ' <br /> ';
    result += 'ท้อป ' + topType + 'สี' + ' ' + topColor;
    result += ' <br /> ';
    result += 'หน้าบานสี ' + frontColor;
    result += ' <br /> ';
    result += suffix2;
    result += ' <br /><br /> ';
    
    result += 'ท้อป' + topType + 'สี' + topColor + ' กับ หน้าบานสี' + frontColor +'สวยๆค่ะ'
    result += ' <br /> ';
    result += suffix1;
    result += ' <br /><br /> ';

    result += 'นำครัวสวยๆ มาฝากค่าา';
    result += ' <br /> ';
    result += 'ท้อป' + topType + 'สี' + topColor + ' กับ หน้าบานสี' + frontColor
    result += ' <br /> ';
    result += 'ผสมผสานเข้ากันอย่างลงตัว';
    result += ' <br /> ';
    result += suffix2;
    result += ' <br /><br /> ';
    
    result += 'นำครัวสวยๆ มาฝากค่าา';
    result += ' <br /> ';
    result += suffix2;
    result += ' <br /><br /> ';

    result += 'นำครัวสวยๆ มาฝากค่าา';
    result += ' <br /> ';
    result += suffix1;
    result += ' <br /><br /> ';

    result += manualText;
    result += ' <br /> ';
    result += suffix2;

    $('#result').html(result);
    $('#exampleModal').modal('toggle');
}
