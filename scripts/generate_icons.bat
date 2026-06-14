@echo off
echo Generating website icons from om-logo.png...

:: 1. Generate standard favicon in app/icon.png (32x32)
powershell -Command "Add-Type -AssemblyName System.Drawing; $srcImg = [System.Drawing.Image]::FromFile('C:\Users\CSI\OneDrive\Desktop\Om_Enterprise\public\om-logo.png'); $destBmp = New-Object System.Drawing.Bitmap(32, 32); $g = [System.Drawing.Graphics]::FromImage($destBmp); $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic; $g.DrawImage($srcImg, 0, 0, 32, 32); $destBmp.Save('C:\Users\CSI\OneDrive\Desktop\Om_Enterprise\src\app\icon.png', [System.Drawing.Imaging.ImageFormat]::Png); $g.Dispose(); $destBmp.Dispose(); $srcImg.Dispose();"

:: 2. Generate Apple Touch Icon in app/apple-icon.png (180x180)
powershell -Command "Add-Type -AssemblyName System.Drawing; $srcImg = [System.Drawing.Image]::FromFile('C:\Users\CSI\OneDrive\Desktop\Om_Enterprise\public\om-logo.png'); $destBmp = New-Object System.Drawing.Bitmap(180, 180); $g = [System.Drawing.Graphics]::FromImage($destBmp); $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic; $g.DrawImage($srcImg, 0, 0, 180, 180); $destBmp.Save('C:\Users\CSI\OneDrive\Desktop\Om_Enterprise\src\app\apple-icon.png', [System.Drawing.Imaging.ImageFormat]::Png); $g.Dispose(); $destBmp.Dispose(); $srcImg.Dispose();"

:: 3. Generate favicon.ico in app/favicon.ico (32x32)
powershell -Command "Add-Type -AssemblyName System.Drawing; $srcImg = [System.Drawing.Image]::FromFile('C:\Users\CSI\OneDrive\Desktop\Om_Enterprise\public\om-logo.png'); $destBmp = New-Object System.Drawing.Bitmap(32, 32); $g = [System.Drawing.Graphics]::FromImage($destBmp); $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic; $g.DrawImage($srcImg, 0, 0, 32, 32); $destBmp.Save('C:\Users\CSI\OneDrive\Desktop\Om_Enterprise\src\app\favicon.ico', [System.Drawing.Imaging.ImageFormat]::Png); $g.Dispose(); $destBmp.Dispose(); $srcImg.Dispose();"

:: 4. Generate high-resolution icons for manifest in public/ (192x192 and 512x512)
powershell -Command "Add-Type -AssemblyName System.Drawing; $srcImg = [System.Drawing.Image]::FromFile('C:\Users\CSI\OneDrive\Desktop\Om_Enterprise\public\om-logo.png'); $destBmp = New-Object System.Drawing.Bitmap(192, 192); $g = [System.Drawing.Graphics]::FromImage($destBmp); $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic; $g.DrawImage($srcImg, 0, 0, 192, 192); $destBmp.Save('C:\Users\CSI\OneDrive\Desktop\Om_Enterprise\public\icon-192.png', [System.Drawing.Imaging.ImageFormat]::Png); $g.Dispose(); $destBmp.Dispose(); $srcImg.Dispose();"

powershell -Command "Add-Type -AssemblyName System.Drawing; $srcImg = [System.Drawing.Image]::FromFile('C:\Users\CSI\OneDrive\Desktop\Om_Enterprise\public\om-logo.png'); $destBmp = New-Object System.Drawing.Bitmap(512, 512); $g = [System.Drawing.Graphics]::FromImage($destBmp); $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic; $g.DrawImage($srcImg, 0, 0, 512, 512); $destBmp.Save('C:\Users\CSI\OneDrive\Desktop\Om_Enterprise\public\icon-512.png', [System.Drawing.Imaging.ImageFormat]::Png); $g.Dispose(); $destBmp.Dispose(); $srcImg.Dispose();"

echo Icon generation complete!
