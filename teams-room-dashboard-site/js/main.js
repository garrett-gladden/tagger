// This file contains the JavaScript code that adds interactivity to the webpage.

document.addEventListener('DOMContentLoaded', () => {
    // Sample data to simulate device performance
    const devices = [
        { deviceId: 'DEV-1001', qualityScore: 85, poorCallPct: 5, manufacturer: 'Microsoft' },
        { deviceId: 'DEV-1002', qualityScore: 78, poorCallPct: 12, manufacturer: 'Poly' },
        { deviceId: 'DEV-1003', qualityScore: 90, poorCallPct: 3, manufacturer: 'Logitech' },
        // Add more sample devices as needed
    ];

    const deviceList = document.getElementById('device-list');

    devices.forEach(device => {
        const deviceItem = document.createElement('div');
        deviceItem.className = 'device-item';
        deviceItem.innerHTML = `
            <h3>${device.deviceId}</h3>
            <p>Quality Score: ${device.qualityScore}</p>
            <p>Poor Call Percentage: ${device.poorCallPct}%</p>
            <p>Manufacturer: ${device.manufacturer}</p>
        `;
        deviceList.appendChild(deviceItem);
    });
});