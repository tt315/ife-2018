var d = new Date()
var hours = d.getHours()
if (hours < 5 || hours > 19) {
    document.getElementById('hello').innerHTML = '晚上好'
    
} else if (hours < 12) {
    document.getElementById('hello').innerHTML = '上午好'

} else {
    document.getElementById('hello').innerHTML = '下午好'

}