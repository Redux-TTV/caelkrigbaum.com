// $('#testAlertError').on('click',function() {
//     performAlert('this is a test',true);
// });
// $('#testAlertInfo').on('click',function() {
//     performAlert('this is a test',false);
// });

document.getElementById('testAlertError').addEventListener('click',function(){
    performAlert('this is a test',true);
});
document.getElementById('testAlertInfo').addEventListener('click',function(){
    performAlert('this is a test',false);
});

console.log('tests.js loaded');