import {useState} from "react";
import Dropzone from "react-dropzone";
import "./FileUpload.css"
import {uploadFile} from "../../services/FileUploadService";
import {useHistory} from "react-router-dom";
import fileUpload from "../../assets/uploadimage.jpg"
import {MdOutlineFileUpload} from "react-icons/md"

function FileUpload() {
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");

    const history = useHistory()

    const onDrop = (files) => {
        if (files.length > 0) {
            setSelectedFiles(files);
        }
    };

    const upload = () => {
        let currentFile = selectedFiles[0];

        setProgress(0);
        setCurrentFile(currentFile);

        uploadFile(currentFile, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
            setMessage("File upload successful")
        })
            .catch(() => {
                setProgress(0);
                setMessage("Could not upload the file");
                setCurrentFile(undefined);
            });
        setSelectedFiles(undefined);
    };

    return (
        <div className="file-upload-container">

            <Dropzone accept="image/jpeg, image/png" onDrop={onDrop} multiple={false}>
                {({getRootProps, getInputProps}) => (

                    <section>

                        <div className="dropzone" {...getRootProps()}>
                            {/*<img*/}
                            {/*    className="file-upload-logo"*/}
                            {/*    src={fileUpload}*/}
                            {/*    alt="file-upload-image"*/}
                            {/*/>*/}
                            <label htmlFor="file-upload">Upload a file (optional) : </label>
                            <input {...getInputProps()} />
                            {selectedFiles && selectedFiles[0].name ? (
                                <div className="selected-file">
                                    {selectedFiles && selectedFiles[0].name}
                                </div>
                            ) : (
                                <div className="file-upload-text"> Upload <br/>
                                    <MdOutlineFileUpload className="file-upload-icon"/>
                                </div>


                            )}

                            {/*<button*/}
                            {/*    className="file-upload-button"*/}
                            {/*    disabled={!selectedFiles}*/}
                            {/*    onClick={() => upload()}*/}
                            {/*>*/}
                            {/*    Upload*/}
                            {/*</button>*/}
                        </div>


                    </section>
                )}
            </Dropzone>

            {/*<div>*/}
            {/*    <div className="alert-light"*/}
            {/*         role="alert"*/}
            {/*    >*/}
            {/*        {message}*/}
            {/*    </div>*/}

            {/*    {progress === 100 &&*/}
            {/*    <button*/}
            {/*        className="userpage-button"*/}
            {/*        onClick={() => history.push("/userprofilepage")}*/}
            {/*    >Back to profile</button>*/}
            {/*    }*/}
            {/*</div>*/}

        </div>
    )
}

export default FileUpload