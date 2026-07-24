window.thaiData = {
    id: "thai",
    title: "泰文字母系統 (Thai)",
    langCode: "th-TH",
    description: "元音附標文字（Abugida），包含 44 個輔音，分為中音、高音與低音三類，直接決定聲調規則。",
    items: [
        {
            id: "th_1",
            char: "ก",
            name: "ก ไก่ (Ko Kai)",
            ipa: "/kɔː/",
            zhuyin: "ㄍㄛ",
            desc: "不送氣中音，發音類似國語「ㄍ」。無頭圈，起筆由左下向上，頂端有鳥喙折角，再彎回右下。",
            class: "mid",
            className: "中音輔音",
            meaning: "雞",
            checkpoints: [
                {x: 60, y: 200},
                {x: 60, y: 80},
                {x: 100, y: 60},
                {x: 140, y: 80},
                {x: 140, y: 200}
            ]
        },
        {
            id: "th_2",
            char: "ข",
            name: "ข ไข่ (Kho Khai)",
            ipa: "/kʰɔː/",
            zhuyin: "ㄎㄛ（高調）",
            desc: "送氣高音，發音類似「ㄎ」但尾音上揚。由頂端小圓圈順時針起筆，向下折彎後向右，再垂直向上。",
            class: "high",
            className: "高音輔音",
            meaning: "蛋",
            checkpoints: [
                {x: 90, y: 60},
                {x: 120, y: 70},
                {x: 70, y: 150},
                {x: 150, y: 150},
                {x: 150, y: 60}
            ]
        },
        {
            id: "th_3",
            char: "ค",
            name: "ค ฅน (Kho Khon)",
            ipa: "/kʰɔː/",
            zhuyin: "ㄎㄛ（低調）",
            desc: "送氣低音，字形與 ข 相反。由頂端小圓圈逆時針起筆（頭圈朝外），向下後向上折，頂端呈弧形後拉回右下。",
            class: "low",
            className: "低音輔音",
            meaning: "人",
            checkpoints: [
                {x: 110, y: 70},
                {x: 70, y: 90},
                {x: 70, y: 200},
                {x: 120, y: 60},
                {x: 150, y: 200}
            ]
        },
        {
            id: "th_4",
            char: "ง",
            name: "ง งู (Ngo Ngu)",
            ipa: "/ŋɔː/",
            zhuyin: "兀ㄛ（鼻音起音）",
            desc: "後鼻音低音，類似英文 sing 結尾的 ng 接母音。由頂端頭圈起筆，垂直向下後，向左下斜劃出尾巴。",
            class: "low",
            className: "低音輔音",
            meaning: "蛇",
            checkpoints: [
                {x: 110, y: 60},
                {x: 110, y: 150},
                {x: 50, y: 210}
            ]
        }
    ]
};
