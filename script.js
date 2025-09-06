// ตัวแปรสำหรับเก็บ webhook URLs และข้อมูลประกาศ
let webhooks = [];
let announcementData = null;
let selectedAnnouncement = 'Openserversw lucky';

// ข้อมูลประกาศจากไฟล์ backups.json
const BACKUP_DATA = {
    "version": 7,
    "backups": [
        {
            "name": "ค่าปรับ",
            "messages": [
                {
                    "data": {
                        "content": "<@&1386691682623291422>",
                        "embeds": [
                            {
                                "description": "ชื่อ :\nDiscord : @\nDiscord ID : \nSteam Hex\n\nโทษความผิด : \n\nค่าปรับ : \n\nกำหนดจ่ายค่าปรับวันที่ : 00/00/0000  เวลา : 00.00 น.\n\nหากไม่ชำระภายในวันและเวลาที่กำหนด ปรับโทษเป็น ใบแดง ทันที\n\nติดต่อสอบถามและชำระค่าปรับได้ที่ https://discord.com/channels/1222655074787004489/1226336316556578826\n\nTAG : <@&1386691682623291422>",
                                "color": 16711680,
                                "author": {
                                    "name": "ประกาศโทษปรับจาก ADMIN",
                                    "icon_url": "https://img2.pic.in.th/pic/SWITCH_CITY_01-016f567f4fdd9b512b.png"
                                },
                                "image": {
                                    "url": "https://img5.pic.in.th/file/secure-sv1/PUNISHMENT.png"
                                },
                                "thumbnail": {
                                    "url": "https://img2.pic.in.th/pic/SWITCH_CITY_01-016f567f4fdd9b512b.png"
                                }
                            }
                        ],
                        "attachments": []
                    },
                    "reference": ""
                }
            ],
            "targets": [
                {
                    "url": "https://canary.discord.com/api/webhooks/1413471036963422319/rNaO6NTgl4Kx68HKl9gMvvzVKEaNgRqLBAXQqSDA3571R9gTIrVZL77FhX7onH5JTqnr"
                }
            ]
        },
        {
            "name": "แจ้งToxic",
            "messages": [
                {
                    "data": {
                        "content": "<@&1386691682623291422>",
                        "embeds": [
                            {
                                "description": "**ข้อมูลผู้แจ้ง**\nชื่อผู้แจ้ง: \nUID Discord: \nSteam Hex: \nหลักฐาน: \nหมายเหตุ: \n\n**ข้อมูลผู้ถูกแจ้ง**\nชื่อผู้ถูกแจ้ง: \nUID Discord: \nSteam Hex: \nหลักฐานแย้ง: \nหมายเหตุ: ",
                                "color": 16711680,
                                "author": {
                                    "name": "แจ้งToxic",
                                    "icon_url": "https://img2.pic.in.th/pic/SWITCH_CITY_01-016f567f4fdd9b512b.png"
                                }
                            }
                        ],
                        "attachments": []
                    },
                    "reference": ""
                }
            ],
            "targets": [
                {
                    "url": "https://canary.discord.com/api/webhooks/1413471036963422319/rNaO6NTgl4Kx68HKl9gMvvzVKEaNgRqLBAXQqSDA3571R9gTIrVZL77FhX7onH5JTqnr"
                }
            ]
        },
        {
            "name": "โทษใบเหลือง - แดง",
            "messages": [
                {
                    "data": {
                        "content": "<@&1386691682623291422>",
                        "embeds": [
                            {
                                "description": "ชื่อ :\nDiscord : @\nDiscord ID : \nSteam Hex\n\nโทษความผิด : \n\nโทษใบ : \n\nติดต่อสอบถามรายละเอียดได้ที่ https://discord.com/channels/1222655074787004489/1226336316556578826\n\nTAG : <@&1386691682623291422>",
                                "color": 16711680,
                                "author": {
                                    "name": "ประกาศโทษใบเหลือง - แดง",
                                    "icon_url": "https://img2.pic.in.th/pic/SWITCH_CITY_01-016f567f4fdd9b512b.png"
                                },
                                "image": {
                                    "url": "https://img5.pic.in.th/file/secure-sv1/PUNISHMENT.png"
                                },
                                "thumbnail": {
                                    "url": "https://img2.pic.in.th/pic/SWITCH_CITY_01-016f567f4fdd9b512b.png"
                                }
                            }
                        ],
                        "attachments": []
                    },
                    "reference": ""
                }
            ],
            "targets": [
                {
                    "url": "https://canary.discord.com/api/webhooks/1413471186754469978/qgPjUuA634ycGEiCssPpXDxq00ri89k9DpqL9I_mkm_OrFgttx5lAU9ozOOPZ_XQlidg"
                }
            ]
        },
        {
            "name": "โทษใบแดงไม่รีใบ",
            "messages": [
                {
                    "data": {
                        "content": "<@&1386691682623291422>",
                        "embeds": [
                            {
                                "description": "ชื่อ :\nDiscord : @\nDiscord ID : \nSteam Hex\n\nโทษความผิด : \n\nโทษใบแดง : ไม่รีใบทุกกรณี \n\nTAG : <@&1386691682623291422>",
                                "color": 16711680,
                                "author": {
                                    "name": "ประกาศโทษใบแดง - ไม่รีใบ",
                                    "icon_url": "https://img2.pic.in.th/pic/SWITCH_CITY_01-016f567f4fdd9b512b.png"
                                },
                                "image": {
                                    "url": "https://img5.pic.in.th/file/secure-sv1/PUNISHMENT.png"
                                },
                                "thumbnail": {
                                    "url": "https://img2.pic.in.th/pic/SWITCH_CITY_01-016f567f4fdd9b512b.png"
                                }
                            }
                        ],
                        "attachments": []
                    },
                    "reference": ""
                }
            ],
            "targets": [
                {
                    "url": "https://canary.discord.com/api/webhooks/1413471284871954503/wsPO6pH2RvUKBBIpX6eJNHWK_-OhJAvZsB0plZvM74oag31Oa84Tye1yDWmXqZ2E0D_M"
                }
            ]
        },
        {
            "name": "𝗩𝗜𝗣 𝗣𝗔𝗖𝗞𝗔𝗚𝗘",
            "messages": [
                {
                    "data": {
                        "content": "<@&1386691682623291422>",
                        "embeds": [
                            {
                                "description": "#    ‎‎‎‎   ‎‎‎‎‎ ‎‎‎‎‎‎<:B11:1413161860911464611>  𝗩𝗜𝗣 𝗣𝗔𝗖𝗞𝗔𝗚𝗘   <:B11:1413161860911464611>",
                                "color": 16765209
                            },
                            {
                                "description": "##   <a:Z53:1413169638006587535> คุณสมบัติของ vip  <a:Z53:1413169638006587535>\n<a:VL55:1413162003966460176>ลดเวลา PROCESS \n<a:VL55:1413162003966460176>ลดเวลานอนเตียง \n<a:VL55:1413162003966460176>ฟาร์มเร็วขึ้น 1 วิ \n<a:VL55:1413162003966460176>เปิดหลังรถได้จากวงฟาร์ม\n<a:VL55:1413162003966460176>เบิกรถได้จากวงฟาร์ม\nสามารถเลือกซื้อสินค้าและโดเนทได้ที่เว็ปไซต์ \n▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂",
                                "color": 16765209,
                                "image": {
                                    "url": "https://img2.pic.in.th/pic/SW-VIP.png"
                                }
                            }
                        ],
                        "attachments": []
                    },
                    "reference": ""
                }
            ],
            "targets": [
                {
                    "url": "https://discordapp.com/api/webhooks/1411755878809600071/2zZboZ1NNt3iuhMV1ltWBJNlS1duNyBx7bkxEF1Gxt_pNiLejeRxucGBbYEv0QY2sA5t"
                },
                {
                    "url": "https://discordapp.com/api/webhooks/1411756165314121778/7-fTOjZzeAm5y0qKXY8TKsxH4sTnqPF-e33tfMDWnQsfyZeMkYExS1qe8jwHaQP7OoFt"
                }
            ]
        },
        {
            "name": "𝗙𝗔𝗥𝗠 𝗣𝗔𝗖𝗞𝗔𝗚𝗘",
            "messages": [
                {
                    "data": {
                        "content": "<@&1386691682623291422>",
                        "embeds": [
                            {
                                "description": "#    ‎‎‎‎   ‎‎‎‎‎ ‎‎‎‎‎‎<a:10_:1413166817941258364>  ‎‎‎𝗙𝗔𝗥𝗠 𝗣𝗔𝗖𝗞𝗔𝗚𝗘   <a:10_:1413166817941258364>\n<:01:1413166080599396576>DUPSTA 500 KG. \n<:01:1413166080599396576>REPAIR BOX \n<:01:1413166080599396576>BOT FARM X2 \n<:01:1413166080599396576>BEER \n<:01:1413166080599396576>STEAK \nสามารถเลือกซื้อสินค้าและโดเนทได้ที่เว็ปไซต์ \n▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂",
                                "color": 4844031,
                                "image": {
                                    "url": "https://img5.pic.in.th/file/secure-sv1/SW-FARMPACK.png"
                                }
                            }
                        ],
                        "attachments": []
                    },
                    "reference": ""
                }
            ],
            "targets": [
                {
                    "url": "https://discordapp.com/api/webhooks/1411755878809600071/2zZboZ1NNt3iuhMV1ltWBJNlS1duNyBx7bkxEF1Gxt_pNiLejeRxucGBbYEv0QY2sA5t"
                },
                {
                    "url": "https://discordapp.com/api/webhooks/1411756165314121778/7-fTOjZzeAm5y0qKXY8TKsxH4sTnqPF-e33tfMDWnQsfyZeMkYExS1qe8jwHaQP7OoFt"
                }
            ]
        },
        {
            "name": "แจ้งToxic",
            "messages": [
                {
                    "data": {
                        "content": "<@&1386691682623291422>",
                        "embeds": [
                            {
                                "title": "🚨 รายงาน Toxic Behavior",
                                "description": "**ข้อมูลผู้แจ้ง**\nชื่อผู้แจ้ง: {reporterName}\nUID Discord: {reporterDiscordId}\nSteam Hex: {reporterSteamHex}\nหลักฐาน: {reporterEvidence}\nหมายเหตุ: {reporterNote}\n\n**ข้อมูลผู้ถูกแจ้ง**\nชื่อผู้ถูกแจ้ง: {reportedName}\nUID Discord: {reportedDiscordId}\nSteam Hex: {reportedSteamHex}\nหลักฐานแย้ง: {reportedEvidence}\nหมายเหตุ: {reportedNote}",
                                "color": 16711680,
                                "author": {
                                    "name": "รายงาน Toxic Behavior",
                                    "icon_url": "https://img2.pic.in.th/pic/SWITCH_CITY_01-016f567f4fdd9b512b.png"
                                },
                                "image": {
                                    "url": "https://img5.pic.in.th/file/secure-sv1/TOXIC-REPORT.png"
                                },
                                "thumbnail": {
                                    "url": "https://img2.pic.in.th/pic/SWITCH_CITY_01-016f567f4fdd9b512b.png"
                                },
                                "footer": {
                                    "text": "กรุณาตรวจสอบและดำเนินการตามที่เหมาะสม"
                                }
                            }
                        ],
                        "attachments": []
                    },
                    "reference": ""
                }
            ],
            "targets": [
                {
                    "url": "https://canary.discord.com/api/webhooks/1413471036963422319/rNaO6NTgl4Kx68HKl9gMvvzVKEaNgRqLBAXQqSDA3571R9gTIrVZL77FhX7onH5JTqnr"
                }
            ]
        },
        {
            "name": "restartserverswitch",
            "messages": [
                {
                    "data": {
                        "content": "<@&1386691682623291422>",
                        "embeds": [
                            {
                                "description": "#    ‎‎‎‎   ‎‎‎‎‎ ‎‎‎‎‎‎<a:1_close:1408780690035703970>‎‎‎‎‎‎   ‎‎‎ RESTART SERVER     <a:1_close:1408780690035703970>",
                                "color": 14696512
                            },
                            {
                                "description": "##  <:emoji_106:1411320430907887646> กำลังรีสตาร์ทเซิร์ฟเวอร์ <:emoji_106:1411320430907887646>\n\nหมดเวลาสนุกแล้วสิ งดเข้าก่อนประกาศเปิดน้า เตรียมตัวรอความสนุกอีกครั้งได้เลย!\n▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂",
                                "color": 14696512,
                                "image": {
                                    "url": "https://img2.pic.in.th/pic/RESTART.png"
                                }
                            }
                        ],
                        "attachments": []
                    },
                    "reference": ""
                }
            ],
            "targets": [
                {
                    "url": "https://discordapp.com/api/webhooks/1411755878809600071/2zZboZ1NNt3iuhMV1ltWBJNlS1duNyBx7bkxEF1Gxt_pNiLejeRxucGBbYEv0QY2sA5t"
                },
                {
                    "url": "https://discordapp.com/api/webhooks/1411756165314121778/7-fTOjZzeAm5y0qKXY8TKsxH4sTnqPF-e33tfMDWnQsfyZeMkYExS1qe8jwHaQP7OoFt"
                }
            ]
        },
        {
            "name": "Openserversw lucky",
            "messages": [
                {
                    "data": {
                        "content": "<@&1386691682623291422>",
                        "embeds": [
                            {
                                "description": "#    ‎‎‎‎   ‎‎‎‎‎ ‎‎‎‎‎‎ ‎‎‎‎‎‎ <a:1_open:1408780789511884931>‎‎‎‎  SERVER ONLINE     ‎‎‎‎‎‎‎‎ ‎‎‎‎‎‎  ‎‎‎‎‎‎‎‎‎‎‎<a:1_open:1408780789511884931>‎‎‎‎‎‎ ‎‎‎‎‎‎ ‎‎‎‎‎‎ ‎‎‎",
                                "color": 65331
                            },
                            {
                                "description": "## <:emoji_105:1411319891939692545> เซิร์ฟเวอร์เปิดให้บริการแล้ว <:emoji_105:1411319891939692545> \nเข้าสู่ Switch CIty กันได้แล้ว\n▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂\n\n###  IP SERVER  :   \n ``` connect 89.38.101.86:30120                  ``` ‎‎‎‎‎‎ ‎‎‎‎‎‎ ‎‎‎‎‎‎ ‎‎‎‎\n###  เวลารีประเทศ :    \n ```12:00  |  18:00  |  00:00                   ``` ‎‎‎‎‎‎ ‎‎‎‎‎‎ ‎‎‎‎‎‎ ‎‎‎‎",
                                "color": 65331,
                                "image": {
                                    "url": "https://img2.pic.in.th/pic/OPENSERVER9d818cd7f42df167.png"
                                }
                            },
                            {
                                "title": "*Lucky ID  :",
                                "description": "``` 1 | 11 | 22 | 33 | 44 | 55 | 66 | 77 | 88 | 99  ```",
                                "color": 65331
                            }
                        ],
                        "attachments": []
                    },
                    "reference": ""
                }
            ],
            "targets": [
                {
                    "url": "https://discordapp.com/api/webhooks/1411755878809600071/2zZboZ1NNt3iuhMV1ltWBJNlS1duNyBx7bkxEF1Gxt_pNiLejeRxucGBbYEv0QY2sA5t"
                },
                {
                    "url": "https://discordapp.com/api/webhooks/1411756165314121778/7-fTOjZzeAm5y0qKXY8TKsxH4sTnqPF-e33tfMDWnQsfyZeMkYExS1qe8jwHaQP7OoFt"
                }
            ]
        },
        {
            "name": "MAINTAINANCE",
            "messages": [
                {
                    "data": {
                        "content": "<@&1386691682623291422>",
                        "embeds": [
                            {
                                "description": "#    ‎‎‎‎   ‎‎‎‎‎ ‎‎‎‎‎‎<a:Z53:1411781165458788442>  ‎‎‎ MAINTAINANCE SERVER     <a:Z53:1411781165458788442>",
                                "color": 16737865
                            },
                            {
                                "description": "##  <a:VL80:1411784569170034748> กำลังแก้ไข อัพเดท เซิร์ฟเวอร์ <a:VL80:1411784569170034748>\n\nกรุณารอประกาศก่อนเข้าเซิร์ฟเวอร์ \n▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂",
                                "color": 16737865,
                                "image": {
                                    "url": "https://img2.pic.in.th/pic/MAINTAINANCE.png"
                                }
                            }
                        ],
                        "attachments": []
                    },
                    "reference": ""
                }
            ],
            "targets": [
                {
                    "url": "https://ptb.discord.com/api/webhooks/1411756320578600962/CdX-IOt_lWpyNid7lypJiZJTTNmo2yxzg5ZmtVUoVPVeTJhWnqYbk0DPl2ar-GpABjfg"
                }
            ]
        }
    ]
};

