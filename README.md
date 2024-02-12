# nodejs_compress_image

Node.js Image Compression Script

  This repository contains a JavaScript script for compressing images within a specified directory to the WebP format using Node.js and the sharp library. The script is designed to recursively process all images in a source directory, compress them, and save the compressed images in a destination directory while preserving the directory structure.

Features:

  Image Compression: Compresses JPEG and PNG images to the WebP format.
  Quality Control: Allows specifying the compression quality.
  Recursive Processing: Processes all images in the specified directory and its subdirectories.
  Preserves Directory Structure: Maintains the original directory structure in the destination directory.
  
Prerequisites:
  
  Node.js installed on your system.
  sharp library for image processing.
  
Setup:

  Install Node.js: Ensure Node.js is installed on your system. You can download it from Node.js official website.

  Clone the Repository: Clone or download this repository to your local machine.

    git clone https://your-repository-url.git
    cd your-repository-directory
    
  Install Dependencies: Install the required Node.js dependencies, including sharp.

    npm install sharp
    
Usage:

  Set Source and Destination Directories: Modify the rutaCarpetaOrigen and rutaCarpetaDestino variables in the script to specify the source and destination directories.

    const rutaCarpetaOrigen = 'path/to/source/directory';
    const rutaCarpetaDestino = 'path/to/destination/directory';

  Run the Script: Execute the script using Node.js.

    node comprimir_imagenes.js


Customization:

  Compression Quality: Adjust the compression quality by changing the quality parameter in the sharp function call.

    .webp({ quality: 80 })
    
  Supported Image Formats: Currently, the script compresses JPEG and PNG images. To support more formats, modify the file extension checks in the script.

Contribution:

  Contributions to improve the script or add new features are welcome. Please fork the repository, make your changes, and submit a pull request.


