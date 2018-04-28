$(function() {
  $("#select").on("focus", function() {
    $(this).val("");
    $(this).css({ backgroundImage: "none" });
  });
  $("#select").on("blur", function() {
    $(this).val("搜索");
    $(this).css({ backgroundImage: "url('./images/search.png')" });
  });
});
