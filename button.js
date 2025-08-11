<!DOCTYPE html>
<html>
<head>
    <title>Table Screenshot & Share to WhatsApp</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
</head>
<body>
    <h2>Sample Table</h2>
    <table id="myTable" border="1" cellpadding="10">
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
        <tr>
            <td>Alice</td>
            <td>85</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>92</td>
        </tr>
    </table>

    <br>
    <button id="shareBtn">📸 Screenshot & Share to WhatsApp</button>

    <script>
        document.getElementById("shareBtn").addEventListener("click", function () {
            let table = document.getElementById("myTable");

            html2canvas(table).then(canvas => {
                canvas.toBlob(blob => {
                    let file = new File([blob], "table.png", { type: "image/png" });

                    if (navigator.canShare && navigator.canShare({ files: [file] })) {
                        navigator.share({
                            files: [file],
                            title: "Table Screenshot",
                            text: "Here’s the table screenshot!"
                        }).catch(err => console.error("Share failed:", err));
                    } else {
                        alert("Sharing not supported on this browser. Please use a mobile browser.");
                    }
                });
            });
        });
    </script>
</body>
</html>
