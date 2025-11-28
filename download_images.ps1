$images = @(
    @{ Url = "https://5.imimg.com/data5/SELLER/Default/2022/12/LO/NZ/LL/108925119/tree-embossed-leather-diary-250x250.JPG"; Name = "tree-of-life.jpg" },
    @{ Url = "https://5.imimg.com/data5/SELLER/Default/2023/2/GY/KB/OP/108925119/dsc-0445-250x250.JPG"; Name = "star-7-stone.jpg" },
    @{ Url = "https://5.imimg.com/data5/SELLER/Default/2024/8/443475924/EV/SR/AT/108925119/img-e1019-250x250.jpg"; Name = "loving-heart.jpg" },
    @{ Url = "https://5.imimg.com/data5/SELLER/Default/2023/5/304907934/SX/WU/JS/108925119/d-lock-antique-leather-journal-unruled--250x250.png"; Name = "d-lock.png" },
    @{ Url = "https://5.imimg.com/data5/SELLER/Default/2022/11/LD/VH/BT/108925119/decal-vintage-leather-journal-250x250.JPG"; Name = "decal-vintage.jpg" },
    @{ Url = "https://5.imimg.com/data5/SELLER/Default/2022/12/TU/BN/EC/108925119/leather-executive-diary-with-key-250x250.JPG"; Name = "key-closure.jpg" },
    @{ Url = "https://5.imimg.com/data5/SELLER/Default/2022/12/NU/EB/LU/108925119/strap-lock-handmade-leather-journal-250x250.JPG"; Name = "professional-black.jpg" },
    @{ Url = "https://5.imimg.com/data5/SELLER/Default/2022/11/OK/VC/OM/108925119/office-leather-diary-250x250.jpg"; Name = "tie-closure.jpg" },
    @{ Url = "https://5.imimg.com/data5/SELLER/Default/2024/9/451815058/JQ/LO/BC/108925119/img-3991-250x250.jpg"; Name = "floral-embossed.jpg" },
    @{ Url = "https://5.imimg.com/data5/SELLER/Default/2024/9/451992293/AT/AB/RT/108925119/img-4052-250x250.jpg"; Name = "strap-lock.jpg" },
    @{ Url = "https://5.imimg.com/data5/SELLER/Default/2023/5/304907034/QA/VD/GD/108925119/hamsa-hand-stone-leather-journal-unruled--250x250.png"; Name = "hamsa-hand.png" }
)

$destDir = "public/images"
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir
}

foreach ($img in $images) {
    $destPath = Join-Path $destDir $img.Name
    Invoke-WebRequest -Uri $img.Url -OutFile $destPath
    Write-Host "Downloaded $($img.Name)"
}
