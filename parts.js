window.PC_BUILDER_PARTS = {
      cpu: {
        i3_12100: { model: "Intel Core i3-12100（带核显）", price: 650 },
        i3_12100f: { model: "Intel Core i3-12100F（无核显，必须搭配独显）", price: 499 },
        i3_14100f: { model: "Intel Core i3-14100F（无核显，必须搭配独显）", price: 699 },
        r5_4300g: { model: "AMD Ryzen 3 4300G（带核显）", price: 539 },
        r5_5500: { model: "AMD Ryzen 5 5500（无核显，通常搭配独显）", price: 459 },
        i5_12400f: { model: "Intel Core i5-12400F（无核显，必须搭配独显）", price: 629 },
        i5_13400f: { model: "Intel Core i5-13400F（无核显，必须搭配独显）", price: 999 },
        r5_5600g: { model: "AMD Ryzen 5 5600G（带核显，低预算过渡）", price: 739 },
        r5_5600: { model: "AMD Ryzen 5 5600（无核显，通常搭配独显）", price: 649 },
        r5_7500f: { model: "AMD Ryzen 5 7500F（无核显，必须搭配独显）", price: 899 },
        i5_13500: { model: "Intel Core i5-13500（带核显）", price: 1550 },
        r5_9600x: { model: "AMD Ryzen 5 9600X（AM5/DDR5，带基础核显）", price: 1399 }
      },
      gpu: {
        igpu: { model: "核显（CPU 自带显示功能，不单独买显卡）", price: 0 },

        rx5500xtUsed: { model: "二手 RX 5500 XT 4GB（低预算独显，风险中）", price: 500 },
        gtx1060Used: { model: "二手 GTX 1060 3GB（低预算网游，显存较小）", price: 400 },
        rx580Used: { model: "二手 RX 580 8GB / RX 580 2048SP（极限低预算，风险较高）", price: 350 },
        gtx1660sUsed: { model: "二手 GTX 1660 Super 6GB", price: 650 },
        rx5600xtUsed: { model: "二手 RX 5600 XT 6GB", price: 700 },
        rx5700xtUsed: { model: "二手 RX 5700 XT 8GB（矿卡风险高）", price: 720 },
        rx6600Used: { model: "二手 RX 6600 8GB", price: 800 },
        rx6600xtUsed: { model: "二手 RX 6600 XT 8GB", price: 1000 },
        rx6700xtUsed: { model: "二手 RX 6700 XT 12GB（2K 入门，注意成色）", price: 1200 },
        rtx3060Used: { model: "二手 RTX 3060 12GB（注意矿卡和保修）", price: 1700 },
        rtx3060tiUsed: { model: "二手 RTX 3060 Ti 8GB（矿卡风险高）", price: 1550 },
        rx6800Used: { model: "二手 RX 6800 16GB（大显存，注意电源）", price: 1600 },
        rx6800xtUsed: { model: "二手 RX 6800 XT 16GB（高性能，建议 750W 电源）", price: 1800 },

        rx6400New: { model: "RX 6400 4GB（全新入门独显，性能有限）", price: 599 },
        rx6600New: { model: "RX 6600 8GB（撼讯/瀚铠/盈通/讯景/蓝宝石等）", price: 989 },
        rx6650xt: { model: "RX 6650 XT 8GB（1000–1200 元档重点参考）", price: 1150 },
        rx7600: { model: "RX 7600 8GB（全新主流 1080P）", price: 1499 },
        rx6750gre: { model: "RX 6750 GRE 10GB（全新/清仓，2K 入门）", price: 1999 },
        rtx4060: { model: "RTX 4060 8GB（全新省电，DLSS 友好）", price: 1999 },
        rtx5060: { model: "RTX 5060 8GB（全新，5000 元档可考虑）", price: 2399 },
        rtx4060ti: { model: "RTX 4060 Ti 8GB", price: 2599 },
        rx7800xt: { model: "RX 7800 XT 16GB", price: 3099 },
        rtx5060ti16: { model: "RTX 5060 Ti 16GB（全新大显存版）", price: 3799 },
        rtx5070: { model: "RTX 5070 12GB（全新高预算游戏卡）", price: 4599 },
        rx9070gre: { model: "RX 9070 GRE 12GB（全新/价格波动大）", price: 3499 }
      },
      board: {
        h610m: { model: "H610M DDR4 主板（LGA1700：铭瑄/华擎/微星/技嘉等）", price: 429 },
        b660m: { model: "B660M DDR4 主板（LGA1700：华硕/微星/技嘉/华擎等）", price: 560 },
        b760m: { model: "B760M DDR4 主板（LGA1700：铭瑄/华硕/微星/技嘉等）", price: 649 },
        b760mD5: { model: "B760M DDR5 主板（LGA1700：微星/技嘉/华硕等）", price: 999 },
        a520m: { model: "A520M 主板（AM4 入门：华擎/铭瑄/七彩虹等）", price: 380 },
        b450m: { model: "B450M 主板（AM4 性价比：七彩虹/铭瑄/华擎等）", price: 459 },
        b550m: { model: "B550M 入门/主流主板（AM4：华擎/铭瑄/七彩虹/技嘉等，按具体型号）", price: 550 },
        a620m: { model: "A620M 主板（AM5 入门/DDR5）", price: 499 },
        b650m: { model: "B650M 主板（AM5/DDR5：微星/技嘉/华硕等）", price: 699 }
      },
      ram: {
        d4_8: { model: "8GB DDR4 2666/3200 单条（极限办公/过渡）", price: 300 },
        d4_16: { model: "16GB DDR4 3200（8Gx2，金百达/光威/英睿达等）", price: 599 },
        d4_32: { model: "32GB DDR4 3200（16Gx2，当前内存高价期）", price: 1200 },
        d5_16: { model: "16GB DDR5 6000（8Gx2/入门套条，当前偏贵）", price: 1300 },
        d5_32: { model: "32GB DDR5 6000（16Gx2，当前高价期）", price: 2400 }
      },
      storage: {
        ssd256: { model: "256GB M.2 NVMe SSD（低预算过渡，后续建议加盘）", price: 269 },
        ssd500: { model: "512GB 普通 NVMe SSD（梵想/金士顿/低预算过渡）", price: 609 },
        ssd1t: { model: "1TB 普通 NVMe SSD（金百达/海康/佰维等性价比型号）", price: 899 },
        ssd1tHigh: { model: "1TB 高性能 TLC SSD（致态 TiPlus7100s 级别，当前偏贵）", price: 1200 },
        ssd2t: { model: "2TB 普通 NVMe SSD（游戏多/剪辑再考虑）", price: 1400 }
      },
      psu: {
        p500: { model: "500W 电源（驿晨宇玄武500K / 大水牛 / 先马等，注意具体型号和售后）", price: 155 },
        p550: { model: "550W 电源（驿晨宇玄武550 / 鑫谷 AN550W / 同级有售后型号）", price: 210 },
        p650: { model: "650W 电源（微星 A650BN / 艾湃 A650 / 长城 X6 等）", price: 289 },
        p750: { model: "750W 电源（鑫谷 GM750W / TT GF1 / 同级型号）", price: 429 },
        p850: { model: "850W 电源（艾湃电竞/爱国者/微星等，适合高功耗卡）", price: 499 }
      },
      cooler: {
        stock: { model: "盒装自带散热/原装散热（低功耗办公可用）", price: 0 },
        basic: { model: "入门四热管风冷（雅浚 E3A / 利民 AX120 / 同级）", price: 69 },
        plus: { model: "主流塔式风冷（利民 AX120R SE / 九州风神 AG400 / 同级）", price: 129 },
        strong: { model: "高规格双塔风冷（利民 PA120 / FS140 / 同级）", price: 199 }
      },
      case: {
        black: { model: "普通 MATX 机箱（低预算款，约 50–100 元）", price: 70 },
        normal: { model: "普通 MATX 机箱（先马/玩嘉/动力火车/长城等）", price: 120 },
        airflow: { model: "基础风道机箱（带更好散热/风扇位）", price: 180 },
        white: { model: "白色/海景房机箱（外观加价，低预算不默认推荐）", price: 220 },
        rgb: { model: "RGB/ARGB 机箱风扇预算（外观优先时再考虑）", price: 260 },
        small: { model: "小机箱预算（注意显卡长度和散热）", price: 120 }
      }
    };
