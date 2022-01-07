import {useState} from "react";
import Dropzone from "react-dropzone";
import "./FileUpload.css"
import {uploadFile} from "../../services/FileUploadService";
import {useHistory} from "react-router-dom";
import fileUpload from "../../assets/uploadimage.jpg"
import { MdOutlineCloudUpload } from "react-icons/md"

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
            setMessage("File upload successfull")
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
                            <img
                                className="file-upload-logo"
                                src={fileUpload}
                                alt="file-upload-image"
                            />
                            <input {...getInputProps()} />
                            {selectedFiles && selectedFiles[0].name ? (
                                <div className="selected-file">
                                    {selectedFiles && selectedFiles[0].name}
                                </div>
                            ) : (
                                <div className="file-upload-text">Drag and drop file here, <br/> <MdOutlineCloudUpload className="file-upload-icon"/>
                                    or click to upload file
                                    <p className="file-upload-small-text">(Only *.jpeg or *.png images will be accepted, with a maximum of XX MB)</p>
                                </div>
                            )}
                        </div>

                        <aside className="selected-file-wrapper">
                            <button
                                className="file-upload-button"
                                disabled={!selectedFiles}
                                onClick={() => upload()}
                            >
                                Upload
                            </button>
                        </aside>

                    </section>
                )}
            </Dropzone>

            <div>
                <div className="alert-light"
                     role="alert"
                >
                    {message}
                </div>

                {progress === 100 &&
                <button
                    className="userpage-button"
                    onClick={() => history.push("/userprofilepage")}
                >Back to profile</button>
                }
            </div>

        </div>
    )
}

export default FileUpload