window.createPcBuilderTemplates = function({ C, G, M, R, S, P, X, makeParts, makeBuild, makeTemplate }) {
  return {
      office: {
        2000: makeTemplate("2000 办公学习", [
          makeBuild("稳妥全新版", makeParts(C.i3_12100, G.igpu, M.h610m, R.d4_16, S.ssd256, P.p500, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算很紧，主要是网课、文档、网页和日常娱乐。",
            reason: "这套用带核显 CPU，能正常开机，不需要独显，预算优先保证基础稳定。",
            risk: "256GB 只是过渡容量，资料多的话后续建议加 1TB SSD。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5600g, G.igpu, M.a520m, R.d4_16, S.ssd256, P.p500, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "办公学习、网课、轻度网游和家用娱乐。",
            reason: "5600G 带核显，比纯办公 U 更适合轻度游戏过渡。",
            risk: "核显不是独显，别指望高画质游戏。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_4300g, G.igpu, M.a520m, R.d4_8, S.ssd256, P.p500, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算非常紧，只想办公、上网、网课的人。",
            reason: "这套是极限省钱思路，能开机能用，但不追求多任务舒适度。",
            risk: "8GB 内存现在偏紧，建议有预算优先升级到 16GB。"
          })
        ]),
        3000: makeTemplate("3000 办公学习", [
          makeBuild("稳妥全新版", makeParts(C.i3_12100, G.igpu, M.h610m, R.d4_16, S.ssd1t, P.p500, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "办公学习、网页多开、网课、资料较多的人。",
            reason: "3000 档办公不该只停在 256GB 小硬盘，优先把硬盘升到 1TB，日常体验更稳。",
            risk: "CPU 仍是入门级，适合日常办公，不适合重度剪辑或大型工程。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5600g, G.igpu, M.a520m, R.d4_16, S.ssd1t, P.p500, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "想要更顺一点的办公、轻度网游和家用娱乐。",
            reason: "5600G 带核显，配 16GB 内存和 1TB SSD，比 2000 档更舒服。",
            risk: "核显只是过渡，别按独显游戏主机预期。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_4300g, G.igpu, M.a520m, R.d4_16, S.ssd500, P.p500, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算想压住，但不想只有 8GB 内存的人。",
            reason: "这套优先保证 16GB 内存，比 8GB 日常多开更不容易卡。",
            risk: "512GB 容量仍偏过渡，后续可加 1TB。"
          })
        ]),
        5000: makeTemplate("5000 办公学习", [
          makeBuild("稳妥全新版", makeParts(C.i5_13500, G.igpu, M.b760m, R.d4_32, S.ssd1t, P.p550, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "愿意为办公学习体验多花钱，常开很多网页、软件、文档、网课的人。",
            reason: "5000 档办公学习不该还停在 i3 + 小硬盘。这里优先升级 CPU、32GB 内存和 1TB SSD，日常多任务会明显更舒服。",
            risk: "这套不买独显，因为办公学习更应该把钱花在 CPU、内存、硬盘和显示器上。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5600g, G.igpu, M.a520m, R.d4_32, S.ssd2t, P.p550, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "资料很多、网课/文件/照片/素材较多，又不玩大型游戏的人。",
            reason: "这套把钱给到 32GB 内存和 2TB SSD，适合学习资料、文档、照片、视频缓存很多的人。",
            risk: "CPU 不如 i5-13500 强，但办公学习已经很舒服。"
          }),
          makeBuild("省钱舒适版", makeParts(C.i3_12100, G.igpu, M.h610m, R.d4_16, S.ssd1t, P.p500, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算写 5000，但实际只想买一台够用、不卡基础办公的电脑。",
            reason: "这套不是吃满预算，而是比 2000 档更舒服：16GB 内存和 1TB SSD 是底线升级。",
            risk: "如果你经常开很多软件或浏览器标签，建议看稳妥全新版的 32GB 内存。"
          })
        ]),
        7000: makeTemplate("7000 高预算办公学习", [
          makeBuild("稳妥全新版", makeParts(C.r5_9600x, G.igpu, M.b650m, R.d5_32, S.ssd2t, P.p650, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算充足，想要多年不卡、资料很多、偶尔轻生产力的人。",
            reason: "7000 档办公学习优先上新平台、32GB DDR5 和 2TB SSD，而不是硬塞游戏显卡。",
            risk: "如果只是普通网课和文档，这套偏豪华；多余预算也可以投到好显示器。"
          }),
          makeBuild("性价比版", makeParts(C.i5_13500, G.igpu, M.b760m, R.d4_32, S.ssd2t, P.p550, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "想要强办公性能、大内存、大硬盘，但不想为 DDR5 平台多花钱的人。",
            reason: "i5-13500 + DDR4 32GB + 2TB SSD 对办公学习非常实用，预算没有浪费在独显上。",
            risk: "平台升级空间不如 AM5，但当下实用性强。"
          }),
          makeBuild("省钱舒适版", makeParts(C.i5_13500, G.igpu, M.b760m, R.d4_32, S.ssd1t, P.p550, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "想要高流畅度办公，但不一定需要 2TB 硬盘的人。",
            reason: "这套保留强 CPU 和 32GB 内存，把硬盘先控制在 1TB，后续不够再加。",
            risk: "如果资料非常多，建议直接看 2TB 版本。"
          })
        ]),
        9000: makeTemplate("9000 高预算办公学习", [
          makeBuild("稳妥全新版", makeParts(C.r5_9600x, G.igpu, M.b650m, R.d5_32, S.ssd2t, P.p650, X.airflow), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算很充足，希望电脑多年保持流畅，重视安静、稳定和存储空间的人。",
            reason: "办公学习高预算不一定要硬上独显。这套优先新平台、32GB 内存、2TB SSD 和更好的机箱风道。",
            risk: "如果没有生产力需求，剩余预算更建议投显示器、键盘鼠标、桌椅，而不是继续堆主机。"
          }),
          makeBuild("性价比版", makeParts(C.i5_13500, G.igpu, M.b760m, R.d4_32, S.ssd2t, P.p550, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "高预算但理性，不想把办公电脑堆成游戏主机的人。",
            reason: "这套已经足够强，没必要为了花满 9000 硬买独显。",
            risk: "如果你其实要剪辑、建模、AI 或大型游戏，应该切换到剪辑设计/3A游戏用途。"
          }),
          makeBuild("省钱舒适版", makeParts(C.i5_13500, G.igpu, M.b760m, R.d4_32, S.ssd1t, P.p550, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "想要办公很流畅，但不想花冤枉钱的人。",
            reason: "这套保留强 CPU 和 32GB 内存，主机不硬吃满预算，把钱留给显示器更合理。",
            risk: "不适合把它当高性能游戏主机。"
          })
        ])
      },
            game: {
        2500: makeTemplate("2500 低预算网游", [
          makeBuild("稳妥全新版", makeParts(C.r5_5500, G.rx6400New, M.a520m, R.d4_16, S.ssd256, P.p500, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 2500 左右、不接受二手，但仍想有独显的人。",
            reason: "全新 RX6400 性能有限，但比核显更像游戏主机；预算主要花在能开游戏的独显上。",
            risk: "RX6400 只适合轻度网游和低画质，想玩三角洲、永劫、3A 建议提高预算或接受二手显卡。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5500, G.rx5500xtUsed, M.b450m, R.d4_16, S.ssd256, P.p550, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "中",
            people: "预算卡在 2500 左右，愿意接受二手显卡来换游戏性能的人。",
            reason: "这套把有限预算尽量用到二手 RX5500XT 级别独显上，比核显过渡更适合玩网游。",
            risk: "二手显卡要验机，尤其看温度、噪音、接口和是否魔改。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_5600g, G.igpu, M.a520m, R.d4_16, S.ssd256, P.p500, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "不接受二手、主要办公和轻度网游过渡的人。",
            reason: "这套是核显过渡方案，能开机能用，把二手风险降到最低。",
            risk: "没有独显，不适合当正经游戏主机；后续可以加独显升级。"
          })
        ]),
        3000: makeTemplate("3000 网游", [
          makeBuild("稳妥全新版", makeParts(C.r5_5500, G.rx6600New, M.b450m, R.d4_16, S.ssd256, P.p550, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "不想碰二手，但想玩主流 1080P 网游的人。",
            reason: "这套用全新 RX6600 级别显卡，低预算里优先保证游戏体验。",
            risk: "硬盘容量是过渡，游戏多了后续优先加 1TB SSD。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5600, G.rx6600Used, M.b550m, R.d4_16, S.ssd256, P.p550, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "中",
            people: "接受二手显卡，想把 3000 元尽量花在游戏性能上的人。",
            reason: "R5 5600 + 二手 RX6600 是低预算网游的实用搭配，性能比核显方案强很多。",
            risk: "二手 RX6600 风险低于很多老矿卡，但仍要看来源、保修和测试。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_5500, G.gtx1660sUsed, M.b450m, R.d4_16, S.ssd256, P.p550, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "中",
            people: "预算想省一点，主要玩 LOL、瓦、CS2、APEX 的人。",
            reason: "GTX1660S 功耗低、兼容性好，是低预算二手网游卡的常见选择。",
            risk: "低于正常价太多的 1660S 大概率有翻新/维修风险。"
          })
        ]),
        3500: makeTemplate("3500 网游进阶", [
          makeBuild("稳妥全新版", makeParts(C.r5_5500, G.rx6600New, M.b450m, R.d4_16, S.ssd500, P.p550, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 3500 左右，不接受二手，主要玩 1080P 网游的人。",
            reason: "3500 档不应该继续用 3000 档的小硬盘配置。这套保留全新 RX6600，同时把 SSD 升到 512GB，基础体验更完整。",
            risk: "显卡仍是 1080P 网游取向；想明显提升画质和寿命，继续看 4000/4500 档。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5600, G.rx6650xt, M.b450m, R.d4_16, S.ssd256, P.p550, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 3500 左右，想把钱优先换成游戏性能的人。",
            reason: "这套的性价比来自显卡提升到 RX6650XT 级别，同时 CPU 也给到 R5 5600；代价是 SSD 先用 256GB 过渡。",
            risk: "硬盘容量偏小，游戏多了后续优先加 1TB SSD。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_5500, G.rx6600New, M.b450m, R.d4_16, S.ssd256, P.p550, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 3500 但想少花一点，主要玩网游的人。",
            reason: "这套不是硬花满，而是保留 3000 档全新独显核心体验，把多出来的钱留给后续加盘或显示器。",
            risk: "256GB SSD 是明显短板，预算允许就看稳妥全新版。"
          })
        ]),
        4000: makeTemplate("4000 网游", [
          makeBuild("稳妥全新版", makeParts(C.r5_5600, G.rx6650xt, M.b550m, R.d4_16, S.ssd500, P.p650, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "想要全新/低风险 1080P 高画质网游体验的人。",
            reason: "4000 档优先考虑 RX6650XT 这类 1000–1200 元档显卡，比把钱堆在机箱和高端 SSD 上更有用。",
            risk: "SSD 先用 512GB 过渡，游戏多了再加 1TB 更现实。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5600, G.rx6700xtUsed, M.b550m, R.d4_16, S.ssd500, P.p650, X.normal), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "中偏高",
            people: "接受二手、想在 4000 左右冲更强游戏性能的人。",
            reason: "二手 RX6700XT 12GB 性能和显存都更强，适合 1080P 高画质和 2K 入门。",
            risk: "二手中高端卡一定要验机，注意矿卡、拆修和电源压力。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_5500, G.rx6600Used, M.b450m, R.d4_16, S.ssd500, P.p550, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "中",
            people: "想省钱但又要靠谱网游体验的人。",
            reason: "这套不会强行花满预算，优先保证显卡够用、电源别乱省。",
            risk: "如果预算能到 4000 满额，稳妥版的全新/低风险方案更省心。"
          })
        ]),
        4500: makeTemplate("4500 网游进阶", [
          makeBuild("稳妥全新版", makeParts(C.r5_5600, G.rx7600, M.b550m, R.d4_16, S.ssd500, P.p650, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 4500 左右，想要全新/低风险并且比 4000 档更强的人。",
            reason: "4500 档不应该只把钱空出来。这套把显卡从 RX6650XT 推到 RX7600 级别，游戏性能提升更直观。",
            risk: "SSD 仍是 512GB，后续游戏多了建议加 1TB。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5600, G.rx6750gre, M.b550m, R.d4_16, S.ssd256, P.p650, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 4500 左右，想尽量把钱换成显卡性能的人。",
            reason: "这套的性价比来自显卡进一步上到 RX6750GRE 级别；代价是 SSD 先用 256GB 过渡，后续再加盘。",
            risk: "如果你不想忍受小硬盘，稳妥版更均衡。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_5600, G.rx6650xt, M.b550m, R.d4_16, S.ssd500, P.p650, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 4500 但不想硬花满，主要玩 1080P 网游的人。",
            reason: "这套省在显卡不继续上探，但保留 R5 5600、B550M、512GB SSD 和 650W 电源，整体稳定够用。",
            risk: "如果你想把预算都换成帧数，看性价比版。"
          })
        ]),
        5000: makeTemplate("5000 网游", [
          makeBuild("稳妥全新版", makeParts(C.i5_12400f, G.rtx5060, M.h610m, R.d4_16, S.ssd500, P.p650, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 5000 左右，不接受二手，想要全新省心网游主机的人。",
            reason: "按照你给的显卡天梯，RTX5060 分数约 4000，已经高于 RTX4060Ti 接近档位；5000 档可以优先考虑 RTX5060，而不是继续停在 RTX4060。",
            risk: "这套为了上 RTX5060，SSD 先用 512GB 过渡；游戏多了后续再加 1TB。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5500, G.rtx5060, M.b450m, R.d4_16, S.ssd500, P.p650, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "想在 5000 内尽量上 RTX5060，同时压住平台成本的人。",
            reason: "R5 5500 够带主流网游，省下来的钱给 RTX5060，游戏体验比把钱堆到 CPU 上更直接。",
            risk: "CPU 平台比较省，后续升级空间不如 AM5。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_5600, G.rx6650xt, M.b450m, R.d4_16, S.ssd500, P.p550, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 5000 但不想花满，主要玩 1080P 网游的人。",
            reason: "RX6650XT 依旧是 1000–1200 元档很实用的选择；省下的钱可以留给显示器或后续加硬盘。",
            risk: "如果你追 2K 或更高画质，稳妥版 RTX5060 更合适。"
          })
        ]),
        6000: makeTemplate("6000 网游进阶", [
          makeBuild("稳妥全新版", makeParts(C.i5_12400f, G.rtx5060, M.b660m, R.d4_32, S.ssd1t, P.p650, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 6000 左右、不接受二手，希望比 5000 档更舒适、更耐用的网游用户。",
            reason: "6000 网游不能继续吃 5000 模板。这套把多出来的预算用到 32GB 内存、1TB SSD 和更稳的 B660M 主板上，而不是空着不解释。",
            risk: "显卡仍是 RTX5060 级别，优势是全新省心和整体舒适；如果你只追游戏帧数，看性价比版。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5600, G.rx7800xt, M.b550m, R.d4_16, S.ssd500, P.p750, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 6000 左右，想把钱尽量换成游戏帧数的人。",
            reason: "这套的性价比来自显卡大幅升级：把内存和 SSD 先控制住，预算优先给 RX7800XT 级别显卡，游戏性能明显高于 5000 档。",
            risk: "SSD 只有 512GB，游戏多了后续要加盘；显卡功耗更高，所以电源给到 750W。"
          }),
          makeBuild("省钱够用版", makeParts(C.i5_12400f, G.rtx5060, M.h610m, R.d4_16, S.ssd1t, P.p650, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 6000，但不想硬花满，主要玩 1080P 网游的人。",
            reason: "这套保留 RTX5060，把 5000 档最短板的 512GB SSD 升到 1TB；它不是满血 6000 性能配置，而是省钱舒适方案。",
            risk: "如果你希望预算都转成游戏性能，优先看性价比版。"
          })
        ]),
        6500: makeTemplate("6500 网游进阶", [
          makeBuild("稳妥全新版", makeParts(C.r5_5600, G.rx7800xt, M.b550m, R.d4_16, S.ssd1t, P.p750, X.normal), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 6500 左右，想要 2K 网游/轻度 3A 都更稳的人。",
            reason: "6500 档已经不该停在 RTX5060。这里用 RX7800XT + 1TB SSD，把预算明显转成显卡性能和容量。",
            risk: "如果只玩 LOL、瓦、CS2，这套可能偏猛；预算也可以留给显示器。"
          }),
          makeBuild("性价比版", makeParts(C.i5_12400f, G.rx7800xt, M.b660m, R.d4_16, S.ssd1t, P.p750, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "想要强显卡，同时偏好 Intel 平台和全新配件的人。",
            reason: "这套的性价比来自 RX7800XT 显卡档位，同时用 B660M 和 1TB SSD 保持基础体验，不把钱花在外观上。",
            risk: "内存仍是 16GB，当前内存贵，后续按需求再升 32GB。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_5600, G.rx6750gre, M.b550m, R.d4_32, S.ssd1t, P.p650, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 6500 但更想要舒适和省钱，不追顶显卡的人。",
            reason: "这套省在显卡档位，换来 32GB 内存和 1TB SSD；适合网游、多开和日常使用更舒服的思路。",
            risk: "纯游戏帧数不如 RX7800XT 方案，但整体体验更均衡。"
          })
        ]),
        7000: makeTemplate("7000 高配网游", [
          makeBuild("稳妥全新版", makeParts(C.r5_7500f, G.rx7800xt, M.a620m, R.d5_16, S.ssd1t, P.p750, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 7000 左右，想要 AM5 新平台和 2K 入门游戏体验的人。",
            reason: "7000 档不再让 R5 5600 代表主流方案。这套换到 R5 7500F + DDR5，显卡仍保留 RX7800XT，平台寿命和后续升级空间更合理。",
            risk: "A620M 属于 AM5 入门主板，够用但扩展不如 B650；如果想要更完整平台，可以看 8000 档。"
          }),
          makeBuild("性价比版", makeParts(C.r5_7500f, G.rx7800xt, M.a620m, R.d5_16, S.ssd500, P.p750, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "想把 7000 预算主要换成 AM5 平台和强显卡的人。",
            reason: "这套压低 SSD 和外观预算，保证 R5 7500F + RX7800XT 这两个核心，后续加盘比换平台容易。",
            risk: "512GB SSD 是短板，游戏多的人优先加 1TB SSD。"
          }),
          makeBuild("省钱显卡版", makeParts(C.r5_5600, G.rx7800xt, M.b550m, R.d4_16, S.ssd1t, P.p750, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "只想把钱尽量压到显卡上，不太在意平台寿命的人。",
            reason: "R5 5600 + RX7800XT 可以存在，但它是压平台换显卡的特殊方案，不再代表 7000 档主流搭配。",
            risk: "AM4 后续升级空间不如 AM5，吃 CPU 的网游和高刷场景不如 R5 7500F 稳。"
          })
        ]),
        8000: makeTemplate("8000 高配网游", [
          makeBuild("稳妥全新版", makeParts(C.r5_7500f, G.rx9070gre, M.b650m, R.d5_16, S.ssd1t, P.p750, X.normal), {
            confidence: "中", priceVolatility: "高", secondHandRisk: "低",
            people: "预算 8000 左右，想要 AM5 + 全新强显卡的 2K 网游/轻 3A 用户。",
            reason: "这套主力换成 R5 7500F + B650 + DDR5，显卡给到 RX9070GRE 级别，整体比 AM4 强显卡硬撑更像 8000 档主流配置。",
            risk: "RX9070GRE 价格波动可能较大，下单前要复核当天价格。"
          }),
          makeBuild("性价比版", makeParts(C.r5_7500f, G.rx7800xt, M.b650m, R.d5_16, S.ssd1tHigh, P.p750, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "想要 AM5 平台、RX7800XT 和更好的 SSD，但不追最新显卡的人。",
            reason: "这套不盲目追高价显卡，把预算分给 B650、DDR5 和高性能 SSD，整体更均衡。",
            risk: "16GB DDR5 是入门容量，后续可以补到 32GB。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_7500f, G.rx7800xt, M.a620m, R.d5_16, S.ssd1t, P.p750, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "预算有 8000，但不想硬花满，仍想保留 AM5 和 RX7800XT 的人。",
            reason: "这套省在主板和外观，不再用 AM4 老平台省钱，适合想要新平台但不想铺张的人。",
            risk: "A620M 扩展一般，追求更完整平台可看稳妥版。"
          })
        ]),
        9000: makeTemplate("9000 高配网游", [
          makeBuild("稳妥全新版", makeParts(C.r5_9600x, G.rx9070gre, M.b650m, R.d5_32, S.ssd1t, P.p750, X.normal), {
            confidence: "中", priceVolatility: "高", secondHandRisk: "低",
            people: "预算 9000 左右，想要全新平台、32GB 内存和更强 2K 游戏性能的人。",
            reason: "这套升级到 AM5、DDR5 32GB 和更强显卡，预算提升会真实反映到平台和显卡里。",
            risk: "RX9070GRE 价格波动可能较大，下单前要复核当天价格。"
          }),
          makeBuild("性价比版", makeParts(C.r5_7500f, G.rx7800xt, M.b650m, R.d5_32, S.ssd1t, P.p750, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "想要高配网游、2K 游戏，但不追最新显卡的人。",
            reason: "R5 7500F + RX7800XT + DDR5 32GB 比 7000 档更完整，平台、内存和显卡都比较均衡。",
            risk: "如果只玩轻度网游，这套预算偏高。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_7500f, G.rx7800xt, M.a620m, R.d5_16, S.ssd1t, P.p750, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "想保留 AM5 和强显卡，但觉得 9000 不一定要花满的人。",
            reason: "这套是高预算里的理性省钱方案，省在主板、内存和外观，不再用 AM4 老平台强行省钱。",
            risk: "后续建议优先补到 32GB DDR5。"
          })
        ])

      },
      game3a: {
        5000: makeTemplate("5000 3A游戏", [
          makeBuild("稳妥全新版", makeParts(C.r5_5600, G.rx6750gre, M.b550m, R.d4_16, S.ssd500, P.p650, X.normal), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 5000 左右，主要玩 3A，想把钱优先花在显卡上的人。",
            reason: "3A 游戏比网游更吃显卡，所以这套优先上 RX6750GRE 级别显卡，而不是把预算花在更贵 CPU、机箱或高端 SSD 上。",
            risk: "SSD 先用 512GB 过渡；如果当天 RX6750GRE 价格偏高，可以退到 RTX5060。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5500, G.rtx5060, M.b450m, R.d4_16, S.ssd500, P.p650, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "想玩 3A，但更偏向全新 N 卡和稳定售后的人。",
            reason: "RTX5060 适合 5000 档全新方案；CPU 和主板压成本，把预算留给显卡。",
            risk: "同预算纯光栅性能可能不如更强 A 卡，具体看游戏和价格。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_5600, G.rx6700xtUsed, M.b550m, R.d4_16, S.ssd500, P.p650, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "中",
            people: "接受二手显卡，想用 5000 左右冲更强 3A 性能的人。",
            reason: "二手 RX6700XT 12GB 对 3A 更友好，但它不是小白最省心选择。",
            risk: "二手中高端卡必须验机，注意矿卡、拆修、温度和噪音。"
          })
        ]),
        6000: makeTemplate("6000 3A游戏", [
          makeBuild("稳妥全新版", makeParts(C.r5_5600, G.rx7800xt, M.b550m, R.d4_16, S.ssd500, P.p750, X.normal), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 6000 左右，不接受二手，想明显强于 5000 档游戏性能的人。",
            reason: "3A 游戏优先显卡，RX7800XT 天梯约 4900，比 RTX5060/4060Ti 档更适合高画质。",
            risk: "这套显卡强，SSD 先用 512GB 过渡；如果当天 RX7800XT 价格偏高，可退到 RTX5060/RX6750GRE。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5600, G.rtx5060, M.b550m, R.d4_16, S.ssd1t, P.p650, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "想要全新 N 卡、1TB 硬盘，又不想预算压太满的人。",
            reason: "RTX5060 分数约 4000，性能接近 RTX4060Ti 档，同时保留 1TB SSD，整体更均衡。",
            risk: "纯游戏性价比可能不如同价位 A 卡。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_5600, G.rx6750gre, M.b550m, R.d4_16, S.ssd500, P.p650, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "想玩 3A，但不想把 6000 全部花满的人。",
            reason: "RX6750GRE 适合 1080P 高画质和 2K 入门，预算压力小于 RX7800XT。",
            risk: "如果追求更长寿命和更高画质，优先看稳妥版。"
          })
        ]),
        7000: makeTemplate("7000 3A游戏", [
          makeBuild("稳妥全新版", makeParts(C.r5_7500f, G.rx7800xt, M.a620m, R.d5_16, S.ssd1t, P.p750, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算 7000 左右，想要 AM5 平台和 2K 入门 3A 的人。",
            reason: "3A 仍然优先显卡，但 7000 档已经可以上 AM5 平台。这套用 R5 7500F + RX7800XT，避免高预算还停在 AM4 主流方案。",
            risk: "A620M 是入门 AM5，扩展一般；预算宽裕可看 8000 档 B650。"
          }),
          makeBuild("性价比版", makeParts(C.r5_7500f, G.rx7800xt, M.a620m, R.d5_16, S.ssd500, P.p750, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "想用 7000 左右优先保证 AM5 + RX7800XT 的人。",
            reason: "这套先压 SSD 容量，把核心预算给平台和显卡；后续加盘比换平台更容易。",
            risk: "512GB 容量偏小，3A 游戏多的话优先加 1TB SSD。"
          }),
          makeBuild("省钱显卡版", makeParts(C.r5_5600, G.rx7800xt, M.b550m, R.d4_16, S.ssd500, P.p750, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "想要强显卡，但能接受 AM4 老平台和小硬盘先过渡的人。",
            reason: "R5 5600 + RX7800XT 是压平台换显卡路线，只适合作为省钱显卡版，不再代表 7000 档主流 3A 配置。",
            risk: "AM4 后续升级空间不如 AM5；512GB 装几个 3A 后很快会满。"
          })
        ]),
        8000: makeTemplate("8000 3A游戏", [
          makeBuild("稳妥全新版", makeParts(C.r5_7500f, G.rx9070gre, M.b650m, R.d5_16, S.ssd1t, P.p750, X.normal), {
            confidence: "中", priceVolatility: "高", secondHandRisk: "低",
            people: "预算 8000 左右，想玩 2K 3A、又不想碰二手显卡的人。",
            reason: "这套把预算主要花在 RX9070GRE 级别显卡和 AM5/B650 平台上，明显区别于低预算显卡优先方案。",
            risk: "显卡价格波动大；16GB DDR5 是入门容量，后续建议升 32GB。"
          }),
          makeBuild("性价比版", makeParts(C.r5_7500f, G.rx7800xt, M.a620m, R.d5_32, S.ssd1t, P.p750, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "想要 AM5、32GB 内存和 RX7800XT，不追更高价显卡的人。",
            reason: "这套把预算分给 32GB DDR5 和 RX7800XT，整体比 AM4 + DDR4 更像 8000 档长期配置。",
            risk: "A620M 扩展一般，但能把预算留给内存和显卡。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_7500f, G.rx7800xt, M.a620m, R.d5_16, S.ssd1t, P.p750, X.black), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "想玩 3A，但觉得 8000 不一定要花满的人。",
            reason: "这套保留 AM5 和 RX7800XT，省在主板、内存和外观，不再用 AM4 老平台省钱。",
            risk: "16GB DDR5 后续建议补到 32GB。"
          })
        ]),
        9000: makeTemplate("9000 3A游戏", [
          makeBuild("稳妥全新版", makeParts(C.r5_9600x, G.rx9070gre, M.b650m, R.d5_32, S.ssd1t, P.p750, X.normal), {
            confidence: "中", priceVolatility: "高", secondHandRisk: "低",
            people: "预算 9000 左右，想要全新平台、32GB 内存和 2K 3A 的人。",
            reason: "这套不再像低预算那样省内存/平台，而是给 3A 留出更完整的显卡和平台预算。",
            risk: "如果显卡当天价格偏高，可退到 RX7800XT 控预算。"
          }),
          makeBuild("性价比版", makeParts(C.r5_7500f, G.rx9070gre, M.b650m, R.d5_16, S.ssd1tHigh, P.p750, X.normal), {
            confidence: "中", priceVolatility: "高", secondHandRisk: "低",
            people: "想优先显卡和 SSD，内存后续再补的人。",
            reason: "3A 游戏显卡优先，这套把钱更多给显卡和 SSD，平台仍保持 AM5/B650。",
            risk: "16GB DDR5 后续建议补到 32GB。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_7500f, G.rx7800xt, M.b650m, R.d5_16, S.ssd1t, P.p750, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "想保留 AM5 平台和强显卡，但不想花到 9000 满额的人。",
            reason: "这套是 9000 档的理性省钱方案，性能已经明显高于 5000/6000 档。",
            risk: "如果预算想吃满，优先补 32GB 内存。"
          })
        ]),
        10000: makeTemplate("10000 3A游戏", [
          makeBuild("稳妥全新版", makeParts(C.r5_9600x, G.rx9070gre, M.b650m, R.d5_32, S.ssd1tHigh, P.p750, X.normal), {
            confidence: "中", priceVolatility: "高", secondHandRisk: "低",
            people: "预算接近万元，想要全新平台、2K 高画质和更长使用周期的人。",
            reason: "这套用 AM5、DDR5 32GB、高性能 SSD 和更强显卡，不再是中低预算思路。",
            risk: "如果显卡当天价格偏高，可以降到 RX7800XT 或 RTX5060Ti 16G 控预算。"
          }),
          makeBuild("性价比版", makeParts(C.r5_7500f, G.rtx5060ti16, M.b650m, R.d5_32, S.ssd1t, P.p750, X.normal), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "想要全新 N 卡、大显存，并兼顾部分创作/AI 入门的人。",
            reason: "RTX5060Ti 16GB 显存更大，但游戏性价比不一定总比 A 卡强。",
            risk: "非大显存刚需时，不要为了 16GB 显存盲目加钱。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_7500f, G.rx7800xt, M.b650m, R.d5_16, S.ssd1t, P.p750, X.normal), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "想保留 AM5 平台和强显卡，但先不买昂贵 32GB DDR5 的人。",
            reason: "这套先把预算给显卡和平台，内存后续再加。",
            risk: "16GB DDR5 是入门容量，后续建议补到 32GB。"
          })
        ])

      },
            creator: {
        7000: makeTemplate("7000 剪辑设计", [
          makeBuild("稳妥全新版", makeParts(C.i5_13400f, G.rtx4060, M.b760m, R.d4_32, S.ssd1t, P.p650, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "剪辑、修图、设计和多素材工作流的人。",
            reason: "剪辑优先保证 CPU、多线程、内存和稳定性；RTX4060 也更适合部分创作软件加速。",
            risk: "素材量很大时，后续再单独加 2TB SSD 或移动硬盘。"
          }),
          makeBuild("性价比版", makeParts(C.r5_5600, G.rtx3060Used, M.b550m, R.d4_32, S.ssd1t, P.p650, X.normal), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "中",
            people: "接受二手显卡，想要 12GB 显存兼顾创作和游戏的人。",
            reason: "二手 RTX3060 12GB 显存更大，适合部分创作和 AI 入门，但要看成色。",
            risk: "RTX30 系矿卡风险要重视，低价离谱的不要碰。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_5600, G.rx6650xt, M.b550m, R.d4_16, S.ssd1t, P.p650, X.black), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算更紧，剪辑只是入门或偶尔使用的人。",
            reason: "这套优先保证基础性能，不强行上昂贵 DDR5 和高端 SSD。",
            risk: "如果你经常处理大工程，后续优先加内存和硬盘。"
          })
        ]),
        8000: makeTemplate("8000 剪辑设计", [
          makeBuild("稳妥全新版", makeParts(C.r5_9600x, G.rtx4060, M.b650m, R.d5_32, S.ssd1tHigh, P.p650, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "剪辑、修图、设计、多开软件，且不想碰二手显卡的人。",
            reason: "这套把预算给到 AM5、DDR5 32GB、较好的 SSD 和稳定 N 卡，适合创作优先。",
            risk: "如果主要是游戏，同预算换更强 A 卡更合适。"
          }),
          makeBuild("性价比版", makeParts(C.i5_13400f, G.rtx4060ti, M.b760m, R.d4_32, S.ssd1tHigh, P.p650, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "剪辑设计为主，希望显卡也有一定余量的人。",
            reason: "DDR4 32GB 相对 DDR5 便宜，RTX4060Ti 也更适合部分创作软件加速。",
            risk: "4060Ti 8GB 显存不算宽裕，重度大工程要注意。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_5600, G.rtx3060Used, M.b550m, R.d4_32, S.ssd1t, P.p650, X.normal), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "中",
            people: "接受二手，想要 12GB 显存兼顾创作的人。",
            reason: "二手 RTX3060 12GB 对部分创作/AI 入门更友好，但风险比全新卡高。",
            risk: "RTX30 系矿卡风险高，必须看来源和验机。"
          })
        ]),
        10000: makeTemplate("10000 剪辑设计", [
          makeBuild("稳妥全新版", makeParts(C.r5_9600x, G.rtx5060ti16, M.b650m, R.d5_32, S.ssd2t, P.p750, X.normal), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "预算接近万元，剪辑、设计、素材量更大，又想要全新显卡的人。",
            reason: "这套给到 32GB DDR5、2TB SSD 和 16GB 显存显卡，比 7000 档更适合创作。",
            risk: "如果素材量不大，可以把 2TB SSD 降到 1TB 控预算。"
          }),
          makeBuild("性价比版", makeParts(C.i5_13400f, G.rtx4060ti, M.b760m, R.d4_32, S.ssd2t, P.p650, X.normal), {
            confidence: "高", priceVolatility: "中", secondHandRisk: "低",
            people: "更重视实用剪辑，不想为 DDR5 平台多花钱的人。",
            reason: "DDR4 32GB + 2TB SSD 对剪辑素材更实用，预算没有盲目堆平台。",
            risk: "如果未来升级 CPU 平台，AM5 方案扩展性更好。"
          }),
          makeBuild("省钱够用版", makeParts(C.r5_7500f, G.rtx4060, M.b650m, R.d5_32, S.ssd1t, P.p650, X.normal), {
            confidence: "中", priceVolatility: "中", secondHandRisk: "低",
            people: "想要 AM5 平台和 32GB 内存，但剪辑强度还不算重的人。",
            reason: "这套先保证平台、内存和基础创作能力，后续按素材量加硬盘。",
            risk: "如果经常调色/特效/大工程，显卡和硬盘都可能要再升级。"
          })
        ])
      }
    };

        function getInput() {
      return {
        budget: Number(document.getElementById("budget").value),
        purpose: document.getElementById("purpose").value,
        monitor: document.getElementById("monitor").value,
        used: document.getElementById("used").value
      };
    }

    function money(value) {
      return "¥" + Math.max(0, Math.round(value / 50) * 50);
    }

    function aboutMoney(value) {
      return "约 " + money(value);
    };
};
