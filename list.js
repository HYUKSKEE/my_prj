<script>
  
  var contentList = JSON.parse(localStorage.getItem("contents"));
  // contentList.push({no:1
  //    , title:'테스트'
  //    , writer:'홍길동'
  //    , write_date:new Date()});
  //   contentList.push({no:2
  //   , title:'테스트'
  //   , writer:'홍길동'
  //   , write_date:new Date()});
  //   contentList.push({no:3
  //   , title:'테스트'
  //   , writer:'홍길동'
  //   , write_date:new Date()});


  drawRows();
  function moveForm() {
    location.href = 'form.html'
  }

  function drawRows() {
    var templates = '';
    var body = document.getElementById('rows');

    for (var i=contentList.length-1; 0<=i; i--) {
      var content  = contentList[i];
      console.log(content);
      templates += '<tr onclick="moveView('+i+')">';
      templates += '<td style="text-align:center">'+content.no+'</td>';
      templates += '<td>'+content.title+'</td>';
      templates += '<td style="text-align:center">'+content.writer+'</td>';
      templates += '<td style="text-align:center">'+toStringByFormatting(new Date(content.write_date))+'</td>';
      templates += '</tr>';
    }

    body.innerHTML = templates;
  }

  function moveView(contentNo) {
    location.href = 'view.html?no='+(contentNo+1);
  }

  function leftPad(value) { if (value >= 10) { return value; } return `0${value}`; } function toStringByFormatting(source, delimiter = '-') { const year = source.getFullYear(); const month = leftPad(source.getMonth() + 1); const day = leftPad(source.getDate()); return [year, month, day].join(delimiter); }
</script>