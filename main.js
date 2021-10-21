

let list = [];
$("#add").click(() => {
  if ($("input[type=text").val().trim().length > 0) {
    list.push({ item: $("input[type=text").val(), isCompleted: false });
    renderList();
  }
});

const renderList = () => {
  $("ul").html("");
  list.forEach((element, i) => {
    $("ul").append(
      `<li id='${"li" + i}'><span id='${"allSpan" + i}'>${
        element.item
      }  <span onclick='edit(${i})'>Edit</span> <span onclick='remove(${i})'>Remove</span> </span></li>`
    );
  });
};

const edit = (i) => {
  $("#allSpan" + i).hide();
  $("#li" + i).append(`<input type='text' id='ed' value='${list[i].item}'>`);
  console.log($("input#ed"));
  $("body").click(() => {
    $("input#ed").change((e) => {
      list[i].item = e.target.value;
      console.log("trigered");
      renderList();
    });
  });


};

const remove = (i) => {
  console.log("trigered");
  list.splice(i, 1);
  renderList();
};

//   const completed = (i) => {
//     console.log('trigered');
// //   list.splice(i, 1);
//   renderList();
// };

$("#clear").click(() => {
  list = [];
  renderList();
});

$("#clearCompleted").click(() => {});
