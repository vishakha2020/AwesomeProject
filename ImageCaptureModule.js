import ImagePicker from "react-native-image-picker";

//Vishakha - Module to capture an image from camera roll or phone gallery
export const ImageCapture = () => {
  
    var options = {
        title: 'Select Image',
        storageOptions: {
        skipBackup: true,
        path: 'images',
        },
    };
    return new Promise(((resolve, reject) => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                reject('User cancelled image picker');
            } else if (response.error) {
                reject('ImagePicker Error: ', response.error);
            } else {
                const source = {
                    uri: response.uri,
                    type: response.type
                };
                resolve(source);
            }
        })
    }))
//02261082022

}