<script>
  function save() {
    if (!confirm('저장하시겠습니까?')) {
      return;
    }
    var contents = JSON.parse(localStorage.getItem("contents"));
    if (!contents) {
      contents = [];
    }

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var message = document.getElementById('message').value;
    contents.push({no:contents.length+1
      , name:name
      , email:email
      , address:address
      , message:message
      , write_date:new Date()});
    localStorage.setItem("contents", JSON.stringify(contents));

    alert('저장되었습니다.');
    location.href = 'list.html';
  }
</script>