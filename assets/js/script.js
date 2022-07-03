var DateTime = luxon.DateTime

const usa = document.getElementById('usaTime')
const arg = document.getElementById('argTime')
const esp = document.getElementById('espTime')

const usaTime = DateTime.now().setZone('America/New_York')
const argTime = DateTime.now().setZone('America/Argentina/Buenos_Aires')
const espTime = DateTime.now().setZone('Europe/Madrid')

usa.innerHTML = usaTime.toLocaleString(DateTime.TIME_24_WITH_SECONDS)
arg.innerHTML = argTime.toLocaleString(DateTime.TIME_24_WITH_SECONDS)
esp.innerHTML = espTime.toLocaleString(DateTime.TIME_24_WITH_SECONDS)


const button = document.getElementById('submit')

button.addEventListener('click', () => {
    const zoneName = document.getElementById('zoneName')
    const zone = document.getElementById('zoneTime')
    let select = document.getElementById('selectZone')
    
    const zoneTime = DateTime.now().setZone(select.value)

    zoneName.innerHTML = zoneTime.zoneName
    zone.innerHTML = zoneTime.toLocaleString(DateTime.TIME_24_WITH_SECONDS)
})