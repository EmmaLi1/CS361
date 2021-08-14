$(function() {
    load();
    $("#title").on("keydown", function(event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("Add Todo")
            } else {
                var local = getDate();
                local.push({ title: $(this).val(), done: false });
                saveDate(local);
                load();
            }
        }
    })

    function saveDate(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }

    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    function load() {
        var data = getDate();
        $("ol").empty();
        $("ul").empty();
        var todoCount = 0;
        var doneCount = 0
        $.each(data, function(i, ele) {
            if (ele.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked'><p>" + ele.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>")
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox'><p>" + ele.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>")
                todoCount++;
            }

        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }
    $("ol").on("click", "a", function() {
        var data = getDate();
        var index = $(this).attr("id");
        data.splice(index, 1);
        saveDate(data);
        load();
    })

    $("ol,ul").on("click", "input", function() {
        var data = getDate();
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        saveDate(data);
        load();
    })

})