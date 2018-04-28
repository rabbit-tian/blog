$(function () {
    $("#select").on("focus", function() {
      $(this).val("");
      $(this).css({ backgroundImage: "none" });
    });
    $("#select").on("blur", function() {
      $(this).val("筛选");
      $(this).css({ backgroundImage: "url('./images/1.select.png')" });
    });
});