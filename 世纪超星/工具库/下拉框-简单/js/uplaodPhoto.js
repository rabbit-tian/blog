$(function () {
    if (typeof(FileReader) === 'undefined') {   //如果不支持FileReader
        alert("抱歉，你的浏览器不支持FileReader，请使用现代浏览器操作！");
        $("#uploader_input").attr('disabled', 'disabled');
    } else {
        uploaderChange();
    }

    $(document).bind('click', function (e) {    //文档绑定点击事件
        if (!$(e.target).attr("class") || $(e.target).attr("class").indexOf("uploader-input") != -1) {  //如果点击的是其它区域
            $(".uploader-plus").show(); //显示加号
            $(".uploader-delete").each(function () {    //取消删除模式
                $(this).removeClass("uploader-delete");
            });
        }
    });
});
function uploaderChange() {
    $("#uploader_input").change(function () {
        var file = this.files[0];
        if (!/image\/\w+/.test(file.type)) {//这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件
            alert("请确保文件为图像类型");
            return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            //插入图片
            var index = $(".uploader-img").length + 1;
            $(".uploader-plus").before("<div id='img_" + index + "' class='uploader-box uploader-progress' data-progress='0%'><img class='uploader-img' src='" + this.result + "'/><img src='images/deleteImg.png' class='deleteImg' alt=''></div>");
            $(".uploader-plus").hide();
            $('.deleteImg').click(function () {
                $(this).parents('.uploader-box').remove();
                $(".uploader-plus").show();
            })
        }
    });
}