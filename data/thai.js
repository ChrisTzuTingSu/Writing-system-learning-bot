window.thaiData = {
    id: "thai",
    title: "泰文字母與聲調系統",
    langCode: "th-TH",
    description: "包含 44 個輔音（劃分為中音、高音、低音三類）與 4 個標準聲調符號。",
    items: [
        // 中音輔音 (Mid Class Consonants)
        { id: "th_1", char: "ก", name: "ก ไก่ (Ko Kai)", ipa: "/kɔː/", zhuyin: "ㄍㄛ", desc: "中音輔音。無頭圈，左下向上起筆，頂端有鳥喙折角。", class: "mid", className: "中音", meaning: "雞", checkpoints: [{x:60,y:200},{x:60,y:80},{x:100,y:60},{x:140,y:80},{x:140,y:200}] },
        { id: "th_2", char: "จ", name: "จ จาน (Cho Chan)", ipa: "/tɕɔː/", zhuyin: "ㄐㄛ", desc: "中音輔音。頂端順時針圓圈起筆，向下斜劃後彎回右上。", class: "mid", className: "中音", meaning: "盤子", checkpoints: [{x:110,y:70},{x:130,y:90},{x:90,y:190},{x:160,y:120}] },
        { id: "th_3", char: "ฎ", name: "ฎ ชฎา (Do Chada)", ipa: "/dɔː/", zhuyin: "ㄉㄛ", desc: "中音輔音。頂端圓圈起筆，向下延伸並帶有下方曲折尾巴。", class: "mid", className: "中音", meaning: "冠冕", checkpoints: [{x:100,y:60},{x:80,y:150},{x:120,y:210},{x:70,y:230}] },
        { id: "th_4", char: "ฏ", name: "ฏ ปฏัก (To Patak)", ipa: "/tɔː/", zhuyin: "ㄉㄛ", desc: "中音輔音。字形類似 ฎ，但下方尾巴有雙重曲折。", class: "mid", className: "中音", meaning: "刺棒", checkpoints: [{x:100,y:60},{x:80,y:150},{x:110,y:200},{x:130,y:230}] },
        { id: "th_5", char: "ด", name: "ด เด็ก (Do Dek)", ipa: "/dɔː/", zhuyin: "ㄉㄛ", desc: "中音輔音。頭圈朝內，起筆後向下再向右彎曲。", class: "mid", className: "中音", meaning: "小孩", checkpoints: [{x:100,y:70},{x:70,y:100},{x:70,y:200},{x:150,y:200}] },
        { id: "th_6", char: "ต", name: "ต เต่า (To Tao)", ipa: "/tɔː/", zhuyin: "ㄉㄛ", desc: "中音輔音。結構與 ด 相似，但頂端有下凹缺口。", class: "mid", className: "中音", meaning: "烏龜", checkpoints: [{x:100,y:70},{x:70,y:100},{x:100,y:60},{x:140,y:100},{x:140,y:200}] },
        { id: "th_7", char: "บ", name: "บ ใบไม้ (Bo Baimai)", ipa: "/bɔː/", zhuyin: "ㄅㄛ", desc: "中音輔音。左上頭圈起筆，向下、向右折後垂直向上。", class: "mid", className: "中音", meaning: "樹葉", checkpoints: [{x:80,y:70},{x:80,y:200},{x:160,y:200},{x:160,y:70}] },
        { id: "th_8", char: "ป", name: "ป ปลา (Po Pla)", ipa: "/pɔː/", zhuyin: "ㄅㄛ", desc: "中音輔音。字形與 บ 相同，但右側豎線向上延伸。", class: "mid", className: "中音", meaning: "魚", checkpoints: [{x:80,y:90},{x:80,y:200},{x:160,y:200},{x:160,y:40}] },
        { id: "th_9", char: "อ", name: "อ อ่าง (O Ang)", ipa: "/ʔɔː/", zhuyin: "ㄛ（零輔音）", desc: "中音輔音。圓形起筆，逆時針劃出圓弧底框。", class: "mid", className: "中音", meaning: "盆子", checkpoints: [{x:100,y:70},{x:70,y:140},{x:110,y:200},{x:150,y:120}] },

        // 高音輔音 (High Class Consonants)
        { id: "th_10", char: "ข", name: "ข ไข่ (Kho Khai)", ipa: "/kʰɔː/", zhuyin: "ㄎㄛ（高調）", desc: "高音輔音。頂端小圓圈順時針起筆，向下折彎。", class: "high", className: "高音", meaning: "蛋", checkpoints: [{x:90,y:60},{x:120,y:70},{x:70,y:150},{x:150,y:150},{x:150,y:60}] },
        { id: "th_11", char: "ฃ", name: "ฃ 🍷 (Kho Khuat)", ipa: "/kʰɔː/", zhuyin: "ㄎㄛ（高調）", desc: "高音輔音（現代已廢棄）。字形同 ข 但頭部有缺口。", class: "high", className: "高音", meaning: "瓶子", checkpoints: [{x:90,y:60},{x:110,y:50},{x:70,y:150},{x:150,y:60}] },
        { id: "th_12", char: "ฉ", name: "ฉ ฉิ่ง (Cho Ching)", ipa: "/tɕʰɔː/", zhuyin: "ㄑㄛ（高調）", desc: "高音輔音。頭圈起筆向下，底部帶有小圈結點。", class: "high", className: "高音", meaning: "鈸", checkpoints: [{x:90,y:60},{x:70,y:180},{x:110,y:200},{x:150,y:80}] },
        { id: "th_13", char: "ฐ", name: "ฐ ฐาน (Tho Than)", ipa: "/tʰɔː/", zhuyin: "ㄊㄛ（高調）", desc: "高音輔音。上方主體起筆後，下方附帶獨立基座符號。", class: "high", className: "高音", meaning: "基座", checkpoints: [{x:90,y:60},{x:130,y:100},{x:80,y:180},{x:140,y:180}] },
        { id: "th_14", char: "ถ", name: "ถ ถุง (Tho Thung)", ipa: "/tʰɔː/", zhuyin: "ㄊㄛ（高調）", desc: "高音輔音。左下頭圈起筆向上，型態類似 ก 但帶頭圈。", class: "high", className: "高音", meaning: "袋子", checkpoints: [{x:90,y:180},{x:70,y:100},{x:110,y:60},{x:150,y:180}] },
        { id: "th_15", char: "ผ", name: "ผ ผึ้ง (Pho Phung)", ipa: "/pʰɔː/", zhuyin: "ㄆㄛ（高調）", desc: "高音輔音。頭圈朝內，中間折角不頂到上限。", class: "high", className: "高音", meaning: "蜜蜂", checkpoints: [{x:80,y:70},{x:80,y:200},{x:120,y:130},{x:160,y:200},{x:160,y:70}] },
        { id: "th_16", char: "ฝ", name: "ฝ ฝา (Fo Fa)", ipa: "/fɔː/", zhuyin: "ㄈㄛ（高調）", desc: "高音輔音。字形同 ผ，但右側尾巴向上延伸。", class: "high", className: "高音", meaning: "蓋子", checkpoints: [{x:80,y:70},{x:80,y:200},{x:120,y:130},{x:160,y:200},{x:160,y:40}] },
        { id: "th_17", char: "ศ", name: "ศ ศาลา (So Sala)", ipa: "/sɔː/", zhuyin: "ㄙㄛ（高調）", desc: "高音輔音。基本字形同 ค，右上方加一斜劃。", class: "high", className: "高音", meaning: "涼亭", checkpoints: [{x:110,y:70},{x:70,y:200},{x:150,y:200},{x:160,y:50}] },
        { id: "th_18", char: "ษ", name: "ษ ฤาษี (So Rusi)", ipa: "/sɔː/", zhuyin: "ㄙㄛ（高調）", desc: "高音輔音。基本字形同 บ，中間加一小圈劃折。", class: "high", className: "高音", meaning: "隱士", checkpoints: [{x:80,y:70},{x:80,y:200},{x:160,y:200},{x:120,y:130}] },
        { id: "th_19", char: "ส", name: "ส เสือ (So Suea)", ipa: "/sɔː/", zhuyin: "ㄙㄛ（高調）", desc: "高音輔音。基本字形同 เส，右上方帶有尾巴。", class: "high", className: "高音", meaning: "老虎", checkpoints: [{x:80,y:90},{x:80,y:200},{x:160,y:200},{x:170,y:50}] },
        { id: "th_20", char: "ห", name: "ห หีบ (Ho Hip)", ipa: "/hɔː/", zhuyin: "ㄏㄛ（高調）", desc: "高音輔音。頭圈起筆向下，右上帶有交叉圈結。", class: "high", className: "高音", meaning: "箱子", checkpoints: [{x:80,y:70},{x:80,y:200},{x:140,y:70},{x:140,y:200}] },

        // 低音輔音 (Low Class Consonants)
        { id: "th_21", char: "ค", name: "ค ฅน (Kho Khon)", ipa: "/kʰɔː/", zhuyin: "ㄎㄛ（低調）", desc: "低音輔音。頭圈朝外起筆，向上弧形後拉回右下。", class: "low", className: "低音", meaning: "人", checkpoints: [{x:110,y:70},{x:70,y:90},{x:70,y:200},{x:120,y:60},{x:150,y:200}] },
        { id: "th_22", char: "ฅ", name: "ฅ ฅน (Kho Khon)", ipa: "/kʰɔː/", zhuyin: "ㄎㄛ（低調）", desc: "低音輔音（現代已廢棄）。字形同 ค 但頂端有缺口。", class: "low", className: "低音", meaning: "人", checkpoints: [{x:110,y:70},{x:70,y:90},{x:90,y:50},{x:150,y:200}] },
        { id: "th_23", char: "ฆ", name: "ฆ ระฆัง (Kho Rakhang)", ipa: "/kʰɔː/", zhuyin: "ㄎㄛ（低調）", desc: "低音輔音。左上方雙缺口頭圈起筆，下方帶迴圈。", class: "low", className: "低音", meaning: "大鐘", checkpoints: [{x:80,y:70},{x:60,y:150},{x:120,y:200},{x:150,y:70}] },
        { id: "th_24", char: "ง", name: "ง งู (Ngo Ngu)", ipa: "/ŋɔː/", zhuyin: "兀ㄛ（後鼻音）", desc: "低音輔音。頂端頭圈起筆，垂直向下後斜劃出尾巴。", class: "low", className: "低音", meaning: "蛇", checkpoints: [{x:110,y:60},{x:110,y:150},{x:50,y:210}] },
        { id: "th_25", char: "ช", name: "ช ช้าง (Cho Chang)", ipa: "/tɕʰɔː/", zhuyin: "ㄑㄛ（低調）", desc: "低音輔音。字形類似 ข，但右上方延伸出一道尾巴。", class: "low", className: "低音", meaning: "大象", checkpoints: [{x:90,y:70},{x:70,y:150},{x:140,y:150},{x:170,y:50}] },
        { id: "th_26", char: "ซ", name: "ซ โซ่ (So So)", ipa: "/sɔː/", zhuyin: "ㄙㄛ（低調）", desc: "低音輔音。字形類似 ช，但頭圈頂端帶有鋸齒缺口。", class: "low", className: "低音", meaning: "鎖鏈", checkpoints: [{x:90,y:70},{x:110,y:50},{x:140,y:150},{x:170,y:50}] },
        { id: "th_27", char: "ฌ", name: "ฌ เฌอ (Cho Choe)", ipa: "/tɕʰɔː/", zhuyin: "ㄑㄛ（低調）", desc: "低音輔音。複雜字形，結合向前與向後的雙圈結構。", class: "low", className: "低音", meaning: "樹木", checkpoints: [{x:70,y:180},{x:90,y:60},{x:130,y:180},{x:160,y:80}] },
        { id: "th_28", char: "ญ", name: "ญ หญิง (Yo Ying)", ipa: "/jɔː/", zhuyin: "ㄧㄛ（低調）", desc: "低音輔音。上方主體結構完備，下方附帶小撇基座。", class: "low", className: "低音", meaning: "女人", checkpoints: [{x:70,y:180},{x:90,y:60},{x:140,y:180},{x:110,y:230}] },
        { id: "th_29", char: "ฑ", name: "ฑ ภูกระฎี (Tho Montho)", ipa: "/tʰɔː/", zhuyin: "ㄊㄛ（低調）", desc: "低音輔音。鋸齒頭圈起筆，向下折彎拉回右側。", class: "low", className: "低音", meaning: "曼陀羅", checkpoints: [{x:90,y:70},{x:70,y:130},{x:120,y:60},{x:150,y:200}] },
        { id: "th_30", char: "ฒ", name: "ฒ ผู้เฒ่า (Tho Phuthao)", ipa: "/tʰɔː/", zhuyin: "ㄊㄛ（低調）", desc: "低音輔音。字形結合 ต 與 ฒ 的迴圈特徵。", class: "low", className: "低音", meaning: "老人", checkpoints: [{x:80,y:70},{x:110,y:50},{x:100,y:200},{x:150,y:80}] },
        { id: "th_31", char: "ณ", name: "ณ เณร (No Nen)", ipa: "/nɔː/", zhuyin: "ㄋㄛ（低調）", desc: "低音輔音。前圈向下後，右側向上繞出後圈結。", class: "low", className: "低音", meaning: "小沙彌", checkpoints: [{x:70,y:180},{x:90,y:60},{x:130,y:180},{x:160,y:100}] },
        { id: "th_32", char: "ท", name: "ท ทหาร (Tho Thahan)", ipa: "/tʰɔː/", zhuyin: "ㄊㄛ（低調）", desc: "低音輔音。頭圈朝外起筆，向下後彎向右上再拉下。", class: "low", className: "低音", meaning: "軍人", checkpoints: [{x:100,y:70},{x:70,y:200},{x:120,y:60},{x:150,y:200}] },
        { id: "th_33", char: "ธ", name: "ธ ธง (Tho Thong)", ipa: "/tʰɔː/", zhuyin: "ㄊㄛ（低調）", desc: "低音輔音。無頭圈，底部平劃起筆後向上框出。", class: "low", className: "低音", meaning: "旗幟", checkpoints: [{x:70,y:200},{x:70,y:100},{x:140,y:60},{x:140,y:200}] },
        { id: "th_34", char: "น", name: "น หนู (No Nu)", ipa: "/nɔː/", zhuyin: "ㄋㄛ（低調）", desc: "低音輔音。左頭圈向下，右下角落繞出小反圈。", class: "low", className: "低音", meaning: "老鼠", checkpoints: [{x:80,y:70},{x:80,y:200},{x:150,y:180},{x:150,y:70}] },
        { id: "th_35", char: "พ", name: "พ พาน (Pho Phan)", ipa: "/pʰɔː/", zhuyin: "ㄆㄛ（低調）", desc: "低音輔音。頭圈朝外，中間折角頂到最高上限。", class: "low", className: "低音", meaning: "高腳盤", checkpoints: [{x:80,y:70},{x:80,y:200},{x:120,y:60},{x:160,y:200},{x:160,y:70}] },
        { id: "th_36", char: "ฟ", name: "ฟ ฟัน (Fo Fan)", ipa: "/fɔː/", zhuyin: "ㄈㄛ（低調）", desc: "低音輔音。字形同 พ，但右側尾巴向上延伸。", class: "low", className: "低音", meaning: "牙齒", checkpoints: [{x:80,y:70},{x:80,y:200},{x:120,y:60},{x:160,y:200},{x:160,y:40}] },
        { id: "th_37", char: "ภ", name: "ภ สำเภา (Pho Samphao)", ipa: "/pʰɔː/", zhuyin: "ㄆㄛ（低調）", desc: "低音輔音。頭圈朝外，頂端帶有類似 ก 的鳥喙折線。", class: "low", className: "低音", meaning: "帆船", checkpoints: [{x:90,y:180},{x:70,y:100},{x:110,y:60},{x:150,y:180}] },
        { id: "th_38", char: "ม", name: "ม ม้า (Mo Ma)", ipa: "/mɔː/", zhuyin: "ㄇㄛ（低調）", desc: "低音輔音。左上頭圈向下，左下角向前繞出迴圈。", class: "low", className: "低音", meaning: "馬", checkpoints: [{x:80,y:70},{x:80,y:180},{x:140,y:200},{x:150,y:70}] },
        { id: "th_39", char: "ย", name: "ย ยักษ์ (Yo Yak)", ipa: "/jɔː/", zhuyin: "ㄧㄛ（低調）", desc: "低音輔音。左側頭圈帶有凹陷雙弧，向下後向右。", class: "low", className: "低音", meaning: "夜叉", checkpoints: [{x:80,y:70},{x:100,y:110},{x:80,y:190},{x:150,y:190},{x:150,y:70}] },
        { id: "th_40", char: "ร", name: "ร เรือ (Ro Ruea)", ipa: "/rɔː/", zhuyin: "ㄌㄛ/ㄖㄛ", desc: "低音輔音。底部頭圈垂直向上，頂端向左彎曲波浪。", class: "low", className: "低音", meaning: "船", checkpoints: [{x:100,y:200},{x:100,y:100},{x:70,y:60},{x:140,y:60}] },
        { id: "th_41", char: "ล", name: "ล ลิง (Lo Ling)", ipa: "/lɔː/", zhuyin: "ㄌㄛ（低調）", desc: "低音輔音。頭圈朝內，向上拱起圓弧後拉回右下。", class: "low", className: "低音", meaning: "猴子", checkpoints: [{x:80,y:180},{x:100,y:90},{x:140,y:200}] },
        { id: "th_42", char: "ว", name: "ว แหวน (Wo Waen)", ipa: "/wɔː/", zhuyin: "ㄨㄛ（低調）", desc: "低音輔音。底部頭圈起筆，垂直向上後向左拋出弧線。", class: "low", className: "低音", meaning: "戒指", checkpoints: [{x:90,y:200},{x:90,y:100},{x:50,y:60}] },
        { id: "th_43", char: "ฬ", name: "ฬ จุฬา (Lo Chula)", ipa: "/lɔː/", zhuyin: "ㄌㄛ（低調）", desc: "低音輔音。字形類似 พ，頂端右側帶有獨立迴圈。", class: "low", className: "低音", meaning: "風箏", checkpoints: [{x:80,y:70},{x:120,y:180},{x:160,y:70},{x:180,y:40}] },
        { id: "th_44", char: "ฮ", name: "ฮ นกฮูก (Ho Nokhuk)", ipa: "/hɔː/", zhuyin: "ㄏㄛ（低調）", desc: "低音輔音。字形同 อ，但頂端額外帶有迴圈尾巴。", class: "low", className: "低音", meaning: "貓頭鷹", checkpoints: [{x:100,y:90},{x:70,y:150},{x:130,y:180},{x:130,y:40}] },

        // 聲調符號 (Tone Marks)
        { id: "th_t1", char: "่", name: "ไม้เอก (Mai Ek)", ipa: "第一聲調符號", zhuyin: "降調/低調標籤", desc: "聲調符號。置於輔音正上方，由上往下繪製一短豎線。", class: "mid", className: "聲調", meaning: "一號調號", checkpoints: [{x:130,y:60},{x:130,y:140}] },
        { id: "th_t2", char: "้", name: "ไม้โท (Mai Tho)", ipa: "第二聲調符號", zhuyin: "高調/落調標籤", desc: "聲調符號。小頭圈起筆後向右上拋出弧線。", class: "mid", className: "聲調", meaning: "二號調號", checkpoints: [{x:110,y:120},{x:140,y:80},{x:160,y:140}] },
        { id: "th_t3", char: "๊", name: "ไม้ตรี (Mai Tri)", ipa: "第三聲調符號", zhuyin: "高升調標籤", desc: "聲調符號。字形類似泰文數字 7，專用於中音輔音。", class: "mid", className: "聲調", meaning: "三號調號", checkpoints: [{x:100,y:100},{x:140,y:80},{x:120,y:150}] },
        { id: "th_t4", char: "๋", name: "ไม้จัตวา (Mai Chattawa)", ipa: "第四聲調符號", zhuyin: "升調標籤", desc: "聲調符號。字形同加號 +，先繪製橫線再繪製豎線。", class: "mid", className: "聲調", meaning: "四號調號", checkpoints: [{x:90,y:110},{x:170,y:110},{x:130,y:70},{x:130,y:150}] }
    ]
};