// โหลดข้อมูลประกาศ
function loadAnnouncementData() {
    announcementData = BACKUP_DATA;
    console.log('โหลดข้อมูลประกาศสำเร็จ:', announcementData);
    console.log('จำนวน backups:', announcementData.backups.length);
    announcementData.backups.forEach(backup => {
        console.log(`- ${backup.name}: ${backup.messages.length} ข้อความ, ${backup.targets.length} webhooks`);
    });
    return announcementData;
}

// โหลดการตั้งค่าจาก localStorage
function loadSettings() {
    // ล้างข้อมูล webhook เก่า
    localStorage.removeItem('webhooks');
    
    // เริ่มต้นด้วย webhook ว่าง
    webhooks = [];
    
    const savedServerIP = localStorage.getItem('serverIP');
    if (savedServerIP) {
        document.getElementById('serverIP').value = savedServerIP;
    }
    
    const savedResetTimes = localStorage.getItem('resetTimes');
    if (savedResetTimes) {
        document.getElementById('resetTimes').value = savedResetTimes;
    }
    
    const savedLuckyIds = localStorage.getItem('luckyIds');
    if (savedLuckyIds) {
        document.getElementById('luckyIds').value = savedLuckyIds;
    }
    
    const savedRoleId = localStorage.getItem('roleId');
    if (savedRoleId) {
        document.getElementById('roleId').value = savedRoleId;
    }
    
    // โหลดสถานะ Lucky ID toggle
    const savedLuckyIdEnabled = localStorage.getItem('luckyIdEnabled');
    if (savedLuckyIdEnabled !== null) {
        luckyIdEnabled = savedLuckyIdEnabled === 'true';
    }
    
    // อัปเดต UI ตามสถานะ
    const container = document.getElementById('luckyIdContainer');
    const toggle = document.getElementById('luckyIdToggle');
    const toggleText = document.getElementById('luckyIdToggleText');
    
    if (container && toggle && toggleText) {
        if (luckyIdEnabled) {
            container.classList.remove('hidden');
            toggle.classList.add('active');
            toggleText.textContent = 'เปิด';
        } else {
            container.classList.add('hidden');
            toggle.classList.remove('active');
            toggleText.textContent = 'ปิด';
        }
    }
    
    renderWebhooks();
    updatePreview();
}

