import { RNS3 } from 'react-native-aws3';

//Vishakha - function to upload a image/document to a remote server or AWS S3
function Upload(fileUri, fileName, fileType, uploadType, uploadURL) {
    const file = {
        uri: fileUri,
        name: fileName,
        type: fileType
    }

    if(uploadType != 's3'){

        var body = new FormData();
        body.append('authToken', 'secret'); // require auth-token for uploading to remote server
        body.append('photo', file);
        body.append('title', '');

        var xhr = new XMLHttpRequest();
        xhr.open('POST', uploadURL);
        xhr.send(body);

    } else {

        //require bucket name, access key and secret key to upload to S3
        const options = {
            keyPrefix: "img-uploads/",
            bucket: "react-native-test-bucket",
            region: "us-east-1",
            accessKey: "AKIAV6G55K26O7IFXFNC",
            secretKey: "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",
            successActionStatus: 201
        }

        RNS3.put(file, options).then(response => {
            if (response.status !== 201)
            throw new Error("Failed to upload image to S3");
            console.log(response.body);
            /**
             * {
             *   postResponse: {
             *     bucket: "your-bucket",
             *     etag : "9f620878e06d28774406017480a59fd4",
             *     key: "uploads/image.png",
             *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
             *   }
             * }
             */
        });
    }
}

export default Upload;