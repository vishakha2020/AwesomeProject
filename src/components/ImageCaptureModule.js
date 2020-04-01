import ImagePicker from "react-native-image-picker";

//Vishakha - Module to capture an image from camera roll or phone gallery
function ImageCapture() {
  
    var options = {
        title: 'Select Image',
        storageOptions: {
        skipBackup: true,
        path: 'images',
        },
    };
    ImagePicker.showImagePicker(options, response => {
        console.log("Response => "+response.uri);
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else {
            return response;
        // let source = response;
        // this.setState({
        //     filePath: source,
        // });
        }
    });
//02261082022

}

export default ImageCapture;