// บันทึกการตั้งค่า
function saveSettings() {
    localStorage.setItem('webhooks', JSON.stringify(webhooks));
    localStorage.setItem('serverIP', document.getElementById('serverIP').value);
    localStorage.setItem('resetTimes', document.getElementById('resetTimes').value);
    localStorage.setItem('luckyIds', document.getElementById('luckyIds').value);
    localStorage.setItem('roleId', document.getElementById('roleId').value);
    localStorage.setItem('luckyIdEnabled', luckyIdEnabled);
}

// แสดงรายการ webhooks
function renderWebhooks() {
    const container = document.getElementById('webhookList');
    
    if (webhooks.length === 0) {
        // ซ่อนส่วน webhook list ถ้าไม่มี webhook
        container.style.display = 'none';
        return;
    }
    
    // แสดงส่วน webhook list
    container.style.display = 'block';
    container.innerHTML = '';
    
    webhooks.forEach((webhook, index) => {
        const webhookDiv = document.createElement('div');
        webhookDiv.className = 'webhook-item';
        webhookDiv.innerHTML = `
            <input type="text" placeholder="ชื่อช่อง (เช่น Main Channel)" value="${webhook.name}" 
                   onchange="updateWebhookName(${index}, this.value)">
            <input type="url" placeholder="Webhook URL" value="${webhook.url}" 
                   onchange="updateWebhookUrl(${index}, this.value)">
            <button class="remove-webhook" onclick="removeWebhook(${index})">ลบ</button>
        `;
        container.appendChild(webhookDiv);
    });
}

// อัปเดตชื่อ webhook
function updateWebhookName(index, name) {
    webhooks[index].name = name;
    saveSettings();
}

// อัปเดต URL webhook
function updateWebhookUrl(index, url) {
    webhooks[index].url = url;
    saveSettings();
}

// ลบ webhook
function removeWebhook(index) {
    webhooks.splice(index, 1);
    renderWebhooks();
    saveSettings();
}

// เพิ่ม webhook ใหม่
function addWebhook() {
    const webhookSelect = document.getElementById('webhookSelect');
    const selectedUrl = webhookSelect.value;
    const selectedName = webhookSelect.options[webhookSelect.selectedIndex].text;
    
    if (selectedUrl) {
        // ตรวจสอบว่า webhook นี้มีอยู่แล้วหรือไม่
        const exists = webhooks.some(webhook => webhook.url === selectedUrl);
        if (!exists) {
            webhooks.push({ name: selectedName, url: selectedUrl });
            renderWebhooks();
            saveSettings();
            // รีเซ็ต dropdown
            webhookSelect.value = '';
        } else {
            alert('Webhook นี้ถูกเพิ่มแล้ว');
        }
    } else {
        alert('กรุณาเลือก Webhook');
    }
}

// ตั้งค่า Lucky ID จาก preset
function setLuckyId(value) {
    document.getElementById('luckyIds').value = value;
    saveSettings();
    updatePreview();
}

// สุ่ม Lucky ID
function generateRandomLuckyId() {
    const randomNumbers = [];
    const count = 10; // จำนวนตัวเลขที่ต้องการ
    
    // สุ่มตัวเลข 10 ตัวที่ไม่ซ้ำกันในช่วง 1-300
    while (randomNumbers.length < count) {
        const randomNum = Math.floor(Math.random() * 300) + 1; // 1-300
        if (!randomNumbers.includes(randomNum)) {
            randomNumbers.push(randomNum);
        }
    }
    
    // เรียงลำดับจากน้อยไปมาก
    randomNumbers.sort((a, b) => a - b);
    
    // แปลงเป็นรูปแบบที่ต้องการ (แค่ 10 ตัว)
    const luckyIdString = randomNumbers.join(' | ');
    
    // ตั้งค่าในช่อง input
    document.getElementById('luckyIds').value = luckyIdString;
    saveSettings();
    updatePreview();
    
    // แสดงข้อความยืนยัน
    showResult(`สุ่ม Lucky ID ใหม่: ${luckyIdString}`, 'success');
}

