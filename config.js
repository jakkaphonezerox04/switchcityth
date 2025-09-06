// การตั้งค่าเริ่มต้นสำหรับ Switch City Server Announcement Tool

const CONFIG = {
    // ข้อมูลเซิร์ฟเวอร์เริ่มต้น
    DEFAULT_SERVER_IP: 'connect 89.38.101.86:30120',
    DEFAULT_RESET_TIMES: '12:00 | 18:00 | 00:00',
    DEFAULT_LUCKY_IDS: '1 | 11 | 22 | 33 | 44 | 55 | 66 | 77 | 88 | 99',
    DEFAULT_ROLE_ID: '1386691682623291422',
    
    // สีสำหรับ embeds
    EMBED_COLOR: 0x00ff00, // สีเขียว
    
    // URL รูปภาพ
    IMAGE_URL: 'https://via.placeholder.com/600x300/00ff00/ffffff?text=SWITCH+CITY+OPEN+SERVER',
    
    // ข้อความที่สามารถปรับแต่งได้
    MESSAGES: {
        SERVER_ONLINE_TITLE: '🎮 SERVER ONLINE 🎮',
        SERVER_OPEN_TITLE: '🏙️ เซิร์ฟเวอร์เปิดให้บริการแล้ว เข้าสู่ Switch City กันได้แล้ว',
        LUCKY_ID_TITLE: '*Lucky ID :',
        IP_FIELD_NAME: '### IP SERVER:',
        RESET_FIELD_NAME: '### เวลารีเซ็ตประเทศ:',
        TEST_MESSAGE: '🧪 ทดสอบ webhook',
        TEST_DESCRIPTION: 'นี่คือข้อความทดสอบจาก Switch City Announcement Tool'
    },
    
    // การตั้งค่า UI
    UI: {
        AUTO_HIDE_RESULT_DELAY: 5000, // 5 วินาที
        MIN_WEBHOOKS: 1,
        MAX_WEBHOOKS: 10
    },
    
    // การตั้งค่า Discord
    DISCORD: {
        USERNAME: 'Switch City BOT',
        AVATAR_URL: 'https://cdn.discordapp.com/embed/avatars/0.png'
    }
};

// ฟังก์ชันสำหรับดึงการตั้งค่า
function getConfig(key) {
    return key.split('.').reduce((obj, k) => obj && obj[k], CONFIG);
}

// ฟังก์ชันสำหรับตั้งค่าการตั้งค่า
function setConfig(key, value) {
    const keys = key.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((obj, k) => obj[k] = obj[k] || {}, CONFIG);
    target[lastKey] = value;
}

// Export สำหรับใช้ในไฟล์อื่น (ถ้าใช้ module system)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getConfig, setConfig };
}
