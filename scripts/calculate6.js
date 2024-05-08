function calculate() {
    // $('#exampleModal').modal('toggle');
    const priceAboveMDF = 6000;
    const priceBelowTopLaminateMDF = 10000;
    const priceBelowTopGraniteMDF = 15000;

    const priceAboveHMR = 7200;
    const priceBelowTopLaminateHMR = 12000;
    const priceBelowTopGraniteHMR = 17000;
    
    const priceFullHeightCabinet = 13500;
    const priceCabinetStretch = 1500;
    const priceShelve = 1200;

    const priceIslandLaminate60MDF = 8500;
    const priceIslandGranite60MDF = 13500;
    const priceIslandGranite80MDF = 14500;
    const priceIslandGranite90MDF = 15500;

    const priceIslandLaminate60HMR = 8500;
    const priceIslandGranite60HMR = 13500;
    const priceIslandGranite80HMR = 14500;
    const priceIslandGranite90HMR = 15500;

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

    // แบบปกติ, แบบ MDF, แบบ HMR, แบบท้อปลามิเนต, แบบท้อปหินแกรนิต, แบบครัวปูนกรณีไม่รวมท้อป, แบบครัวปูนแบบรวมท้อป
    const type = parseInt($('#type').val()) || 0;

    let aboveWidth = xAbove + yAbove + zAbove;
    let belowWidth = xBelow + yBelow + zBelow;

    // พื้นที่ซ้อนทับลบด้านละ 0.6 เมตร
    aboveMinusWidth *= 0.3;
    belowMinusWidth *= 0.6;

    const kitchenType = { I: 0, L: 1, U: 2};
    let aboveKitchenType = aboveMinusWidth == 0 ? kitchenType.I : (aboveMinusWidth == 0.6 ? kitchenType.L : kitchenType.U);
    let belowKitchenType = belowMinusWidth == 0 ? kitchenType.I : (belowMinusWidth == 0.6 ? kitchenType.L : kitchenType.U);

    let resultPriceAboveMDF = Math.ceil(((aboveWidth - aboveMinusWidth) * priceAboveMDF) / 100) * 100;
    let resultPriceBelowTopLaminateMDF = Math.ceil(((belowWidth - belowMinusWidth) * priceBelowTopLaminateMDF) / 100) * 100;
    let resultPriceBelowTopGraniteMDF = Math.ceil(((belowWidth - belowMinusWidth) * priceBelowTopGraniteMDF) / 100) * 100;

    let resultPriceAboveHMR = Math.ceil(((aboveWidth - aboveMinusWidth) * priceAboveHMR) / 100) * 100;
    let resultPriceBelowTopLaminateHMR = Math.ceil(((belowWidth - belowMinusWidth) * priceBelowTopLaminateHMR) / 100) * 100;
    let resultPriceBelowTopGraniteHMR = Math.ceil(((belowWidth - belowMinusWidth) * priceBelowTopGraniteHMR) / 100) * 100;

    // กรณีไม่คีย์ค่า
    resultPriceAboveMDF = resultPriceAboveMDF < 0 ? 0 : resultPriceAboveMDF;
    resultPriceBelowTopLaminateMDF = resultPriceBelowTopLaminateMDF < 0 ? 0 : resultPriceBelowTopLaminateMDF;
    resultPriceBelowTopGraniteMDF = resultPriceBelowTopGraniteMDF < 0 ? 0 : resultPriceBelowTopGraniteMDF;
    resultPriceAboveHMR = resultPriceAboveHMR < 0 ? 0 : resultPriceAboveHMR;
    resultPriceBelowTopLaminateHMR = resultPriceBelowTopLaminateHMR < 0 ? 0 : resultPriceBelowTopLaminateHMR;
    resultPriceBelowTopGraniteHMR = resultPriceBelowTopGraniteHMR < 0 ? 0 : resultPriceBelowTopGraniteHMR;

    // ยืดตู้ปิดบัว
    let resultPriceCabinetStretch = Math.ceil((cabinetStretch * priceCabinetStretch) / 100) * 100;

    // ตู้เต็มสูง
    let resultPriceCabinFullHeightCabinet = Math.ceil((fullHeightCabinet * priceFullHeightCabinet) / 100) * 100;

    // ชั้นวางของ
    let resultPriceShelve = Math.ceil((shelve * priceShelve) / 100) * 100;

    // Island
    let resultPriceIslandLaminate60MDF = Math.ceil((island * priceIslandLaminate60MDF) / 100) * 100;
    let resultPriceIslandGranite60MDF = Math.ceil((island * priceIslandGranite60MDF) / 100) * 100;
    let resultPriceIslandGranite80MDF = Math.ceil((island * priceIslandGranite80MDF) / 100) * 100;
    let resultPriceIslandGranite90MDF = Math.ceil((island * priceIslandGranite90MDF) / 100) * 100;
    let resultPriceIslandLaminate60HMR = Math.ceil((island * priceIslandLaminate60HMR) / 100) * 100;
    let resultPriceIslandGranite60HMR = Math.ceil((island * priceIslandGranite60HMR) / 100) * 100;
    let resultPriceIslandGranite80HMR = Math.ceil((island * priceIslandGranite80HMR) / 100) * 100;
    let resultPriceIslandGranite90HMR = Math.ceil((island * priceIslandGranite90HMR) / 100) * 100;

    // has value flag
    const aboveHasValue = aboveWidth > 0;
    const belowHasValue = belowWidth > 0;
    const aboveBelowHasValue = aboveHasValue && belowHasValue;
    const otherHasValue = [island, shelve, fullHeightCabinet, cabinetStretch].filter(x => x > 0).length > 0;
    const allHasValueMoreOne = [aboveWidth, belowWidth, island, shelve, fullHeightCabinet, cabinetStretch].filter(x => x > 0).length > 1;



    let resultPrice = '';
    let resultDetail = '';
    let resultIsland = '';

    // header
    const headerTypeText = ['', '', '', 'กรณีมีโครงปูนพร้อมท้อปแล้ว<br /><br />', 'กรณีมีโครงปูนแล้ว<br /><br />'];
    resultPrice += headerTypeText[type];

    // type
    if (belowKitchenType == kitchenType.I) {
        resultPrice += 'ครัวตัวไอ ขนาด ' + xBelow + ' เมตร<br />';
    }
    else if (belowKitchenType == kitchenType.L) {
        resultPrice += 'ครัวตัวแอล ขนาด ' + xBelow + 'x' + yBelow + ' เมตร<br />';
    }
    else if (belowKitchenType == kitchenType.U) {
        resultPrice += 'ครัวตัวยู ขนาด ' + xBelow + 'x' + yBelow + 'x' + zBelow + ' เมตร<br />';
    }

    // ตู้บน
    const aboveTypeText = ['ตู้บนมีสองราคาค่ะ', 'ตู้บน', 'ตู้บน', 'ตู้บนมีสองราคาค่ะ', 'ตู้บนมีสองราคาค่ะ', 'ตู้บนมีสองราคาค่ะ', 'ตู้บนมีสองราคาค่ะ'];
    const aboveText = aboveKitchenType == kitchenType.I ?
        aboveTypeText[type] + ' (ระยะรวม ' + aboveWidth.toFixed(2) + ' เมตร)':
        aboveTypeText[type] + ' (ระยะรวม ' + aboveWidth.toFixed(2) + ' เมตร หักลบพื้นที่ซ้อนทับ ' + aboveMinusWidth + ' เมตร เหลือ ' + (aboveWidth - aboveMinusWidth).toFixed(2) + ' เมตร)';
    const abovePriceTextMDF = '👉 ไม้ MDF ' + numberWithCommas(resultPriceAboveMDF) + ' บาท';
    const abovePriceTextHMR = '👉 ไม้ HMR ' + numberWithCommas(resultPriceAboveHMR) + ' บาท';

    // ตู้ล่าง
    const belowNewline = aboveWidth > 0 ? '<br />' : '';
    const belowTypeText = ['ตู้ล่างมีสี่ราคาค่ะ', 'ตู้ล่างมีสองราคาค่ะ', 'ตู้ล่างมีสองราคาค่ะ', 'ตู้ล่างมีสองราคาค่ะ', 'ตู้ล่างมีสองราคาค่ะ', 'ตู้ล่างมีสองราคาค่ะ', 'ตู้ล่างมีสองราคาค่ะ'];
    const belowText = belowKitchenType == kitchenType.I ?
        belowNewline + belowTypeText[type] + ' (ระยะรวม ' + belowWidth.toFixed(2) + ' เมตร)':
        belowNewline + belowTypeText[type] + ' (ระยะรวม ' + belowWidth.toFixed(2) + ' เมตร หักลบพื้นที่ซ้อนทับ ' + belowMinusWidth + ' เมตร เหลือ ' + (belowWidth - belowMinusWidth).toFixed(2) + ' เมตร)';
    const belowPriceTextTopLaminateMDF = '👉 ไม้ MDF ท้อป ลามิเนต ' + numberWithCommas(resultPriceBelowTopLaminateMDF) + ' บาท';
    const belowPriceTextTopGraniteMDF = '👉 ไม้ MDF ท้อป หินแกรนิต ' + numberWithCommas(resultPriceBelowTopGraniteMDF) + ' บาท';
    const belowPriceTextTopLaminateHMR = '👉 ไม้ HMR ท้อป ลามิเนต ' + numberWithCommas(resultPriceBelowTopLaminateHMR) + ' บาท';
    const belowPriceTextTopGraniteHMR = '👉 ไม้ HMR ท้อป หินแกรนิต ' + numberWithCommas(resultPriceBelowTopGraniteHMR) + ' บาท';

    // island
    const islandTypeText = ['Island มีสี่ราคาค่ะ', 'Island มีสองราคาค่ะ', 'Island มีสองราคาค่ะ', 'Island มีสองราคาค่ะ', 'Island มีสองราคาค่ะ', '', ''];
    const islandText = islandTypeText[type] + ' (ระยะรวม ' + island + ' เมตร)';
    const islandPriceTextTopLaminateMDF = '👉 ไม้ MDF ท้อป ลามิเนต ลึก 60 cm ' + numberWithCommas(resultPriceIslandLaminate60MDF) + ' บาท';
    const islandPriceTextTopGraniteMDF = '👉 ไม้ MDF ท้อป หินแกรนิต ลึก 60 cm ' + numberWithCommas(resultPriceIslandGranite60MDF) + ' บาท';
    const islandPriceTextTopLaminateHMR = '👉 ไม้ HMR ท้อป ลามิเนต ลึก 60 cm ' + numberWithCommas(resultPriceIslandLaminate60HMR) + ' บาท';
    const islandPriceTextTopGraniteHMR = '👉 ไม้ HMR ท้อป หินแกรนิต ลึก 60 cm ' + numberWithCommas(resultPriceIslandGranite60HMR) + ' บาท';

    // shelve
    const shelveText = 'ชั้นวางของ (ระยะรวม ' + shelve + ' เมตร)<br />' + '👉 ' + numberWithCommas(resultPriceShelve) + ' บาท';

    // fullHeightCabinet
    const fullHeightCabinetText = 'ตู้เต็มสูง (ระยะรวม ' + fullHeightCabinet + ' เมตร)<br />' + '👉 ' + numberWithCommas(resultPriceCabinFullHeightCabinet) + ' บาท';

    // cabinetStretch
    const cabinetStretchText = 'ค่ายืดตู้ปิดบัวกรณีเพดานสูงเกิน 220 cm<br />' + '👉 ' + numberWithCommas(resultPriceCabinetStretch) + ' บาท';

    // total price text
    const headTotalPriceText = aboveBelowHasValue && !otherHasValue > 0 ? 'รวมทั้งตู้ด้านบนและด้านล่าง' : (aboveHasValue || belowHasValue) && otherHasValue ? 'รวมทั้งหมด' : '';
    const totalPriceTextTopLaminateMDF = headTotalPriceText + ' กรณี ไม้ MDF ท้อป ลามิเนต ' + numberWithCommas(resultPriceAboveMDF + resultPriceBelowTopLaminateMDF + resultPriceIslandLaminate60MDF + resultPriceShelve + resultPriceCabinFullHeightCabinet + resultPriceCabinetStretch) + ' บาท';
    const totalPriceTextTopGraniteMDF = headTotalPriceText + ' กรณี ไม้ MDF ท้อป หินแกรนิต ' + numberWithCommas(resultPriceAboveMDF + resultPriceBelowTopGraniteMDF + resultPriceIslandGranite60MDF + resultPriceShelve + resultPriceCabinFullHeightCabinet + resultPriceCabinetStretch) + ' บาท';;
    const totalPriceTextTopLaminateHMR = headTotalPriceText + ' กรณี ไม้ HMR ท้อป ลามิเนต ' + numberWithCommas(resultPriceAboveHMR + resultPriceBelowTopLaminateHMR + resultPriceIslandLaminate60HMR + resultPriceShelve + resultPriceCabinFullHeightCabinet + resultPriceCabinetStretch) + ' บาท';;
    const totalPriceTextTopGraniteHMR = headTotalPriceText + ' กรณี ไม้ HMR ท้อป หินแกรนิต ' + numberWithCommas(resultPriceAboveHMR + resultPriceBelowTopGraniteHMR + resultPriceIslandGranite60HMR + resultPriceShelve + resultPriceCabinFullHeightCabinet + resultPriceCabinetStretch) + ' บาท';;

    if(type == 0) { // แบบปกติ
        resultPrice += aboveWidth > 0 ? aboveText + '<br />' + abovePriceTextMDF + '<br />' + abovePriceTextHMR : '';
        resultPrice += belowWidth > 0 ? belowText + '<br />' + belowPriceTextTopLaminateMDF + '<br />' + belowPriceTextTopGraniteMDF + '<br />' + belowPriceTextTopLaminateHMR + '<br />' + belowPriceTextTopGraniteHMR : '';
        resultPrice += island > 0 ? '<br />' + islandText + '<br />' + islandPriceTextTopLaminateMDF + '<br />' + islandPriceTextTopGraniteMDF + '<br />' + islandPriceTextTopLaminateHMR +  '<br />' + islandPriceTextTopGraniteHMR : '';
        resultPrice += shelve > 0 ? '<br />' + shelveText : '';
        resultPrice += fullHeightCabinet > 0 ? '<br />' + fullHeightCabinetText : '';
        resultPrice += cabinetStretch > 0 ? '<br />' + cabinetStretchText : '';

        resultPrice += allHasValueMoreOne ? '<br /><br />' + totalPriceTextTopLaminateMDF + '<br />' + totalPriceTextTopGraniteMDF + '<br />' + totalPriceTextTopLaminateHMR + '<br />' + totalPriceTextTopGraniteHMR : '';

    } else if (type == 1) { // MDF
        resultPrice += aboveWidth > 0 ? aboveText + '<br />' + abovePriceTextMDF : '';
        resultPrice += belowWidth > 0 ? belowText + '<br />' + belowPriceTextTopLaminateMDF + '<br />' + belowPriceTextTopGraniteMDF : '';
        resultPrice += island > 0 ? '<br />' + islandText + '<br />' + islandPriceTextTopLaminateMDF + '<br />' + islandPriceTextTopGraniteMDF : '';
        resultPrice += shelve > 0 ? '<br />' + shelveText : '';
        resultPrice += fullHeightCabinet > 0 ? '<br />' + fullHeightCabinetText : '';
        resultPrice += cabinetStretch > 0 ? '<br />' + cabinetStretchText : '';

        resultPrice += allHasValueMoreOne ? '<br /><br />' + totalPriceTextTopLaminateMDF + '<br />' + totalPriceTextTopGraniteMDF : '';
    } else if (type == 2) { // HMR
        resultPrice += aboveWidth > 0 ? aboveText + '<br />' + abovePriceTextMDF + '<br />' + abovePriceTextHMR : '';
        resultPrice += belowWidth > 0 ? belowText + '<br />' + belowPriceTextTopLaminateHMR + '<br />' + belowPriceTextTopGraniteHMR : '';
        resultPrice += island > 0 ? '<br />' + islandText + '<br />' + islandPriceTextTopLaminateHMR +  '<br />' + islandPriceTextTopGraniteHMR : '';
        resultPrice += shelve > 0 ? '<br />' + shelveText : '';
        resultPrice += fullHeightCabinet > 0 ? '<br />' + fullHeightCabinetText : '';
        resultPrice += cabinetStretch > 0 ? '<br />' + cabinetStretchText : '';

        resultPrice += allHasValueMoreOne ? '<br /><br />' + totalPriceTextTopLaminateHMR + '<br />' + totalPriceTextTopGraniteHMR : '';
    } else if (type == 3) { // แบบท้อปลามิเนต
        resultPrice += aboveWidth > 0 ? aboveText + '<br />' + abovePriceTextMDF + '<br />' + abovePriceTextHMR : '';
        resultPrice += belowWidth > 0 ? belowText + '<br />' + belowPriceTextTopLaminateMDF + '<br />' + belowPriceTextTopLaminateHMR : '';
        resultPrice += island > 0 ? '<br />' + islandText + '<br />' + islandPriceTextTopLaminateMDF + '<br />' + islandPriceTextTopLaminateHMR : '';
        resultPrice += shelve > 0 ? '<br />' + shelveText : '';
        resultPrice += fullHeightCabinet > 0 ? '<br />' + fullHeightCabinetText : '';
        resultPrice += cabinetStretch > 0 ? '<br />' + cabinetStretchText : '';

        resultPrice += allHasValueAtLeastTwo ? '<br /><br />' + totalPriceTextTopLaminateMDF + '<br />' + totalPriceTextTopLaminateHMR : '';
    } else if (type == 4) { // แบบท้อปหินแกรนิต
        resultPrice += aboveWidth > 0 ? aboveText + '<br />' + abovePriceTextMDF + '<br />' + abovePriceTextHMR : '';
        resultPrice += belowWidth > 0 ? belowText + '<br />' + belowPriceTextTopGraniteMDF + '<br />' + belowPriceTextTopGraniteHMR : '';
        resultPrice += island > 0 ? '<br />' + islandText + '<br />' + islandPriceTextTopGraniteMDF + '<br />' + islandPriceTextTopGraniteHMR : '';
        resultPrice += shelve > 0 ? '<br />' + shelveText : '';
        resultPrice += fullHeightCabinet > 0 ? '<br />' + fullHeightCabinetText : '';
        resultPrice += cabinetStretch > 0 ? '<br />' + cabinetStretchText : '';

        resultPrice += allHasValueMoreOne ? '<br /><br />' + totalPriceTextTopGraniteMDF + '<br />' + totalPriceTextTopGraniteHMR : '';
    } else if(type == 5) {

    } else if(type == 6) {

    }


    if (districtPrice > 0 && district != '') {
        resultPrice += '<br />';
        resultPrice += '<br />';
        resultPrice += 'ค่าระยะทางสำหรับไปกลับจังหวัด' + district + 'สองรอบคือวันวัดหน้างานและวันติดตั้งรวม ' + numberWithCommas(districtPrice) + ' บาท';
    }

    // if (island > 0) {
    //     resultIsland += 'Island มีสี่ราคาค่ะ (ระยะรวม ' + island + ' เมตร)';
    //     resultIsland += '<br />';
    //     resultIsland += '👉 ท้อป ลามิเนต ลึก 60 cm ' + numberWithCommas(resultPriceIslandLaminate60) + ' บาท';
    //     resultIsland += '<br />';
    //     resultIsland += '👉 ท้อป หินแกรนิต ลึก 60 cm ' + numberWithCommas(resultPriceIslandGranite60) + ' บาท';
    //     resultIsland += '<br />';
    //     resultIsland += '👉 ท้อป หินแกรนิต ลึก 80 cm ' + numberWithCommas(resultPriceIslandGranite80) + ' บาท';
    //     resultIsland += '<br />';
    //     resultIsland += '👉 ท้อป หินแกรนิต ลึก 90 cm ' + numberWithCommas(resultPriceIslandGranite90) + ' บาท';
    // }

    resultDetail += 'ราคารวม ครัว+ติดตั้ง';
    resultDetail += '<br />';
    resultDetail += '✅ ฟรีค่าแรงปูกระเบื้องหรือโมเสค เหนือตู้ล่าง 60 cm';
    resultDetail += '<br />';
    resultDetail += '✅ ฟรีค่าแรงติดตั้ง hood , เตาอบ, ซิ้งค์, ตระแกรง';
    resultDetail += '<br />';
    if (aboveWidth > 0) {
        resultDetail += '✅ ตู้บนรับช่องไมโครเวฟ';
        resultDetail += '<br />';
    }
    resultDetail += '✅ แถมตะแกรงใส่ช้อนส้อม';
    if (districtPrice == 0 && district != '')
    {
        resultDetail += '<br />';
        resultDetail += '✅ จังหวัด' + district + 'ไม่คิดค่าระยะทางเพิ่ม';
    }
    resultDetail += '<br />';
    resultDetail += '** ราคาไม่รวมซิ้งค์และอุปกรณ์ไฟฟ้า ลูกค้าซื้อมาเองหรือสั่งจากทางเราก็ได้ค่ะ ทางเราติดตั้งให้ฟรีไม่คิดค่าแรงเพิ่ม';
    resultDetail += '<br />';
    resultDetail += '<br />';
    // resultDetail += 'เราใช้วัสดุเป็น MDF ทั้งโครงตู้และหน้าบานค่ะ';
    resultDetail += 'วัสดุโครงตู้และหน้าบานมีให้เลือกสองแบบ ทั้ง MDF และ HMR ค่ะ';
    resultDetail += '<br />';
    resultDetail += '** กรณีลูกค้าต้องการทำโครงปูน ลูกค้าต้องก่อปูนไว้ค่ะ';
    if (aboveWidth > 0)
    {
        resultDetail += '<br />';
        resultDetail += '<br />';
        resultDetail += 'กรณีที่ทำตู้บน';
        resultDetail += '<br />';
        resultDetail += '👉 ทำตู้บนถึงเพดานที่ 220 cm';
        resultDetail += '<br />';
        if (cabinetStretch > 0)
        {
            resultDetail += '(หากสูงกว่านี้มีค่ายืดตู้บนและค่าปิดบัว)';
        }
        else
        {
            resultDetail += '(หากสูงกว่านี้มีค่ายืดตู้บนและค่าปิดบัว ขอความสูงเพดานค่ะ)';
        }
        resultDetail += '<br />';
        resultDetail += '👉 ตู้ล่างสูง 80-90 cm ลึก 60 cm';
        resultDetail += '<br />';
        resultDetail += '👉 ระหว่างตู้บนล่าง 60 cm';
        resultDetail += '<br />';
        resultDetail += '👉 ตู้บนสูง 30-80 cm ลึก 30 cm';
    }
    resultDetail += '<br />';
    resultDetail += '<br />';
    resultDetail += 'คิววันวัดหน้างาน ถ้าลูกค้าสะดวก ส่วญใหญ่แล้วไม่เกิน 1 อาทิตย์ค่ะ หลังจากวันวัดหน้างานใช้เวลาผลิตประมาณ 20-25 วัน และติดตั้งใช้เวลา 1-2 วันค่ะ';
    // resultDetail += '<br />';
    // resultDetail += '<br />';
    // resultDetail += 'ขอบคุณค่ะ';

    let result = resultPrice;
    if(resultIsland) {
        result += '<br />';
        result += '<br />';
        result += resultIsland;
    }
    result += '<br />';
    result += '<br />';
    result += resultDetail;

    $('#result').html(result);
    $('#resultPrice').val(resultPrice);
    $('#resultDetail').val(resultDetail);
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
    pricing += '<br />';
    pricing += '1. รูปแบบห้องครัว (ตัวไอ, ตัวแอล, ตัวยู)';
    pricing += '<br />';
    pricing += '2. ขนาดของห้องครัว';
    pricing += '<br />';
    pricing += '3. ท้อปเคาเตอร์ (ท้อป ลามิเนต, ท้อป หินแกรนิต)';

    let property = 'WORLD CLASS KITCHEN ครัวบิ้วอิน';
    property += '<br />';
    property += '🎉🎉 เราพร้อมที่จะให้คำปรึกษา ออกแบบและประเมินราคาคร่าวๆ เพื่อเป็นตัวเลือกในการตัดสินใจ';
    property += '<br />';
    property += '✔ เน้นคุณภาพของสินค้า';
    property += '<br />';
    property += '✔ การบริการ';
    property += '<br />';
    property += '✔ ราคาที่ย่อมเยา (คิดตามขนาดของห้องครัว)';

    let contact = 'สนใจสอบถามข้อมูลได้นะค่ะ';
    contact += '<br />';
    contact += '📞Tel : 095-6482715';
    contact += '<br />';
    contact += '✅ Line : @worldclasskitchen';
    contact += '<br />';
    contact += '✅ Inbox : m.me/worldclasskitchen.itt';
    contact += '<br />';
    contact += '✅ Email : worldclasskitchen@hotmail.com';

    const hashtag = '#ครัวบิ้วอิน #บิ้วอินครัว #ครัวบิ้วอินคอนโด #บิ้วอินคอนโด #ครัวบิ้วอินราคาถูก #บิ้วอินครัวราคาถูก #ครัวสไตล์โมเดิร์น #worldclasskitchen';

    let suffix1 = pricing;
    suffix1 += '<br />';
    suffix1 += contact;
    suffix1 += '<br />';
    suffix1 += '<br />';
    suffix1 += hashtag;

    let suffix2 = line;
    suffix2 += '<br />';
    suffix2 += property;
    suffix2 += '<br />';
    suffix2 += line;
    suffix2 += '<br />';
    suffix2 += contact;
    suffix2 += '<br />';
    suffix2 += '<br />';
    suffix2 += hashtag;


    let result = 'หน้าบานสี' + frontColor + 'กับท้อป' + topType + 'สี' + topColor +'สวยๆค่ะ'
    result += '<br />';
    result += suffix1;
    result += ' <br /><br /> ';

    result += '👉👉 ขอบคุณลูกค้า ' + nameAndAddress + ' มากๆค่ะ ที่ไว้วางใจเรา';
    result += '<br />';
    result += '💵 เซตนี้ ราคา ' + price + ' บาท';
    result += '<br />';
    result += 'ท้อป ' + topType + 'สี' + ' ' + topColor;
    result += '<br />';
    result += 'หน้าบานสี ' + frontColor;
    result += '<br />';
    result += suffix2;
    result += ' <br /><br /> ';
    
    result += 'ท้อป' + topType + 'สี' + topColor + ' กับ หน้าบานสี' + frontColor +'สวยๆค่ะ'
    result += '<br />';
    result += suffix1;
    result += ' <br /><br /> ';

    result += 'นำครัวสวยๆ มาฝากค่าา';
    result += '<br />';
    result += 'ท้อป' + topType + 'สี' + topColor + ' กับ หน้าบานสี' + frontColor
    result += '<br />';
    result += 'ผสมผสานเข้ากันอย่างลงตัว';
    result += '<br />';
    result += suffix2;
    result += ' <br /><br /> ';
    
    result += 'นำครัวสวยๆ มาฝากค่าา';
    result += '<br />';
    result += suffix2;
    result += ' <br /><br /> ';

    result += 'นำครัวสวยๆ มาฝากค่าา';
    result += '<br />';
    result += suffix1;
    result += ' <br /><br /> ';

    result += manualText;
    result += '<br />';
    result += suffix2;

    $('#result').html(result);
    $('#exampleModal').modal('toggle');
}

function coppyAbove() {
    $('#xBelow').val($('#xAbove').val());
    $('#yBelow').val($('#yAbove').val());
    $('#zBelow').val($('#zAbove').val());
    $('#belowMinusWidth').val($('#aboveMinusWidth').val());
}

function coppy(id) {
    let copyText = document.getElementById(id);
    let resultText = copyText.value.replace(/<br \/\>/gi, '\n');

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(resultText);
    let coppyTag = document.getElementById("alertCoppy");
    coppyTag.innerHTML = "Coppie " + id;
    setTimeout(function() { coppyTag.innerHTML = ""; }, 1000)
    
    /* Alert the copied text */
    // alert("Copied");
}