// เปิด/ปิด Lucky ID
let luckyIdEnabled = true;

function toggleLuckyId() {
    luckyIdEnabled = !luckyIdEnabled;
    const container = document.getElementById('luckyIdContainer');
    const toggle = document.getElementById('luckyIdToggle');
    const toggleText = document.getElementById('luckyIdToggleText');
    
    if (luckyIdEnabled) {
        container.classList.remove('hidden');
        toggle.classList.add('active');
        toggleText.textContent = 'เปิด';
    } else {
        container.classList.add('hidden');
        toggle.classList.remove('active');
        toggleText.textContent = 'ปิด';
    }
    
    updatePreview();
    saveSettings();
}

// โหลด webhook URLs เริ่มต้นจากข้อมูล backups.json
function loadDefaultWebhooks() {
    if (announcementData) {
        const selectedBackup = announcementData.backups.find(backup => backup.name === selectedAnnouncement);
        if (selectedBackup && selectedBackup.targets) {
            webhooks = selectedBackup.targets.map((target, index) => ({
                name: `Channel ${index + 1}`,
                url: target.url
            }));
            renderWebhooks();
            saveSettings();
            showResult('โหลด Webhook URLs เริ่มต้นสำเร็จ', 'success');
        }
    }
}

// อัปเดตตัวอย่างข้อความจากข้อมูล backups.json
function updatePreview() {
    const previewEmbeds = document.getElementById('previewEmbeds');
    if (!previewEmbeds) {
        console.error('ไม่พบ element previewEmbeds');
        return;
    }
    
    console.log('อัปเดตตัวอย่าง - selectedAnnouncement:', selectedAnnouncement);
    console.log('announcementData:', announcementData);
    
    if (!announcementData) {
        console.log('ไม่มีข้อมูล announcementData - แสดงตัวอย่างเริ่มต้น');
        // ถ้าไม่มีข้อมูลจาก backups.json ให้แสดงตัวอย่างเริ่มต้น
        previewEmbeds.innerHTML = `
            <div class="embed embed-1" style="border-left-color: #00ff33;">
                <div class="embed-description">
                    <div class="embed-title"><span class="animated-emoji">1_open</span> SERVER ONLINE <span class="animated-emoji">1_open</span></div>
                </div>
            </div>
            <div class="embed embed-2" style="border-left-color: #00ff33;">
                <div class="embed-description">
                    <div class="embed-subtitle"><span class="custom-emoji">emoji_105</span> เซิร์ฟเวอร์เปิดให้บริการแล้ว <span class="custom-emoji">emoji_105</span></div>
                    เข้าสู่ Switch CIty กันได้แล้ว<br>
                    <div class="embed-separator">▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂</div><br>
                    <div class="embed-field-name">IP SERVER  :</div><br>
                    <div class="code-block">connect 89.38.101.86:30120</div><br>
                    <div class="embed-field-name">เวลารีประเทศ :</div><br>
                    <div class="code-block">12:00  |  18:00  |  00:00</div>
                </div>
                <div class="embed-image">
                    <img src="https://img2.pic.in.th/pic/OPENSERVER9d818cd7f42df167.png" alt="SWITCH CITY OPEN SERVER" style="max-width: 100%; border-radius: 4px;">
                </div>
            </div>
            <div class="embed embed-3" style="border-left-color: #00ff33;">
                <div class="embed-title">*Lucky ID  :</div>
                <div class="embed-description">
                    <div class="code-block">1 | 11 | 22 | 33 | 44 | 55 | 66 | 77 | 88 | 99</div>
                </div>
            </div>
        `;
        return;
    }
    
    // หาข้อมูลประกาศที่เลือก
    const selectedBackup = announcementData.backups.find(backup => backup.name === selectedAnnouncement);
    console.log('selectedBackup:', selectedBackup);
    
    if (!selectedBackup || !selectedBackup.messages || selectedBackup.messages.length === 0) {
        console.error('ไม่พบข้อมูลประกาศที่เลือก:', selectedAnnouncement);
        return;
    }
    
    // ใช้ข้อมูลจาก backups.json แต่แทนที่ข้อมูลที่ผู้ใช้แก้ไข
    const messageData = JSON.parse(JSON.stringify(selectedBackup.messages[0].data)); // deep copy
    
    // อัปเดตข้อมูลที่ผู้ใช้แก้ไข
    let roleId = '';
    let description = '';
    let luckyIds = '';
    let serverIP = '';
    let resetTimes = '';
    
    if (selectedAnnouncement === 'ค่าปรับ') {
        const playerName = document.getElementById('playerName').value || 'ชื่อ';
        const discordTag = document.getElementById('discordTag').value || '@';
        const discordId = document.getElementById('discordId').value || 'Discord ID';
        const steamHex = document.getElementById('steamHex').value || 'Steam Hex';
        const offense = document.getElementById('offense').value || 'โทษความผิด';
        const fineAmount = document.getElementById('fineAmount').value || 'ค่าปรับ';
        const fineDate = document.getElementById('fineDate').value || '00/00/0000';
        const fineTime = document.getElementById('fineTime').value || '00.00 น.';
        roleId = document.getElementById('roleIdFine').value || '1386691682623291422';
        
        description = `ชื่อ : ${playerName}\nDiscord : ${discordTag}\nDiscord ID : ${discordId}\nSteam Hex : ${steamHex}\n\nโทษความผิด : ${offense}\n\nค่าปรับ : ${fineAmount}\n\nกำหนดจ่ายค่าปรับวันที่ : ${fineDate}  เวลา : ${fineTime}\n\nหากไม่ชำระภายในวันและเวลาที่กำหนด ปรับโทษเป็น ใบแดง ทันที\n\nติดต่อสอบถามและชำระค่าปรับได้ที่ https://discord.com/channels/1222655074787004489/1226336316556578826\n\nTAG : <@&${roleId}>`;
    } else if (selectedAnnouncement === 'โทษใบเหลือง - แดง') {
        const playerName = document.getElementById('playerNameYellowRed').value || 'ชื่อ';
        const discordTag = document.getElementById('discordTagYellowRed').value || '@';
        const discordId = document.getElementById('discordIdYellowRed').value || 'Discord ID';
        const steamHex = document.getElementById('steamHexYellowRed').value || 'Steam Hex';
        const offense = document.getElementById('offenseYellowRed').value || 'โทษความผิด';
        const cardType = document.getElementById('cardType').value || 'โทษใบ';
        roleId = document.getElementById('roleIdYellowRed').value || '1386691682623291422';
        
        description = `ชื่อ : ${playerName}\nDiscord : ${discordTag}\nDiscord ID : ${discordId}\nSteam Hex : ${steamHex}\n\nโทษความผิด : ${offense}\n\nโทษใบ : ${cardType}\n\nติดต่อสอบถามรายละเอียดได้ที่ https://discord.com/channels/1222655074787004489/1226336316556578826\n\nTAG : <@&${roleId}>`;
    } else if (selectedAnnouncement === 'โทษใบแดงไม่รีใบ') {
        const playerName = document.getElementById('playerNameRedNoReset').value || 'ชื่อ';
        const discordTag = document.getElementById('discordTagRedNoReset').value || '@';
        const discordId = document.getElementById('discordIdRedNoReset').value || 'Discord ID';
        const steamHex = document.getElementById('steamHexRedNoReset').value || 'Steam Hex';
        const offense = document.getElementById('offenseRedNoReset').value || 'โทษความผิด';
        roleId = document.getElementById('roleIdRedNoReset').value || '1386691682623291422';
        
        description = `ชื่อ : ${playerName}\nDiscord : ${discordTag}\nDiscord ID : ${discordId}\nSteam Hex : ${steamHex}\n\nโทษความผิด : ${offense}\n\nโทษใบแดง : ไม่รีใบทุกกรณี \n\nTAG : <@&${roleId}>`;
    } else if (selectedAnnouncement === 'แจ้งToxic') {
        const reporterName = document.getElementById('reporterName').value || 'ชื่อผู้แจ้ง';
        const reporterDiscordId = document.getElementById('reporterDiscordId').value || 'UID Discord';
        const reporterSteamHex = document.getElementById('reporterSteamHex').value || 'Steam Hex';
        const reporterEvidence = document.getElementById('reporterEvidence').value || 'หลักฐาน';
        const reporterNote = document.getElementById('reporterNote').value || 'หมายเหตุ';
        const reportedName = document.getElementById('reportedName').value || 'ชื่อผู้ถูกแจ้ง';
        const reportedDiscordId = document.getElementById('reportedDiscordId').value || 'UID Discord';
        const reportedSteamHex = document.getElementById('reportedSteamHex').value || 'Steam Hex';
        const reportedEvidence = document.getElementById('reportedEvidence').value || 'หลักฐานแย้ง';
        const reportedNote = document.getElementById('reportedNote').value || 'หมายเหตุ';
        roleId = '1386691682623291422';
        
        description = `**ข้อมูลผู้แจ้ง**\nชื่อผู้แจ้ง: ${reporterName}\nUID Discord: ${reporterDiscordId}\nSteam Hex: ${reporterSteamHex}\nหลักฐาน: ${reporterEvidence}\nหมายเหตุ: ${reporterNote}\n\n**ข้อมูลผู้ถูกแจ้ง**\nชื่อผู้ถูกแจ้ง: ${reportedName}\nUID Discord: ${reportedDiscordId}\nSteam Hex: ${reportedSteamHex}\nหลักฐานแย้ง: ${reportedEvidence}\nหมายเหตุ: ${reportedNote}`;
    } else {
        // สำหรับหัวข้อเซิร์ฟเวอร์
        serverIP = document.getElementById('serverIP').value;
        resetTimes = document.getElementById('resetTimes').value;
        luckyIds = luckyIdEnabled ? document.getElementById('luckyIds').value : '';
        roleId = document.getElementById('roleId').value;
        description = ''; // กำหนดค่าเริ่มต้น
    }
    
    messageData.content = `<@&${roleId}>`;
    
    // อัปเดต embeds
    if (messageData.embeds && messageData.embeds.length > 0) {
        // ถ้า Lucky ID ปิด ให้ลบ embed ที่มี Lucky ID ออก
        if (!luckyIdEnabled) {
            messageData.embeds = messageData.embeds.filter(embed => {
                return !embed.title || !embed.title.includes('Lucky ID');
            });
        }
        
        messageData.embeds.forEach((embed, index) => {
            if (embed.description) {
                if (selectedAnnouncement === 'ค่าปรับ' || selectedAnnouncement === 'โทษใบเหลือง - แดง' || selectedAnnouncement === 'โทษใบแดงไม่รีใบ' || selectedAnnouncement === 'แจ้งToxic') {
                    // สำหรับหัวข้อโทษและแจ้งToxic แทนที่ description ทั้งหมด
                    embed.description = description;
                } else {
                    // สำหรับหัวข้อเซิร์ฟเวอร์ แทนที่ข้อมูลเฉพาะ
                    embed.description = embed.description
                        .replace(/```\s*connect\s+[\d\.:]+\s*```/g, `\`\`\`${serverIP}\`\`\``)
                        .replace(/```\s*\d{2}:\d{2}\s*\|\s*\d{2}:\d{2}\s*\|\s*\d{2}:\d{2}\s*```/g, `\`\`\`${resetTimes}\`\`\``)
                        .replace(/```\s*[\d\s\|\|]+\s*```/g, (match) => {
                            // ตรวจสอบว่าเป็น Lucky ID หรือไม่
                            if (match.includes('|') && match.match(/\d+/g).length >= 5) {
                                return luckyIdEnabled ? `\`\`\`${luckyIds}\`\`\`` : '';
                            }
                            return match;
                        });
                }
            }
            
            if (embed.title && embed.title.includes('Lucky ID') && luckyIdEnabled) {
                // อัปเดต Lucky ID ใน title/description (เฉพาะเมื่อเปิด)
                if (embed.description) {
                    embed.description = `\`\`\`${luckyIds}\`\`\``;
                }
            }
        });
    }
    
    console.log('messageData (updated):', messageData);
    
    // อัปเดต role mention
    const previewContent = document.getElementById('previewContent');
    if (previewContent && messageData.content) {
        previewContent.innerHTML = `<span class="role-mention">${messageData.content}</span>`;
    }
    
    let embedsHTML = '';
    
    // สร้าง HTML สำหรับ embeds
    if (messageData.embeds && messageData.embeds.length > 0) {
        messageData.embeds.forEach((embed, index) => {
            const embedColor = embed.color ? `#${embed.color.toString(16).padStart(6, '0')}` : '#00ff00';
            embedsHTML += `<div class="embed embed-${index + 1}" style="border-left-color: ${embedColor};">`;
            
            if (embed.title) {
                embedsHTML += `<div class="embed-title">${embed.title}</div>`;
            }
            
            if (embed.description) {
                // แทนที่ข้อมูลที่ผู้ใช้แก้ไขก่อนแปลง markdown
                let description = embed.description;
                
                // แทนที่ IP SERVER
                if (serverIP) {
                    // แทนที่ IP ที่มีอยู่แล้ว (ไม่รวมคำว่า connect)
                    description = description.replace(/89\.38\.101\.86:30120/g, serverIP);
                }
                
                // แทนที่เวลารีประเทศ
                if (resetTimes) {
                    description = description.replace(/12:00\s*\|\s*18:00\s*\|\s*00:00/g, resetTimes);
                }
                
                // แทนที่ Lucky ID
                if (luckyIds) {
                    description = description.replace(/```\s*[\d\s\|\|]+\s*```/g, (match) => {
                        if (match.includes('|') && match.match(/\d+/g).length >= 5) {
                            return `\`\`\`${luckyIds}\`\`\``;
                        }
                        return match;
                    });
                }
                
                // แปลง markdown เป็น HTML และจัดการ animated emoji
                description = description
                    .replace(/<a:([^:]+):(\d+)>/g, '<span class="animated-emoji">$1</span>')
                    .replace(/<:([^:]+):(\d+)>/g, '<span class="custom-emoji">$1</span>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    .replace(/```\s*(.*?)\s*```/g, '<div class="code-block">$1</div>')
                    .replace(/^#\s*(.*)$/gm, '<div class="embed-title">$1</div>')
                    .replace(/^##\s*(.*)$/gm, '<div class="embed-subtitle">$1</div>')
                    .replace(/^###\s*(.*)$/gm, '<div class="embed-field-name">$1</div>')
                    .replace(/^▂+$/gm, '<div class="embed-separator">▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂</div>')
                    .replace(/\n/g, '<br>');
                embedsHTML += `<div class="embed-description">${description}</div>`;
            }
            
            if (embed.fields && embed.fields.length > 0) {
                embedsHTML += '<div class="embed-fields">';
                embed.fields.forEach(field => {
                    embedsHTML += `
                        <div class="embed-field">
                            <div class="field-name">${field.name}</div>
                            <div class="field-value">${field.value}</div>
                        </div>
                    `;
                });
                embedsHTML += '</div>';
            }
            
            if (embed.image && embed.image.url) {
                embedsHTML += `
                    <div class="embed-image">
                        <img src="${embed.image.url}" alt="Embed Image" style="max-width: 100%; border-radius: 4px;">
                    </div>
                `;
            }
            
            embedsHTML += '</div>';
        });
    }
    
    console.log('embedsHTML:', embedsHTML);
    previewEmbeds.innerHTML = embedsHTML;
}

// สร้างข้อความ Discord จากข้อมูลที่ผู้ใช้แก้ไข
function createDiscordMessage() {
    
    // หาข้อมูลประกาศที่เลือก
    const selectedBackup = announcementData.backups.find(backup => backup.name === selectedAnnouncement);
    if (!selectedBackup || !selectedBackup.messages || selectedBackup.messages.length === 0) {
        console.error('ไม่พบข้อมูลประกาศที่เลือก:', selectedAnnouncement);
        return null;
    }
    
    // ใช้ข้อมูลจาก backups.json แต่แทนที่ข้อมูลที่ผู้ใช้แก้ไข
    const messageData = JSON.parse(JSON.stringify(selectedBackup.messages[0].data)); // deep copy
    
    // อัปเดตข้อมูลที่ผู้ใช้แก้ไข
    let roleId = '';
    let description = '';
    let luckyIds = '';
    let serverIP = '';
    let resetTimes = '';
    
    if (selectedAnnouncement === 'ค่าปรับ') {
        const playerName = document.getElementById('playerName').value || 'ชื่อ';
        const discordTag = document.getElementById('discordTag').value || '@';
        const discordId = document.getElementById('discordId').value || 'Discord ID';
        const steamHex = document.getElementById('steamHex').value || 'Steam Hex';
        const offense = document.getElementById('offense').value || 'โทษความผิด';
        const fineAmount = document.getElementById('fineAmount').value || 'ค่าปรับ';
        const fineDate = document.getElementById('fineDate').value || '00/00/0000';
        const fineTime = document.getElementById('fineTime').value || '00.00 น.';
        roleId = document.getElementById('roleIdFine').value || '1386691682623291422';
        
        description = `ชื่อ : ${playerName}\nDiscord : ${discordTag}\nDiscord ID : ${discordId}\nSteam Hex : ${steamHex}\n\nโทษความผิด : ${offense}\n\nค่าปรับ : ${fineAmount}\n\nกำหนดจ่ายค่าปรับวันที่ : ${fineDate}  เวลา : ${fineTime}\n\nหากไม่ชำระภายในวันและเวลาที่กำหนด ปรับโทษเป็น ใบแดง ทันที\n\nติดต่อสอบถามและชำระค่าปรับได้ที่ https://discord.com/channels/1222655074787004489/1226336316556578826\n\nTAG : <@&${roleId}>`;
    } else if (selectedAnnouncement === 'โทษใบเหลือง - แดง') {
        const playerName = document.getElementById('playerNameYellowRed').value || 'ชื่อ';
        const discordTag = document.getElementById('discordTagYellowRed').value || '@';
        const discordId = document.getElementById('discordIdYellowRed').value || 'Discord ID';
        const steamHex = document.getElementById('steamHexYellowRed').value || 'Steam Hex';
        const offense = document.getElementById('offenseYellowRed').value || 'โทษความผิด';
        const cardType = document.getElementById('cardType').value || 'โทษใบ';
        roleId = document.getElementById('roleIdYellowRed').value || '1386691682623291422';
        
        description = `ชื่อ : ${playerName}\nDiscord : ${discordTag}\nDiscord ID : ${discordId}\nSteam Hex : ${steamHex}\n\nโทษความผิด : ${offense}\n\nโทษใบ : ${cardType}\n\nติดต่อสอบถามรายละเอียดได้ที่ https://discord.com/channels/1222655074787004489/1226336316556578826\n\nTAG : <@&${roleId}>`;
    } else if (selectedAnnouncement === 'โทษใบแดงไม่รีใบ') {
        const playerName = document.getElementById('playerNameRedNoReset').value || 'ชื่อ';
        const discordTag = document.getElementById('discordTagRedNoReset').value || '@';
        const discordId = document.getElementById('discordIdRedNoReset').value || 'Discord ID';
        const steamHex = document.getElementById('steamHexRedNoReset').value || 'Steam Hex';
        const offense = document.getElementById('offenseRedNoReset').value || 'โทษความผิด';
        roleId = document.getElementById('roleIdRedNoReset').value || '1386691682623291422';
        
        description = `ชื่อ : ${playerName}\nDiscord : ${discordTag}\nDiscord ID : ${discordId}\nSteam Hex : ${steamHex}\n\nโทษความผิด : ${offense}\n\nโทษใบแดง : ไม่รีใบทุกกรณี \n\nTAG : <@&${roleId}>`;
    } else if (selectedAnnouncement === 'แจ้งToxic') {
        const reporterName = document.getElementById('reporterName').value || 'ชื่อผู้แจ้ง';
        const reporterDiscordId = document.getElementById('reporterDiscordId').value || 'UID Discord';
        const reporterSteamHex = document.getElementById('reporterSteamHex').value || 'Steam Hex';
        const reporterEvidence = document.getElementById('reporterEvidence').value || 'หลักฐาน';
        const reporterNote = document.getElementById('reporterNote').value || 'หมายเหตุ';
        const reportedName = document.getElementById('reportedName').value || 'ชื่อผู้ถูกแจ้ง';
        const reportedDiscordId = document.getElementById('reportedDiscordId').value || 'UID Discord';
        const reportedSteamHex = document.getElementById('reportedSteamHex').value || 'Steam Hex';
        const reportedEvidence = document.getElementById('reportedEvidence').value || 'หลักฐานแย้ง';
        const reportedNote = document.getElementById('reportedNote').value || 'หมายเหตุ';
        roleId = '1386691682623291422';
        
        description = `**ข้อมูลผู้แจ้ง**\nชื่อผู้แจ้ง: ${reporterName}\nUID Discord: ${reporterDiscordId}\nSteam Hex: ${reporterSteamHex}\nหลักฐาน: ${reporterEvidence}\nหมายเหตุ: ${reporterNote}\n\n**ข้อมูลผู้ถูกแจ้ง**\nชื่อผู้ถูกแจ้ง: ${reportedName}\nUID Discord: ${reportedDiscordId}\nSteam Hex: ${reportedSteamHex}\nหลักฐานแย้ง: ${reportedEvidence}\nหมายเหตุ: ${reportedNote}`;
    } else {
        // สำหรับหัวข้อเซิร์ฟเวอร์
        serverIP = document.getElementById('serverIP').value;
        resetTimes = document.getElementById('resetTimes').value;
        luckyIds = luckyIdEnabled ? document.getElementById('luckyIds').value : '';
        roleId = document.getElementById('roleId').value;
        description = ''; // กำหนดค่าเริ่มต้น
    }
    
    messageData.content = `<@&${roleId}>`;
    
    // อัปเดต embeds
    if (messageData.embeds && messageData.embeds.length > 0) {
        // ถ้า Lucky ID ปิด ให้ลบ embed ที่มี Lucky ID ออก
        if (!luckyIdEnabled) {
            messageData.embeds = messageData.embeds.filter(embed => {
                return !embed.title || !embed.title.includes('Lucky ID');
            });
        }
        
        messageData.embeds.forEach((embed, index) => {
            if (embed.description) {
                if (selectedAnnouncement === 'ค่าปรับ' || selectedAnnouncement === 'โทษใบเหลือง - แดง' || selectedAnnouncement === 'โทษใบแดงไม่รีใบ' || selectedAnnouncement === 'แจ้งToxic') {
                    // สำหรับหัวข้อโทษและแจ้งToxic แทนที่ description ทั้งหมด
                    embed.description = description;
                } else {
                    // สำหรับหัวข้อเซิร์ฟเวอร์ แทนที่ข้อมูลเฉพาะ
                    const serverIP = document.getElementById('serverIP').value;
                    const resetTimes = document.getElementById('resetTimes').value;
                    luckyIds = luckyIdEnabled ? document.getElementById('luckyIds').value : '';
                    
                    embed.description = embed.description
                        .replace(/```\s*connect\s+[\d\.:]+\s*```/g, `\`\`\`${serverIP}\`\`\``)
                        .replace(/```\s*\d{2}:\d{2}\s*\|\s*\d{2}:\d{2}\s*\|\s*\d{2}:\d{2}\s*```/g, `\`\`\`${resetTimes}\`\`\``)
                        .replace(/```\s*[\d\s\|\|]+\s*```/g, (match) => {
                            // ตรวจสอบว่าเป็น Lucky ID หรือไม่
                            if (match.includes('|') && match.match(/\d+/g).length >= 5) {
                                return luckyIdEnabled ? `\`\`\`${luckyIds}\`\`\`` : '';
                            }
                            return match;
                        });
                }
            }
            
            if (embed.title && embed.title.includes('Lucky ID') && luckyIdEnabled) {
                // อัปเดต Lucky ID ใน title/description (เฉพาะเมื่อเปิด)
                if (embed.description) {
                    luckyIds = luckyIdEnabled ? document.getElementById('luckyIds').value : '';
                    embed.description = `\`\`\`${luckyIds}\`\`\``;
                }
            }
        });
    }
    
    return messageData;
}

// ส่งข้อความไปยัง webhook
async function sendToWebhook(webhookUrl, messageData) {
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData)
        });
        
        return {
            success: response.ok,
            status: response.status,
            statusText: response.statusText
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// ส่งประกาศ
async function sendAnnouncement() {
    const validWebhooks = webhooks.filter(w => w.url.trim() !== '');
    
    if (validWebhooks.length === 0) {
        showResult('กรุณาเพิ่ม Webhook URL อย่างน้อย 1 ตัว', 'error');
        return;
    }
    
    const messageData = createDiscordMessage();
    const sendButton = document.getElementById('sendAnnouncement');
    const originalText = sendButton.innerHTML;
    
    // แสดง loading
    sendButton.innerHTML = '<span class="loading"></span>กำลังส่ง...';
    sendButton.disabled = true;
    
    let successCount = 0;
    let failedWebhooks = [];
    
    // ส่งไปยัง webhook ทั้งหมด
    for (const webhook of validWebhooks) {
        const result = await sendToWebhook(webhook.url, messageData);
        
        if (result.success) {
            successCount++;
        } else {
            failedWebhooks.push({
                name: webhook.name,
                error: result.error || `HTTP ${result.status}: ${result.statusText}`
            });
        }
    }
    
    // แสดงผลลัพธ์
    if (successCount > 0) {
        let message = `ส่งประกาศสำเร็จไปยัง ${successCount} webhook`;
        if (failedWebhooks.length > 0) {
            message += `\nล้มเหลว ${failedWebhooks.length} webhook`;
        }
        showResult(message, successCount === validWebhooks.length ? 'success' : 'info');
    } else {
        showResult('ไม่สามารถส่งประกาศไปยัง webhook ใดๆ ได้', 'error');
    }
    
    // รีเซ็ตปุ่ม
    sendButton.innerHTML = originalText;
    sendButton.disabled = false;
}

// ทดสอบ webhook
async function testWebhooks() {
    const validWebhooks = webhooks.filter(w => w.url.trim() !== '');
    
    if (validWebhooks.length === 0) {
        showResult('กรุณาเพิ่ม Webhook URL อย่างน้อย 1 ตัว', 'error');
        return;
    }
    
    const testButton = document.getElementById('testWebhooks');
    const originalText = testButton.innerHTML;
    
    // แสดง loading
    testButton.innerHTML = '<span class="loading"></span>กำลังทดสอบ...';
    testButton.disabled = true;
    
    const testMessage = {
        content: "ทดสอบ webhook",
        embeds: [{
            title: "Test Message",
            description: "นี่คือข้อความทดสอบจาก Switch City Announcement Tool",
            color: 0x00ff00
        }]
    };
    
    let successCount = 0;
    let failedWebhooks = [];
    
    // ทดสอบ webhook ทั้งหมด
    for (const webhook of validWebhooks) {
        const result = await sendToWebhook(webhook.url, testMessage);
        
        if (result.success) {
            successCount++;
        } else {
            failedWebhooks.push({
                name: webhook.name,
                error: result.error || `HTTP ${result.status}: ${result.statusText}`
            });
        }
    }
    
    // แสดงผลลัพธ์
    if (successCount > 0) {
        let message = `ทดสอบสำเร็จ ${successCount} webhook`;
        if (failedWebhooks.length > 0) {
            message += `\nล้มเหลว ${failedWebhooks.length} webhook`;
        }
        showResult(message, successCount === validWebhooks.length ? 'success' : 'info');
    } else {
        showResult('ไม่สามารถทดสอบ webhook ใดๆ ได้', 'error');
    }
    
    // รีเซ็ตปุ่ม
    testButton.innerHTML = originalText;
    testButton.disabled = false;
}

// แสดงผลลัพธ์
function showResult(message, type) {
    const resultDiv = document.getElementById('result');
    resultDiv.className = `result-section show result-${type}`;
    resultDiv.innerHTML = `
        <h3>ผลลัพธ์</h3>
        <p>${message}</p>
    `;
    
    // ซ่อนผลลัพธ์หลังจาก 5 วินาที
    setTimeout(() => {
        resultDiv.classList.remove('show');
    }, 5000);
}

// เปลี่ยนประเภทประกาศ
function changeAnnouncementType(announcementType) {
    selectedAnnouncement = announcementType;
    
    // อัปเดต UI
    updateAnnouncementButtons();
    updateCurrentSelection();
    updateInfoSections();
    updatePreview();
    
    // ไม่โหลด webhook เริ่มต้น - ให้ผู้ใช้เลือกเองจาก dropdown
}

// อัปเดตการแสดงผลของส่วนข้อมูล
function updateInfoSections() {
    // ซ่อนทุกส่วนก่อน
    document.getElementById('serverInfoSection').style.display = 'none';
    document.getElementById('fineInfoSection').style.display = 'none';
    document.getElementById('yellowRedInfoSection').style.display = 'none';
    document.getElementById('redNoResetInfoSection').style.display = 'none';
    document.getElementById('toxicReportInfoSection').style.display = 'none';
    
    // ซ่อน Lucky ID section ก่อน
    document.getElementById('luckyIdSection').style.display = 'none';
    
    // แสดงส่วนที่เหมาะสม
    switch(selectedAnnouncement) {
        case 'MAINTAINANCE':
        case 'restartserverswitch':
            document.getElementById('serverInfoSection').style.display = 'block';
            break;
        case 'Openserversw lucky':
            document.getElementById('serverInfoSection').style.display = 'block';
            document.getElementById('luckyIdSection').style.display = 'block';
            break;
        case 'ค่าปรับ':
            document.getElementById('fineInfoSection').style.display = 'block';
            break;
        case 'โทษใบเหลือง - แดง':
            document.getElementById('yellowRedInfoSection').style.display = 'block';
            break;
        case 'โทษใบแดงไม่รีใบ':
            document.getElementById('redNoResetInfoSection').style.display = 'block';
            break;
        case 'แจ้งToxic':
            document.getElementById('toxicReportInfoSection').style.display = 'block';
            break;
    }
}

// อัปเดตสถานะปุ่ม
function updateAnnouncementButtons() {
    // ลบ active class จากปุ่มทั้งหมด
    document.querySelectorAll('.announcement-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // เพิ่ม active class ให้ปุ่มที่เลือก
    let activeButtonId = '';
    if (selectedAnnouncement === 'MAINTAINANCE') {
        activeButtonId = 'btnMaintenance';
    } else if (selectedAnnouncement === 'Openserversw lucky') {
        activeButtonId = 'btnOpenServer';
    } else if (selectedAnnouncement === 'restartserverswitch') {
        activeButtonId = 'btnRestartServer';
    } else if (selectedAnnouncement === 'ค่าปรับ') {
        activeButtonId = 'btnFine';
    } else if (selectedAnnouncement === 'โทษใบเหลือง - แดง') {
        activeButtonId = 'btnYellowRed';
    } else if (selectedAnnouncement === 'โทษใบแดงไม่รีใบ') {
        activeButtonId = 'btnRedNoReset';
    } else if (selectedAnnouncement === '𝗩𝗜𝗣 𝗣𝗔𝗖𝗞𝗔𝗚𝗘') {
        activeButtonId = 'btnVipPackage';
    } else if (selectedAnnouncement === '𝗙𝗔𝗥𝗠 𝗣𝗔𝗖𝗞𝗔𝗚𝗘') {
        activeButtonId = 'btnFarmPackage';
    } else if (selectedAnnouncement === 'แจ้งToxic') {
        activeButtonId = 'btnToxicReport';
    }
    
    const activeButton = document.getElementById(activeButtonId);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// อัปเดตข้อความแสดงประเภทที่เลือก
function updateCurrentSelection() {
    const currentSpan = document.getElementById('currentAnnouncement');
    if (currentSpan) {
        const displayNames = {
            'MAINTAINANCE': 'กำลังแก้ไข/อัปเดตเซิร์ฟเวอร์',
            'Openserversw lucky': 'เซิร์ฟเวอร์เปิดให้บริการ',
            'restartserverswitch': 'กำลังรีสตาร์ทเซิร์ฟเวอร์',
            'ค่าปรับ': 'ประกาศโทษปรับจาก ADMIN',
            'โทษใบเหลือง - แดง': 'ประกาศโทษใบเหลือง - แดง',
            'โทษใบแดงไม่รีใบ': 'ประกาศโทษใบแดง - ไม่รีใบ',
            '𝗩𝗜𝗣 𝗣𝗔𝗖𝗞𝗔𝗚𝗘': 'VIP PACKAGE',
            '𝗙𝗔𝗥𝗠 𝗣𝗔𝗖𝗞𝗔𝗚𝗘': 'FARM PACKAGE',
            'แจ้งToxic': 'รายงาน Toxic Behavior'
        };
        currentSpan.textContent = displayNames[selectedAnnouncement] || selectedAnnouncement;
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // โหลดธีมก่อน
    loadTheme();
    
    // โหลดข้อมูลประกาศก่อน
    loadAnnouncementData();
    
    loadSettings();
    
    // ตั้งค่าปุ่มประเภทประกาศ
    updateAnnouncementButtons();
    updateCurrentSelection();
    updateInfoSections();
    
    // อัปเดตตัวอย่างเริ่มต้น
    updatePreview();
    
    // Event listeners สำหรับปุ่มประเภทประกาศ
    document.getElementById('btnMaintenance').addEventListener('click', () => changeAnnouncementType('MAINTAINANCE'));
    document.getElementById('btnOpenServer').addEventListener('click', () => changeAnnouncementType('Openserversw lucky'));
    document.getElementById('btnRestartServer').addEventListener('click', () => changeAnnouncementType('restartserverswitch'));
    document.getElementById('btnFine').addEventListener('click', () => changeAnnouncementType('ค่าปรับ'));
    document.getElementById('btnYellowRed').addEventListener('click', () => changeAnnouncementType('โทษใบเหลือง - แดง'));
    document.getElementById('btnRedNoReset').addEventListener('click', () => changeAnnouncementType('โทษใบแดงไม่รีใบ'));
    document.getElementById('btnVipPackage').addEventListener('click', () => changeAnnouncementType('𝗩𝗜𝗣 𝗣𝗔𝗖𝗞𝗔𝗚𝗘'));
    document.getElementById('btnFarmPackage').addEventListener('click', () => changeAnnouncementType('𝗙𝗔𝗥𝗠 𝗣𝗔𝗖𝗞𝗔𝗚𝗘'));
    document.getElementById('btnToxicReport').addEventListener('click', () => changeAnnouncementType('แจ้งToxic'));
    
    // Event listeners สำหรับ input fields
    document.getElementById('serverIP').addEventListener('input', function() {
        saveSettings();
        updatePreview();
    });
    
    document.getElementById('resetTimes').addEventListener('input', function() {
        saveSettings();
        updatePreview();
    });
    
    document.getElementById('luckyIds').addEventListener('input', function() {
        saveSettings();
        updatePreview();
    });
    
    document.getElementById('roleId').addEventListener('input', function() {
        saveSettings();
    });
    
    // Event listeners สำหรับช่องข้อมูลค่าปรับ
    document.getElementById('playerName').addEventListener('input', updatePreview);
    document.getElementById('discordTag').addEventListener('input', updatePreview);
    document.getElementById('discordId').addEventListener('input', updatePreview);
    document.getElementById('steamHex').addEventListener('input', updatePreview);
    document.getElementById('offense').addEventListener('input', updatePreview);
    document.getElementById('fineAmount').addEventListener('input', updatePreview);
    document.getElementById('fineDate').addEventListener('input', updatePreview);
    document.getElementById('fineTime').addEventListener('input', updatePreview);
    document.getElementById('roleIdFine').addEventListener('input', updatePreview);
    
    // Event listeners สำหรับช่องข้อมูลโทษใบเหลือง-แดง
    document.getElementById('playerNameYellowRed').addEventListener('input', updatePreview);
    document.getElementById('discordTagYellowRed').addEventListener('input', updatePreview);
    document.getElementById('discordIdYellowRed').addEventListener('input', updatePreview);
    document.getElementById('steamHexYellowRed').addEventListener('input', updatePreview);
    document.getElementById('offenseYellowRed').addEventListener('input', updatePreview);
    document.getElementById('cardType').addEventListener('input', updatePreview);
    document.getElementById('roleIdYellowRed').addEventListener('input', updatePreview);
    
    // Event listeners สำหรับช่องข้อมูลโทษใบแดงไม่รีใบ
    document.getElementById('playerNameRedNoReset').addEventListener('input', updatePreview);
    document.getElementById('discordTagRedNoReset').addEventListener('input', updatePreview);
    document.getElementById('discordIdRedNoReset').addEventListener('input', updatePreview);
    document.getElementById('steamHexRedNoReset').addEventListener('input', updatePreview);
    document.getElementById('offenseRedNoReset').addEventListener('input', updatePreview);
    document.getElementById('roleIdRedNoReset').addEventListener('input', updatePreview);
    
    // Event listeners สำหรับ Toxic Report
    document.getElementById('reporterName').addEventListener('input', updatePreview);
    document.getElementById('reporterDiscordId').addEventListener('input', updatePreview);
    document.getElementById('reporterSteamHex').addEventListener('input', updatePreview);
    document.getElementById('reporterEvidence').addEventListener('input', updatePreview);
    document.getElementById('reporterNote').addEventListener('input', updatePreview);
    document.getElementById('reportedName').addEventListener('input', updatePreview);
    document.getElementById('reportedDiscordId').addEventListener('input', updatePreview);
    document.getElementById('reportedSteamHex').addEventListener('input', updatePreview);
    document.getElementById('reportedEvidence').addEventListener('input', updatePreview);
    document.getElementById('reportedNote').addEventListener('input', updatePreview);
    
    // Event listeners สำหรับปุ่ม
    document.getElementById('addWebhook').addEventListener('click', addWebhook);
    document.getElementById('sendAnnouncement').addEventListener('click', sendAnnouncement);
    document.getElementById('testWebhooks').addEventListener('click', testWebhooks);
    
    // Event listener สำหรับปุ่มเปลี่ยนธีม
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});

// ฟังก์ชันสำหรับเปลี่ยนธีม
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // เปลี่ยนเป็น Light Mode
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        // เปลี่ยนเป็น Dark Mode
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

// โหลดธีมที่บันทึกไว้
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    } else {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
    }
}
