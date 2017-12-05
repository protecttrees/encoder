var data = [
  {"decode":"ph","encode":"φ","checked":"true"},
  {"decode":"gi","encode":"γ","checked":"true"},
  {"decode":"ng","encode":"ŋ","checked":"true"},
  {"decode":"kh","encode":"ҡ","checked":"true"},
  {"decode":"nh","encode":"ɲ","checked":"true"},
  {"decode":"ươ","encode":"ω","checked":"true"},
  {"decode":"th","encode":"ɵ","checked":"true"},
  {"decode":"tr","encode":"φ","checked":"true"},
  {"decode":"ch","encode":"ξ","checked":"true"},
  {"decode":" hiệu điện thế ","encode":" U ","checked":"true"},
  {"decode":" hiệu điện thế.","encode":" U.","checked":"true"},
  {"decode":" khối lượng riêng ","encode":" D ","checked":"true"},
  {"decode":" khối lượng riêng.","encode":" U.","checked":"true"},
  {"decode":" thể tích ","encode":" V ","checked":"true"},
  {"decode":" thể tích.","encode":" V.","checked":"true"},
  {"decode":" thời gian ","encode":" t ","checked":"true"},
  {"decode":" thời gian.","encode":" t.","checked":"true"},
  {"decode":" quãng đường ","encode":" s ","checked":"true"},
  {"decode":" quãng đường.","encode":" s.","checked":"true"},
  {"decode":" điện trở ","encode":" R ","checked":"true"},
  {"decode":" điện trở.","encode":" R.","checked":"true"},
  {"decode":" chiều dài dây dẫn ","encode":" L ","checked":"true"},
  {"decode":" chiều dài dây dẫn.","encode":" L.","checked":"true"},
  {"decode":" điện dung ","encode":" C ","checked":"true"},
  {"decode":" điện dung.","encode":" C.","checked":"true"},
  {"decode":" thời gian ","encode":" T ","checked":"true"},
  {"decode":" thời gian.","encode":" T.","checked":"true"},
  {"decode":" cảm ứng từ ","encode":" B ","checked":"true"},
  {"decode":" cảm ứng từ.","encode":" B.","checked":"true"},
  {"decode":" cảm ứng từ B ","encode":" B ","checked":"true"},
  {"decode":" cảm ứng từ B.","encode":" B.","checked":"true"},
  {"decode":" cường độ dòng điện ","encode":" I ","checked":"true"},
  {"decode":" cường độ dòng điện.","encode":" I.","checked":"true"},
  {"decode":" cường độ dòng điện ","encode":" I ","checked":"true"},
  {"decode":" cường độ dòng điện.","encode":" I.","checked":"true"},
  {"decode":" gia tốc trọng trường ","encode":" G ","checked":"true"},
  {"decode":" gia tốc trọng trường.","encode":" G.","checked":"true"},
  {"decode":" gia tốc a ","encode":" a ","checked":"true"},
  {"decode":" gia tốc a.","encode":" a.","checked":"true"},
  
];
var dataUp = [
  {"decode":"PH","encode":"Φ","checked":"true"},
  {"decode":"GI","encode":"Γ","checked":"true"},
  {"decode":"NG","encode":"Ŋ","checked":"true"},
  {"decode":"KH","encode":"Ҡ","checked":"true"},
  {"decode":"NH","encode":"Ɲ","checked":"true"},
  {"decode":"ƯƠ","encode":"Ω","checked":"true"},
  {"decode":"TH","encode":"Θ","checked":"true"},
  {"decode":"TR","encode":"Ͳ","checked":"true"},
  {"decode":"CH","encode":"Z","checked":"true"},
  {"decode":" Hiệu điện thế ","encode":" U ","checked":"true"},
  {"decode":" Hiệu điện thế.","encode":" U.","checked":"true"},
  {"decode":" Khối lượng riêng ","encode":" D ","checked":"true"},
  {"decode":" Khối lượng riêng.","encode":" U.","checked":"true"},
  {"decode":" Thể tích ","encode":" V ","checked":"true"},
  {"decode":" Thể tích.","encode":" V.","checked":"true"},
  {"decode":" Thời gian ","encode":" t ","checked":"true"},
  {"decode":" Thời gian.","encode":" t.","checked":"true"},
  {"decode":" Quãng đường ","encode":" s ","checked":"true"},
  {"decode":" Quãng đường.","encode":" s.","checked":"true"},
  {"decode":" Điện trở ","encode":" R ","checked":"true"},
  {"decode":" Điện trở.","encode":" R.","checked":"true"},
  {"decode":" Chiều dài dây dẫn ","encode":" L ","checked":"true"},
  {"decode":" Chiều dài dây dẫn.","encode":" L.","checked":"true"},
  {"decode":" Điện dung ","encode":" C ","checked":"true"},
  {"decode":" Điện dung.","encode":" C.","checked":"true"},
  {"decode":" Thời gian ","encode":" T ","checked":"true"},
  {"decode":" Thời gian.","encode":" T.","checked":"true"},
  {"decode":" Cảm ứng từ ","encode":" B ","checked":"true"},
  {"decode":" Cảm ứng từ.","encode":" B.","checked":"true"},
  {"decode":" Cảm ứng từ B ","encode":" B ","checked":"true"},
  {"decode":" Cảm ứng từ B.","encode":" B.","checked":"true"},
  {"decode":" Cường độ dòng điện ","encode":" I ","checked":"true"},
  {"decode":" Cường độ dòng điện.","encode":" I.","checked":"true"},
  {"decode":" Cường độ dòng điện I ","encode":" I ","checked":"true"},
  {"decode":" Cường độ dòng điện I.","encode":" I.","checked":"true"},
  {"decode":" Gia tốc trọng trường ","encode":" G ","checked":"true"},
  {"decode":" Gia tốc trọng trường.","encode":" G.","checked":"true"},
  {"decode":" Gia tốc a ","encode":" a ","checked":"true"},
  {"decode":" Gia tốc a.","encode":" a.","checked":"true"}
];
var dataCap = [
  {"decode":"Ph","encode":"Φ","checked":"true"},
  {"decode":"Gi","encode":"Γ","checked":"true"},
  {"decode":"Ng","encode":"Ŋ","checked":"true"},
  {"decode":"Kh","encode":"Ҡ","checked":"true"},
  {"decode":"Nh","encode":"Ɲ","checked":"true"},
  {"decode":"Ươ","encode":"Ω","checked":"true"},
  {"decode":"Th","encode":"Θ","checked":"true"},
  {"decode":"Tr","encode":"Ͳ","checked":"true"},
  {"decode":"Ch","encode":"Z","checked":"true"},
  {"decode":" Hiệu điện thế ","encode":" U ","checked":"true"},
  {"decode":" Hiệu điện thế.","encode":" U.","checked":"true"},
  {"decode":" Khối lượng riêng ","encode":" D ","checked":"true"},
  {"decode":" Khối lượng riêng.","encode":" U.","checked":"true"},
  {"decode":" Thể tích ","encode":" V ","checked":"true"},
  {"decode":" Thể tích.","encode":" V.","checked":"true"},
  {"decode":" Thời gian ","encode":" t ","checked":"true"},
  {"decode":" Thời gian.","encode":" t.","checked":"true"},
  {"decode":" Quãng đường ","encode":" s ","checked":"true"},
  {"decode":" Quãng đường.","encode":" s.","checked":"true"},
  {"decode":" Điện trở ","encode":" R ","checked":"true"},
  {"decode":" Điện trở.","encode":" R.","checked":"true"},
  {"decode":" Chiều dài dây dẫn ","encode":" L ","checked":"true"},
  {"decode":" Chiều dài dây dẫn.","encode":" L.","checked":"true"},
  {"decode":" Điện dung ","encode":" C ","checked":"true"},
  {"decode":" Điện dung.","encode":" C.","checked":"true"},
  {"decode":" Thời gian ","encode":" T ","checked":"true"},
  {"decode":" Thời gian.","encode":" T.","checked":"true"},
  {"decode":" Cảm ứng từ ","encode":" B ","checked":"true"},
  {"decode":" Cảm ứng từ.","encode":" B.","checked":"true"},
  {"decode":" Cảm ứng từ B ","encode":" B ","checked":"true"},
  {"decode":" Cảm ứng từ B.","encode":" B.","checked":"true"},
  {"decode":" Cường độ dòng điện ","encode":" I ","checked":"true"},
  {"decode":" Cường độ dòng điện.","encode":" I.","checked":"true"},
  {"decode":" Cường độ dòng điện I ","encode":" I ","checked":"true"},
  {"decode":" Cường độ dòng điện I.","encode":" I.","checked":"true"},
  {"decode":" Gia tốc trọng trường ","encode":" G ","checked":"true"},
  {"decode":" Gia tốc trọng trường.","encode":" G.","checked":"true"},
  {"decode":" Gia tốc a ","encode":" a ","checked":"true"},
  {"decode":" Gia tốc a.","encode":" a.","checked":"true"}
];
var dataSettings = data;
var dataSettingsUp = dataUp;
var dataSettingsCap = dataCap;
closeModal();
function showModalSettings(){
  $('.ui.modal').show();
}
function closeModal(){
  $('.ui.modal').hide();
  setDataModal();
}
function saveSetting(){
  var checkList = $('.check');
  for(var i = 0; i < checkList.length; i++){
    dataSettings[i].checked = checkList[i].getAttribute('checked');
    dataSettingsUp[i].checked = dataSettings[i].checked;
    dataSettingsCap[i].checked = dataSettings[i].checked;
  }
  closeModal()
}
function addSetting(){
  var encode = $('#encode-add').val();
  var decode = $('#decode-add').val();
  if(encode === "" || !encode || decode === "" || !decode) return;
  dataSettings.push({"decode":decode.toLowerCase(),"encode":encode.toLowerCase(),"checked":"true"});
  dataSettingsUp.push({"decode":decode.toUpperCase(),"encode":encode.toUpperCase(),"checked":"true"});
  dataSettingsCap.push({"decode":decode,"encode":encode,"checked":"true"});
  $('.listSettings').append(
  "<div class='seven wide column'><input type='text' value='"+encode.toLowerCase()+"' disabled></div>"
  + "<div class='eight wide column'><input type='text' value='"+decode.toLowerCase()+"' disabled></div>"
  + "<div class='one wide column'><input type='checkbox' tabindex='0' checked></div>");
  $('.listSettings').scrollTop($('.listSettings')[0].scrollHeight);
  $('#encode-add').val("");
  $('#decode-add').val("");
}
function changeChecked(i){
  if (i.getAttribute('checked') === 'true'){
    i.setAttribute('checked','false');
  }
  else {
    i.setAttribute('checked','true');
  }
}
function setDataModal(){
  $('.listSettings').html("");
  for(var i = 0; i < dataSettings.length; i++){
    $('.listSettings').append(
    "<div class='seven wide column'><input type='text' value='"+dataSettings[i].encode+"' disabled></div>"
    + "<div class='eight wide column'><input type='text' value='"+dataSettings[i].decode+"' disabled></div>"
    + "<div class='one wide column'><input type='checkbox' tabindex='0' checked='"+dataSettings[i].checked+"' class='check' onchange='changeChecked(this)'></div>");
  }
}
var loadFile=function(url,callback){
    JSZipUtils.getBinaryContent(url,callback);
}
function selectFile() {
  $('#file').click();
}
function upFile(){
  var form = $('form')[0]; // You need to use standard javascript object here
  var formData = new FormData(form);
  $.ajax({
  url: 'https://admin.svchatbot.com/api/v1/files',
  data: formData,
  type: 'POST',
  headers: {"Authorization" : "access_token 6e5a2f7a-e2e0-4a26-aa8a-52692d57bbb5"},
  contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
  processData: false, // NEEDED, DON'T OMIT THIS
  // ... Other options like success and etc
  }).done((data) => {
      loadFile("https://admin.svchatbot.com/" + data.result,function(err,content){
          var doc=new Docxgen(content);
          text=doc.getFullText();
          console.log(text);
          // lineBreak = '<w:br/>'
          $('#text').html(text);
          $('#text').val(text);
      })
    }).fail((err) => {
      console.error(err);
    });
}
function convert(doc, array){
  for(var i = 0; i < array.length; i++){
    var res = doc.replace(new RegExp( array[i].encode , "g"), function () {
      if(array[i].checked === "true") return array[i].decode;
      return array[i].encode;
    });
    doc = res;
  }
  return doc;
}
function reconvert(doc, array){
  for(var i = 0; i < array.length; i++){
    var res = doc.replace(new RegExp( array[i].decode , "g"), function () {
      if(array[i].checked === "true") return array[i].encode;
      return array[i].decode;
    });
    doc = res;
  }
  return doc;
}
function encode(){
  var doc = $('#text').val();
  doc = reconvert(doc, dataSettingsUp);
  doc = reconvert(doc, dataSettings);
  doc = reconvert(doc, dataSettingsCap);
  $('#result').html(doc);
}
function decode(){
  var doc = $('#text').val();
  doc = convert(doc, dataSettingsUp);
  doc = convert(doc, dataSettings);
  doc = convert(doc, dataSettingsCap);
  $('#result').html(doc);
}
function printFile(){
  var prtContent = document.getElementById("result");
  var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
  WinPrint.document.write(prtContent.innerHTML);
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  WinPrint.close();
}
