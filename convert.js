function euroConverter(){
document.converter.bdt.value = document.converter.euro.value * 92.07
document.converter.dollar.value = document.converter.euro.value * 1.470
document.converter.pound.value = document.converter.euro.value * 0.717
document.converter.yen.value = document.converter.euro.value * 165.192
}
function dollarConverter(){
document.converter.bdt.value = document.converter.dollar.value *85.04
document.converter.euro.value = document.converter.dollar.value * 0.680
document.converter.pound.value = document.converter.dollar.value * 0.488
document.converter.yen.value = document.converter.dollar.value * 112.36
}
function poundConverter(){
  document.converter.bdt.value = document.converter.pound.value * 110.36
document.converter.dollar.value = document.converter.pound.value * 2.049
document.converter.euro.value = document.converter.pound.value * 1.394
document.converter.yen.value = document.converter.pound.value * 230.27
}
function yenConverter(){
document.converter.bdt.value = document.converter.yen.value * 0.77
document.converter.dollar.value = document.converter.yen.value * 0.0089
document.converter.pound.value = document.converter.yen.value * 0.00434
document.converter.euro.value = document.converter.yen.value * 0.00605
}
function bdtConverter(){
document.converter.euro.value = document.converter.bdt.value * 0.011
document.converter.dollar.value = document.converter.bdt.value * 0.012
document.converter.pound.value = document.converter.bdt.value * 0.0091
document.converter.yen.value = document.converter.bdt.value * 1.29
}
